window.onload = loaded;

/**
 * Simple Function that will be run when the browser is finished loading.
 */
function loaded() {
    // Assign to a variable so we can set a breakpoint in the debugger!
    // const hello = sayHello();
    // console.log(hello);  


    /**
     * Checks for a submit input, creates a selected option const, 
     * and allows us to differentiate between the user selecting an
     * option and not. Alerts either way.
     */
    optionForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const selectedOption = document.querySelector('input[name="option"]:checked');
        
        if (selectedOption) {
            alert('You selected: ' + selectedOption.value);
        } else {
            alert('Please select an option.');
        }
    });
}

/**
 * This function returns the string 'hello'
 * @return {string} the string hello
 */
// export function sayHello() {
//     return 'hello';
// }
