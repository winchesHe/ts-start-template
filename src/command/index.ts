/* eslint-disable no-console */
import { join, resolve } from 'node:path'
import { copyFile } from 'node:fs'
import fs from 'fs-extra'
import fg from 'fast-glob'
import chalk from 'chalk'
import prettier from 'prettier'
import { printSuccessLogs } from '@winches/utils'
import { getInquirer, getName } from '../inquirer'
import { pkgDir } from '../utils'
import { commonDep, prettierConfig } from '../constants'

const root = process.cwd()

const gradientBanner = `${chalk.rgb(66, 211, 146)('a')}${chalk.rgb(66, 211, 146)('l')}${chalk.rgb(66, 211, 146)('l')} ${chalk.rgb(66, 211, 146)('a')}${chalk.rgb(67, 209, 149)('r')}${chalk.rgb(68, 206, 152)('e')} ${chalk.rgb(69, 204, 155)('c')}${chalk.rgb(70, 201, 158)('r')}${chalk.rgb(71, 199, 162)('e')}${chalk.rgb(72, 196, 165)('a')}${chalk.rgb(73, 194, 168)('t')}${chalk.rgb(74, 192, 171)('e')}${chalk.rgb(76, 192, 171)('d')} ${chalk.rgb(75, 189, 174)('w')}${chalk.rgb(76, 187, 177)('i')}${chalk.rgb(77, 184, 180)('t')}${chalk.rgb(78, 182, 183)('h')} ${chalk.rgb(79, 179, 186)('t')}${chalk.rgb(80, 177, 190)('y')}${chalk.rgb(81, 175, 193)('p')}${chalk.rgb(82, 172, 196)('e')}${chalk.rgb(83, 170, 199)('s')}${chalk.rgb(83, 167, 202)('c')}${chalk.rgb(84, 165, 205)('r')}${chalk.rgb(85, 162, 208)('i')}${chalk.rgb(86, 160, 211)('p')}${chalk.rgb(87, 158, 215)('t')}`
const defaultBanner = 'all are created with Typescript'

export async function start(options: { name?: string }) {
  console.log()
  console.log(
    (process.stdout.isTTY && process.stdout.getColorDepth() > 8)
      ? gradientBanner
      : defaultBanner,
  )
  console.log()

  let name: string
  if (options.name)
    name = options.name
  else
    name = await getName()

  const [selectTem] = await getInquirer()
  const buildTemPath = `${pkgDir}/template/${selectTem}`
  const copyDistDir = (fs.existsSync(buildTemPath)
    ? buildTemPath
    : fg.sync(selectTem, { cwd: pkgDir, absolute: true, unique: true, onlyDirectories: true })[0])
      || resolve(root, `template/${selectTem}`)
      || fg.sync(selectTem, { cwd: join(pkgDir, '../..'), absolute: true, unique: true, onlyDirectories: true })[0]

  fs.copySync(copyDistDir, resolve(root, name), {
    filter() {
      return true
    },
  })

  // 重命名npm禁止上传的gitignore
  const npm = resolve(`${root}/${name}`, '.npmignore')
  const npmPath = fs.existsSync(npm) ? npm : fg.sync('.npmignore', { absolute: true, unique: true, onlyFiles: true })[0]
  npmPath && fs.moveSync(npmPath, resolve(`${root}/${name}`, '.gitignore'))

  // 处理通用的依赖升级
  await resolvePkg()

  // 复制通用文件
  const files = fg.sync('example/**', { cwd: pkgDir, absolute: true, onlyFiles: true })
  const commonConfigFiles = files.length ? files : fg.sync('example/**', { cwd: root, absolute: true, onlyFiles: true })

  for (const file of commonConfigFiles) {
    let transformName = file.replace(/.*\/example\//, '')

    if (transformName.includes('eslintrc')) {
      transformName = transformName.replace('eslintrc', '.eslintrc')
    }

    copyFile(file, resolve(`${root}/${name}`, transformName), (err) => {
      if (err)
        console.error(err)
    })
  }

  printSuccessLogs(`Success: 成功写入模版${name}`)

  async function resolvePkg() {
    const pkg = resolve(`${root}/${name}`, 'package.json')
    if (!fs.existsSync(pkg))
      return

    try {
      const content = JSON.parse(fs.readFileSync(pkg, 'utf-8'))
      content.devDependencies = {
        ...(content.devDependencies || {}),
        ...commonDep,
      }
      const transformContent = await prettier.format(JSON.stringify(content), { ...prettierConfig, parser: 'json-stringify' })
      fs.writeFileSync(pkg, transformContent, 'utf-8')
    }
    catch (error) {
      console.error(error)
    }
  }
}
