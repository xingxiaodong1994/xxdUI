interface person {
    name:string
}

function greeter(person:person) {
    return 'Hello,' + person.name;
}

let user = {name:"friend"};

document.body.innerHTML = greeter(user);