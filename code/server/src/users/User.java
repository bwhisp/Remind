package users;

public class User {
	private String username;
	private String firstName;
	private String lastName;
	private String email;
	private String hashPass;
	private String dateOfBirth;
	
	public User () {
		
	}
	
	public User(String username, String firstName, String lastName,
			String email, String hashPass, String dateOfBirth) {
		super();
		this.username = username;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.hashPass = hashPass;
		this.dateOfBirth = dateOfBirth;
	}
	
	public String getHashPass () {
		return this.hashPass;
	}
	
	
	public String getUsername() {
		return username;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public String getEmail() {
		return email;
	}

	public String getDateOfBirth() {
		return dateOfBirth;
	}

	public String toJson () {
		return "";
	}
		
}