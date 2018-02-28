const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {
	it('should add two numbers', () => {
		const res = utils.add(33, 11);

		expect(res).toBe(44).toBeA('number');
	});

	it('should async square a number', (done) => {
		utils.asyncSquare(4, (square) => {
			expect(square).toBe(16).toBeA('number');
			done();
		});
	});

	it('should square a number', () => {
		const res = utils.square(4);

		expect(res).toBe(16).toBeA('number');
	});

	it('should async add two numbers', (done) => {
		utils.asyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		});
	});

	it('should expect some value', () => {
		
		expect({
			name: 'J',
			age: 23
		}).toInclude({
			age: 23
		})
	});

	it ('should verify first and last names are set', () => {
		const user = {
			age: 23,
			location: 'US' 
		};

		const fullName = 'Jac Sa';

		const res = utils.setName(user, fullName);

		expect(res).toInclude({
			firstName: 'Jac',
			lastName: 'Sa'
		})

	})	
});


