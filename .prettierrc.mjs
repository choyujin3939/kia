/** @type {import("prettier").Config} */
export default {
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