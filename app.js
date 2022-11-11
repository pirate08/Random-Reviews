const reviews = [
    {
        id: 1,
        name: "Materni Hussain",
        job: "UI UX Developer",
        img: "./images/second pic.png",
        text: "Hey! I am Materni Hussain, a UI UX Developer from the age of 8. I want to introduce myself as a beginner to you because the problem you face same the problem I face too. So don't worry and beleive in your work you will came with a successful life...",
    },
    {
        id: 2,
        name: "Joffrey Rogger",
        job: "Marketing",
        img: "./images/third pic.png",
        text: "Hii, I am Joffery Rogger, a Head Marketer of Dash Tower Pvt.Lmt. I work a huge I failed a lot I got depressed a lot, but the thing I always beleive it was my capabilities which one day bring me success...",
    },
    {
        id: 3,
        name: "Chiristian Halland",
        job: "Web Developer",
        img: "./images/fourth pic.png",
        text: "Hey! I am Chiristian Halland, a Web Developer in Dash Tower. I only want to say that never listen to other what they say because you are the good friend and the only man who will stay with you the whole of the life. So work hard and beat the heat...",
    },
    {
        id: 4,
        name: "Justifer Danny",
        job: "Head Advisior",
        img: "./images/fifth pic.jpg",
        text: "Hi, being a head advisor I want to advice you all that grow with the people that helps you to stand by own don't advice you to walk around the powerful man...",
    },
    {
        id: 5,
        name: "Nemo",
        job: "CEO of DashTower",
        img: "./images/sixth pic.jpg",
        text: "Work hard Grow Big. No matter how the situation is going on...",
    },
    
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const text = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".sup-me");

let countItem = 0;

window.addEventListener('DOMContentLoaded',function(){
    showPerson();
})

function showPerson(){
    const item = reviews[countItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    text.textContent = item.text;

}

prevBtn.addEventListener('click',function(){
    countItem--;
    if(countItem < 0){
        countItem = reviews.length - 1; 
    }
    showPerson();
})

nextBtn.addEventListener('click',function(){
    countItem++;
    if(countItem > reviews.length - 1){
        countItem = 0;
    }
    showPerson();
})

randomBtn.addEventListener('click',function(){
    // console.log (Math.floor(Math.random() * reviews.length));
    countItem = Math.floor(Math.random() * reviews.length);
    showPerson();
})





