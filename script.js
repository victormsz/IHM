/*
1. Obter a data e hora do momento da reserva, e registar no objeto armário selecionado para reserva.
2. Calcular a data e hora para entrega das chaves (prazo de 24h), e registar no objeto armário selecionado para reserva.
3. Exibir a data e hora de entrega no elemento html com Id = “resultado”.
*/

const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true };

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false, dataReserva: null, dataEntrega: null},
  { id: 2, formato: "padrao", status: true, acessivel: false ,dataReserva: null, dataEntrega: null},
  { id: 3, formato: "padrao", status: true, acessivel: false ,dataReserva: null, dataEntrega: null},
  { id: 4, formato: "padrao", status: false, acessivel: true ,dataReserva: null, dataEntrega: null},
  { id: 5, formato: "padrao", status: false, acessivel: true ,dataReserva: null, dataEntrega: null},
  { id: 6, formato: "duplo", status: true, acessivel: true ,dataReserva: null, dataEntrega: null},
  { id: 7, formato: "duplo", status: false, acessivel: true ,dataReserva: null, dataEntrega: null},
  { id: 8, formato: "duplo", status: false, acessivel: true ,dataReserva: null, dataEntrega: null},  
];

function reservarArmario() {
  let tipoSelecionado = document.getElementById("tipoArmario").value;

  let armariosDisponiveis = armarios.filter(a => 
      a.formato === tipoSelecionado && 
      a.status === true && 
      usuario.acessibilidade === a.acessivel
  );

  if (armariosDisponiveis.length === 0) {
      document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
      return;
  }
  
  if (usuario.pendencia) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Você já tem um armário reservado.`;
    return;
}


  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];

  let agora = new Date(); 
  let dataEntrega = new Date(agora.getTime() + 24 * 60 * 60 * 1000);

  armarioSorteado.dataReserva = agora;
  armarioSorteado.dataEntrega = dataEntrega;
  armarioSorteado.status = false;
  usuario.pendencia = true;

  document.getElementById("resultado").innerText = 
      `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso! 
      Data de devolução: ${dataEntrega.toLocaleString()}`;

  console.log(usuario);
  console.log(armarios);
}