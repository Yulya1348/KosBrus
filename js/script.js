
// Меню каталог Десктоп

document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".header-bottom__menu-button");
  const menuCatalog = document.querySelector(".header-bottom__menu");
  const submenuButtons = document.querySelectorAll(".header-bottom__submenu-btn");
  const tables = document.querySelectorAll(".header-bottom__submenu");

  // Показ/скрытие меню
  menuBtn.addEventListener("click", () => {
      const isActive = menuCatalog.classList.contains("active");
      menuBtn.classList.toggle("active", !isActive);
      menuCatalog.classList.toggle("active", !isActive);
  });

  // Закрытие меню при клике вне его области
  document.addEventListener("click", (event) => {
      if (!menuCatalog.contains(event.target) && !menuBtn.contains(event.target)) {
        menuBtn.classList.remove("active");
          menuCatalog.classList.remove("active");
      }
  });

  // Переключение таблиц при клике на пункты меню
  submenuButtons.forEach(button => {
      button.addEventListener("click", () => {
          const path = button.dataset.path;

          // Удаляем активный класс у всех кнопок
          submenuButtons.forEach(btn => btn.classList.remove("header-bottom__submenu-btn__active"));
          button.classList.add("header-bottom__submenu-btn__active");

          // Переключаем видимость таблиц
          tables.forEach(table => {
              table.classList.toggle(
                  "header-bottom__submenu__active",
                  table.dataset.target === path
              );
          });
      });
  });
});




// Бургер-меню 

document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".header-bottom__menu-button-mob");
  const menu = document.querySelector(".header-bottom__mob-menu");
  const burgerButton = document.querySelector(".header-burger");
  const burgerMenu = document.querySelector(".header-mobile__burger-menu");
  const closeBurgerButton = document.querySelector(".header-mobile__burger-close");
  const submenuButtons = document.querySelectorAll(".header-bottom__submenu-btn-mob");
  const tables = document.querySelectorAll(".header-bottom__submenu-mob");
  const backButtonsMenu = document.querySelectorAll(".header-bottom__btn-back");
  const backButtonsSubMenu = document.querySelectorAll(".header-bottom__btn-back-sub");
  const closeMenuButton = document.querySelector(".header-mobile__menu-close");
  const closeSubMenuButton = document.querySelector(".header-mobile__submenu-close");


  // Показ/скрытие меню "Каталог"
  menuButton.addEventListener("click", () => {
      const isActive = menu.classList.contains("active");
      menuButton.classList.toggle("active", !isActive);
      menu.classList.toggle("active", !isActive);
  });

  // Показ/скрытие бургер-меню
  burgerButton.addEventListener("click", () => {
      const isActive = burgerMenu.classList.contains("active");
      burgerMenu.classList.toggle("active", !isActive);
  });

  // Закрытие бургер-меню
  closeBurgerButton.addEventListener("click", () => {
      burgerMenu.classList.remove("active");
  });

  // Закрытие меню
  closeMenuButton.addEventListener("click", () => {
      burgerMenu.classList.remove("active");
  });

  closeSubMenuButton.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
  });

  // Закрытие меню при клике вне его области
  document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
          menuButton.classList.remove("active");
          menu.classList.remove("active");
      }

      if (!burgerMenu.contains(event.target) && !burgerButton.contains(event.target)) {
          burgerMenu.classList.remove("active");
      }
  });

  // Переключение таблиц при клике на пункты меню
  submenuButtons.forEach(button => {
      button.addEventListener("click", () => {
          const path = button.dataset.path;

          // Удаляем активный класс у всех кнопок
          submenuButtons.forEach(btn => btn.classList.remove("header-bottom__submenu-btn__active"));
          button.classList.add("header-bottom__submenu-btn__active");

          // Переключаем видимость таблиц
          tables.forEach(table => {
              table.classList.toggle(
                  "header-bottom__submenu-mob__active",
                  table.dataset.target === path
              );
          });
      });
  });

  // Обработчик события для кнопок возврата
  
  backButtonsMenu.forEach(button => {
      button.addEventListener("click", () => {
          menu.classList.remove("active");
      });
  });

  backButtonsSubMenu.forEach(button => {
      button.addEventListener("click", () => {
        burgerMenu.classList.remove("active");
      });
  });

  // Закрытие меню при клике вне его области
  document.addEventListener("click", (event) => {
      if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
          menuButton.classList.remove("active");
          menu.classList.remove("active");
      }
  });
});


