import { MyDatabaseFunction as myDatabaseModuleBInstance } from './db/my-database-function';

// This import forces to execute what is inside module_a
import './module_a';

myDatabaseModuleBInstance.add({ name: 'Roberto', age: 24 });
myDatabaseModuleBInstance.add({ name: 'Joana', age: 23 });
myDatabaseModuleBInstance.add({ name: 'Luiza', age: 67 });

myDatabaseModuleBInstance.show();
