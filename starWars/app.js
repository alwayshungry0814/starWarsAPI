document.querySelector('.get-peoples').addEventListener('click', getPeoples);

function getPeoples(e) {
    const number = document.querySelector('input[type="number"]').value;

    // const getStarWarsPeople = () => {
    //     axios.get(`https://swapi.co/api/people/${number}`)
    //         .then(response => {
    //             this.setState({ posts: response.data });
    //             console.log(response);
    //         });
    // }

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://swapi.co/api/people/${number}/`, true);

    xhr.onload = function () {
        if (this.status === 200 || this.status === 301) {
            // const response = JSON.parse(this.responseText);
            const response = this.responseText;

            let output = '';

            if (response.type === 'success') {

                output = `<li>${people}</li>`;

            } else {
                output += '<li>Something went wrong</li>';
            }

            document.querySelector('.peoples').innerHTML = output;
        }
    }

    xhr.send();

    e.preventDefault();
}