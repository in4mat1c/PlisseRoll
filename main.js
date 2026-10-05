document.querySelector('#btnCount').addEventListener('click', function() {
    const width = parseInt(document.querySelector('#width').value);
    const height = parseInt(document.querySelector('#height').value);
    const threadCount = parseInt(document.querySelector('#threadCount').value);
    const result = document.querySelector('#result');

    if (threadCount === 2) {
        result.value = Math.ceil((width - 50) + (height + 100) + (width - 100) + height + (width - 50) + 120);
    } else if (threadCount === 3) {
        result.value = Math.ceil((width - 50) + (height + 100) + ((width - 100) / 2) + height + (width / 2) + 120);
    } else if (threadCount === 4) {
        let w_segment = (width - 100) / 3;
        result.value = Math.ceil((width - 50) + (height + 100) + (w_segment * 2) + height + ((w_segment * 2) + 50) + 120);
    }
    result.classList.remove('d-none');
})