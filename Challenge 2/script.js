// script.js

const add = (a, b) => { return a + b }
const multiply = (a, b, c) => { return (a + b) *c }

function internal() {
    const multiplied = this.multiply(this.internal.a, this.internal.b, this.internal.c)
    console.log(multiplied)
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()