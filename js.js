let hotel;
let nome;

function InserirnomeHotel() {

    hotel = prompt("Qual é o nome do hotel?");
    localStorage.setItem('hotel', hotel);
    const h1 = document.createElement("h1");
    const divcontent = document.querySelector(".content");

    alert("O nome do hotel é " + hotel);
    h1.textContent = hotel;

    const firstChild = divcontent.firstChild;

    divcontent.insertBefore(h1, firstChild);

}
function ChamaNome() {
    const nomehotel = localStorage.getItem('hotel');
    const h1 = document.createElement("h1");
    const divcontent = document.querySelector(".content");
    h1.textContent = nomehotel;
    const firstChild = divcontent.firstChild;
    divcontent.insertBefore(h1, firstChild);
}

function Inicio() {

    nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;
    localStorage.setItem('nome', nome);

    if (senha == "2678") {
        alert(`Bem vindo ao Hotel ${hotel}, ${nome}. É um imenso prazer ter você por aqui!`);
        window.location.href = "menuprincipal.html";
    } else if (nome == "" && senha == "") {
        alert("Favor Digitar Dados");
    }
    else {
        alert("Senha errada");
    }
}


function Selecionar() {

    let opcao = document.querySelector('input[name="opcao"]:checked').value;

    switch (opcao) {
        case "Reserva de Quartos":
            window.location.href = "reservaquartos.html";
            break;
        case "Cadastro de Hospede":
            window.location.href = "cadhosp.html";
            break;
        case "Cadastro de Hospede 2":
            window.location.href = "cadhosp2.html";
            break;
        case "Eventos":
            window.location.href = "eventos.html";
            break;
        case "Buffet":
            window.location.href = "buffet.html";
            break;
        case "Auditorio":
            window.location.href = "auditorio.html";
            break;
        case "Reserva do Restaurante":
            window.location.href = "reservrest.html";
            break;
        case "Carro":
            window.location.href = "carro.html";
            break;
        case "ArCondicionado":
            window.location.href = "arcond.html";
            break;
        default:
            alert("Opção inválida");
    }
}

function FechaPagina() {
    const nome = localStorage.getItem('nome');
    alert("Muito obrigado e até logo, " + nome);
    window.location.href = "index.html";
}

function ReservarQuart() {

    const nome = localStorage.getItem('nome');
    let valorDiaria = parseFloat(prompt(nome + ", Qual o valor padrão da diária?"));

    if (valorDiaria <= 0) {
        alert("Valor inválido");
        return;
    } else {
        let quantidadeDias = parseInt(prompt("Quantas diárias serão necessárias?"));

        if (quantidadeDias <= 0 || quantidadeDias > 30) {
            alert("Quantidade de dias inválida");
            return;
        } else {
            const valorTotal = valorDiaria * quantidadeDias;
            alert("O valor de " + quantidadeDias + " dias de hospedagem é de R$" + valorTotal.toFixed(2));

            let nomeHospede = prompt("Qual o nome do hóspede?");

            let confirmacao = prompt(nome + ", você confirma a hospedagem de " + nomeHospede + " por " + quantidadeDias + " dias por um total de R$" + valorTotal.toFixed(2) + "? (S/N)");

            if (confirmacao.toUpperCase() == "S") {
                alert(nome + ", reserva efetuada para " + nomeHospede + ". O valor total é de R$" + valorTotal.toFixed(2) + ".");
            } else {
                alert(nome + ", reserva de" + nomeHospede + " não efetuada.");
            }
        }
    }

}

function CadHosp() {
    const nome = localStorage.getItem('nome');
    let valorDiaria = parseFloat(prompt(nome + ", Qual o valor padrão da diária?"));

    if (valorDiaria <= 0) {
        alert("Valor inválido");
    } else {
        let inteiras = 0;
        let gratuidades = 0;
        let meias = 0;
        let valorTotal = 0;

        while (true) {
            let nomeHospede = prompt("Qual o nome do Hóspede?");

            if (nomeHospede.toUpperCase() == "PARE") {
                break;
            }

            let idadeHospede = parseInt(prompt("Qual a idade do Hóspede?"));

            if (idadeHospede < 6) {
                alert(`${nomeHospede} possui gratuidade`);
                gratuidades++;
            } else if (idadeHospede > 60) {
                alert(`${nomeHospede} paga meia`);
                meias++;
            } else {
                inteiras++;
                valorTotal += valorDiaria;
            }
        }

        let ValorMeias = meias * (valorDiaria / 2);
        valorTotal += ValorMeias;

        alert(`O valor total das hospedagens é: R$${valorTotal.toFixed(2)} sendo ${inteiras} inteira(s), ${gratuidades} gratuidade(s) e ${meias} meia(s)`);
    }

}

