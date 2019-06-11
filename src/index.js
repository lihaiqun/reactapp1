// import './style.css'
// import './main.scss'
import '@/main'
// import './main.stylus'
import axios from 'axios'
axios.get('/api/web/api/floors/v1?label=0&page=1&random=0').then(res => {
  console.log(res.data.data)
})
console.log('hello webpack')