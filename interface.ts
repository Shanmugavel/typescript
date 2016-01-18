interface Person {
  firstName : string;
  lastName : string;
}

function greeter (person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

var usr = { firstName : "Shanmugavel", lastName : "Sundaramoorthy"};

document.body.innerHTML = greeter(usr);
