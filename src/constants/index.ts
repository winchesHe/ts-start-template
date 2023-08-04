import type { Config } from 'prettier'
import { devDependencies } from './package-temp.json'

export const excludeList = [
  'node_modules',
  '.md',
  '.vscode',
  '.git',
  '.DS_Store',
  '.json',
  '.npmrc',
  '.yaml',
  '.eslintrc',
  '.svg',
  'LICENSE',
]

export const commonDep = devDependencies

export const prettierConfig: Config = {
  printWidth: 100,
  arrowParens: 'avoid',
  bracketSpacing: true,
  endOfLine: 'lf',
  bracketSameLine: false,
  quoteProps: 'as-needed',
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'none',
  useTabs: false,
  vueIndentScriptAndStyle: false,
  overrides: [
    {
      files: '*.md',
      options: {
        embeddedLanguageFormatting: 'off',
      },
    },
  ],
}
