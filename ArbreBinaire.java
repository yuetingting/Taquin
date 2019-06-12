public interface ArbreBinaire <T> {
	public T valeur() throws ArbreVideException;
	public ArbreBinaire <T> sad() throws ArbreVideException;
	public ArbreBinaire <T> sag() throws ArbreVideException;
	public boolean estVide();

}
