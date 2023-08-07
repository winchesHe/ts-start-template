import { defineConfig } from 'tsup'

export default defineConfig({
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  entry: ['src/index.ts', 'src/bin.ts'],
  format: ['esm'],
})
