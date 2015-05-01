package application;
import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import tasks.TaskResource;
import users.UserResource;

@ApplicationPath("/rest")
public class RemindApplication extends Application{

	@Override
	public Set<Class<?>> getClasses()
	{
		Set<Class<?>> classes = new HashSet<>();
		/*	On ajoute ici toutes les classes qui font des doGet, doPost ect...	*/
		classes.add(TaskResource.class);
		classes.add(UserResource.class);
		return classes;
	}
}
