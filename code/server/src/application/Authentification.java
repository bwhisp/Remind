package application;

public class Authentification {
	private String currUser;

	public Authentification(String currUser, String hashPass) {
		this.currUser = currUser;
	}
	
	public String getCurrUser () {
		return this.currUser;
	}
	
	private int authentificate(String user, String hashPass) {
		
		return 0;
	}
		
}
