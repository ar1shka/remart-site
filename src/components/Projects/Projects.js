import './Projects.css'

export function Projects() {
  return `
    <section class="projects" id="projects">
      <div class="projects__container">

        <div class="projects__header">
  <div class="projects__heading">
    <span class="projects__line"></span>

    <h2 class="projects__title">
      <span>Наши</span> работы
    </h2>

    <p class="projects__description">
      Реализуем проекты, в которых продумана каждая деталь
    </p>
  </div>

  <a href="#" class="projects__link">
    Смотреть все работы
  </a>
</div>

        <div class="projects__grid">

          <a href="#" class="project project--large project--left">
            <img
              src="/src/assets/projects/1.png"
              alt="Квартира 54 м²"
            >

            <div class="project__overlay"></div>

            <div class="project__info">
              <h3>Квартира 54 м²</h3>
              <p>Отделочные работы</p>
            </div>
          </a>

          <a href="#" class="project project--large project--right">
            <img
              src="/src/assets/projects/2.png"
              alt="Квартира 86 м²"
            >

            <div class="project__overlay"></div>

            <div class="project__info">
              <h3>Квартира 86 м²</h3>
              <p>Полный ремонт · Нижний Новгород</p>
            </div>
          </a>

          <a href="#" class="project project--small project--bottom-left">
            <img
              src="/src/assets/projects/3.png"
              alt="Квартира 42 м²"
            >

            <div class="project__overlay"></div>

            <div class="project__info">
              <h3>Квартира 42 м²</h3>
              <p>Ремонт под ключ</p>
            </div>
          </a>

          <a href="#" class="project project--small project--bottom-right">
            <img
              src="/src/assets/projects/4.jpg"
              alt="Квартира 67 м²"
            >

            <div class="project__overlay"></div>

            <div class="project__info">
              <h3>Квартира 67 м²</h3>
              <p>Дизайн проект · Ремонт</p>
            </div>
          </a>

        </div>

      </div>
    </section>
  `
}