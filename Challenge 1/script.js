firstName = 'John'
age = 35
hobby = 'Coding'


const logParameterTwice = (parameter) => {
    console.log(parameter)
    console.log(parameter)
}

logParameterTwice(`Hello, ${firstName} (${age}). I love ${hobby}!`)

