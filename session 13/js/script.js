let changeImg = () => {
    let img = document.querySelector('img');

    if (img.src.includes('TZXOcXejKFe0zolE7rK0BhQsN0lvHJolVon95dhJlRZA')) {
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlADIpFmxyRP1LfzNjuKC_hYeNt-izvSXwx3DN11Iw2w&s=10";
    } else {
        img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZXOcXejKFe0zolE7rK0BhQsN0lvHJolVon95dhJlRZA&s=10";
    }
}