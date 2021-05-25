const d = document;

const buttons = d.querySelectorAll('button');
const del = d.querySelector('#delete')

const display = d.querySelector('#input')

buttons.forEach(function (button) {
    button.addEventListener('click', calculate);
});



// del.addEventListener('click', () => {
//     if (display !== '') {
//         // let text = display.value
//         display.value = display.value.slice(0, -1)
//         console.log(display.value)

//     }
// })

const dot = d.querySelector('#dot')


// calculate function
function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;

    if (clickedButtonValue === '=') {
        // check if the display is not empty then only do the calculation
        if (display.value !== '') {
            // calculate and show the answer to display
            let res = eval(display.value);
            // console.log(isFinite(res))
            if (!isFinite(res)) {
                alert('You can not divide by zero')
                display.value = '';
            } else {
                display.value = res
            }

        }
    } else if (clickedButtonValue === 'r') {
        // clear everything on display
        display.value = '';
    } else if (clickedButtonValue === 'd') {
        display.value = display.value.slice(0, -1)
        console.log(display.value)
    } else if (clickedButtonValue === '.') {
        if (display.value === '') {
            display.value = "0."
        } else {
            display.value += clickedButtonValue;
        }
    }
    else {
        // otherwise concatenate it to the display
        display.value += clickedButtonValue;
    }
}

// const range = d.querySelector('#theme_range')
// const changeTheme = (event) => {
//     if(event.range.value === 2) {

//     }
// }

const range = document.querySelector('#theme_range');

range.addEventListener('change', (event) => {
    if (event.target.value == 1) {
        trans()
        d.documentElement.setAttribute('data-theme', 'dark')
    } else if (event.target.value == 2) {
        trans()
        d.documentElement.setAttribute('data-theme', 'light')
    } else {
        trans()
        d.documentElement.setAttribute('data-theme', 'dark2')
    }
})

let trans = () => {
    d.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition')
    }, 1000)
}