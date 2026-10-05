document.querySelector('#btnCount').addEventListener('click', function() {
    const width = parseInt(document.querySelector('#width').value);
    const height = parseInt(document.querySelector('#height').value);
    const result = document.querySelector('#result');

    result.value = (width - 50) + (height + 100) + (width - 100) + height + (width - 50) + 120;
    result.classList.remove('d-none');
})