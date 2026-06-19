// ================================================================
//  DADOS DAS 30 QUESTÕES
// ================================================================
var questoesData = [
    {
        id: 1,
        pergunta: "De acordo com o Decreto-Lei nº 667/1969, qual das alternativas abaixo NÃO representa uma missão da Polícia Militar?",
        alternativas: [
            "Executar o policiamento ostensivo, fardado e exclusivo",
            "Atuar de maneira preventiva como força de dissuasão",
            "Atuar de maneira repressiva em caso de perturbação da ordem",
            "Realizar atividades de inteligência e investigação criminal de forma exclusiva",
            "Atender à convocação do Governo Federal em caso de guerra externa"
        ],
        correta: 3
    },
    {
        id: 2,
        pergunta: "Segundo o Art. 8º do Decreto-Lei nº 667/1969, a hierarquia nas Polícias Militares é composta por:",
        alternativas: [
            "Oficiais de Polícia, Praças Especiais e Praças de Polícia",
            "Oficiais Superiores, Oficiais Subalternos e Soldados",
            "Praças, Cabos e Sargentos",
            "Apenas Oficiais e Soldados",
            "Oficiais, Subtenentes e Soldados"
        ],
        correta: 0
    },
    {
        id: 3,
        pergunta: "Em relação à inatividade dos militares estaduais, conforme o Decreto-Lei nº 667/1969, a remuneração integral é garantida quando:",
        alternativas: [
            "Cumpridos 30 anos de serviço, sendo 25 de atividade militar",
            "Cumpridos 35 anos de serviço, sendo no mínimo 30 anos de exercício de atividade de natureza militar",
            "Cumpridos 25 anos de serviço, independentemente da atividade",
            "Cumpridos 40 anos de serviço, sendo 35 de atividade militar",
            "Cumpridos 30 anos de serviço, sendo 20 de atividade militar"
        ],
        correta: 1
    },
    {
        id: 4,
        pergunta: "De acordo com o Decreto-Lei nº 667/1969, o militar reformado por invalidez decorrente do exercício da função terá direito a:",
        alternativas: [
            "Remuneração proporcional ao tempo de serviço",
            "Remuneração integral, calculada com base na remuneração do posto ou graduação que possuir por ocasião da transferência",
            "Apenas 50% da remuneração",
            "Remuneração com redução de 20%",
            "Apenas o auxílio-doença do INSS"
        ],
        correta: 1
    },
    {
        id: 5,
        pergunta: "Segundo o Decreto-Lei nº 667/1969, a Justiça Militar Estadual de primeira instância é constituída por:",
        alternativas: [
            "Tribunal de Justiça e Superior Tribunal Militar",
            "Conselhos de Justiça e Juiz de Direito do Juízo Militar",
            "Apenas pelo Tribunal de Justiça Militar",
            "Conselhos de Disciplina e Corregedoria",
            "Apenas pelo Juiz de Direito"
        ],
        correta: 1
    },
    {
        id: 6,
        pergunta: "Conforme o Decreto-Lei nº 667/1969, é vedado ao pessoal das Polícias Militares em serviço ativo:",
        alternativas: [
            "Frequentar cursos de aperfeiçoamento profissional",
            "Fazer parte de firmas comerciais ou empresas industriais",
            "Participar de atividades físicas",
            "Utilizar transporte público",
            "Residir em área urbana"
        ],
        correta: 1
    },
    {
        id: 7,
        pergunta: "O Art. 23 do Decreto-Lei nº 667/1969 proíbe que elementos das Polícias Militares compareçam fardados, exceto em serviço, em:",
        alternativas: [
            "Cerimônias oficiais",
            "Eventos esportivos",
            "Manifestações de caráter político-partidário",
            "Reuniões comunitárias",
            "Solenidades religiosas"
        ],
        correta: 2
    },
    {
        id: 8,
        pergunta: "De acordo com o Art. 24-B do Decreto-Lei nº 667/1969, a pensão militar:",
        alternativas: [
            "É igual a 70% da remuneração do militar da ativa",
            "É igual ao valor da remuneração do militar da ativa ou em inatividade",
            "É calculada com base no salário mínimo",
            "Não pode ser revista automaticamente",
            "É paga apenas aos filhos menores de idade"
        ],
        correta: 1
    },
    {
        id: 9,
        pergunta: "Sobre o militar temporário, previsto no Art. 24-I do Decreto-Lei nº 667/1969, é correto afirmar que:",
        alternativas: [
            "O prazo máximo de permanência no serviço ativo será de 10 anos",
            "O percentual máximo é de 70% do efetivo do respectivo posto ou graduação",
            "O prazo máximo de permanência será de 8 anos, observado percentual máximo de 50% do efetivo",
            "Não faz jus aos benefícios de inatividade por invalidez",
            "O tempo de serviço não pode ser contado para aposentadoria no RGPS"
        ],
        correta: 2
    },
    {
        id: 10,
        pergunta: "Segundo o Art. 27 do Decreto-Lei nº 667/1969, em igualdade de posto e graduação, tem precedência hierárquica sobre o pessoal das Polícias Militares:",
        alternativas: [
            "Os policiais civis",
            "Os bombeiros militares",
            "Os militares das Forças Armadas em serviço ativo e da reserva remunerada",
            "Os guardas municipais",
            "Os agentes de trânsito"
        ],
        correta: 2
    },
    {
        id: 11,
        pergunta: "De acordo com a Lei nº 14.751/2023, as polícias militares são instituições:",
        alternativas: [
            "Temporárias e facultativas",
            "Militares, permanentes e indispensáveis à preservação da ordem pública",
            "Civis, permanentes e administrativas",
            "Temporárias e vinculadas apenas ao SUSP",
            "Facultativas e de caráter privado"
        ],
        correta: 1
    },
    {
        id: 12,
        pergunta: "A Lei nº 14.751/2023 estabelece que as polícias militares integram quais sistemas?",
        alternativas: [
            "Apenas o Sistema Único de Segurança Pública (SUSP)",
            "SUSP, Defesa Nacional, SINPDEC e SISNAMA",
            "SUSP, Ministério Público e Poder Judiciário",
            "Apenas a Defesa Nacional",
            "SUSP e SISNAMA apenas"
        ],
        correta: 1
    },
    {
        id: 13,
        pergunta: "Conforme o Art. 10 da Lei nº 14.751/2023, a estrutura básica das polícias militares deve observar preferencialmente:",
        alternativas: [
            "Apenas órgãos de direção e execução",
            "Órgãos de direção, assessoramento, apoio, execução e correição",
            "Apenas órgãos de direção e apoio",
            "Órgãos de comando, operações e logística",
            "Órgãos de planejamento e fiscalização apenas"
        ],
        correta: 1
    },
    {
        id: 14,
        pergunta: "De acordo com a Lei nº 14.751/2023, os Oficiais Superiores são:",
        alternativas: [
            "Capitão, 1º Tenente e 2º Tenente",
            "Coronel, Tenente-Coronel e Major",
            "Subtenente e Sargentos",
            "Aspirante a Oficial e Cadete",
            "Apenas Coronel e Tenente-Coronel"
        ],
        correta: 1
    },
    {
        id: 15,
        pergunta: "As Praças Especiais, segundo a Lei nº 14.751/2023, são:",
        alternativas: [
            "Subtenente, Sargentos, Cabo e Soldado",
            "Aspirante a Oficial, Cadete e Aluno-Oficial",
            "Coronel, Tenente-Coronel e Major",
            "1º Tenente e 2º Tenente",
            "Aluno-Sargento e Aluno-Soldado"
        ],
        correta: 1
    },
    {
        id: 16,
        pergunta: "São condições básicas para ingresso nas polícias militares, exceto:",
        alternativas: [
            "Ser brasileiro",
            "Estar quite com as obrigações militares e eleitorais",
            "Ter procedimento social e idoneidade moral irrepreensíveis",
            "Comprovar escolaridade de nível médio",
            "Ser aprovado em exame toxicológico com larga janela de detecção"
        ],
        correta: 3
    },
    {
        id: 17,
        pergunta: "Segundo a Lei nº 14.751/2023, a progressão do militar na hierarquia será fundamentada:",
        alternativas: [
            "Apenas no tempo de serviço",
            "Exclusivamente na antiguidade",
            "No valor moral e profissional, de forma seletiva, gradual e sucessiva",
            "Apenas no merecimento",
            "Na vontade do comandante-geral"
        ],
        correta: 2
    },
    {
        id: 18,
        pergunta: "Além da antiguidade e merecimento, são admitidas promoções:",
        alternativas: [
            "Apenas por bravura",
            "Apenas post mortem",
            "Por bravura, post mortem e por completar requisitos para inatividade",
            "Apenas por completar requisitos para inatividade",
            "Por bravura e por antiguidade exclusivamente"
        ],
        correta: 2
    },
    {
        id: 19,
        pergunta: "Qual das alternativas NÃO é uma garantia prevista no Art. 18 da Lei nº 14.751/2023?",
        alternativas: [
            "Uso privativo dos uniformes, insígnias e distintivos",
            "Documento de identidade militar com livre porte de arma",
            "Prisão em unidade prisional comum, independentemente do tipo de crime",
            "Comunicação ao superior hierárquico no caso de prisão",
            "Assistência jurídica quando acusado de prática de infração decorrente do exercício da função"
        ],
        correta: 2
    },
    {
        id: 20,
        pergunta: "Sobre a prisão de militares estaduais, a Lei nº 14.751/2023 estabelece que:",
        alternativas: [
            "Podem ser presos por qualquer autoridade sem ordem escrita",
            "A prisão pode ser em estabelecimento penitenciário comum imediatamente",
            "A prisão criminal antes do trânsito em julgado deve ser em unidade prisional militar",
            "Não têm direito a prisão especial",
            "A prisão disciplinar pode ser em delegacia comum"
        ],
        correta: 2
    },
    {
        id: 21,
        pergunta: "De acordo com a Lei nº 14.751/2023, o militar tem direito a estabilidade após:",
        alternativas: [
            "1 ano de efetivo serviço",
            "3 anos de efetivo serviço nas corporações militares (na PMPR é a partir dos 10 anos)",
            "5 anos de efetivo serviço",
            "10 anos de efetivo serviço em qualquer situação",
            "Apenas após a promoção a Oficial"
        ],
        correta: 1
    },
    {
        id: 22,
        pergunta: "É vedado aos militares em atividade, conforme a Lei nº 14.751/2023:",
        alternativas: [
            "Participar de cursos de capacitação",
            "Divulgar imagens de pessoas sob sua custódia sem prévia autorização judicial",
            "Utilizar equipamentos de proteção individual",
            "Fazer parte de associações de classe",
            "Residir em imóvel funcional"
        ],
        correta: 1
    },
    {
        id: 23,
        pergunta: "Sobre o militar candidato a mandato eletivo com menos de 10 anos de serviço, a Lei nº 14.751/2023 determina que:",
        alternativas: [
            "Será agregado com remuneração",
            "Será afastado do serviço ativo",
            "Passará automaticamente para a reserva remunerada",
            "Poderá acumular o serviço militar com a campanha eleitoral",
            "Será exonerado do cargo"
        ],
        correta: 1
    },
    {
        id: 24,
        pergunta: "O militar com mais de 10 anos de serviço que for candidato a mandato eletivo, segundo a Lei nº 14.751/2023:",
        alternativas: [
            "Será afastado do serviço ativo sem remuneração",
            "Será agregado com remuneração e, se eleito, passará para a reserva remunerada",
            "Perderá o posto e a patente",
            "Será exonerado automaticamente",
            "Terá que pedir licença sem vencimentos"
        ],
        correta: 1
    },
    {
        id: 25,
        pergunta: "O militar eleito que tomar posse como suplente, conforme a Lei nº 14.751/2023:",
        alternativas: [
            "Será excluído do quadro da corporação",
            "Será agregado ao respectivo quadro, devendo optar por uma das remunerações",
            "Permanecerá em serviço ativo normalmente",
            "Perderá todos os direitos militares",
            "Terá que se aposentar compulsoriamente"
        ],
        correta: 1
    },
    {
        id: 26,
        pergunta: "De acordo com a Lei nº 14.751/2023, a perda do posto e da patente somente ocorrerá:",
        alternativas: [
            "Por decisão do Comandante-Geral da PM",
            "Por decisão do Governador do Estado",
            "Por decisão do Tribunal de Justiça Militar ou Tribunal de Justiça",
            "Por ato do Secretário de Segurança Pública",
            "Por decisão do Conselho de Ética"
        ],
        correta: 2
    },
    {
        id: 27,
        pergunta: "Segundo o Decreto-Lei nº 667/1969, quando houver alteração nas regras dos militares das Forças Armadas, as normas gerais de inatividade e pensão dos militares estaduais:",
        alternativas: [
            "Devem ser ajustadas para manutenção da simetria",
            "Permanecem inalteradas",
            "Devem ser revogadas imediatamente",
            "Podem ser alteradas apenas após 5 anos",
            "Não têm relação com as Forças Armadas"
        ],
        correta: 0
    },
    {
        id: 28,
        pergunta: "A contribuição sobre a remuneração dos militares estaduais, conforme o Decreto-Lei nº 667/1969:",
        alternativas: [
            "Tem alíquota definida por cada estado",
            "Tem alíquota igual à aplicável às Forças Armadas",
            "Não incide sobre militares inativos",
            "É destinada ao INSS",
            "É facultativa para militares temporários"
        ],
        correta: 1
    },
    {
        id: 29,
        pergunta: "São garantias previstas na Lei nº 14.751/2023, EXCETO:",
        alternativas: [
            "Acesso livre, em razão do serviço, aos locais sujeitos a fiscalização",
            "Precedência em audiências judiciais na qualidade de testemunha",
            "Pagamento antecipado de diárias por deslocamento",
            "Participação em sociedade comercial como administrador",
            "Ajuda de custo quando removido de sua lotação para outro Município"
        ],
        correta: 3
    },
    {
        id: 30,
        pergunta: "Segundo a Lei nº 14.751/2023, as polícias militares e corpos de bombeiros militares subordinam-se:",
        alternativas: [
            "Ao Presidente da República",
            "Ao Ministério da Justiça",
            "Aos Governadores dos Estados, DF e Territórios",
            "Ao Comandante do Exército",
            "Ao Ministro da Defesa"
        ],
        correta: 2
    }
];

