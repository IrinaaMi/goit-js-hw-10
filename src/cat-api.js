const url = 'https://api.thecatapi.com/v1'
const apiKey = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';

export function fetchBreeds() {
    return fetch(`${url}/breeds?api_key=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
};

export function fetchCatByBreed(breedId) {
    return fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        });
};