// Дропдаун меню

const dropdownToggles = document.querySelectorAll('.header-top__dropdown-toggle');
const dropdownMenus = document.querySelectorAll('.header-top__dropdown-menu');

dropdownToggles.forEach((toggle, index) => {
  toggle.addEventListener('click', (event) => {
    event.stopPropagation(); 
    const currentMenu = dropdownMenus[index];
    const isVisible = currentMenu.classList.contains('show');

    dropdownMenus.forEach((menu) => menu.classList.remove('show'));

    if (!isVisible) {
      currentMenu.classList.add('show');
    }
  });
});

document.addEventListener('click', () => {
  dropdownMenus.forEach((menu) => menu.classList.remove('show'));
});




// Поиск

document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.querySelector('.header-bottom__search-input');
  const suggestionsContainer = document.querySelector('.header-bottom__search-menu');

  // Обработчик ввода текста
  searchInput.addEventListener('input', () => {
      // Показываем блок предложений только при вводе текста
      if (searchInput.value.trim()) {
          suggestionsContainer.classList.remove('hidden');
      } else {
          suggestionsContainer.classList.add('hidden');
      }
  });

  // Обработчик выбора предложения
  suggestionsContainer.addEventListener('click', (event) => {
      if (event.target.classList.contains('header-bottom__search-link')) {
          searchInput.value = event.target.textContent;
          suggestionsContainer.classList.add('hidden');
      }
  });

  // Закрытие списка при клике вне его области
  document.addEventListener('click', (event) => {
      if (!event.target.closest('.header-bottom__search-container')) {
          suggestionsContainer.classList.add('hidden');
      }
  });
});


// Слайдер Главная

const swiper = new Swiper('.section-main__swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.section-main__btn-right',
    prevEl: '.section-main__btn-left',
  },
  pagination: {
    el: '.section-main__pagination',
    type: 'progressbar',
  },
  //loop: true,
  breakpoints: {
    576: {
      spaceBetween: 14,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 40,
      slidesPerView: 2,
    },
  }, 
});


// Фильтры

const filterArea = document.getElementById('slider-area');
const filterPrice = document.getElementById('slider-price');

if(filterArea) {
  noUiSlider.create(filterArea, {
    start: [12, 345], 
    connect: true, 
    range: {
      min: 0,
      max: 480,
    },
    tooltips: [
      wNumb({ decimals: 0 }), // Формат для первого ползунка
      wNumb({ decimals: 0 })  // Формат для второго ползунка
    ]
  });
}

if(filterPrice) {
  noUiSlider.create(filterPrice, {
    start: [12, 345], 
    connect: true, 
    range: {
      min: 0,
      max: 480,
    },
    tooltips: [
      wNumb({ decimals: 0 }), // Формат для первого ползунка
      wNumb({ decimals: 0 })  // Формат для второго ползунка
    ]
  });
}


// Фильтры модальное окно

const filterAreaModal = document.getElementById('slider-area-modal');
const filterPriceModal = document.getElementById('slider-price-modal');

if(filterAreaModal) {
  noUiSlider.create(filterAreaModal, {
    start: [12, 345], 
    connect: true, 
    range: {
      min: 0,
      max: 480,
    },
    tooltips: [
      wNumb({ decimals: 0 }), // Формат для первого ползунка
      wNumb({ decimals: 0 })  // Формат для второго ползунка
    ]
  });
}

