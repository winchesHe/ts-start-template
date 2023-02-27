/* eslint-disable no-console */
import { resolve } from 'path'
import fs from 'fs-extra'
import { getInquirer } from '../inquirer'

const root = process.cwd()

export async function start(options: { name?: string }) {
  const [buildTools] = await getInquirer()
  let name = options.name || 'project-name'

  if (buildTools === 'tsup') {
    name += '-tsup'
    fs.copySync(resolve(root, 'template/tsup'), resolve(root, name))
  }
  else {
    name += '-unbuild'
    fs.copySync(resolve(root, 'template/unbuild'), resolve(root, name))
  }
  console.log()
  console.log(`Success: 成功写入模版${name}`)
}
