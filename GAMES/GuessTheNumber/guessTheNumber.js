(async () => {
	// your code goes here!

	let guess;
	let num = Math.round(random(1, 100));

	while (guess != num) {
		guess = await prompt('Guess the number 1-100');

		if (guess == num) {
			await alert('You got it!');
		} else if (guess < num) {
			await alert("It's too low!");
		} else if (guess > num) {
			await alert("It's too high!");
		}
	}

	exit();
})();
