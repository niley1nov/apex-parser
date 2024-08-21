// src/java/HelloWorld.java
import com.google.summit.ast.CompilationUnit;
import com.google.summit.translation.Translate;
import com.nawforce.apexparser.ApexLexer;
import com.nawforce.apexparser.ApexParser;
import org.antlr.v4.runtime.*;
import java.nio.file.Paths;
import com.google.gson.Gson;

public class HelloWorld {
    public static void main(String[] args) {
        if (args.length == 0) {
            System.out.println("No file provided.");
            return;
        }

        String filePath = args[0];
        try {
            // Convert the file content to a CharStream
            String name = "dummy";
            ApexLexer lexer = new ApexLexer(CharStreams.fromFileName(filePath));
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            ApexParser parser = new ApexParser(tokens);
            ApexParser.CompilationUnitContext tree = parser.compilationUnit();

            // Printing the parse tree
            // System.out.println(tree.toStringTree(parser));

            Translate translator = new Translate(name, tokens);
            CompilationUnit ast = translator.translate(tree);

            Gson gson = new Gson();
            String json = gson.toJson(ast);
            System.out.println("AST as JSON: " + json);
        } catch (Exception ex) {
            System.out.println("Error processing file: " + ex.getMessage());
        }
        //remove sourceLocation
    }
}