if(filterPriceModal) {
  noUiSlider.create(filterPriceModal, {
    start: [12, 345], 
    connect: true, 
    range: {
      min: 0,
      max: 480,
    },
    tooltips: [
      wNumb({ decimals: 0 }), // Формат для первого ползунка
      wNumb({ decimals: 0 })  // Формат для второго ползунка
    ]
  });
}



// Селекты

const customSelects = document.querySelectorAll('.custom-select');

customSelects.forEach(customSelect => {
  const trigger = customSelect.querySelector('.custom-select-trigger');
  const options = customSelect.querySelectorAll('.custom-option');

  // Открытие/закрытие селекта
  trigger.addEventListener('click', () => {
    // Закрыть все открытые селекты перед открытием текущего
    customSelects.forEach(otherSelect => {
      if (otherSelect !== customSelect) {
        otherSelect.classList.remove('open');
      }
    });

    customSelect.classList.toggle('open');
  });

  // Выбор опции
  options.forEach(option => {
    option.addEventListener('click', () => {
      // Удаляем класс selected у всех опций
      options.forEach(opt => opt.classList.remove('selected'));
      // Добавляем класс selected к выбранной опции
      option.classList.add('selected');
      // Отображаем выбранную опцию в триггере
      trigger.textContent = option.textContent;
      trigger.classList.add('orange')
      // Закрываем селект
      customSelect.classList.remove('open');
    });
  });
});

// Закрытие всех селектов при клике вне их
document.addEventListener('click', (e) => {
  customSelects.forEach(customSelect => {
    if (!customSelect.contains(e.target)) {
      customSelect.classList.remove('open');
    }
  });
});


// Модальное окно Фильтры

document.addEventListener('DOMContentLoaded', () => {
  const openModalBtnCat = document.getElementById('modal-filter-btn-cat');
  const openModalBtn = document.getElementById('modal-filter-btn');
  const modalOverlay = document.querySelector('.modal-overlay-filter');
  const closeModalBtn = document.querySelector('.close-modal-btn');
  
  if( openModalBtnCat) {
    openModalBtnCat.addEventListener('click', () => {
      modalOverlay.style.display = 'flex'; 
    });
  }

  if(openModalBtn) {
    openModalBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'flex'; 
    });
  }
  
  if(closeModalBtn) {
    closeModalBtn.addEventListener('click', () => {
      modalOverlay.style.display = 'none';
    });
  }
  
  if(modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        modalOverlay.style.display = 'none';
      }
    });
  }
})

// Модальное окно Заказ

const openBtns = document.querySelectorAll('.form-btn');
const modalOverlayOrder = document.querySelector('.modal-overlay-order');
const closeBtnOrder = document.querySelector('.close-btn');

openBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modalOverlayOrder.style.display = 'flex'; // Показываем модальное окно
    document.querySelector("#scroll").classList.add("body-scroll")
  });
})

closeBtnOrder.addEventListener('click', () => {
  modalOverlayOrder.style.display = 'none'; // Скрываем модальное окно
  document.querySelector("#scroll").classList.remove("body-scroll")
});

modalOverlayOrder.addEventListener('click', (e) => {
  if (e.target === modalOverlayOrder) {
    modalOverlayOrder.style.display = 'none'; // Скрываем модальное окно
    document.querySelector("#scroll").classList.remove("body-scroll")
  }
});


// Фильтры-кнопки

const btnFilterModal = document.querySelectorAll('.modal-content__btn');
btnFilterModal.forEach(btnFilter => {
  btnFilter.addEventListener('click', () => {
    btnFilter.classList.toggle('active')
  })
})


// Слайдер Отзывы

const swiperReview = new Swiper('.review-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: '.review__btn-right',
    prevEl: '.review__btn-left',
  },
  loop: true,
  centeredSlides: true,
  breakpoints: {
    576: {
      spaceBetween: 24,
      slidesPerView: 1.15,
    },
    991: {
      spaceBetween: 40,
      slidesPerView: 1.1,
    },
  }, 
});


// Просмотр всех статей блога

