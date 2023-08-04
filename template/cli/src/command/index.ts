/* eslint-disable no-console */
import chalk from 'chalk'

const gradientBanner = `${chalk.rgb(66, 211, 146)('a')}${chalk.rgb(66, 211, 146)('l')}${chalk.rgb(66, 211, 146)('l')} ${chalk.rgb(66, 211, 146)('a')}${chalk.rgb(67, 209, 149)('r')}${chalk.rgb(68, 206, 152)('e')} ${chalk.rgb(69, 204, 155)('c')}${chalk.rgb(70, 201, 158)('r')}${chalk.rgb(71, 199, 162)('e')}${chalk.rgb(72, 196, 165)('a')}${chalk.rgb(73, 194, 168)('t')}${chalk.rgb(74, 192, 171)('e')}${chalk.rgb(76, 192, 171)('d')} ${chalk.rgb(75, 189, 174)('w')}${chalk.rgb(76, 187, 177)('i')}${chalk.rgb(77, 184, 180)('t')}${chalk.rgb(78, 182, 183)('h')} ${chalk.rgb(79, 179, 186)('T')}${chalk.rgb(80, 177, 190)('y')}${chalk.rgb(81, 175, 193)('p')}${chalk.rgb(82, 172, 196)('e')}${chalk.rgb(83, 170, 199)('S')}${chalk.rgb(83, 167, 202)('c')}${chalk.rgb(84, 165, 205)('r')}${chalk.rgb(85, 162, 208)('i')}${chalk.rgb(86, 160, 211)('p')}${chalk.rgb(87, 158, 215)('t')}`
const defaultBanner = 'all are created with Typescript'

export async function start(options: { name?: string }) {
  console.log()
  console.log(
    (process.stdout.isTTY && process.stdout.getColorDepth() > 8)
      ? gradientBanner
      : defaultBanner,
  )
  console.log()
}
