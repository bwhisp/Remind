package tasks;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

import application.Mongo;

@Path("todo")
public class TaskResource {

	private Mongo dataBase = new Mongo();

	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Task getTask(@PathParam("id") int id) {
		Task task = new Task();
		task = dataBase.getTask(id);

		return task;
	}

	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public void createTask(Task task) {
		dataBase.insertTask(task);
	}

	@PUT
	@Path("{id}")
	@Consumes(MediaType.APPLICATION_JSON)
	public Task editTask(Task task, @PathParam("id") int id) {
		dataBase.updateTask(id, task);
		return task;
	}

	@DELETE
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public int removeTask(@PathParam("id") int id) {
		dataBase.deleteTask(id);
		return 0;
	}
}
