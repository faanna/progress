let sections = document.querySelectorAll('section');
let postionArray = [];
for (let el of sections) postionArray.push(el.offsetTop);

console.log(postionArray);

const block = document.querySelectorAll('.block');
let eventOnce = true;
window.addEventListener('scroll', () => {
	if (eventOnce && window.scrollY >= postionArray[1]) {
		eventOnce = false;
		block.forEach((el) => {
			let numEl = el.querySelector('.num');

			//각 블록안에있는 숫자를 변수에 담아 가져오는것
			let num = parseInt(numEl.innerText); // 80, 100, 35
			let circle = el.querySelector('.circle');
			let count = 0;
			let time = 2000 / num;

			let interval = setInterval(() => {
				if (count == num) {
					clearInterval(interval);
				} else {
					count += 1;
					numEl.innerText = count;
				}
			}, time);

			circle.style.strokeDashoffset = 503 - 503 * (num / 100);
			let dots = el.querySelector('.dots');
			dots.style.transform = `rotate(${360 * (num / 100)}deg)`;
		});
	}
});
