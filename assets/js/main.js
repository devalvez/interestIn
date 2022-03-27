/**
 * Author: Wesley A. Alves
 * Email: wesley.alves.jhenp@gmail.com
 */


const interestBadge = [
    {
        id: 'eletronicos',
        value: 'eletronicos',
        title: 'Eletrônicos',
    },
    {
        id: 'celular',
        value: 'celular',
        title: 'Celular',
    },
    {
        id: 'computador',
        value: 'computador',
        title: 'Notebook',
    },
    {
        id: 'carro',
        value: 'carro',
        title: 'Carro',
    },
    {
        id: 'motos',
        value: 'motos',
        title: 'Motos',
    },
    {
        id: 'lambreta',
        value: 'labreta',
        title: 'Scooter',
    },
    {
        id: 'moda',
        value: 'moda',
        title: 'Moda',
    },
    {
        id: 'academia',
        value: 'academia',
        title: 'Academia',
    },
    {
        id: 'samsung',
        value: 'samsung',
        title: 'Samsung',
    }
];

window.addEventListener('load', function() {
    let interestContainer = document.getElementById('interest-contianer');
    interestContainer.innerHTML = '';
    for(badge in interestBadge) {
        let div = document.createElement('div');
        let item = `<input type="checkbox" id="${interestBadge[badge].id}" name="interest" value="${interestBadge[badge].value}" hidden="" onchange="addInterests()" />`;
        item += `<label for="${interestBadge[badge].id}">`;
        item += `<span id="badge-${interestBadge[badge].id}" class="badge rounded-pill p-2 mb-3 me-2 bg-blue shadow zoomIn animated" data-anijs="if: DOMContentLoaded, on: document, do: zoomIn animated">${interestBadge[badge].title}</span>`;
        item += `</label>`;
        div.innerHTML = item;
        interestContainer.append(div);
    }
});

const addInterests = () => {
    const interest = document.getElementsByName('interest');
    let selectedInterest = [];
    for(let i = 0; i < interest.length; i++) {
        if(interest[i].checked) {
            selectedInterest.push(interest[i].value);
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
    console.log(selectedInterest);
}

