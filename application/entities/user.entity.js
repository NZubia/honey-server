module.exports = class User {
	constructor(firstName, lastName, email) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
	}

	/**
	 * Function that returns the user full name
	 * @returns {string}
	 */
	getFullName() {
		return `${this.firstName} ${this.lastName}`;
	}
};
