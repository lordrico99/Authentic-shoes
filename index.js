    // Advertisement image change every 30 seconds
    let adImages = [
        'brand images/ad1.jpg',
        'brand images/ad2.jpg',
        'brand images/ad3.jpg'
    ];

    let currentAdIndex = 0;

    setInterval(() => {
        currentAdIndex = (currentAdIndex + 1) % adImages.length;
        document.getElementById('ad-image').src = adImages[currentAdIndex];
    }, 30000); // Change ad every 30 seconds

    // JS for Brand Cards (Already Provided)
    const brand = [
        {name: 'ADIDAS', age: 21, height: '178cm', foot: 'Left', img: 'brand images/adidas 3.jpg', hoverImg: 'brand images/Adidas shoe1.jpg'},
        {name: 'NIKE', age: 21, height: '178cm', foot: 'Left', img: 'brand images/nike 3.jpg', hoverImg: 'brand images/NIKE AF1.jpg'},
        {name: 'VANS', age: 21, height: '178cm', foot: 'Left', img: 'brand images/vans.jpg', hoverImg: 'brand images/vans shoe 1.jpg'},
        {name: 'PUMA', age: 21, height: '178cm', foot: 'Left', img: 'brand images/puma.jpg', hoverImg: 'brand images/puma shoe 1.jpg'},
        {name: 'LOUIS VUITTON', age: 21, height: '178cm', foot: 'Left', img: 'brand images/louis v.jpg', hoverImg: 'brand images/louisv x nike.jpg'},
        {name: 'DR MARTENS', age: 21, height: '178cm', foot: 'Left', img: 'brand images/docs.jpg', hoverImg: 'brand images/docs 1.jpg'}
    ];

    // Get reference to the clothing-brand section
    const clothingbrand = document.getElementById('clothing-brand');

    // Loop through each brand and create a card
    brand.forEach((type) => {
        const brandcard = document.createElement('div');
        brandcard.className = 'brand-card';

        const img = document.createElement('img');
        img.src = type.img;
        img.alt = `${type.name} Image`;
        img.className = 'brand-image';

        const detailsDiv = document.createElement('div');
        detailsDiv.className = 'brand-details';
        detailsDiv.innerHTML = `
            <h3>${type.name}</h3>
            <a href="#" class="shop-button">Shop Now</a>
        `;

        // Image Hover Effect (Change image on hover)
        brandcard.addEventListener('mouseenter', () => {
            img.src = type.hoverImg;
        });

        brandcard.addEventListener('mouseleave', () => {
            img.src = type.img;
        });

        brandcard.appendChild(img);
        brandcard.appendChild(detailsDiv);
        clothingbrand.appendChild(brandcard);
    });