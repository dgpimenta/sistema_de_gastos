/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
- receitas: []
- despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo.
*/

const incomes = document.querySelector('form#incomes')
const expenses = document.querySelector('form#expenses')

let family = {
  incomes: [],
  expenses: []
}

const sum = array => array.reduce((acc, value) => acc + value, 0)

const verifyConditions = (myIncomes, myExpenses, total) => {
  const answerIsPositive = total >= 0
  const messageCondition = answerIsPositive ? 'positivo' : 'negativo'
  const operatorSign = answerIsPositive ? '' : '- '
  const isTotalPositive = answerIsPositive
    ? total.toFixed(2)
    : Math.abs(total).toFixed(2)

  const message = `Seu saldo é ${messageCondition}: ${operatorSign}R$ ${isTotalPositive.replace(
    '.',
    ','
  )}.`

  console.log(`
    Receitas: ${myIncomes.toFixed(2)};
    Despesas: ${myExpenses.toFixed(2)};
    Você está com o saldo ${messageCondition}!
    Seu saldo é de ${operatorSign}R$ ${isTotalPositive}.
    `)

  return message
}

const cleanBalanceMessage = balanceMessage => {
  incomes.addEventListener('click', () => {
    balanceMessage.textContent = ''
  })

  expenses.addEventListener('click', () => {
    balanceMessage.textContent = ''
  })
}

const createGradeBox = balanceMessage => {
  const gradeBox = document.createElement('div')
  gradeBox.setAttribute('class', 'saldo')
  gradeBox.setAttribute(
    'style',
    'color: grey; padding: 0.5rem; font-size: 1.6rem'
  )

  expenses.insertAdjacentElement('afterend', gradeBox)
  gradeBox.textContent = balanceMessage

  cleanBalanceMessage(gradeBox)
}

const calculateBalance = () => {
  const myIncomes = sum(family.incomes)
  const myExpenses = sum(family.expenses)
  const total = myIncomes - myExpenses

  const balanceMessage = verifyConditions(myIncomes, myExpenses, total)
  createGradeBox(balanceMessage)
}

const typeIncomes = object => {
  incomes.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.sendIncomes.value
    console.log(inputValue)

    object.incomes.push(Number(inputValue))
    console.log(object.incomes)

    event.target.reset()

    calculateBalance()
  })
}

const typeExpenses = object => {
  expenses.addEventListener('submit', event => {
    event.preventDefault()

    const inputValue = event.target.sendExpenses.value
    console.log(inputValue)

    object.expenses.push(Number(inputValue))
    console.log(object.expenses)

    event.target.reset()

    calculateBalance()
  })
}

typeIncomes(family)
typeExpenses(family)
