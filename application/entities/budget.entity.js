module.exports = class Budget {
	constructor(owner, budgetName, monthlyAmount) {
		this.owner = owner;
		this.budgetName = budgetName;
		this.monthlyAmount = monthlyAmount;
	}
};
