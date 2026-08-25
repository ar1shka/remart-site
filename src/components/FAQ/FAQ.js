import './FAQ.css'

export function FAQ() {
  const questions = [
    {
      question: 'Сколько стоит ремонт?',
      answer:
        'Стоимость ремонта зависит от площади помещения, выбранных материалов, сложности работ и их объёма. После обсуждения проекта мы составляем подробную смету, в которой отдельно прописываем работы и материалы.'
    },
    {
      question: 'Можно ли заказать отдельные виды работ?',
      answer:
        'Да. Вы можете заказать как полный комплекс работ, так и отдельные этапы ремонта. Например, сантехнические, электромонтажные или отделочные работы.'
    },
    {
      question: 'Вы помогаете с закупкой материалов?',
      answer:
        'Закупку строительного материала мы производим самостоятельно по согласованию с заказчиком. Заранее говариваем стоимость производителя материалов и их стоимость.'
    },
    {
      question: 'Как формируется смета?',
      answer:
        'Смета формируется на основании дизайн-проекта, объёма работ, площади помещения, выбранных материалов и особенностей объекта. Все основные позиции обсуждаем до начала ремонта, а изменения согласовываем заранее.'
    },
    {
      question: 'Как проходит ремонт?',
      answer:
        'Составляем план и этапность работ. Затем устанавливаем график закупки материалов. На каждом этапе контролируем качество произведенных работ и предоставляем фото и видеоотчет.'
    }
  ]

  return `
    <section class="faq" id="faq">
      <div class="faq__container">

        <div class="faq__intro">

          <span class="faq__line"></span>

          <h2 class="faq__title">
            Частые <span>вопросы</span>
          </h2>

          <p class="faq__description">
            Собрали ответы на вопросы, которые чаще всего
            возникают перед началом ремонта
          </p>

          <div class="faq__contact">
            <p>
              Если вы не нашли ответа на свой вопрос — просто
              свяжитесь с нами
            </p>

            <a href="#contacts" class="faq__button">
              Обсудить проект
            </a>
          </div>

        </div>

        <div class="faq__list">

          ${questions.map((item, index) => `
            <article class="faq__item">
              <button
                class="faq__question"
                type="button"
                aria-expanded="false"
                aria-controls="faq-answer-${index}"
              >
                <span>${item.question}</span>

                <span class="faq__icon" aria-hidden="true">
                  +
                </span>
              </button>

              <div
                class="faq__answer"
                id="faq-answer-${index}"
                aria-hidden="true"
              >
                <div class="faq__answer-inner">
                  <p>${item.answer}</p>
                </div>
              </div>
            </article>
          `).join('')}

        </div>

      </div>
    </section>
  `
}

export function initFAQ() {
  const items = document.querySelectorAll('.faq__item')

  items.forEach((item) => {
    const button = item.querySelector('.faq__question')
    const answer = item.querySelector('.faq__answer')

    button.addEventListener('click', () => {
      const isOpen = item.classList.contains('faq__item--open')

      item.classList.toggle('faq__item--open')

      button.setAttribute('aria-expanded', String(!isOpen))
      answer.setAttribute('aria-hidden', String(isOpen))
    })
  })
}