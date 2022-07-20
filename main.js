import { addDependency, getInstance } from "./DependencyInjectionManager.js";
import GreeterService from "./GreeterService.class.js";
import InjectedService from "./DependencyInjectedService.class.js";

addDependency(InjectedService, new GreeterService("Hello"));

const instance = getInstance(InjectedService);
console.log(instance.useGreeter());

const instance2 = getInstance(InjectedService);
console.log(instance2.useGreeter());