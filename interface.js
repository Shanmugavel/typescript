function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var usr = { firstName: "Shanmugavel", lastName: "Sundaramoorthy" };
document.body.innerHTML = greeter(usr);
