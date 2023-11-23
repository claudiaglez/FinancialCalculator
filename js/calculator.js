const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const buttonPush = button.textContent;

        if(button.id === "clear"){
            display.textContent = "0";
            return;
        }

        if(button.id === "remove"){
            if (display.textContent.length === 1 || display.textContent === 'Err!') {
                display.textContent = "0";
            } else {
                display.textContent = display.textContent.slice(0, -1);
            }
            return;
        }

        if(button.id === "result"){
            try {
            display.textContent = eval(display.textContent);
            }   catch {
                display.textContent = "Err!";
            }
            return;
        }

        if(display.textContent === "0" || display.textContent === 'Err!') {
            display.textContent = buttonPush;
        } else {
            display.textContent += buttonPush;
        }

    })
});