function createElement(type, className, children = [], attrs = {}) {
  el = document.createElement(type)
  el.className = className
  Object.assign(el, attrs)
  children.forEach(item => el.append(item))
  return el
}

document.onkeydown = (event) => {
  let allKey = document.querySelectorAll(`[data-key="${event.code}"]`)
  for (let key of allKey) {
    key?.classList.add("pressed")
  }
  if (event.shiftKey) {
    let shiftKey = document.querySelectorAll('.shift')
    for (let shift of shiftKey) {
      shift.classList.add('pressed')
    }
    document.querySelector('.keyboard').classList.add("shifted")
  }
  if (event.shiftKey && event.ctrlKey) {
    document.querySelector('.keyboard').classList.toggle("russian")
  }
}

document.onkeyup = (event) => {
  let allKey = document.querySelectorAll(`[data-key="${event.code}"]`)
  for (let key of allKey) {
    key?.classList.remove("pressed")
  }
  if (event.key = ('Shift')) {
    let shiftKey = document.querySelectorAll('.shift')
    for (let shift of shiftKey) {
      shift.classList.remove('pressed')
    }
    document.querySelector('.keyboard').classList.remove("shifted")
  }
}

document.body.prepend(
  createElement('div', 'container', [
    createElement('div', 'vk-wrapper', [
      createElement('h1', 'title', ['RSS Виртуальная клавиатура']),
      createElement('div', 'screen', [
        createElement('textarea', 'vk-textarea textarea', [], {id: 'textarea', rows: '15', autofocus: true}),
        createElement('span', 'screen-title', ['RSSchool Pro'])
      ]),
      createElement('div', 'keyboard-wrapper', [
        createElement('div', 'keyboard', [
          createElement('div', 'keyboard-row', [])
        ])
      ], {id: 'keyboard'}),
      createElement('p', 'description', ['Клавиатура создана в операционной системе MacOS']),
      createElement('p', 'language', ['Для переключения языка комбинация: левыe shift + control'])
    ])
  ])
)