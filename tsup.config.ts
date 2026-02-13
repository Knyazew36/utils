import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'], // ESM и CommonJS
  dts: true, // Генерировать .d.ts файлы
  clean: true,
  sourcemap: false,
  minify: true,
  treeshake: true
})
