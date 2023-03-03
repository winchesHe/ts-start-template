import { readdirSync } from 'fs'
import inquirer from 'inquirer'
import { excludeList } from '../constants'
import { resolver } from '../utils'

function getChoices() {
  return readdirSync(resolver('template')).filter(file => !excludeList.includes(file))
}

export const getName = async (): Promise<string> => {
  const strName = {
    type: 'input',
    name: 'projectName',
    message: '请填写项目名: ',
    default: 'project-name',
  }
  return (await inquirer.prompt([strName])).projectName
}

export const getInquirer = async (): Promise<['tsup' | 'unbuild']> => {
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
