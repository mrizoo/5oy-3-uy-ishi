const time = document.getElementById("time");
const date = document.getElementById("date");
const img = document.querySelector("img");
const div = document.querySelector(".time__schedule");
time.style.color = "white";
date.style.color = "crimson";


setInterval(() => {
  const currentTime = new Date().toLocaleTimeString();
  time.textContent = currentTime;

  if (currentTime >= "06:00:00" && currentTime < "12:00:00") {
    img.src = "https://picsum.photos/id/237/2000/1000";
  } else if (currentTime >= "12:00:00" && currentTime < "15:00:00") {
    img.src = "https://picsum.photos/id/109/2000/1000";
  } else if (time.textContent > "15:00:00" && currentTime < "19:00:00") {
    img.src = "https://fastly.picsum.photos/id/110/2000/1000.jpg?hmac=QGyFrsVqAUf1H4z9LkMDJbKcvxMZk7qxv4AbF4v1lN4";
  } else if (currentTime >= "19:00:00" && currentTime < "21:00:00") {
    img.src = "https://picsum.photos/id/556/2000/1000";
  } else {currentTime >= "21:00:00" && currentTime < "06:00:00";
  img.src = "https://picsum.photos/id/681/2000/1000";
}
}, 1000);

setInterval(() => {
  date.textContent = new Date().toLocaleDateString();
}, 1000);

// Sozlarni uzunligini aniqlash
// const div = document.querySelector('div')
// const words = Array.from(div.children)
// const sorteWords = words.sort((a,b) =>{
//   return a.textContent.length - b.textContent.length
// })

// sorteWords.at(-1).style.backgroundColor = "bisque"
