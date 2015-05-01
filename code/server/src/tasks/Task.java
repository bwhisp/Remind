package tasks;

public class Task {
	private String owner;
	private String title;
	private String description;
	private String deadline;
	
	public Task() {
		
	}
	
	public Task (String owner, String title, String description, String deadline) {
		super();
		this.owner = owner;
		this.title = title;
		this.description = description;
		this.deadline = deadline;
	}

	public String getOwner() {
		return owner;
	}

	public String getTitle() {
		return title;
	}

	public String getDescription() {
		return description;
	}

	public String getDeadline() {
		return deadline;
	}
		
}
