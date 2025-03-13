import { createESLintConfig } from '@mariandotg/eslint-config'

const config = createESLintConfig({
  typescript: true,
  react: true,
  standard: true,
  customExtends: [
    'next/core-web-vitals',
    'next/typescript',
    'eslint-config-prettier',
  ],
  ignoreFiles: [
    'node_modules',
    'dist',
    '.next',
    'build',
    'coverage',
    '**/*.generated.js',
  ],
})

export default config
