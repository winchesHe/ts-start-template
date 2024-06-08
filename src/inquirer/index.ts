import { resolve } from 'node:path'
import fs from 'fs-extra'
import fg from 'fast-glob'
import inquirer from 'inquirer'
import { excludeList } from '../constants'
import { pkgDir, root } from '../utils'

function getChoices() {
  const templateDir = fs.existsSync(resolve(pkgDir, 'template'))
    ? resolve(pkgDir, 'template')
    : fg.sync('template', { cwd: root, absolute: true, unique: true, onlyDirectories: true })[0]

  return fs.readdirSync(templateDir).filter(file => !excludeList.includes(file))
}

export async function getName(): Promise<string> {
  const strName = {
    type: 'input',
    name: 'projectName',
    message: '请填写项目名: ',
    default: 'project-name',
  }
  return (await inquirer.prompt([strName])).projectName
}

export async function getInquirer(): Promise<['tsup' | 'unbuild' | 'react-components-library']> {
  const pathName = {
    type: 'checkbox',
    name: 'template',
    message: '请选中需要的启动模版: ',
    choices: getChoices(),
    validate: (value: string[]) => {
      if (!value.length)
        return '必须选中一个模版'

      return true
    },
  }
  return (await inquirer.prompt([pathName])).template
}
