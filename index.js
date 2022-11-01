class Sector {
  constructor() {
    this.id = 1;
    this.arraySect = [];
  }

  enviar() {
    //quando o botao for clicado, todos os códigos contido dentro dele será acionado
    let sectorObj = this.readData(); //quando clicar no botão ele chama o metodo readData

    if (this.validateField(sectorObj)) {
      //se o retorno for TRUE (usuario preencheu todos os campos), roda esse codigo e adiciona o elemento ao array
      this.addData(sectorObj); //adiciona o sectorObj
    }
    this.tableList();

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  }

  tableList() {
    //criar tabela com os valores
    let tbody = document.querySelector("#tbody");
    tbody.innerText = "";

    //listar os elementos com o for
    for (let i = 0; i < this.arraySect.length; i++) {
      //PERCORRER cada elemento do array, o i inicializa com 0 e deve ser menor que o comprimento do arraySect, depois incrementa
      //CRIAR LINHAS
      let tr = tbody.insertRow(); //indica que o tr pertence ao tbody e a função insertRow cria uma linha dentro da tabela

      //td recebe o tr e o insertCell() cria colunas
      let td_id = tr.insertCell();
      let td_name = tr.insertCell();
      let td_age = tr.insertCell();
      let td_sector = tr.insertCell();

      td_id.innerText = this.arraySect[i].id;
      td_name.innerText = this.arraySect[i].name;
      td_age.innerText = this.arraySect[i].age;

      if (this.arraySect[i].age < 14) {
        td_sector.innerHTML = this.arraySect[i].yellow;
        td_sector.style.background = "rgb(255, 255, 79)";
        td_sector.style.color = "rgb(87, 87, 0)";
      } else if (this.arraySect[i].age < 18) {
        td_sector.innerHTML = this.arraySect[i].blue;
        td_sector.style.background = "rgb(145, 145, 255)";
        td_sector.style.color = "rgb(16, 16, 115)";
      } else if (this.arraySect[i].age < 25) {
        td_sector.innerHTML = this.arraySect[i].white;
        td_sector.style.background = "#ffffff";
        td_sector.style.color = "rgb(96, 96, 96)";
      } else if (this.arraySect[i].age >= 25) {
        td_sector.innerHTML = this.arraySect[i].green;
        td_sector.style.background = "rgb(101, 255, 101)";
        td_sector.style.color = "rgb(5, 106, 5)";
      }
    }
  }

  addData(sectorObj) {
    //metodo que vai adicionar os dados no array
    this.arraySect.push(sectorObj); //adiciona um ou mais elementos no final do array e retorna seu comprimento
    this.id++; //vai incrementar o id enquanto for acrescentado novos elementos
  }

  readData() {
    let sectorObj = {};

    sectorObj.id = this.id;
    sectorObj.name = document.getElementById("name").value;
    sectorObj.age = document.getElementById("age").value;
    sectorObj.yellow = "Amarelo";
    sectorObj.blue = "Azul";
    sectorObj.white = "Branco";
    sectorObj.green = "Verde";

    return sectorObj;
  }

  validateField(sectorObj) {
    //vai validar os inputs
    let msg = "";

    if (sectorObj.name == "") {
      //se o input name for vazio, solicita o nome
      msg += "Informe seu Nome \n";
    }

    if (sectorObj.age == "") {
      //se o input age for vazio, solicita o idade
      msg += "Informe sua Idade \n";
    }

    if (msg != "") {
      //se os inputs não estiverem vazios, retornar falso e não apresentar nenhuma msg de solicitação
      alert(msg);
      return false;
    }
    return true; //se os campos forem preenchidos retorna true e roda o bloco de codigo do enviar
  }
}
var sector = new Sector();
