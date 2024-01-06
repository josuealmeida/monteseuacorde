function adicionarBemolSustenido(){
  const inputs = document.querySelectorAll('input')

  inputs.forEach(input =>{
    input.onkeyup = (tecla) =>{
      input.value = input.value.replace('b', '♭')
      input.value = input.value.replace('#', '♯')
    }
  })
}

function adicionarNota(){
  const notas = document.querySelectorAll('.nota')

  notas.forEach(nota =>{
    nota.addEventListener('click', () =>{
      nota.classList.toggle('active')
    })
  })
}

function criarPestana(){
  const casas = document.querySelectorAll('.casa')

  casas.forEach(casa =>{
    const notas = casa.querySelectorAll('.nota')
    const pestanas = casa.querySelectorAll('.pestana')

    notas.forEach((nota, x) =>{
      let y = x + 1

      nota.title = 'Clique duas vezes para inserir uma pestana'

      nota.addEventListener('dblclick', () =>{
        nota.style.zIndex = '50'

        pestanas.forEach(pestana =>{
          pestana.classList.toggle(`pestana${y}`)

          pestana.classList.contains(`pestana${y}`) ? (
            nota.title = 'Clique duas vezes para remover a pestana'
          ):nota.title = 'Clique duas vezes para inserir uma pestana'
        })
      })
    })

    notas[notas.length - 1].removeAttribute('title')
  })
}

function alterarAberturaCorda(){
  const indicadoresCorda = document.querySelectorAll('.cordas-soltas .indicator-icon')

  indicadoresCorda.forEach(indicador =>{
    indicador.addEventListener('click', () =>{
      indicador.classList.contains('open') ? (
        indicador.classList.remove('open')
      ):(
        indicador.classList.add('open')
      )      
    })
  })
}

function abrirCorda(){
  const casasUkulele = document.querySelectorAll('#diagrama-ukulele .casa')
  const indicadoresCordaUkulele = document.querySelectorAll('#diagrama-ukulele .cordas-soltas .indicator-icon')

  casasUkulele.forEach(casa =>{
    const notas = casa.querySelectorAll('.nota')

    notas.forEach((corda, x) =>{
      corda.addEventListener('click', () =>{
        indicadoresCordaUkulele[x].classList.contains('open') ? (
          indicadoresCordaUkulele[x].classList.remove('open')
        ):(
          indicadoresCordaUkulele[x].classList.add('open')
        )
      })
    })
  })

  const casasGuitarra = document.querySelectorAll('#diagrama-guitarra .casa')
  const indicadoresCordaGuitarra = document.querySelectorAll('#diagrama-guitarra .cordas-soltas .indicator-icon')

  casasGuitarra.forEach(casa =>{
    const notas = casa.querySelectorAll('.nota')

    notas.forEach((corda, x) =>{
      corda.addEventListener('click', () =>{
        indicadoresCordaGuitarra[x].classList.contains('open') ? (
          indicadoresCordaGuitarra[x].classList.remove('open')
        ):(
          indicadoresCordaGuitarra[x].classList.add('open')
        )
      })
    })
  })
}

function alterarCasa(){
  const casas = document.querySelectorAll('.diagrama .casa')
  const numeroCasa = document.querySelector('.numero-casa')

  numeroCasa.onchange = () =>{
    parseInt(numeroCasa.value) > 1 ? (
      casas[0].style.borderTop = 'none'
    ):casas[0].style.borderTop = '8px solid #000'

    parseInt(numeroCasa.value) >= 20 ? (
      casas[4].style.borderBottom = '1px solid #333'
    ):casas[4].style.borderBottom = 'none'
  }
}

const details = document.querySelectorAll('details')
const summarys = document.querySelectorAll('summary')

for(summary of summarys){
  summary.addEventListener('click', () =>{
    for(detail of details){
      detail.open = false
    }
  })
}

const downloadButtons = document.querySelectorAll('.download-btn')

for(btn of downloadButtons){
  btn.addEventListener('click', (event) =>{
    const printArea = event.target.previousElementSibling
    const chordName = printArea.querySelector('.nome-acorde').value

    domtoimage.toPng(printArea)
      .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        const a = document.createElement('a')
        a.setAttribute('download', `${chordName}.png`)
        a.setAttribute('href', img.src)
        a.click()
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
  })
}

// adicionarBemolSustenido()
adicionarNota()
criarPestana()
alterarAberturaCorda()
abrirCorda()
alterarCasa()