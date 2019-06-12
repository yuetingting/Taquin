import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.StreamTokenizer;
import java.io.StringReader;
import java.util.Stack;


public class ExpresssionPosteFixee {

	public static void main (String [] args) throws IOException
	{
	
	ArbreBinaireChaine<Integer> arbre = null;

	try {
		arbre=CreeArbre();  // cree l'arbre correspondant à l'expression postfixee
		System.out.println("Arbre cree : ");
		
		arbre.ecrireArbre3(); // ecrit l'arbre 
	}
	catch ( Exception e) 
	{
		System.out.println("Fin du fichier ou erreur expression ");
	}
	System.out.println("\nExpression cree : ");
	System.out.println(Arbre2String(arbre)); // affiche l'expression infixee

	System.out.println("Valeur ="+EvalArbre(arbre));  // evalue l'arbre de l'expression
	

	
	}
	
	/*****************************************************************************/
	/* renvoie une chaine qui est  sous forme infixe parenthésée d'un arbre binaire */
	
	public static String Arbre2String(ArbreBinaireChaine<Integer> arbre) 
	{
	
		String sg,sd; // stocke les 2 sous-chaines gauche et droite de l'opérateur
	
		try {

		if (arbre.estUneFeuille()) // si c'est une valeur/feuille, la renvoie
			return ""+arbre.valeur();

		else { // si la valeur est un opérateur
		
			char op = (char) (int) arbre.valeur(); // convertit pour récupérer l'opérateur
			sg = Arbre2String(arbre.sag); // appel récursif sur sag
			sd = Arbre2String(arbre.sad); // appel récursif sur sad
					
			switch (op) {
			case '+' :  // fait la somme : ( sag + sad )
				return "("+sg+"+"+sd+")"; // met systématiquement les parenthèses
//				break;
	   		case '-' :  // fait la difference : ( sag - sad )
				return "("+sg+"-"+sd+")"; // met systématiquement les parenthèses
//				break;
				
	   		case '*' : // fait le produit : ( sag * sad )
				return ""+sg+"*"+sd+"";
//				break;
					
	   		case '/' :  // fait la division : ( sag / sad )
				return ""+sg+"/"+sd+"";
//				break;
			default :
				System.out.println("erreur operateur");
				return "";

			}	
		
		   }
		} // fin try
		
		catch ( Exception e) 
		{
			System.out.println(" erreur expression ");
			
		}
		return ""; // ne passera jamais ici, car la racine est un operateur

	} // fin méthode
	
	
	
	
	/**********************************************************************************/
	
	/* evalue l'expression stockée dans l'arbre binaire et la retourne sous forme d'entier */
	public static Integer EvalArbre(ArbreBinaireChaine<Integer> arbre) 
	{
	
		int a,b;
		
		try {
			
		// si l'arbre n'est plus qu'une valeur/feuille, renvoie cette valeur 
		if (arbre.estUneFeuille())
				return arbre.valeur();
	
		// l'arbre est une opération binaire entre sag et sad => evalue recursivement
		else {
			// il est nécesssaire de passer d'abord par (int) puis (char)
			char op = (char) (int) arbre.valeur(); // on convertit en caractère
			
			a = EvalArbre(arbre.sag); // argument 1
			b = EvalArbre(arbre.sad); // argument 2

			switch (op) { // effectue l'operation
			
			case '+' :
				return a+b;
//				break;
	   		case '-' :
				return a-b;
//				break;
	   		case '*' :
				return a*b;
	//			break;						
					
	   		case '/' :
				return a/b; // attention à la division par 0 
//				break;

			default :
				System.out.println("erreur operateur");
				return 0;
			}	
		
		   }
		} // fin try
		
		catch ( Exception e) 
		{
			System.out.println(" erreur expression ");
			
		}
		return 0;

	} // fin méthode
	

	
	// cree un arbre binaire à partir d'une expression postfixée d'un fichier
	// l'arbre final sera sur la pile (le seul element) : renvoie l'arbre
	public static ArbreBinaireChaine<Integer> CreeArbre() throws Exception
	{
		
		// lecture depuis un fichier 
		FileReader MyFileReader = new FileReader("src/monFichier2.txt"); // attention src ou non
		StreamTokenizer st = new StreamTokenizer(MyFileReader);
		
		
		// depuis l'entree standard, attention il faut passer par la console cmd
		// InputStreamReader MyStreamReader = new InputStreamReader(System.in);
		// StreamTokenizer st= new StreamTokenizer(MyStreamReader);
		// Reader MyReader = new InputStreamReader(System.in);
		
		//Reader MyReader = new BufferedReader(  new InputStreamReader(System.in));
		
		//StreamTokenizer st= new StreamTokenizer(MyReader);
		
		Stack<ArbreBinaireChaine<Integer>> myStack = new Stack<ArbreBinaireChaine<Integer>>();
		
		
		 st.ordinaryChar((int)'/'); // inhibe ce caractere qui est un caractere special
		// ATTENTION .nextToken passe au suivant, et stocke dans le champ ttype le int qui a été lu
		while((st.nextToken())!=StreamTokenizer.TT_EOF) { // tant qu'on est pas à la fin de fichier
			if (st.ttype==StreamTokenizer.TT_NUMBER) { // si on a un nombre, on l'empile dans un noeud
				myStack.push(new ArbreBinaireChaine<Integer>((int) st.nval)); // empile le noeud de type nombre
			}
			else // on a un operateur et on empile sa valeur numérique dans un noeud
			   { 
				ArbreBinaireChaine<Integer> newArbre, sad,sag ;
				sad = (myStack.pop()); // depile un arbre
				sag = (myStack.pop()); // depile un arbre
				newArbre = (new ArbreBinaireChaine <Integer> (st.ttype, sag,  sad)); // creation d'un noeud
				myStack.push(newArbre); // empile le nouvel abre créé
				}
		}
		// System.out.println("Resultat = " + myStack.pop());
		return myStack.peek(); // renvoie l'arbre unique qui est sur la pile
							   // et qui représente l'expression post-fixee
	}
	
}
