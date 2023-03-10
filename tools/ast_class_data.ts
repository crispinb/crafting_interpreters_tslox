export type ClassData = Map<string, Map<string, string>>;

export default function classData(): ClassData {
  const data: ClassData = new Map();
  for (const classStr of rawClassData) {
    const [className, allprops] = classStr.split(":").map(s => s.trim());
    const props = allprops.split(",");
    const propsMap = new Map<string, string>();
    for (const prop of props) {
      const [type, name] = prop.trim().split(" ");
      propsMap.set(name, type);
    }
    data.set(className, propsMap);
  }

  return data;
}

// from https://github.com/munificent/craftinginterpreters/blob/master/java/com/craftinginterpreters/tool/GenerateAst.java
const rawClassData = [
  // commented out lines are parts I haven't covered in the book yet
  // "Assign   : Token name, Expr value",
  "Binary   : Expr left, Token operator, Expr right",
  // "Call     : Expr callee, Token paren, Array<Expr> args",
  // "Get      : Expr object, Token name",
  "Grouping : Expr expression",
  // not sure if string | number is adequate here 
  "Literal  : string|number value",
  // "Logical  : Expr left, Token operator, Expr right",
  // "Set      : Expr object, Token name, Expr value",
  // "Super    : Token keyword, Token method",
  // "This     : Token keyword",
  "Unary    : Token operator, Expr right",
  // "Variable : Token name",
  // "Block      : List<Stmt> statements",
  // "Class      : Token name, Expr.Variable superclass," +
  // "Expression : Expr expression",
  // "Function   : Token name, Array<Token> params," +
  // " Array<Stmt> body",
  // "If         : Expr condition, Stmt thenBranch," +
  // " Stmt elseBranch",
  // "Print      : Expr expression",
  // "Return     : Token keyword, Expr value",
  // "Var        : Token name, Expr initializer",
  // "While      : Expr condition, Stmt body",
];