document.addEventListener('DOMContentLoaded', () => {
  const cardsHiddenBlog = document.querySelectorAll('.section-blog__card-hidden');
  const addCardBtnBlog = document.querySelector('.button-all-blog');
  
  if(addCardBtnBlog) {
    addCardBtnBlog.addEventListener('click', () => {
      cardsHiddenBlog.forEach(card => {
        card.style.display = 'flex';
      })
      addCardBtnBlog.style.display = 'none';
    });
  }
})

// Просмотр всех подходящих проектов

document.addEventListener('DOMContentLoaded', () => {
  const cardsHiddenProject = document.querySelectorAll('.project__card-hidden');
  const addCardBtnProject = document.querySelector('.button-all');
  
  if(addCardBtnProject) {
    addCardBtnProject.addEventListener('click', () => {
      cardsHiddenProject.forEach(card => {
        card.style.display = 'flex';
      })
      addCardBtnProject.style.display = 'none';
    });
  }
})

// Просмотр всех популярных проектов

document.addEventListener('DOMContentLoaded', () => {
  const cardsHiddenProject = document.querySelectorAll('.project-popular__card-hidden');
  const addCardBtnProject = document.querySelector('.button-all-popular');
  
  if(addCardBtnProject) {
    addCardBtnProject.addEventListener('click', () => {
      cardsHiddenProject.forEach(card => {
        card.style.display = 'flex';
      })
      addCardBtnProject.style.display = 'none';
    });
  }
})


// Слайдер Производство

const swiperFactory = new Swiper('.factory-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.factory__btn-right',
    prevEl: '.factory__btn-left',
  },
  pagination: {
    el: '.factory__pagination',
    type: 'progressbar',
  },
  
  breakpoints: {
    576: {
      spaceBetween: 24,
      slidesPerView: 1.15,
    },
    993: {
      spaceBetween: 40,
      slidesPerView: 1,
    },
  }, 
});


// Слайдер Производство Ручная

const swiperProd = new Swiper('.production-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.production__btn-right',
    prevEl: '.production__btn-left',
  },
  pagination: {
    el: '.production__pagination',
    type: 'progressbar',
  },
  
  breakpoints: {
    576: {
      spaceBetween: 24,
      slidesPerView: 1.15,
    },
    993: {
      spaceBetween: 40,
      slidesPerView: 1,
    },
  }, 
});

// Слайдер Производство Механизированная

const swiperProdMach = new Swiper('.production-mach-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: '.production-mach__btn-right',
    prevEl: '.production-mach__btn-left',
  },
  pagination: {
    el: '.production-mach__pagination',
    type: 'progressbar',
  },
  
  breakpoints: {
    576: {
      spaceBetween: 24,
      slidesPerView: 1.15,
    },
    993: {
      spaceBetween: 40,
      slidesPerView: 1,
    },
  }, 
});


// Слайдер Этапы

const swiperStep = new Swiper('.section-step__swiper', {
  slidesPerView: 2.1,
  spaceBetween: 10,
  //loop: true,
  
  breakpoints: {
    576: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 23,
      slidesPerView: 2.9,
    },
  }, 
});


// Аккордеон

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.accordion__control');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');

      // если открыт аккордеон
      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
      }
    });
  });
});


// Слайдер Размер

const swiperSize = new Swiper('.section-category__swiper', {
  slidesPerView: 'auto', 
  spaceBetween: 10, 
  freeMode: true, 
  navigation: {
    nextEl: '.section-category__btn-right', 
    prevEl: '.section-category__btn-left', 
  },
  
  breakpoints: {
    576: {
      spaceBetween: 20, 
    },
    992: {
      spaceBetween: 12, 
    },
  },
});


// Слайдер проект с превью

