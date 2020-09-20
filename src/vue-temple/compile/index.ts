import { parse } from './parse';
import { createCompilerCreator } from './create-compiler';

const createCompiler = createCompilerCreator(
  (template: string, options: any) => {
    var ast = parse(template.trim(), options);
    // if (options.optimize !== false) {
    //   optimize(ast, options);
    // }
    // var code = generate(ast, options);
    // return {
    //   ast: ast,
    //   render: code.render,
    //   staticRenderFns: code.staticRenderFns
    // }
    return ast;
  },
);
const ref = createCompiler({});
export const compile = ref.compile;
