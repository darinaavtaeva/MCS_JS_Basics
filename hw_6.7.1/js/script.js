class Customer {
	constructor(name) {
		this.name = name;
	}
	buy() {
		return 'Куплено';
	}
}

class childCustomer extends Customer {
	getPresent() {
		return 'Шарик в подарок';
	}
}