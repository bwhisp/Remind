package users;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import application.Mongo;

@Path("user")
public class UserResource {
	
	private Mongo dataBase = new Mongo();
	
	@GET
	@Path("{username}")
	@Produces(MediaType.APPLICATION_JSON)
	public User getUser(@PathParam("username") String username) {	
		User user = new User();
		user = dataBase.getUser(username);
		
		return user;
	}
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public User createTask(User user) {
		dataBase.insertUser(user);
		return user;
	}

	@PUT
	@Path("{username}")
	@Consumes(MediaType.APPLICATION_JSON)
	public User editUser(User user, @PathParam("username") String username) {
		dataBase.updateUser(username, user);
		return user;
	}

	@DELETE
	@Path("{username}")
	@Produces(MediaType.APPLICATION_JSON)
	public int removeUser(@PathParam("username") String username) {
		dataBase.deleteUser(username);
		return 0;
	}

}
