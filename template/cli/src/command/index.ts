import pc from 'picocolors'
import type { Options } from '../types'

const banner = 'all are created with Typescript'

export async function start(options: Options) {
  console.log()
  console.log(pc.green(banner))
  console.log()
}
