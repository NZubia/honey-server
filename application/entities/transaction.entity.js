module.exports = class Transaction {
	constructor(owner, transactionType, budgetCategory, account, description, date, amount, tag=null) {
		this.owner = owner;
		this.transactionType = transactionType;
		this.budgetCategory = budgetCategory;
		this.account = account;
		this.description = description;
		this.date = date;
		this.amount = amount;
		this.tag = tag;
	}
};
