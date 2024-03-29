import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { getRootPath, getSrcPath } from '../utils'
export default [
  AutoImport({
    imports: ['react', 'react-router-dom', { 'usehooks-ts': ['useDarkMode'] }],
    dirs: [resolve(getSrcPath(), 'hooks')],
    vueTemplate: true,
    dts: resolve(getRootPath(), 'typings/auto-import.d.ts'),
  }),
]