// ================================================================
//  ESTADO DA APLICAÇÃO
// ================================================================
var estado = {
    respondidas: 0,
    acertos: 0,
    erros: 0,
    bloqueadas: {}
};

var letras = ["A", "B", "C", "D", "E"];

// ================================================================
//  RENDERIZAR QUESTÕES
// ================================================================
function renderizarQuestoes() {
    var container = document.getElementById("questoes-container");
    container.innerHTML = "";

    for (var q = 0; q < questoesData.length; q++) {
        var questao = questoesData[q];
        
        var divQuestao = document.createElement("div");
        divQuestao.className = "questao";
        divQuestao.id = "questao-" + questao.id;

        var pergunta = document.createElement("div");
        pergunta.className = "pergunta";
        pergunta.textContent = questao.id + ". " + questao.pergunta;
        divQuestao.appendChild(pergunta);

        var divAlt = document.createElement("div");
        divAlt.className = "alternativas";

        for (var i = 0; i < questao.alternativas.length; i++) {
            var alt = document.createElement("div");
            alt.className = "alternativa";
            alt.dataset.indice = i;
            alt.dataset.questaoId = questao.id;
            alt.id = "alt-" + questao.id + "-" + i;

            var label = document.createElement("span");
            label.className = "label";
            label.textContent = letras[i] + ")";
            alt.appendChild(label);

            var txt = document.createTextNode(" " + questao.alternativas[i]);
            alt.appendChild(txt);

            var feedback = document.createElement("span");
            feedback.className = "feedback";
            feedback.textContent = " ✓";
            alt.appendChild(feedback);

            alt.addEventListener("click", function(e) {
                var target = e.currentTarget;
                var questaoId = parseInt(target.dataset.questaoId);
                var indice = parseInt(target.dataset.indice);
                responderQuestao(questaoId, indice);
            });

            divAlt.appendChild(alt);
        }

        divQuestao.appendChild(divAlt);
        container.appendChild(divQuestao);
    }

    atualizarResultado();
}

