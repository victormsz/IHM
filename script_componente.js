class AulasComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.hoje = "ter";
    }
  
    connectedCallback() {
      this.loadData();
    }
  
    async loadData() {
      try {
        const response = await fetch('aulas.json');
        const aulas = await response.json();
        this.render(aulas);
      } catch (error) {
        console.error('Erro ao carregar os dados das aulas:', error);
      }
    }
  
    render(aulas) {
      const aulasDia = aulas.filter(a => a.data === this.hoje);
  
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'styles_componente.css'; 
      this.shadowRoot.appendChild(link); 

      aulasDia.forEach(a => {
        let corNota = "";
        if (a.nota < 6) corNota = "red";
        else if (a.nota >= 6 && a.nota < 8) corNota = "orange";
        else corNota = "green";
  
        this.shadowRoot.innerHTML += `
        <div class="comp-aula" style="color: ${corNota}>
          <div class="lable-prova p_lable" style="${a.prova_alert ? '' : 'display: none;'}">PROVA: <b>${a.prova}</b></div>
          <div class="titulo_aula">${a.disciplina}</div>
          <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
          <div class="lables">
            <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
            <div class="lable-nota p_lable" style="color: ${corNota};">CR: <b>${a.nota}</b></div>
          </div>
        </div>
      `;
    });
  }
}

customElements.define('aulas-component', AulasComponent);  