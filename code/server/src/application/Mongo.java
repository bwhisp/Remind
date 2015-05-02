package application;

import tasks.Task;
import users.User;

import com.mongodb.*;

public class Mongo {

	private DB db;
	private DBCollection usersColl;
	private DBCollection tasksColl;

	// creates the mongoClient object and connects it to the database
	@SuppressWarnings("deprecation")
	public Mongo()throws UnknownHostException  {
		MongoClient mongoClient = new MongoClient("localhost",27017);
		this.db = mongoClient.getDB("myDB");
		this.usersColl = db.getCollection("users");
		this.tasksColl = db.getCollection("tasks");
		// mongoClient.setWriteConcern(WriteConcern.JOURNALED);
	}

	// Insert a new entry to the database
	public void insertUser(User user) {
		BasicDBObject doc = new BasicDBObject("username", user.getUsername())
				.append("firstName", user.getFirstName())
				.append("lastName", user.getLastName())
				.append("email", user.getEmail())
				.append("hashPass", user.getHashPass());

		usersColl.insert(doc);
	}

	public void insertTask(Task task) {
		BasicDBObject doc = new BasicDBObject("owner", task.getOwner())
				.append("title", task.getTitle())
				.append("description", task.getDescription())
				.append("deadline", task.getDeadline());
		usersColl.insert(doc);
	}

	// Retrieves an entry from the database
	public User getUser(String username) {
		BasicDBObject query = new BasicDBObject("username", new BasicDBObject(
				"username", username));

		DBCursor cursor = usersColl.find(query);

		return (User) cursor.toArray();
	}

	public Task getTask(int id) {
		BasicDBObject query = new BasicDBObject("id", new BasicDBObject("id",
				id));

		DBCursor cursor = tasksColl.find(query);

		return (Task) cursor.toArray();
	}

	// Deletes an entry of the database
	public void deleteUser(String username) {
		BasicDBObject query = new BasicDBObject();
		query.append("username", username);
		WriteResult result = usersColl.remove(query);
		System.out.println("Number of users deleted : " + result.getN()); // #WTF !!
	}

	public void deleteTask(int id) {
		BasicDBObject query = new BasicDBObject();
		query.append("id_owner", id);
		WriteResult result = tasksColl.remove(query);
		System.out.println("Number of tasks deleted : " + result.getN()); // #WTF !!
	}

	// Updates an entry in the database
	public void updateUser(String username, User newInfos) {
		BasicDBObject updateQuery = new BasicDBObject("username", newInfos.getUsername())
		.append("firstName", newInfos.getFirstName())
		.append("lastName", newInfos.getLastName())
		.append("email", newInfos.getEmail())
		.append("hashPass", newInfos.getHashPass());

		BasicDBObject searchQuery = new BasicDBObject();
		searchQuery.append("username", username);

		usersColl.updateMulti(searchQuery, updateQuery);
	}

	public void updateTask(int id, Task newInfos) {
		BasicDBObject updateQuery =  new BasicDBObject("owner", task.getOwner())
		.append("title", task.getTitle())
		.append("description", task.getDescription())
		.append("deadline", task.getDeadline());

		BasicDBObject searchQuery = new BasicDBObject();
		searchQuery.append("id", id);

		usersColl.updateMulti(searchQuery, updateQuery);
	}
}
