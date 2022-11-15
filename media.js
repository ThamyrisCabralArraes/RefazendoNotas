const alunos = [
  {nomes: 'Carlos', notas: [10, 9.5, 10, 9.5]},
  {nomes: 'Thamyris', notas: [10, 10, 10, 10]},
  {nomes: 'Magnum', notas: [6.0, 7.0, 7.5, 6.5]},
  {nomes: 'Adilma', notas: [7.0, 7.5, 8.0, 7.5]},
  {nomes: 'Camila', notas: [10, 9.5, 10, 9.5]},
  {nomes: 'Joao', notas: [8.0, 9.5, 8.4, 9.5]},
  {nomes: 'Eduarda', notas: [6.0, 7.5, 6.5, 7.0]},
]

  alunos.forEach(aluno => {
    aluno.media = sum(...aluno.notas)
  })

  const goToHtml = alunos.map( aluno =>
    `<tr class='${aluno.media < 7 ? 'reproved' : 'aproved'}'>
      <td>${aluno.nomes}</td>
      <td>${aluno.notas[0]}</td>
      <td>${aluno.notas[1]}</td>
      <td>${aluno.notas[2]}</td>
      <td>${aluno.notas[3]}</td>
      <td>${aluno.media}</td>
    </tr>
    `
    ).join('')

    document.querySelector('tbody').innerHTML = goToHtml

function sum(){
  let numbers = 0
for(i = 0; i < arguments.length; i++){
  numbers += arguments[i]
}
  return numbers / arguments.length
}
let total = sum();

