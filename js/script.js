const navToggle = document.getElementById("nav-toggle");
const navList = document.querySelector(".nav__links");

navToggle.addEventListener('click',function(e){
    if(!navList.classList.contains('collapsing')){
        if(!navToggle.classList.contains('active')){
            navList.style.display = 'flex';

            let navListHeight = navList.clientHeight;
            console.log(navListHeight);

            setTimeout(() => {
                navList.style.height = navListHeight + 'px';
                navList.style.display = '';
            }, 1);

            navList.classList = 'nav__links collapsing'

            setTimeout(() => {
                console.log('open accordion content');
                navList.classList = 'nav__links collapse open';
            }, 300);
        }else{
            navList.classList = 'nav__links collapsing';

            setTimeout(() => {
                navList.style.height = '0px';
            }, 1);

            // After X amount of time, remove "collapsing" class and add "collapse" class
            setTimeout(() => {
                navList.classList = 'nav__links collapse';
                navList.style.height = '';
            }, 300);
        }


        this.classList.toggle('active');

    }
})