const url = 'https://api.thecatapi.com/v1'
const apiKey = 'uHSLi07StIOlriMPxJGxUbSYsHDs6AFx';
const searchOptions = {
    headers: { 'x-api-key': "live_8SXyJrMgCG3T9V2jXMl3jc5cQlrumRkCkAukd3ctVvCASmaZQlHgik550GXIhM3p" },
}
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
    return fetch(`https://api.thecatapi.com/v1/images/search?limit=1&breed_ids=${breedId}`, searchOptions)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        });
};