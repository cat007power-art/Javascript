function cloner(obj) {
    if (obj) {
        let functions = [];
        for (const key in obj) {
            if (typeof obj[key] === 'function') {
                const functionClone = obj[key].bind ({});
                functions.push ({functionClone,key});
            }
        }
        const cloneObj = JSON.parse(JSON.stringify(obj));
       for (const func of functions) {
           cloneObj[func.key] = func.functionClone;
       }
        return cloneObj;

}
throw new Error(`!!!`);
}