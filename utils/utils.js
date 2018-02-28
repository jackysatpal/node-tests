const add = (a, b) => {
	return a + b;
};

const asyncAdd = (a, b, callback) => {
	setTimeout(() => {
		callback(a + b);
	}, 1000)
}

const setName = (user, fullName) => {
	const names = fullName.split(' ');
	user.firstName = names[0];
	user.lastName = names[1];

	return user;
};

const square = (a) => {
	return a*a;
}

const asyncSquare = (number, callback) => {
	setTimeout( () => {
		callback(number * number);
	}, 1000)
}

module.exports = {
	add,
	square,
	asyncAdd,
	asyncSquare,
	setName
};