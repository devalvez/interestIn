/**
 * Author: Wesley A. Alves
 */
const addInterests = () => {
    const interest = document.getElementsByName('interest');
    let selectedInterest = [];
    for(let i = 0; i < interest.length; i++) {
        if(interest[i].checked) {
            selectedInterest = interest[i].value;
            console.log(selectedInterest);
            let identifier = interest[i].getAttribute('id');
            document.getElementById(`badge-${identifier}`).classList.remove('bg-blue');
            document.getElementById(`badge-${identifier}`).classList.remove('shadow');
            document.getElementById(`badge-${identifier}`).classList.add('bg-pink');
        } else {
            let identifier = interest[i].getAttribute('id');
            document.getElementById(`badge-${identifier}`).classList.remove('bg-pink');
            document.getElementById(`badge-${identifier}`).classList.add('bg-blue');
            document.getElementById(`badge-${identifier}`).classList.add('shadow');
        }
    }
}


