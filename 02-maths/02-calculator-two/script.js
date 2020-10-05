// 02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const opOne = document.getElementById('op-one');
    const opTwo = document.getElementById('op-two');


    const performOperation = operation => {
        // perform the operation
        switch (operation) {
            case 'addition':
                alert(parseFloat(opOne.value) + parseFloat(opTwo.value));
                break
            case 'substraction':
                alert(parseFloat(opOne.value) - parseFloat(opTwo.value));
                break
            case 'multiplication':
                alert(parseFloat(opOne.value) * parseFloat(opTwo.value));
                break
            case 'division':
                alert(parseFloat(opOne.value) / parseFloat(opTwo.value));
                break

        }

    };

    Array.from(document.querySelectorAll("button.operator")).forEach(btn =>
        btn.addEventListener(
            "click",
            () => (performOperation(btn.id), false),
        ),
    );
})();