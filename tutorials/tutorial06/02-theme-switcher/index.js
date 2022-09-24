const defaultTheme = ev => {
    document.querySelector("h1").style.color='inherit';
    document.querySelector("p").style.color='inherit';
    document.querySelector("div.content").style.backgroundColor='inherit';
    document.querySelector("header").style.backgroundColor='#CCC';
    document.querySelector("button#default").style.color='#666';
    document.querySelector("button#ocean").style.color='#666';
    document.querySelector("button#desert").style.color='#666';
    document.querySelector("button#high-contrast").style.color='#666';
};
const desertTheme = ev => {
    document.querySelector("h1").style.color="#EFDEC2";
    document.querySelector("p").style.color='#A8651E';
    document.querySelector("div.content").style.backgroundColor='#EFDEC2';
    document.querySelector("header").style.backgroundColor='#A8651E';
    document.querySelector("button#default").style.color='#A8651E';
    document.querySelector("button#ocean").style.color='#A8651E';
    document.querySelector("button#desert").style.color='#A8651E';
    document.querySelector("button#high-contrast").style.color='#A8651E';
};
const oceanTheme = ev => {
    document.querySelector("h1").style.color="white";
    document.querySelector("p").style.color='#434a6c';
    document.querySelector("div.content").style.backgroundColor='#99cccc';
    document.querySelector("header").style.backgroundColor='#434a6c';
    document.querySelector("button#default").style.color='#434a6c';
    document.querySelector("button#ocean").style.color='#434a6c';
    document.querySelector("button#desert").style.color='#434a6c';
    document.querySelector("button#high-contrast").style.color='#434a6c';
};
const highContrastTheme = ev => {
    document.querySelector("h1").style.color="white";
    document.querySelector("p").style.color='black';
    document.querySelector("div.content").style.backgroundColor='white';
    document.querySelector("header").style.backgroundColor='black';
    document.querySelector("button#default").style.color='black';
    document.querySelector("button#ocean").style.color='black';
    document.querySelector("button#desert").style.color='black';
    document.querySelector("button#high-contrast").style.color='black';
};
