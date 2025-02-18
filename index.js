    // Advertisement image change every 30 seconds
    let advideo = [
        'brand images/Sport Shoe Product Showcase Ad Template - Made with PosterMyWall.mp4'
    ];

    let ad2Images = [
        'brand images/advert 1.jpg',
        'brand images/advert 3.jpg',
        'brand images/advert 4.jpg',
        'brand images/advert 5.jpg',
        'brand images/advert 7.jpg',
        'brand images/advert 8.jpg',
        'brand images/advert 9.jpg',
        'brand images/advert 10.jpg',
        'brand images/advert 11.jpg',
        'brand images/advert 13.jpg',
        'brand images/advert 14.jpg',
        'brand images/advert16.jpg',
        'brand images/advert17.jpg',
        'brand images/advert18.jpg',
        'brand images/advert19.jpg',
        'brand images/advert22.jpg',
        'brand images/advert23.jpg'
    ];

    let currentAdIndex = 0;
    const videoElement = document.getElementById('ad-video');
    let currentAd2Index =0;

    setInterval(() => {
        currentAdIndex = (currentAdIndex + 1) % advideo.length;
        videoElement.src = advideo[currentAdIndex];
        videoElement.play(); // Ensures the video starts playing after source change
    }, 10000); // Change video every 10 seconds

    setInterval(() => {
        currentAd2Index = (currentAd2Index + 1) % ad2Images.length;
        document.getElementById('ad2-image').src = ad2Images[currentAd2Index];
    }, 10000); // Change ad every 10 seconds


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