// ================================================================
//  RESPONDER QUESTÃO
// ================================================================
function responderQuestao(questaoId, indiceSelecionado) {
    if (estado.bloqueadas[questaoId]) {
        return;
    }

    var questao = null;
    for (var q = 0; q < questoesData.length; q++) {
        if (questoesData[q].id === questaoId) {
            questao = questoesData[q];
            break;
        }
    }
    
    if (!questao) return;

    var isCorreta = (indiceSelecionado === questao.correta);

    estado.bloqueadas[questaoId] = true;
    estado.respondidas++;

    if (isCorreta) {
        estado.acertos++;
    } else {
        estado.erros++;
    }

    var divQuestao = document.getElementById("questao-" + questaoId);
    if (isCorreta) {
        divQuestao.className = "questao correta";
    } else {
        divQuestao.className = "questao errada";
    }

    var alternativas = divQuestao.querySelectorAll(".alternativa");
    for (var i = 0; i < alternativas.length; i++) {
        alternativas[i].classList.add("bloqueado");
        if (i === questao.correta) {
            alternativas[i].classList.add("correta");
        } else if (i === indiceSelecionado && !isCorreta) {
            alternativas[i].classList.add("errada");
        }
        alternativas[i].classList.remove("selecionada");
    }

    atualizarResultado();
}

// ================================================================
//  ATUALIZAR RESULTADO
// ================================================================
function atualizarResultado() {
    document.getElementById("acertos").textContent = estado.acertos;
    document.getElementById("erros").textContent = estado.erros;
    document.getElementById("total").textContent = estado.respondidas;
}

// ================================================================
//  REINICIAR
// ================================================================
function reiniciar() {
    estado = {
        respondidas: 0,
        acertos: 0,
        erros: 0,
        bloqueadas: {}
    };
    renderizarQuestoes();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ================================================================
//  INICIALIZAR
// ================================================================
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderizarQuestoes);
} else {
    renderizarQuestoes();
}