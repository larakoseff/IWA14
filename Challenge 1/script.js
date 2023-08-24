firstName = 'John'
age = 35
hobby = 'Coding'


const logTwice = (parameter =`Hello, ${firstName} (${age}). I love ${hobby}!`) => {
    console.log(parameter)
    console.log(parameter)
}

logTwice()

