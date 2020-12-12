module.exports = class Account {
	constructor(owner, accountName, openingBalance, accountType) {
		this.owner = owner;
		this.accountName = accountName;
		this.openingBalance = openingBalance;
		this.accountType = accountType;
	}
};