document.addEventListener('DOMContentLoaded', () => {
  // Находим все блоки с слайдерами
  const sliderContainers = document.querySelectorAll('.slider-prev__container');

  sliderContainers.forEach((container) => {
    // Инициализация миниатюрного слайдера
    const thumbSlider = new Swiper(container.querySelector('.prev-slider'), {
      loop: true,
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 10,
      freeMode: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: container.querySelector('.section-project__btn-right'),
        prevEl: container.querySelector('.section-project__btn-left'),
      },
      breakpoints: {
       
        992: {
          slidesPerView: 4,
          spaceBetween: 17, 
        },
      },

    });

    // Основное изображение
    const mainImageUp = container.querySelector('.main-image'); // Основное изображение
    const thumbSlidesUp = container.querySelectorAll('.prev-slider .swiper-slide img'); // Все миниатюры

    // Обработчик кликов по миниатюрам
    thumbSlidesUp.forEach((thumb, index) => {
      thumb.addEventListener('click', () => {
        // Меняем основное изображение
        mainImageUp.src = thumb.dataset.full;

        // Обновляем класс активного слайда
        container.querySelector('.swiper-slide-thumb-active')?.classList.remove('swiper-slide-thumb-active');
        thumb.parentElement.classList.add('swiper-slide-thumb-active');

        // Перематываем слайдер к активной миниатюре
        thumbSlider.slideTo(index);
      });
    });

    // Устанавливаем первую миниатюру как активную
    thumbSlidesUp[0].parentElement.classList.add('swiper-slide-thumb-active');
    mainImageUp.src = thumbSlidesUp[0].dataset.full;
  });
});


// Показать скрытые статьи 

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('show-more-btn')) {
    // Находим родительский блок, содержащий список статей
    const parentBlock = event.target.closest('.section-blog');
    if (parentBlock) {
      // Показываем скрытые статьи внутри текущего блока
      const hiddenArticles = parentBlock.querySelectorAll('.articles-list .hidden');
      
      hiddenArticles.forEach((article) => {
        article.classList.remove('hidden'); // Убираем класс hidden
        article.style.display = 'flex'; // Восстанавливаем отображение
      });

      // Проверяем, остались ли еще скрытые статьи
      const remainingHiddenArticles = parentBlock.querySelectorAll('.articles-list .hidden');
      if (!remainingHiddenArticles.length) {
        // Если скрытых статей больше нет, скрываем кнопку
        event.target.style.display = 'none';
      }
    }
  }
});


// Слайдер Комплектация и цены

const sliderPrice = document.querySelector('.tabs-price__swiper');

let swiperPrice;

if(sliderPrice) {
  function priceSlider() {
    if (window.innerWidth <= 769 && sliderPrice.dataset.mobile == 'false') {
      swiperPrice = new Swiper(sliderPrice, {
        slidesPerView: 1.2,
        spaceBetween: 17,
        initialSlide: 0,     
        slideClass: 'tabs-content-wrap',
      });
  
      sliderPrice.dataset.mobile = 'true';
    }
  
    if (window.innerWidth > 769) {
      sliderPrice.dataset.mobile = 'false';
      if (sliderPrice.classList.contains('swiper-container-initialized')) {
        swiperPrice.destroy();
      }
    }
  }
  
  priceSlider()
  
  window.addEventListener('resize', () => {
    priceSlider();
  });
  
  window.addEventListener('orientationchange', () => {
    priceSlider();
  });
}


// Табы Продукция

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tabs-btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.tabs-card').forEach(function(tabContent) {
        tabContent.classList.remove('tabs-card__active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-card__active')
      document.querySelectorAll('.tabs-btn').forEach(function(activeBtn) {
        activeBtn.classList.remove('tabs-btn__active')
      })
      event.currentTarget.classList.add('tabs-btn__active')
    })
  })
})  


// Модальное окно Видео

