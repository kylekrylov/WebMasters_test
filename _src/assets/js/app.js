
const
   banner = document.querySelector('.banner');



document.addEventListener('click', (event) => {
   if (event.target.classList.contains('description__ball') || event.target.classList.contains('description__text') || event.target.classList.contains('description')) {
      dropDescription.forEach((description) => {
         description.closest('.section__descriptions').querySelectorAll('.description').forEach((item) => {
            item.classList.remove('active');
         });
         event.target.closest('.description').classList.add('active');
         description.closest('.section__descriptions').querySelector('.description__title').classList.add('hidden');
      });
   } else
      if (event.target.matches('.header__menu-burger') || event.target.matches('.header__burger')) {
         event.target.closest('.header__menu-burger').classList.toggle('active');
         event.target.closest('.header').querySelector('.header__menu').classList.toggle('active');
      }
      else {
         dropDescription.forEach((description) => {
            description.closest('.section__descriptions').querySelectorAll('.description').forEach((item) => {
               item.classList.remove('active');
            });
         });
         document.querySelector('.header__menu-burger').classList.remove('active');
         document.querySelector('.header__menu').classList.remove('active');

      }

});
