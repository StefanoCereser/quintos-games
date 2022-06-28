// start of wrapper (I will explain how this works later)
(async () => {
	// your code goes here! below this line

	let choice = 0; // initialize choice to 0, user has not made any choice yet
	let foundKey = false;

	while (choice != null) {
		// while choice is not null (nothing)
		// null in this case indicates the player cancelled out of the prompt

		let msg = ''; // initialize message to empty String
		let options = [];

		if (choice == 0) {
			/* Part A0: Start your story! */
			msg =
				'You walk up to an abandoned mansion to search for your friend James who disappeared there two days ago. You see lights in the second floor, looks like a disco. Creepy! You go up to the door but it is guarded by a tiny spider on the door handle. What do you want to do?\n\n\t' +
				'1: You battle with the tiny spider, brushing it off the doorknob with one finger\n\t' +
				'2: You call the police on the spider\n\t' +
				'3: You start sobbing and leave';
			options = [1, 2, 3];
		} else if (choice == 1) {
			/* Part A1: continue the story */
			msg =
				'You walk into the mansion. You see a staircase and a living room full of snails statues.\n\n\t' +
				'4: You try to go up the stairs. \n\t' +
				'5: You try to go into the living room.';
			options = [4, 5];
		} else if (choice == 2) {
			msg = 'The police comes along with the SWAT team who blows up the mansion. GAME OVER!\n\n\t0: Try again.';
			options = [0];
		} else if (choice == 3) {
			msg = 'You failed to find your friend and now the mafia has him. GAME OVER!\n\n\t0: Try again.';
			options = [0];
		} else if (choice == 4) {
			msg =
				'When you get to the second floor you see a figure passing by. It looks like Micheal Jackson with his hat! You ignore it and get closer and closer to the disco room.\n\n\t' +
				'1: You go to the 1° floor.\n\t' +
				'6: You decide to investigate the disco room.\n\t' +
				'7: You continue walking through the second floor.';
			options = [1, 6, 7];
		} else if (choice == 5) {
			msg =
				'As you enter the living room you start to hear Billie Jean from Micheal Jackson and suddenly a tiny snail statue comes to life and kills you with a batarang. GAME OVER!\n\n\t0: Try again.';
			options = [0];
		} else if (choice == 6 && foundKey == false) {
			msg = 'You try to open the door, but it is locked .\n\n\t' + '7: You continue walking through the second floor';
			options = [7];
		} else if (choice == 6 && foundKey == true) {
			msg =
				'You unlock the door using the keys you found on the bedroom. You see James tied to a chair unconscious. You free him and leave the mansion, but the snail statues will haunt you forever! \n\n\t0: Try again.';
			options = [0];
		} else if (choice == 7) {
			msg =
				'At the end of the hallway there are two doors.\n\n\t' +
				'8: You go to the first door.\n\t' +
				'9: You go to the second door.\n\t' +
				'10: Go back to the other side of the hallway.';
			options = [8, 9, 10];
		} else if (choice == 8 && foundKey == false) {
			msg =
				'As you open the door you see that it leads to a bedroom. Inside the room there is a keychain. Which door does it open? You continue to search for clues that will help find James.\n\n\t' +
				'7: Take the keychain and exit the bedroom.';
			options = [7];
			foundKey = true;
		} else if (choice == 8 && foundKey == true) {
			msg =
				' You open the bedroom door again but there does not seem to be anything else here.\n\n\t' +
				'7: Exit the bedroom.';
			options = [7];
		} else if (choice == 9) {
			msg =
				"As you open the door you see an office but there doesn't seem to be anything important or relevant to finding James, just a computer and a printer.\n\n\t" +
				'7: Exit the office.';
			options = [7];
		} else if (choice == 10) {
			msg =
				'You see the staircase and the disco room.\n\n\t' +
				'6: You decide to enter the disco room.\n\t' +
				'1: You go to the 1° floor.';
			options = [1, 6];
		}

		// example of OR
		// else if (choice == 8 || choice == 10)

		// prompt the player to make choices
		let userInput = await prompt(msg);
		if (options.includes(userInput) == true) {
			choice = userInput;
		} else {
			await alert("This choice isn't valid");
		}

		/* Part B0: end the game if there are no more choices to make */

		/* Part B1: check if the player made a valid choice, reject invalid choices */
	}

	exit(); // exits the game
})(); // end wrapper
