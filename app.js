function createElement(type, className, children = [], props = {}, attrs = {}) {
  el = document.createElement(type)
  el.className = className
  Object.assign(el, props)
  Object.entries(attrs).forEach(([key, value]) => {
    el.setAttribute(key, value)
  })
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

function createDigit(upEn, downEn, upRu, downRu, data) {
  return createElement('div', 'keyboard-key key', [
    createElement('span', 'eng', [
      createElement('span', 'caseUp', [upEn]),
      createElement('span', 'caseDown', [downEn])
    ]),
    createElement('span', 'rus', [
      createElement('span', 'caseUp', [upRu]),
      createElement('span', 'caseDown', [downRu])
    ])
  ], {}, {'data-key': data})
}

function createKey(engLetter, ruLetter, data) {
  return createElement('div', 'keyboard-key key', [
    createElement('span', 'eng', [
      createElement('span', 'caseUp', [engLetter.toUpperCase()]),
      createElement('span', 'caseDown', [engLetter])
    ]),
    createElement('span', 'rus', [
      createElement('span', 'caseUp', [ruLetter.toUpperCase()]),
      createElement('span', 'caseDown', [ruLetter])
    ])
  ], {}, {'data-key': data})
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
          createElement('div', 'keyboard-row', [
            createDigit('~', '`', '~', '`', 'IntlBackslash'),
            createDigit('!', '1', '!', '1', 'Digit1'),
            createDigit('@', '2', '"', '2', 'Digit2'),
            createDigit('#', '3', '№', '3', 'Digit3'),
            createDigit('$', '4', '%', '4', 'Digit4'),
            createDigit(':', '5', '%', '5', 'Digit5'),
            createDigit(',', '6', '^', '6', 'Digit6'),
            createDigit('.', '7', '&', '7', 'Digit7'),
            createDigit(';', '8', '*', '8', 'Digit8'),
            createDigit('(', '9', '(', '9', 'Digit9'),
            createDigit(')', '0', ')', '0', 'Digit0'),
            createDigit('_', '-', '_', '-', 'Minus'),
            createDigit('+', '=', '+', '=', 'Equal'),
          ]),
          createElement('div', 'keyboard-row', [
            createKey('q', 'й', 'KeyQ'),
            createKey('w', 'ц', 'KeyW'),
            createKey('e', 'у', 'KeyE'),
            createKey('r', 'к', 'KeyR'),
            createKey('t', 'е', 'KeyT'),
            createKey('y', 'н', 'KeyY'),
            createKey('u', 'г', 'KeyU'),
            createKey('i', 'ш', 'KeyI'),
            createKey('o', 'щ', 'KeyO'),
            createKey('p', 'з', 'KeyP'),
            createKey('[', 'х', 'BracketLeft'),
            createKey(']', 'ъ', 'BracketRight'),
            createKey('\\', 'ё', 'Quote'),
          ]),
          createElement('div', 'keyboard-row', [
            createKey('a', 'ф', 'KeyA'),
            createKey('s', 'ы', 'KeyS'),
            createKey('d', 'в', 'KeyD'),
            createKey('f', 'а', 'KeyF'),
            createKey('g', 'п', 'KeyG'),
            createKey('h', 'р', 'KeyH'),
            createKey('j', 'о', 'KeyJ'),
            createKey('k', 'л', 'KeyK'),
            createKey('l', 'д', 'KeyL'),
            createKey(';', 'ж', 'Semicolon'),
            createKey(`'`, 'э', 'Quote'),
          ]),
          createElement('div', 'keyboard-row', [
            createKey('z', 'я', 'KeyZ'),
            createKey('x', 'ч', 'KeyX'),
            createKey('c', 'с', 'KeyC'),
            createKey('v', 'м', 'KeyV'),
            createKey('b', 'и', 'KeyB'),
            createKey('n', 'т', 'KeyN'),
            createKey('m', 'ь', 'KeyM'),
            createKey(',', 'б', 'Comma'),
            createKey('.', 'ю', 'Period'),
            createKey('/', '/', 'Slash'),
          ]),
          createElement('div', 'keyboard-row', [])
        ])
      ], {id: 'keyboard'}),
      createElement('p', 'description', ['Клавиатура создана в операционной системе MacOS']),
      createElement('p', 'language', ['Для переключения языка комбинация: левыe shift + control'])
    ])
  ])
)