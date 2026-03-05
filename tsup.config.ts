import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    'error-catch': 'src/error-catch/index.ts',
    'format-phone': 'src/format-phone/index.ts',
    'get-name': 'src/get-name/index.ts',
    'number-separator': 'src/number-separator/index.ts',
    'ms': 'src/ms/index.ts',
  },
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: false,
  minify: true,
  treeshake: true,
})
