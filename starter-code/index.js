// Your Solution goes here
/* console.log("Index.js load successfull") */

function fullName(person) {
    return person.firstName + ' ' + person.lastName;
}

/* console.log(fullName({ firstName: 'Luis', lastName: 'Burón' })); */

function whoIsOnline(users) {
    let onLine = [], offLine = [], afk = [];
    const result = {};
    
    for (let i = 0; i < users.length; i++) {
        if (users[i].status === 'online' && users[i].lastActivity <= 600) {
            onLine.push(users[i].username);
        } else if (users[i].status === 'online' && users[i].lastActivity > 600) {
            afk.push(users[i].username);
        } else {
            offLine.push(users[i].username);
        }
    }
    
    if (onLine.length > 0) result.online = onLine;
    if (offLine.length > 0) result.offline = offLine;
    if (afk.length > 0) result.afk = afk;
    
    return result;
}

/* console.log(whoIsOnline([
    { username: 'David', status: 'offline', lastActivity: 600 },
    { username: 'Lucy', status: 'offline', lastActivity: 2320 },
    { username: 'Bob', status: 'online', lastActivity: 4320 }
])); */

function overHeating(yourComputer, maxTemperatures) {
    const result = {};
    
    result.cpu = yourComputer.cpu <= maxTemperatures.cpu;
    result.gpu = yourComputer.gpu <= maxTemperatures.gpu;
    result.motherBase = yourComputer.motherBase <= maxTemperatures.motherBase;
    result.dvdDriver = yourComputer.dvdDriver <= maxTemperatures.dvdDriver;
    result.rom = yourComputer.rom <= maxTemperatures.rom;
    result.ram = yourComputer.ram <= maxTemperatures.ram;
    
    return result;
}

/* console.log(overHeating(
    { cpu: 25, gpu: 45, motherBase: 15, dvdDriver: 25, rom: 5, ram: 10 },
    { cpu: 33, gpu: 42, motherBase: 20, dvdDriver: 20, rom: 10, ram: 20 }
)); */

function strCount(object) {
    let result = 0;
    
    for (let key in object) {
        if (typeof object[key] === 'string') {
            result++;
        } else if (Array.isArray(object[key])) {
            for (let i = 0; i < object[key].length; i++) {
                if (typeof object[key][i] === 'string') {
                    result++;
                }
            }
        }
    }
    
    return result;
}

/* console.log(strCount({
    first: "1",
    second: "2",
    third: false,
    fourth: ["anytime", 2, 3, 4],
    fifth: null
})); */

function fullNameFormatted(person) {
    return person.firstName.charAt(0).toUpperCase() + person.firstName.slice(1) + ' ' +
           person.lastName.charAt(0).toUpperCase() + person.lastName.slice(1);
}

/* console.log(fullNameFormatted({ firstName: 'Luis', lastName: 'burón' })); */

function fullNameFormattedv2(person) {
    let name = person.firstName.split(' ');
    let lastName = person.lastName.split(' ');
    let result = '';
    
    for (let i = 0; i < name.length; i++) {
        result += name[i].charAt(0).toUpperCase() + name[i].slice(1) + ' ';
    }
    for (let i = 0; i < lastName.length; i++) {
        result += lastName[i].charAt(0).toUpperCase() + lastName[i].slice(1) + ' ';
    }
    
    return result.trim();
}

console.log(fullNameFormattedv2({ firstName: 'Luis Álvaro', lastName: 'burón mejías' }));
