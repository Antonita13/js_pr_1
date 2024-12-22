let testimonial_data =[
    {
        name:"-Einstein",
        image:"Albert_Einstein_Head.jpg",
        text_content:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"
    },
    {
        name:"-Bernard",  
        image:"bernard-baruch-c-1910.png",
        text_content:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"
    },
    {
        name:"-Seuss",
        image:"Theodor_Seuss_Geisel_(01037v).jpg",
        text_content:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"
    }
        

]

let data = 0
let name = document.querySelector(".container_name")
let image = document.querySelector(".container_image")
let text_content = document.querySelector(".container_content")

function testimonial(){
    let current =testimonial_data[data]
    name.innerHTML = current.name
    image.src = current.image
    text_content.innerHTML = current.text_content
    data++
    
    if(data===testimonial_data.length){
        data = 0
    }
}

setInterval(()=>{testimonial()},1000);
testimonial()