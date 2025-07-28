//Задача 1
const extractNumbers=(str)=> {
    return str
        .split('')
        .filter(char=> !isNaN(char)&&char !=='')
    Math(Number)
}

console.log(extractNumbers("a1fg5hj6"))

//Задача 2
const Fibonachi=(n=0,next=1)=>{
    if (n>144) return
    console.log(n)
    setTimeout(()=>Fibonachi(next,n+next),1000)
}
Fibonachi()


//Задача 3

const fetchTitles=async ()=>{
    try {
        const res=await fetch('https://fakestoreapi.com/products')
        const data=await res.json()
        data.forEach(item=>console.log(item.title))
    }catch (error){
        console.log('Error')
    }
}
fetchTitles()


//Задача 4
document.querySelector('#buttons').onclick=(event)=>{
    if (event.target.tagName==="BUTTON"){
        document.body.style.backgroundColor=event.target.textContent
    }
}

//Задача 5
  let box = document.querySelector('#box');
  let btn = document.querySelector('#toggleBtn');

  btn.onclick = () => {
    if (box.style.display === 'none') {
      box.style.display = 'block';
      btn.innerText = 'Скрыть';
    } else {
      box.style.display = 'none';
      btn.innerText = 'Показать';
    }
  }

  //Задача 6
    let i = 0;
  const counter = document.querySelector('#counter')

  const interval = setInterval(() => {
    counter.innerText =i
    i++
    if (i > 100) clearInterval(interval)
  }, 1)

  //Задача 7
document.querySelector('#getBtn').onclick = async () => {
    try {
      const response = await fetch('data.json');
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };