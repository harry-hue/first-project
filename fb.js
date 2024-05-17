


let wholediv = document.getElementById('coldiv2')
let card= document.getElementById('card-menu-wrap');
let dotIcon = document.getElementById('dot');
let input = document.getElementById('input-button');
let arrow = document.getElementById('arrow');
let view = document.getElementById("view-more-comments")
let profilename = document.getElementById('pnav1')
let commentbox = document.getElementById('open-comment-box');
let popup = document.getElementById('popup');
let popcross = document.getElementById('popcross');
let postinput = document.getElementById('postinput');
let postpop = document.getElementById('postpop');
let photovideo = document.getElementById('photovideo');
let poppic = document.getElementById('poppic')
let image = document.getElementById('image');
let imagediv = document.getElementById('imageButton')
let deletebox = document.getElementById('deletebox');
let emojidiv = document.getElementById('emojidiv')
let onlike = document.getElementById('onlike')
let profiletextarea = document.getElementById('profile-textarea');
let profilepic = document.getElementById('profilepic');
let textarea = document.getElementById('textarea').value;
let innerimgcross = document.getElementById('innerimage-cross');


let count = 0;
onlike.addEventListener('click', ()=>{
  count = count+1;
  emojidiv.innerHTML = count;
})


document.querySelector('button').addEventListener('click', Onpost);

function Onpost() {
    let textareaContent = document.getElementById('textarea').value;
    let imageInput = document.getElementById('output').src;
    
   
 
    const data = {
        text: textareaContent,
        image: imageInput,

    };
    text="";
    image="";
    popup.classList.remove('showpopup');
    let json = [];
      json = data;

    mapdata(data);
    
}

function mapdata(data) {
    document.getElementById('profile-textarea').value = data.text;
    document.getElementById('imgpic').src = data.image;
    
    
}










var loadFile = function(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
  
};

innerimgcross.addEventListener('click',()=>{
  image.src.remove();
})


function onDot(){
  card.classList.toggle('open-menu');
  
};
 

document.getElementById('Delete').addEventListener('click', function() {
  deletebox.remove();
  card.classList.remove('open-menu');
});

arrow.addEventListener("click", function(event){
event.preventDefault();
  view.classList.toggle('commendas') ;
  let inputdata = input.value;
  let li = document.createElement("li");
  li.innerHTML = inputdata;
  view.appendChild(li);
  input.value = '';
});
commentbox.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.add('showpopup');
});

popcross.addEventListener("click", function(event){
  event.preventDefault();
  popup.classList.remove('showpopup');
});
photovideo.addEventListener("click", function(event){
  event.preventDefault();
  postpop.classList.add('postpopup');
});

postinput.addEventListener("click", function(event){
  event.preventDefault();
  postpop.classList.add('postpopup');
});

poppic.addEventListener("click", function(event){
  event.preventDefault();
  postpop.classList.remove('postpopup');
});
