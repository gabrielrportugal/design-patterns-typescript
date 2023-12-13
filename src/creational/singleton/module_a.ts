import { MyDatabaseFunction as myDatabaseModuleAInstance } from './db/my-database-function';

myDatabaseModuleAInstance.add({ name: 'Gabriel', age: 24 });
myDatabaseModuleAInstance.add({ name: 'Rafaela', age: 23 });
myDatabaseModuleAInstance.add({ name: 'Rose', age: 67 });

export { myDatabaseModuleAInstance };
