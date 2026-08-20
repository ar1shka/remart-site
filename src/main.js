import './styles/variables.css'
import './styles/global.css'
import './style.css'

import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { Hero } from './components/Hero/Hero'
import { About } from './components/About/About'
import { Services } from './components/Services/Services'
import { Projects } from './components/Projects/Projects'
import { Advantages } from './components/Advantages/Advantages'

document.querySelector('#app').innerHTML = `
  ${Header()}
  ${Hero()}
  ${About()}
  ${Services()}
  ${Projects()}
  ${Advantages()}
  ${Footer()}
`