var images = [
    "img/longexposurewaterfall1.jpg",
    "img/archesdrive.jpg",
    "img/army2.jpg",
    "img/redwoodupwards2.jpg",
    "img/route66.jpg",
    "img/solduc2.jpg",
    "img/truck4scale.jpg",
 ]
 var currentIndex= 0;
 var img = document.querySelector('img');
 var next = document.getElementById('next-button');
 var incrementIndex = function(){
     currentIndex = currentIndex +1;
     if(currentIndex > images.length - 1){currentIndex = 0}
     return currentIndex;
 }
 next.onclick = function(){
     console.log(currentIndex);
    img.setAttribute('src', images[incrementIndex(currentIndex)])
 }
