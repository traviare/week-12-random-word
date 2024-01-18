// Шаги для выполнения задания:

// 1. Создай переменную `alphabet`, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
// 2. Используя объект `Math`, создай четыре случайных индекса в диапазоне от 0 до длины вашей `alphabet`. 
// 3. Используя полученные случайные индексы, извлеки соответствующие символы из `alphabet` и объедини их в строку, чтобы сформировать случайное слово.
// 4. Выведи полученное случайное слово на экран, чтобы проверить результат.


const findButton = document.getElementById('button-1');

const alphabet = 'а, б, в, г, д, е, ё, ж, з, и, й, к, л, м, н, о, п, р, с, т, у, ф, х, ц, ч, ш, щ, ъ, ы, ь, э, ю, я'
const alphabetTwo = alphabet.replace(/, /g, '');
console.log(alphabetTwo);
console.log(alphabetTwo.length);

const mathOne = Math.floor(Math.random() * 33);
const mathTwo = Math.floor(Math.random() * 33);
const mathThree = Math.floor(Math.random() * 33);
const mathFour = Math.floor(Math.random() * 33);

const randomWord = (alphabetTwo[mathOne]).toUpperCase() + alphabetTwo[mathTwo] + alphabetTwo[mathThree] + alphabetTwo[mathFour];
console.log(randomWord);


function addWord() {
    alert(randomWord);
}

findButton.addEventListener('click', addWord);