function CadHosp2() {
    const nome = localStorage.getItem('nome');
    let hospedes = [];
    const maximo = 15;

    while (true) {
        const opcao = parseInt(prompt(nome + ", Selecione uma opção:\n1. Cadastrar\n2. Pesquisar\n3. Sair"));

        switch (opcao) {
            case 1:
                if (hospedes.length < maximo) {
                    const nomeCadastro = prompt("Qual o nome do Hóspede?");
                    hospedes[hospedes.length] = nomeCadastro;
                    alert(`Hóspede ${nomeCadastro} foi cadastrado(a) com sucesso!`);
                } else {
                    alert("Máximo de cadastros atingido");
                }
                break;

            case 2:
                const nomePesquisa = prompt("Qual o nome do Hóspede?");
                let encontrado = false;

                for (let i = 0; i < hospedes.length; i++) {
                    if (hospedes[i] == nomePesquisa) {
                        alert(`Hóspede ${nomePesquisa} foi encontrado(a)!`);
                        encontrado = true;
                        break;
                    }
                }

                if (!encontrado) {
                    alert(`Hóspede ${nomePesquisa} não foi encontrado(a)!`);
                }
                break;

            case 3:
                return;

            default:
                alert("Opção inválida. Tente novamente.");
        }
    }

}

function Eventos() {
    const nome = localStorage.getItem('nome');
    let custoGarcomPorHora = 10.50;

    let duracaoEvento = parseInt(prompt("Qual a duração do evento em horas?"));
    let numGarcons = parseInt(prompt("Quantos garçons serão necessários?"));

    let custoTotal = custoGarcomPorHora * duracaoEvento * numGarcons;

    alert(`Custo total: R$ ${custoTotal.toFixed(2)}`);

    let confirmacao = prompt("Gostaria de efetuar a reserva? S/N").toUpperCase();

    if (confirmacao == "S") {
        alert(nome + ", Reserva efetuada com sucesso.");
    } else {
        alert(nome + ", Reserva não efetuada.");
    }

}

function Buffet() {
    const nome = localStorage.getItem('nome');
    const capacidadeMaxima = 350;
    const precoCafePorLitro = 0.80;
    const precoAguaPorLitro = 0.40;
    const precoSalgadoPorCento = 34;

    let numConvidados = parseInt(prompt(nome + ", Qual o número de convidados para o evento?"));

    if (numConvidados > capacidadeMaxima) {
        alert(nome + ", Quantidade de convidados superior à capacidade máxima.");
    } else {
        let cafeLitros = numConvidados * 0.2;
        let aguaLitros = numConvidados * 0.5;
        let salgados = numConvidados * 7;
        let custoTotal = (cafeLitros * precoCafePorLitro) + (aguaLitros * precoAguaPorLitro) + (salgados / 100) * precoSalgadoPorCento;

        alert(`O evento precisará de ${cafeLitros.toFixed(2)} litros de café, ${aguaLitros.toFixed(2)} litros de água, ${salgados} salgados. O custo total do evento será de R$ ${custoTotal.toFixed(2)}`);

        let confirmacao = prompt(nome + ", Gostaria de efetuar a reserva? S/N").toUpperCase();

        if (confirmacao == "S") {
            alert(nome + ", Reserva efetuada com sucesso.");
        } else {
            alert(nome + ", Reserva não efetuada.");
        }
    }

}

function Auditorio() {

    let numConvidados = parseInt(prompt("Qual o número de convidados para o seu evento?"));

    if (numConvidados > 350 || numConvidados < 0) {
        alert("Número de convidados inválido.");
    } else {
        if (numConvidados > 220) {
            alert("Use o auditório Colorado");
        } else if (numConvidados <= 150) {
            alert("Use o auditório Laranja");
        } else {
            let cadeiras = numConvidados - 150;
            alert("Use o auditório Laranja e inclua " + cadeiras + " cadeiras");

        }

        let confirmacao = prompt("Gostaria de efetuar a reserva? S/N").toUpperCase();

        if (confirmacao == "S") {
            alert("Reserva efetuada com sucesso.");
        } else {
            alert("Reserva não efetuada.");
        }
    }
}


