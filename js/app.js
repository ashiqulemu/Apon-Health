
 

 function activeImpression (event){
   //  let impression  = document.getElementById('impression');
   //  impression.classList.toggle('active');

   console.log(event.target.classList.toggle('active'))
 
 }


 function slide(){
     let sidebar  = document.getElementById('sidebar');
         sidebar.classList.toggle('active');
 }

 function donate(){
     let donation  = document.getElementById('donation');
      document.getElementById('continue').style.display="none";
         donation.classList.toggle('active');
 }

 function collapsMenu(){
    let menu  = document.getElementById('mobileMenu');
        menu.classList.toggle('active');
 }

 function closeMenu(){
    let menu  = document.getElementById('mobileMenu');
        menu.classList.remove('active');
 }