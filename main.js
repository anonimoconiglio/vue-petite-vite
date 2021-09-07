import './style.css'

import { createApp } from 'https://unpkg.com/petite-vue?module'

const helloWorld = () => {
	return {
		count: 0,
		increment() {
			this.count++
		},
		decrement() { this.count-- }
	}
}

createApp( helloWorld() ).mount()


/* 
document.querySelector('#app').innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>`
*/