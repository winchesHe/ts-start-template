import inquirer from 'inquirer'

function getChoices() {
  return [
    'tsup',
    'unbuild',
  ]
}

export const getInquirer = async (): Promise<['tsup' | 'unbuild']> => {
  const pathName = {
    type: 'checkbox',
    name: 'template',
    message: '请选中需要的打包工具模版: ',
    choices: getChoices(),
    validate: (value: string[]) => {
      if (!value.length)
        return '必须选中一个文件或目录扫描'

      return true
    },
  }
  return (await inquirer.prompt([pathName])).template
}
