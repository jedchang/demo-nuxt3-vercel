module.exports = {
  root: true,
  env: {
    browser: true,
    es2023: true
  },
  // extends: ['@nuxt/eslint-config'],
  extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['prettier'],
  rules: {
    // 讓 ESLint 可以提示 Prettier 的排版異常提示供我們做修正
    'prettier/prettier': [
      'error',
      {
        semi: false, // 結尾不使用分號
        singleQuote: true, // 使用單引號
        printWidth: 80, // 超過 80 個字元就換行
        trailingComma: 'none', // 未使用尾隨逗號
        endOfLine: 'auto', // 結尾換行符號
        vueIndentScriptAndStyle: true // script、style 預設縮排
        // singleAttributePerLine: true // 屬性都要換行
      }
    ],
    // semi: ['error', 'never'], // 結尾不使用分號
    // quotes: ['error', 'single'], // 使用單引號
    // 'comma-dangle': ['error', 'never'], // 未使用尾隨逗號
    // 'eol-last': ['error', 'never'], // 結尾換行符號
    'no-console': 'off', // console.log 不會被警告
    'no-undef': 'off', // 未定義變數不會被警告
    'no-unused-vars': 'off', // 未使用變數不會被警告
    '@typescript-eslint/no-unused-vars': 'off', // 未使用變數不會被警告
    'vue/multi-word-component-names': 'off', // 未使用多個單字組件名稱不會被警告
    'vue/singleline-html-element-content-newline': 'off', // 標籤 </> 前後不換行
    'vue/multiline-html-element-content-newline': 'off', // 標籤 </> 前後不換行
    'vue/no-multiple-template-root': 'off', // vue3 template 根元素不必只有一個元素
    'vue/attribute-hyphenation': 'off' // 術性不強迫使用連字符
  }
}
