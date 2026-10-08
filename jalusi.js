
document.querySelector('#lamelBtn').addEventListener('click', function() {
    const lastLamel = Number(document.querySelector('#lastLamel').value);
    const centralLamel = Number(document.querySelector('#centralLamel').value);
    const lamelCount = Number(document.querySelector('#lamelCount').value);
    const lamelResult = document.querySelector('#lamelResult');
    
    const lamellas = calculateLamellasMm(lastLamel, centralLamel, lamelCount);

    console.log(lamellas);
    lamelResult.classList.remove('d-none');
});

function calculateLamellasMm(edgeHeightMm, centerHeightMm, count) {
  if (count <= 0) return [];
  if (count === 1) return [centerHeightMm];

  const result = [];
  const midIndex = (count - 1) / 2;
  const a = (edgeHeightMm - centerHeightMm) / Math.pow(midIndex, 2);

  for (let i = 0; i < count; i++) {
    const x = i - midIndex;
    const height = a * Math.pow(x, 2) + centerHeightMm;
    
    // Округляем до целых миллиметров
    result.push(Math.round(height));
  }

  return result;
}