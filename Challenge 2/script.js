/**
 * Add two numbers
 * 
 * @param {number} a - The first number to add.
 * @param {number} b -  The second number to add.
 * @returns {number} - The sum of a and b.
 */

const add = (a, b) => { 
	return a + b 
}

/**
 * 
 *  Multiply the result of adding two numbers by a third number.
 * 
 * @param {number} a - The first number to add.
 * @param {number} b - The second number to add.
 * @param {number} c - The third number to multiply by.
 * @returns {number} - The result of adding a and b, then multiplying it by c.
 */

const multiply = (a, b, c) => { 
	return add(a, b) *c }

/**
 * Perform an internal calculation using the provided values from the `internal` object
 * and log the result.
 *
 * @function
 * 
 */

function internal() {

	// Calculate the product of a, b, and c using the multiply function
	const multiplied = this.multiply(this.internal.a, this.internal.b, this.internal.c)

	 // Log the multiplied result
	 console.log(multiplied)
}



// Not allowed to change below this

/**
 * 
 * @type {Object} - Example 1 object containing internal values and functions.
 * @prop {number} a - First value.
 * @prop {number} b - Second value.
 * @prop {number} c - Third value.
 */

const example1 = {

	internal: {
		a: 2,
		b: 4,
		c: 8,
	},

	 /**
     * Reference to the add function.
     * {@link add}
     */

	add,

	 /**
     * Reference to the multiply function.
     * {@link multiply}
     */

	multiply,
	
	/**
     * Creation of new calculate function via reference to the internal function.
     * {@link internal}
     */

  calculate: internal
}

/**
 * 
 * @type {Object} - Example 2 object containing internal values and functions.
 * @prop {number} a - First value.
 * @prop {number} b - Second value.
 * @prop {number} c - Third value.
 */

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},

	/**
     * Reference to the add function.
     * {@link add}
     */

	add,

	/**
     * Reference to the multiply function.
     * {@link multiply}
     */

	multiply,

	/**
    * Creation of new calculate function via reference to the internal function.
	 * {@link internal}
     */
		calculate: internal
}

example1.calculate()
example2.calculate()