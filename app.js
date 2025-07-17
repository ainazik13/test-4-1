//Задача 1
const regExp = /Регулярные выражения/

const containsOnlyDigits = (str) => {
    return /^\d+$/.test(str)
}

console.log(containsOnlyDigits("12345")); // Выведет true
console.log(containsOnlyDigits("12a45")); // Выведет false


//Задача 2
 function startTimer() {
  let seconds = 1

  setInterval(() => {
    console.log("Прошла секунда", "//", seconds)
    seconds++
  }, 1000)
}

startTimer();


//Задача 3
const count = () => {
    let i = 1
    const interval = setInterval(() => {
        console.log(i)
        if (i === 10) {
            clearInterval(interval)
        }
        i++
    }, 1000)
}

count();

//Задача 4
const box = document.querySelector('#box')
    const button = document.querySelector('#toggleBtn')

    button.onclick=() => {
      box.classList.toggle('colored')
    }

//Задача 5
const xhr = new XMLHttpRequest();
    xhr.open('GET', 'test.json', true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        console.error('error:', xhr.status);
      }
    };

    xhr.onerror = function () {
      console.error('error');
    };

    xhr.send();