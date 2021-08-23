document.addEventListener("DOMContentLoaded", function (event) {
    const birthDate = document.querySelector("#birth-date");
    const luckyNumber = document.querySelector("#lucky-number");
    const checkButton = document.querySelector('#check-btn');
    const message = document.querySelector('#show-msg')

    
    // console.log(birthDate.value);
    checkButton.addEventListener("click", function dateBirth() {
       
        var dateV = birthDate.value.toString().replaceAll('-','')
        console.log(dateV);

        var sum = 0;
        while (dateV) {
            sum += dateV % 10;
            dateV = Math.floor(dateV / 10);
        }

        console.log(luckyNumber.value);

        if (sum % luckyNumber.value == 0) {
            console.log("winner!!!!");
            showMessage("Hurray!!Your Birthday is Luckyyyy 🎊")
            // console.log(luckyNumber);
        } else {
            showMessage(`Oops! ${luckyNumber.value} is not that lucky `);
        }
        console.log(sum);

    });

    function showMessage(msg) {
        console.log("here");
        // message.style.display = "block";
        message.innerText = msg;
    }

    
});