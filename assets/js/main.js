/*===== VARIABLES CSS =====*/
:root {
  --header-height: 3rem;
  --font-semi: 600;
  /*===== Colores =====*/
  /*Purple 260 - Red 355 - Blue 224 - Pink 340*/
  /* HSL color mode */
  --hue-color: 270; /* Ungu */
  --first-color: hsl(var(--hue-color), 89%, 60%); /* Ungu cerah */
  --second-color: hsl(0, 0%, 0%); /* Hitam */
  /*===== Fuente y tipografia =====*/
  --body-font: "Poppins", sans-serif;
  --big-font-size: 2rem;
  --h2-font-size: 1.25rem;
  --normal-font-size: .938rem;
  --smaller-font-size: .75rem;
  /*===== Margenes =====*/
  --mb-2: 1rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;
  /*===== z index =====*/
  --z-back: -10;
  --z-fixed: 100;
}
@media screen and (min-width: 968px) {
  :root {
    --big-font-size: 3.5rem;
    --h2-font-size: 2rem;
    --normal-font-size: 1rem;
    --smaller-font-size: .875rem;
  }
}

/*===== BASE =====*/
*, ::before, ::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  color: var(--second-color);
}

h1, h2, p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

/*===== CLASS CSS ===== */
.section-title {
  position: relative;
  font-size: var(--h2-font-size);
  color: var(--first-color);
  margin-top: var(--mb-2);
  margin-bottom: var(--mb-4);
  text-align: center;
}
.section-title::after {
  position: absolute;
  content: "";
  width: 64px;
  height: 0.18rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 2rem;
  background-color: var(--first-color);
}

.section {
  padding-top: 3rem;
  padding-bottom: 2rem;
}

/*===== LAYOUT =====*/
.bd-grid {
  max-width: 1024px;
  display: grid;
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
}

.l-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(143, 158, 173, 0.15);
}

/*===== NAV =====*/
.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--font-semi);
}
@media screen and (max-width: 767px) {
  .nav__menu {
    position: fixed;
    top: var(--header-height);
    right: -100%;
    width: 80%;
    height: 100%;
    padding: 2rem;
    background-color: var(--second-color);
    transition: 0.5s;
  }
}
.nav__item {
  margin-bottom: var(--mb-4);
}
.nav__link {
  position: relative;
  color: #fff;
}
.nav__link:hover {
  position: relative;
}
.nav__link:hover::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 2rem;
  background-color: var(--first-color);
}
.nav__logo {
  color: var(--second-color);
}
.nav__toggle {
  color: var(--second-color);
  font-size: 1.5rem;
  cursor: pointer;
}

/*Active menu*/
.active-link::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 2rem;
  background-color: var(--first-color);
}

/*=== Show menu ===*/
.show {
  right: 0;
}

/*===== HOME =====*/
.home {
  position: relative;
  row-gap: 5rem;
  padding: 4rem 0 5rem;
}
.home__data {
  align-self: center;
}
.home__title {
  font-size: var(--big-font-size);
  margin-bottom: var(--mb-5);
}
.home__title-color {
  color: var(--first-color);
}
.home__social {
  display: flex;
  flex-direction: column;
}
.home__social-icon {
  width: max-content;
  margin-bottom: var(--mb-2);
  font-size: 1.5rem;
  color: var(--second-color);
}
.home__social-icon:hover {
  color: var(--first-color);
}
.home__img {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 260px;
}
.home__blob {
  fill: var(--first-color);
}
.home__blob-img {
  width: 360px;
}

/*BUTTONS*/
.button {
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: 0.75rem 2.5rem;
  font-weight: var(--font-semi);
  border-radius: 0.5rem;
  transition: 0.3s;
}
.button:hover {
  box-shadow: 0px 10px 36px rgba(0, 0, 0, 0.15);
}

/* ===== ABOUT =====*/
.about__container {
  row-gap: 2rem;
  text-align: center;
}
.about__subtitle {
  margin-bottom: var(--mb-2);
}
.about__img {
  justify-self: center;
}
.about__img img {
  width: 200px;
  border-radius: 0.5rem;
}


/* ===== kegiatan =====*/
.kegiatan__container {
  row-gap: 2rem;
}
.kegiatan__img {
  box-shadow: 0px 4px 25px rgba(14, 36, 49, 0.15);
  border-radius: 0.5rem;
  overflow: hidden;
}
.kegiatan__img img {
  transition: 1s;
}
.kegiatan__img img:hover {
  transform: scale(1.1);
}

/* ===== pertanyaan =====*/
.pertanyaan__input {
  width: 100%;
  font-size: var(--normal-font-size);
  font-weight: var(--font-semi);
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1.5px solid var(--second-color);
  outline: none;
  margin-bottom: var(--mb-4);
}
.pertanyaan__button {
  display: block;
  border: none;
  outline: none;
  font-size: var(--normal-font-size);
  cursor: pointer;
  margin-left: auto;
}

/* ===== FOOTER =====*/
.footer {
  background-color: var(--second-color);
  color: #fff;
  text-align: center;
  font-weight: var(--font-semi);
  padding: 2rem 0;
}
.footer__title {
  font-size: 2rem;
  margin-bottom: var(--mb-4);
}
.footer__social {
  margin-bottom: var(--mb-4);
}
.footer__icon {
  font-size: 1.5rem;
  color: #fff;
  margin: 0 var(--mb-2);
}
.footer__copy {
  font-size: var(--smaller-font-size);
}

/* ===== MEDIA QUERIES=====*/
@media screen and (max-width: 320px) {
  .home {
    row-gap: 2rem;
  }
  .home__img {
    width: 200px;
  }
}
@media screen and (min-width: 576px) {
  .home {
    padding: 4rem 0 2rem;
  }
  .home__social {
    padding-top: 0;
    padding-bottom: 2.5rem;
    flex-direction: row;
    align-self: flex-end;
  }
  .home__social-icon {
    margin-bottom: 0;
    margin-right: var(--mb-4);
  }
  .home__img {
    width: 300px;
    bottom: 25%;
  }
  .about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: initial;
  }
  .kegiatan__container {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    padding-top: 2rem;
  }
  .pertanyaan__form {
    width: 360px;
    padding-top: 2rem;
  }
  .pertanyaan__container {
    justify-items: center;
  }
}
@media screen and (min-width: 768px) {
  body {
    margin: 0;
  }
  .section {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
  .section-title {
    margin-bottom: var(--mb-6);
  }
  .section-title::after {
    width: 80px;
    top: 3rem;
  }
  .nav {
    height: calc(var(--header-height) + 1.5rem);
  }
  .nav__list {
    display: flex;
    padding-top: 0;
  }
  .nav__item {
    margin-left: var(--mb-6);
    margin-bottom: 0;
  }
  .nav__toggle {
    display: none;
  }
  .nav__link {
    color: var(--second-color);
  }
  .home {
    padding: 8rem 0 2rem;
  }
  .home__img {
    width: 400px;
    bottom: 10%;
  }
  .about__container {
    padding-top: 2rem;
  }
  .about__img img {
    width: 300px;
  }
  .kegiatan__container {
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
  }
}
@media screen and (min-width: 992px) {
  .bd-grid {
    margin-left: auto;
    margin-right: auto;
  }
  .home {
    padding: 10rem 0 2rem;
  }
  .home__img {
    width: 450px;
  }
}
