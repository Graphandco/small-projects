const wrapper = document.querySelector('.wrapper');
let index = 12;

window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    // console.log(scrollTop, scrollHeight, clientHeight);

    if (clientHeight + scrollTop >= scrollHeight - 20) {
        // console.log("Création !");
        addImages(4);
    }
});

function addImages(nb) {
    for (let i = 0; i < nb; i++) {
        index++;
        const newItem = document.createElement('div');
        newItem.className = 'item';
        const newImg = document.createElement('img');
        newImg.src = `https://loremflickr.com/320/240?random=${index}`;
        newItem.appendChild(newImg);
        wrapper.appendChild(newItem);
    }
}
