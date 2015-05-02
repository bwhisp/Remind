package application;

public class Authentification {
	private String currUser;
	private boolean ok;

	public Authentification(String currUser, String hashPass) {
		this.currUser = currUser;
	}
	
	public String getCurrUser () {
		return this.currUser;
	}
	
	private boolean authentificate(String user, String hashPass) {
		
		return false;
	}
		
}
