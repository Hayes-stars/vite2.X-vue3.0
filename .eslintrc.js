module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-control-statements/recommended", // 需要另外配合babel插件使用
    "prettier" // 注意顺序
  ],
  "plugins": ["@typescript-eslint", "react", "jsx-control-statements", "prettier"], // 注意顺序
  "rules": {
    "prettier/prettier": 2, // 这样prettier的提示能够以错误的形式在控制台输出
  }
};