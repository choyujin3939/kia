/** @type {import("prettier").Config} */
module.exports = {
  singleQuote: false,
  semi: true,
  trailingComma: "es5",
  tabWidth: 2,
  printWidth: 100,
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "auto",

  importOrder: ["^react", "^next", "^[a-z]", "^@", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
