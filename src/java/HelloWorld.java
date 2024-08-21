// src/java/HelloWorld.java
import com.google.summit.ast.CompilationUnit;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;
import java.nio.file.Paths;

public class HelloWorld {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("No file provided.");
            return;
        }

        String filePath = args[0];
        try {
            // Convert the file content to a CharStream
            ApexLexer lexer = new ApexLexer(CharStreams.fromFileName(filePath));
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            ApexParser parser = new ApexParser(tokens);
            ParseTree tree = parser.compilationUnit();

            // Printing the parse tree
            System.out.println(tree.toStringTree(parser));

            // Further processing with SummitAST or other tasks
            // ...
        } catch (Exception e) {
            System.out.println("Error processing file: " + ex.getMessage());
        }
        //refer SummitAST parseAndTranslate
        //check paths and proper folder structure
    }
}
