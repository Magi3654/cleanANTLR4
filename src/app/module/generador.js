/**
 * GrammarName es el nombre de la gramatica que se debe remplazar con la que se va a tulizar
 */

import antlr4 from 'antlr4'
import GrammarNameLexer from '../grammar/GrammarName.js'
import GrammarNameParser from '../grammar/CalculadoraParser.js'
import CustomVisitor from '../helper/CustomVisitor.js'

export const analizar =(input)=> {
       
const chars = new antlr4.InputStream(input);
const lexer = new GrammarNameLexerLexer(chars)
const tokens = new antlr4.CommonTokenStream(lexer)
const parser = new GrammarParser(tokens)
parser.buildParseTrees = true;
const tree = parser.file();
const customVisitor = new CustomVisitor();

return customVisitor.visitFile(tree);
};