function Restaurante() {
    const horarioInicio = 7;
    const FimSemanal = 23;
    const FimDeSemana = 15;

    let diaSemana = prompt("Qual o dia do seu evento?").toLowerCase();
    let hora = parseInt(prompt("Qual a hora do seu evento?"));

    if (diaSemana == 'domingo' || diaSemana == 'sabado') {
        if (hora >= horarioInicio && hora <= FimDeSemana) {
            let nomeEmpresa = prompt("Qual o nome da empresa?");
            alert(`Restaurante reservado para ${nomeEmpresa}: ${diaSemana} às ${hora}hs.`);
        } else {
            alert("Restaurante indisponível");
        }
    } else {
        if (hora >= horarioInicio && hora <= FimSemanal) {
            let nomeEmpresa = prompt("Qual o nome da empresa?");
            alert(`Restaurante reservado para ${nomeEmpresa}: ${diaSemana} às ${hora}hs.`);
        } else {
            alert("Restaurante indisponível");
        }
    }

}

function Abastecer() {
    let valorAlcoolWayne = parseFloat(prompt("Qual o valor do álcool no posto Wayne Oil?"));
    let valorGasolinaWayne = parseFloat(prompt("Qual o valor da gasolina no posto Wayne Oil?"));
    let valorAlcoolStark = parseFloat(prompt("Qual o valor do álcool no posto Stark Petrol?"));
    let valorGasolinaStark = parseFloat(prompt("Qual o valor da gasolina no posto Stark Petrol?"));

    const capacidadeTanque = 42;
    const percentualEconomiaAlcool = 0.3;

    let custoAlcoolWayne = valorAlcoolWayne * capacidadeTanque;
    let custoGasolinaWayne = valorGasolinaWayne * capacidadeTanque;
    let custoAlcoolStark = valorAlcoolStark * capacidadeTanque;
    let custoGasolinaStark = valorGasolinaStark * capacidadeTanque;

    let combustivelMaisAtraente;
    let postoMaisBarato;

    if (valorAlcoolWayne * (1 - percentualEconomiaAlcool) <= valorGasolinaWayne) {
        combustivelMaisAtraente = "álcool";
    } else {
        combustivelMaisAtraente = "gasolina";
    }

    if (custoAlcoolWayne <= custoGasolinaWayne && custoAlcoolWayne <= custoAlcoolStark && custoAlcoolWayne <= custoGasolinaStark) {
        postoMaisBarato = "Wayne Oil";
    } else if (custoGasolinaWayne <= custoAlcoolWayne && custoGasolinaWayne <= custoAlcoolStark && custoGasolinaWayne <= custoGasolinaStark) {
        postoMaisBarato = "Wayne Oil";
    } else if (custoAlcoolStark <= custoAlcoolWayne && custoAlcoolStark <= custoGasolinaWayne && custoAlcoolStark <= custoGasolinaStark) {
        postoMaisBarato = "Stark Petrol";
    } else {
        postoMaisBarato = "Stark Petrol";
    }

    alert(`É mais barato abastecer com ${combustivelMaisAtraente} no posto ${postoMaisBarato}.`);

}
function ArCond() {
    let menorValor = 100000;
    let empresaMenorValor = '';

    while (true) {
        let nomeEmpresa = prompt("Qual o nome da empresa?");
        let valorPorAparelho = parseFloat(prompt("Qual o valor por aparelho?"));
        let quantidadeAparelhos = parseInt(prompt("Qual a quantidade de aparelhos?"));
        let percentualDesconto = parseFloat(prompt("Qual a porcentagem de desconto?"));
        let quantidadeMinimaDesconto = parseInt(prompt("Qual o número mínimo de aparelhos para conseguir o desconto?"));

        let valorTotal = valorPorAparelho * quantidadeAparelhos;

        if (quantidadeAparelhos >= quantidadeMinimaDesconto) {
            let desconto = (percentualDesconto / 100) * valorTotal;
            valorTotal -= desconto;
        }

        alert(`O serviço de ${nomeEmpresa} custará R$ ${valorTotal.toFixed(2)}`);

        if (valorTotal < menorValor) {
            menorValor = valorTotal;
            empresaMenorValor = nomeEmpresa;
        }

        let continuar = prompt("Deseja informar novos dados? (S/N)").toUpperCase();
        if (continuar == 'N') {
            break;
        }
    }

    alert(`O orçamento de menor valor é o de ${empresaMenorValor} por R$ ${menorValor.toFixed(2)}`);

}