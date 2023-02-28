/* eslint-disable no-console */
import { dirname, resolve } from 'path'
import { fileURLToPath } from 'url'
import fs from 'fs-extra'
import { getInquirer } from '../inquirer'

const root = process.cwd()
const dir = dirname(fileURLToPath(import.meta.url))

export async function start(options: { name?: string }) {
  const [buildTools] = await getInquirer()
  let name = options.name || 'project-name'

  if (buildTools === 'tsup') {
    name += '-tsup'
    fs.copySync(resolve(dir, 'tsup'), resolve(root, name))
  }
  else {
    name += '-unbuild'
    fs.copySync(resolve(dir, 'unbuild'), resolve(root, name))
  }
  console.log()
  console.log(`Success: 成功写入模版${name}`)
}
