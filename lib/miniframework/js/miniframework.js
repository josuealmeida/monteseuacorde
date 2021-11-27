/*
	- MiniFramework v1.0
	- Desenvolvido por Josué Almeida
	- Confira o projeto no GitHub: https://github.com/josuealmeida/MiniFramework
*/

console.info('Você está utilizando o MiniFramework v1.0')



class Loading{
	constructor(){
		this.loading = document.querySelector('.loading')
	}

	remover(){
		window.onload = () =>{
			setTimeout(() =>{

				this.loading ? (
					this.loading.classList.add('hidden')
				):console.warn('Adicione o loading')

			}, 200)
		}
	}
}

const loading = new Loading()
loading.remover()



class Sidebar{
	constructor(){
		this.overlay = document.querySelector('.sidebar-overlay')
		this.sidebar = document.querySelector('.sidebar')
		this.btnOpen = document.querySelector('.btn-sidebar')
		this.btnClose = document.querySelector('.sidebar header button')
		this.itens = document.querySelectorAll('.sidebar .item')
	}
 
	alterarExibicao(delayMenu, delayOverlay){
		this.sidebar.style.transitionDelay = delayMenu
		this.sidebar.classList.toggle('open')		
		
		this.overlay ? (
			this.overlay.style.transitionDelay = delayOverlay,
			this.overlay.classList.toggle('open')
		):null		

		document.body.classList.toggle('overflow-hidden')
	}

	abrir(elemento){
		elemento.onclick = () =>{
			this.alterarExibicao('0.3s', '0s')
		}
	}

	fechar(elemento){
		elemento.onclick = () =>{
			this.alterarExibicao('0s', '0.3s')
		}
	}

	executar(){
		if(this.btnOpen){
			this.sidebar ? (
				this.abrir(this.btnOpen)
			):console.warn('Adicione o sidebar')

			this.btnClose ? (
				this.fechar(this.btnClose),		
				this.itens.forEach((item) =>{
					this.fechar(item)
				})
			):console.warn("Adicione o botão para fechar o sidebar")

			this.overlay ? (
				this.fechar(this.overlay)
			):console.warn('Adicione o sidebar-overlay')
		}
	}
}

const sidebar = new Sidebar()
sidebar.executar()



class Modal{
	constructor(){
		this.modalOverlay = document.querySelector('.modal-overlay')
		this.btnClose = document.querySelector('.modal-overlay button')
		this.btnCancel = document.querySelectorAll('.modal footer .close')
		this.entrada = []
	}

	set(modal, button){
		this.modal = document.querySelector(modal)
		this.button = document.querySelectorAll(button)

		this.modal ? (
			this.entrada.push([this.modal, this.button])
		):console.warn(`Está faltando um modal para ${button}`)

		this.button.length == 0 ? (
			console.warn(`Está faltando um botão para ${modal}`)
		):null
	}

	abrir(){
		this.entrada.forEach((entrada) =>{
			entrada[1].forEach((btn) =>{
				btn.onclick = () =>{
					this.modalOverlay.classList.add('open')
					entrada[0].classList.add('open')
				}
			})
		})
	}

	removerClass(closeElement){
		this.entrada.forEach((entrada) =>{
			entrada[1].forEach((btn) =>{
				this.modalOverlay.classList.remove('open')
				entrada[0].classList.remove('open')
			})
		})		
	}

	fechar(){
		this.modalOverlay ? (
			this.modalOverlay.onclick = () =>{
				this.removerClass()
			}
		):console.warn('Adicione o modal-overlay')
		
		this.btnCancel.forEach((cancel) =>{
			cancel.onclick = () =>{
				this.removerClass()
			}
		})
		
		this.btnClose ? (
			this.btnClose.onclick = () =>{
				this.removerClass()
			}
		):null

		document.addEventListener('keydown', event =>{
			event.key == 'Escape' ? this.removerClass() : null
		})
	}

	executar(){
		this.abrir()
		this.fechar()
	}
}

const modal = new Modal()



class ScrollToTop{
	constructor(){
		this.button = document.querySelector('.scroll-top')
	}

	executar(){
		this.button ? (
			window.onscroll = () =>{
					document.body.scrollTop > 150 || document.documentElement.scrollTop > 150 ? (
					 	this.button.classList.add('visible')
					):this.button.classList.remove('visible')
			},

			this.button.onclick = () =>{
				window.scroll({top: 0})
			}
		):null
	}
}

const scrollToTop = new ScrollToTop()
scrollToTop.executar()



class Info{
	constructor(){
		this.info = document.querySelectorAll('.info-close')
		this.btnClose = document.querySelectorAll('.info-close .close')
	}

	fechar(){
		this.info.forEach((info, index) =>{
			this.btnClose[index].onclick = () =>{
				info.style.display = 'none'
			}
		})
	}
}

const info = new Info()
info.fechar()