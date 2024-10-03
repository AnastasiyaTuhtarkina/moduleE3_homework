function isObject(obj) {
    for (key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
        } 
}
}