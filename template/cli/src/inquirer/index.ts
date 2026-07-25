import { input } from '@inquirer/prompts'

export async function getName(): Promise<string> {
  return input({
    message: '请填写项目名:',
    default: 'project-name',
  })
}
