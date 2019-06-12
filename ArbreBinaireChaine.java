
public class ArbreBinaireChaine <T> implements ArbreBinaire<T> {
	protected T v;
	protected ArbreBinaireChaine <T> sad,sag;
	@SuppressWarnings("rawtypes")
	public static final ArbreBinaireChaine arbreVide =  null;

	// constructeur avec 2 sous-arbres
	public ArbreBinaireChaine (T r, ArbreBinaireChaine<T> g, ArbreBinaireChaine<T> d) {
		v = r;
		sag=g;
		sad=d;
	}
	
	// constructeur avec sans sous-arbre = feuille
	public  ArbreBinaireChaine  (T r) {
		this (r,null,null);
	}
	
	
	// renvoie la valeur de la racine
	public T valeur() throws ArbreVideException{
		if (estVide())
			throw new ArbreVideException();
		return v;
	};
	
	public ArbreBinaireChaine<T> sad() throws ArbreVideException{
		if (estVide())
			throw new ArbreVideException();
		return  sad;
	};
	
	public ArbreBinaireChaine<T>  sag() throws ArbreVideException{
		if (estVide())
			throw new ArbreVideException();
		return sag;
	};

	 public  void  indente(ArbreBinaireChaine<T> a, int n ) throws ArbreVideException {
		if (a!=ArbreBinaireChaine.arbreVide)
		{
			indente(a.sad,n+3);
			for (int i=0;i<n;++i) System.out.print(" ");
			System.out.println(a.valeur());
			indente(a.sag,n+3);
		}
			
	}
	
	 public  void  indente() throws ArbreVideException {
				indente(this,0);
		}
	
	
	public void ecrireArbre() throws ArbreVideException {
		try {
		if (estVide())
			throw new ArbreVideException();
		System.out.print("("+valeur()+" ");
		if (sag!=null)
				sag().ecrireArbre();

		if (sad!=null)
				sad().ecrireArbre();

  	    System.out.print(")");
  	    
  	//  System.out.print("Z");
	}
  	   catch (ArbreVideException e) 
	{ 
	System.out.println("Exception");

	 }
	}
	
	// affiche un arbre binaire sous forme parenthésée V2
	public void ecrireArbre3() throws ArbreVideException {
		try {
		if (estVide())
			throw new ArbreVideException();
		if ((sag!=null) && (sad!=null)) // ce n'est pas une feuille on affiche l'operateur
			System.out.print("("+(char)(int)valeur()+" "); // conversion
		
		else
			System.out.print("("+valeur()+" "); // affiche la valeur
			
		
		if (sag!=null) // ecrit le sag s'il existe
				sag().ecrireArbre3();
		else
			System.out.print(" null");
		
		if (sad!=null) // ecrit le sad s'il existe
				sad().ecrireArbre3();
		else
			System.out.print(" null");
		
  	    System.out.print(")"); // ferme la parenthèse
	}
  	   catch (ArbreVideException e) 
	{ 
	System.out.println("Exception");

	 }
	
	}
	
	public boolean estVide() {
		return this==null;
	};

	public boolean estUneFeuille() throws ArbreVideException {
		return this.sad()==null;
	}
	
	public int hauteurArbre3() throws ArbreVideException {
		return (hauteurArbre2(this));
	}
	
	
	public int hauteurArbre2(ArbreBinaireChaine<T> a) throws ArbreVideException {
		try {
		if (a==arbreVide)
			return 0;
		else
			return (1+Math.max(a.hauteurArbre2(a.sad),a.hauteurArbre2(a.sag)));

		}
			catch (ArbreVideException e) 
		{ 
				System.out.println("Exception");
				return 0;
	 }
	}

	
}
