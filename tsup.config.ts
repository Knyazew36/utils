import { existsSync, readdirSync } from 'fs'
import { join } from 'path'
import { defineConfig } from 'tsup'

const getEntryPoints = () => {
  const entry: Record<string, string> = {
    index: 'src/index.ts'
  }

  const srcDir = 'src'
  const dirs = readdirSync(srcDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

  for (const dir of dirs) {
    const indexPath = join(srcDir, dir, 'index.ts')
    if (existsSync(indexPath)) {
      entry[dir] = indexPath
    }
  }

  return entry
}

export default defineConfig({
  entry: getEntryPoints(),
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  sourcemap: false,
  minify: true,
  treeshake: true
})
