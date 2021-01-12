const userSubmitButton = document.getElementById('btn-one');
console.log(userSubmitButton);
userSubmitButton.addEventListener('click', showDiv1);



function showDiv1() {
    console.log('button-clicked');
    const age = document.getElementById('search-book').value;
    console.log(age)

    hideDiv();

    if ((age >= 5) && (age <= 10)) {
        document.getElementById('five-ten').style.display = "flex";

    } else if ((age >= 11) && (age <= 20)) {
        console.log('show the book list of 11-20 years');
        document.getElementById('eleven-twenty').style.display = "flex";


    } else if ((age >= 21) && (age <= 30)) {
        console.log('show the book list of 21-30 years');
        document.getElementById('twenty1-thirty').style.display = "flex";

    } else if ((age >= 31) && (age <= 40)) {
        console.log('show the book list of 31-40 years');
        document.getElementById('thirty1-forty').style.display = "flex";



    } else if ((age > 40) && (age < 100)) {
        console.log('show the book list of 40 years');
        document.getElementById('forty1-hundered').style.display = "flex";

    } else {
        hideDiv();
        alert("Please provide correct age.");

    }
}

function hideDiv() {
    document.getElementById('five-ten').style.display = "none";
    document.getElementById('eleven-twenty').style.display = "none";
    document.getElementById('twenty1-thirty').style.display = "none";
    document.getElementById('thirty1-forty').style.display = "none";
    document.getElementById('forty1-hundered').style.display = "none";
}
















































