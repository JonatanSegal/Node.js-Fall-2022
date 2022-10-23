<script>
	let numbers = [1, 2, 3, 4];

	function addNumber() {
		/*
		numbers.push(numbers.length + 1);
		numbers = numbers;
		You could also write this more concisely using the ES6 spread syntax:
		*/
		numbers =[...numbers, numbers.length + 1];
		//A simple rule of thumb: the updated variable must directly appear on the left hand side of the assignment.
	}

	$: sum = numbers.reduce((t, n) => t + n, 0);
</script>

<p>{numbers.join(' + ')} = {sum}</p>

<button on:click={addNumber}>
	Add a number
</button>