document.addEventListener('DOMContentLoaded', () => {
  // Переменные для модального окна
  let modalSwiper;
  const modalOverlay = document.querySelector('.modal-overlay-video');
  const modal = document.getElementById('videoModal');
  const modalClose = document.getElementById('modalClose');

  // Открытие модального окна
  document.querySelectorAll('.review__video-sm').forEach((videoLink, index) => {
    videoLink.addEventListener('click', (e) => {
      e.preventDefault();

      // Показать модальное окно
      modalOverlay.style.display = 'flex';

      // Инициализировать слайдер внутри модального окна, если еще не создан
      if (!modalSwiper) {
        modalSwiper = new Swiper('.factory-swiper', {
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
            nextEl: '.factory__btn-right',
            prevEl: '.factory__btn-left',
          },
          pagination: {
            el: '.factory-video__pagination',
            type: 'progressbar',
          },
          loop: true,
          
        });
      }

      // Перейти к соответствующему слайду
      modalSwiper.slideTo(index);
    });
  });

  document.querySelectorAll('.review__video').forEach((videoLink, index) => {
    videoLink.addEventListener('click', (e) => {
      e.preventDefault();

      // Показать модальное окно
      modalOverlay.style.display = 'flex';

      // Инициализировать слайдер внутри модального окна, если еще не создан
      if (!modalSwiper) {
        modalSwiper = new Swiper('.factory-swiper', {
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
            nextEl: '.factory__btn-right',
            prevEl: '.factory__btn-left',
          },
          pagination: {
            el: '.factory-video__pagination',
            type: 'progressbar',
          },
          loop: true,
          
        });
      }

      // Перейти к соответствующему слайду
      modalSwiper.slideTo(index);
    });
  });

  // Закрытие модального окна
  const closeModal = () => {
    modalOverlay.style.display = 'none';
  };

  if(modalClose) {
    modalClose.addEventListener('click', closeModal);
  }
  

  if(modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) {
        closeModal();
      }
    });
  }
  
});


// Слайдер Заготовка

const swiperForest = new Swiper('.section-forest__swiper', {
  slidesPerView: 1.9,
  spaceBetween: 10,
  navigation: {
    nextEl: '.section-forest__btn-right',
    prevEl: '.section-forest__btn-left',
  },
  //loop: true,
  breakpoints: {
    576: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    992: {
      spaceBetween: 30,
      slidesPerView: 2.8,
    },
  }, 
});


// Слайдер Фундамент

const sliderDop = document.querySelector('.dop__swiper');

let swiperDop;

if(sliderDop) {
  function dopSlider() {
    if (window.innerWidth <= 769 && sliderDop.dataset.mobile == 'false') {
      swiperDop = new Swiper(sliderDop, {
        slidesPerView: 2.2,
        spaceBetween: 17,
        initialSlide: 0,     
        slideClass: 'section-choise__item',
      });
  
      sliderDop.dataset.mobile = 'true';
    }
  
    if (window.innerWidth > 769) {
      sliderDop.dataset.mobile = 'false';
      if (sliderDop.classList.contains('swiper-container-initialized')) {
        swiperDop.destroy();
      }
    }
  }
  
  dopSlider()
  
  window.addEventListener('resize', () => {
    dopSlider();
  });
  
  window.addEventListener('orientationchange', () => {
    dopSlider();
  });
}


// Яндекс карта

ymaps.ready(init);

function init() {
    // Создание карты
    const map = new ymaps.Map("map", {
        center: [55.751574, 37.573856], // Координаты центра карты
        zoom: 9,
        controls: ['zoomControl', 'typeSelector']
    });

    // Добавление кастомной метки
    const customPlacemark = new ymaps.Placemark(
        [55.751574, 37.573856], // Координаты метки
        {
            hintContent: "", // Текст при наведении
            balloonContent: `
                <div class="custom-balloon">
                  <h3>Наш адрес</h3>
                  <p><span>Костромская область, </span> Красносельский район, поселок городского типа Красное-на-Волге</p>
                  <a class="link-more" href="tel:" target="_blank">Позвонить</a>
                </div>
            ` // Текст во всплывающем окне
        },
        {
            preset: 'islands#icon',
            iconColor: '#fc993e'
        }
    );

    // Добавляем метку на карту
    map.geoObjects.add(customPlacemark);
}