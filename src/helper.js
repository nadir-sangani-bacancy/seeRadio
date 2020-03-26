export const indusryformate = (e) => {
    let temp = e.map(item => {
        return { value: item.id, label: item.name }
    })
    return temp;
}

export const personsformate = (e) => {
    let temp = e.map(item => {
        return { value: item.Person.id, label: item.Person.firstName + " " + item.Person.lastName + "-" + item.Person.email }
    })
    return temp;
}

export const getcountryformate = (e) => {
    let temp = e.map(item => {
        return { value: item.code, label: item.name }
    })
    return temp;
}

export const phoneval = (value) => {
    const input = value.replace(/\D/g, '').substring(0, 10);

    // Divide numbers in 3 parts :"(123) 456-7890" 
    const first = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length > 6) {
        return `(${first}) ${middle}-${last}`
    }
    else if (input.length > 3) {
        return `(${first}) ${middle}` 
    }
    else if (input.length >= 0) {
        return input 
    }
}
