let movies = [{
        name: "falcon and the winter soldier",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint voluptatum ipsum doloremque cupiditate ab consequuntur placeat modi dolorem illo dignissimos velit, laborum adipisci exercitationem. Impedit tenetur eos autem deleniti.",
        image: "images/slider 2.PNG"
    },
    {
        name: "loki",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint voluptatum ipsum doloremque cupiditate ab consequuntur placeat modi dolorem illo dignissimos velit, laborum adipisci exercitationem. Impedit tenetur eos autem deleniti.",
        image: "images/slider 1.PNG"
    },
    {
        name: "wanda vision",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint voluptatum ipsum doloremque cupiditate ab consequuntur placeat modi dolorem illo dignissimos velit, laborum adipisci exercitationem. Impedit tenetur eos autem deleniti.",
        image: "images/slider 3.PNG"
    },
    {
        name: "raya and the last dragon",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint voluptatum ipsum doloremque cupiditate ab consequuntur placeat modi dolorem illo dignissimos velit, laborum adipisci exercitationem. Impedit tenetur eos autem deleniti.",
        image: "images/slider 4.PNG"
    },
    {
        name: "luca",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati sint voluptatum ipsum doloremque cupiditate ab consequuntur placeat modi dolorem illo dignissimos velit, laborum adipisci exercitationem. Impedit tenetur eos autem deleniti.",
        image: "images/slider 5.PNG"
    }
];
const carousel = document.querySelector('.carousel');
let sliders = [];
let slideIndex = 0; //track the current slide
const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }
    //Create dom elements for slides
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');
    let content = document.createElement('div');
    let h1 = document.createElement('h1');
    let p = document.createElement('p');

    //attaching all the elements
    imgElement.appendChild(document.createTextNode(''));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p.appendChild(document.createTextNode(movies[slideIndex].des));
    content.appendChild(h1);
    content.appendChild(p);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up images
    imgElement
}