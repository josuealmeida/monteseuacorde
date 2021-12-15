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

    notas[5].removeAttribute('title')
  })
}

function alterarAberturaCorda(){
  const indicadoresCorda = document.querySelectorAll('#cordas-soltas .bx')

  indicadoresCorda.forEach(indicador =>{
    indicador.addEventListener('click', () =>{
      indicador.classList.contains('bx-x') ? (
        indicador.classList.remove('bx-x'),
        indicador.classList.add('bx-circle')
      ):(
        indicador.classList.remove('bx-circle'),
        indicador.classList.add('bx-x')
      )      
    })
  })
}

function abrirCorda(){
  const casas = document.querySelectorAll('.casa')
  const indicadoresCorda = document.querySelectorAll('#cordas-soltas .bx')

  casas.forEach(casa =>{
    const notas = casa.querySelectorAll('.nota')

    notas.forEach((corda, x) =>{
      corda.addEventListener('click', () =>{
        indicadoresCorda[x].classList.contains('bx-x') ? (
          indicadoresCorda[x].classList.remove('bx-x'),
          indicadoresCorda[x].classList.add('bx-circle')
        ):(
          indicadoresCorda[x].classList.remove('bx-circle'),
          indicadoresCorda[x].classList.add('bx-x')
        )
      })
    })
  })
}

function alterarCasa(){
  const casas = document.querySelectorAll('#diagrama .casa')
  const numeroCasa = document.querySelector('#numero-casa')

  numeroCasa.onchange = () =>{
    parseInt(numeroCasa.value) > 1 ? (
      casas[0].style.borderTop = 'none'
    ):casas[0].style.borderTop = '8px solid #000'

    parseInt(numeroCasa.value) >= 20 ? (
      casas[4].style.borderBottom = '1px solid #333'
    ):casas[4].style.borderBottom = 'none'
  }
}

// adicionarBemolSustenido()
adicionarNota()
criarPestana()
alterarAberturaCorda()
abrirCorda()
alterarCasa()