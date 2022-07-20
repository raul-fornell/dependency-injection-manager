const injections = new Map();
export function addDependency(classItem, ...params) {
    injections.set(classItem, ...params);
}

export function getInstance(classItem) {
    const instance = new classItem(injections.get(classItem));
    return instance;
}