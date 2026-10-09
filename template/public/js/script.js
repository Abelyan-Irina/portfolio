const for_blog = document.querySelector(".for_blog");

const array = [
    { a : "images/16.jpg", b : "The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir", c : "Lavender, with its enchanting aroma and rich history. has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many." },
    { a : "images/17.jpg", b : "The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories",      c : "A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one's taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery." },
    { a : "images/18.jpg", b : "The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance",    c : "Rose, often referred to as the 'Queen of Flowers,' has held a special place in human culture and history for centuries. Beyond its captivating beauty. this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world." },
];

array.forEach((elem, index) => {
    for_blog.innerHTML += `
                            <div class="block fcs">
                                <img src="${elem.a}" alt="" />
                                <p>${elem.b}</p>
                                <span>${elem.c}</span>
                                <button>Read More</button>
                            </div>
                          `;
});


