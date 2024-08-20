// src/java/HelloWorld.java
import com.google.summit.ast.CompilationUnit;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.tree.*;

public class HelloWorld {
    public static void main(String[] args) {
        String dummyCode = "public with sharing class ContactService {\r\n" + //
                        "    public static Id createTaskForContact(Id contactId, String taskSubject) {\r\n" + //
                        "        Task task = new Task(\r\n" + //
                        "            WhoId = contactId, // Use WhoId to link the Task to a Contact\r\n" + //
                        "            Subject = taskSubject,\r\n" + //
                        "            Status = 'Not Started',\r\n" + //
                        "            Priority = 'Normal'\r\n" + //
                        "        );\r\n" + //
                        "        insert task;\r\n" + //
                        "        return task.Id;\r\n" + //
                        "    }\r\n" + //
                        "}";
        try {
            // Convert the string to a CharStream
            ApexLexer lexer = new ApexLexer(CharStreams.fromString(dummyCode));
            CommonTokenStream tokens = new CommonTokenStream(lexer);
            ApexParser parser = new ApexParser(tokens);
            ParseTree tree = parser.compilationUnit();
            System.out.println(tree.toStringTree(parser));
        } catch(Exception ex) {
            System.out.println(ex.getMessage());
        }
        
        //refer SummitAST parseAndTranslate
        //check paths and proper folder structure
    }
}
