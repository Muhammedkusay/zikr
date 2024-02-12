let btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    addNumber(btn);
  });
});

function addNumber(btn) {
  let limitNum = btn.parentElement.parentElement.getAttribute("number");
  let counter = btn.parentElement.childNodes[1];
  let currentNum = +btn.parentElement.childNodes[1].innerHTML;
  
  if(currentNum != limitNum) {
    counter.innerHTML++;
  }
}
