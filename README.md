# TechStore — Simulador de Compras

**Aluno:** MICHAEL FRANCO PACHECO OLIVEIRA  
**Trilha:** Desenvolvimento Mobile  
**Desafio:** Minha Loja — Simulador de Compras

## Apresentação

A **TechStore** é uma loja fictícia de acessórios de tecnologia, criada para praticar HTML, CSS e JavaScript. A página apresenta produtos, descrições e preços e permite simular uma compra informando as quantidades desejadas.

## Produtos

| Produto | Preço unitário |
| --- | ---: |
| Mouse sem fio | R$ 59,90 |
| Teclado mecânico | R$ 149,90 |
| Headset gamer | R$ 119,90 |

O sistema concede **10% de desconto** quando o subtotal da compra é igual ou superior a **R$ 300,00**.

## Tecnologias utilizadas

- **HTML5:** estrutura da página, apresentação dos produtos e botão de simulação.
- **CSS3:** identidade visual, organização da vitrine e adaptação a diferentes tamanhos de tela.
- **JavaScript:** perguntas com `prompt()`, conversão com `Number()`, cálculos, validação de quantidades, desconto e resumo com `alert()`.

## Como executar

1. Baixe o repositório usando **Code → Download ZIP** e extraia a pasta, ou clone o repositório com Git.
2. Abra a pasta do projeto no **Visual Studio Code**.
3. Abra o arquivo `index.html` no navegador. Também é possível iniciar um servidor local pelo terminal, dentro da pasta do projeto, com `python -m http.server 5500` e acessar `http://localhost:5500`.
4. Role a página até a seção **Simular compra** e clique no botão.
5. Informe a quantidade de cada produto nas janelas que aparecerem. Digite `0` quando não quiser comprar algum item.
6. Confira o resumo final, incluindo subtotal, desconto e total da compra.

## Capturas de tela e evidências

As imagens do teste devem ser adicionadas à pasta `assets` do repositório. Foram registradas capturas da interface, das perguntas de quantidade e do resumo final. Após o envio, as referências abaixo mostrarão as imagens no GitHub.

**Interface da loja**

![Interface da TechStore](assets/screenshot.png)

**Pergunta sobre o teclado**

![Prompt de quantidade do teclado](assets/teste-teclado.png)

**Pergunta sobre o headset**

![Prompt de quantidade do headset](assets/teste-headset.png)

**Resumo final da compra**

![Resumo da compra e desconto](assets/teste-resultado.png)

## Testes realizados

### Teste documentado — Compra de vários produtos com desconto

No navegador, foi realizada uma simulação com **4 mouses**, **7 teclados** e **8 headsets**. O resultado exibido na janela de resumo foi conferido com os preços apresentados na loja:

| Produto | Quantidade | Cálculo | Valor obtido |
| --- | ---: | --- | ---: |
| Mouse sem fio | 4 | 4 × R$ 59,90 | R$ 239,60 |
| Teclado mecânico | 7 | 7 × R$ 149,90 | R$ 1.049,30 |
| Headset gamer | 8 | 8 × R$ 119,90 | R$ 959,20 |
| **Subtotal** | | | **R$ 2.248,10** |
| **Desconto de 10%** | | | **R$ 224,81** |
| **Total final** | | | **R$ 2.023,29** |

**Resultado:** o resumo exibido no navegador corresponde aos cálculos esperados. As capturas também mostram a solicitação de quantidades por meio de janelas do navegador.

### Testes adicionais a realizar

Ainda é importante verificar e registrar os seguintes casos:

- Digitar `0` para todos os produtos: deve aparecer a mensagem de que nenhum produto foi selecionado.
- Digitar `1`, `0`, `0`: o total esperado é **R$ 59,90**, sem desconto.
- Digitar `1`, `1`, `1`: subtotal **R$ 329,70**, desconto **R$ 32,97** e total **R$ 296,73**.
- Digitar uma quantidade negativa ou letras: o sistema deve solicitar uma quantidade válida.
- Cancelar uma das perguntas: a simulação deve ser encerrada.

Esses casos estão descritos como **pendentes de confirmação**, e não como testes já realizados.

## Dificuldade encontrada

No início, tive dificuldade para compreender algumas etapas do desafio, principalmente por ainda estar começando na área de programação. Para entender melhor o que precisava fazer, busquei aulas no YouTube e fui acompanhando as explicações passo a passo. Aos poucos, o que parecia complicado começou a fazer sentido. Uma das maiores dificuldades foi aprender a organizar os arquivos e publicar o projeto no GitHub. Apesar disso, cada etapa concluída me ajudou a ganhar mais confiança e perceber que sou capaz de aprender coisas novas com dedicação e prática.

## O que aprendi

Com esse desafio, tive a oportunidade de desenvolver meus primeiros conhecimentos práticos sobre a criação de uma loja virtual utilizando HTML, CSS e JavaScript. Aprendi a organizar uma página, apresentar produtos e preços e utilizar a programação para simular uma compra. Além do conhecimento técnico, essa experiência despertou ainda mais meu interesse pelo empreendedorismo. Percebi que a tecnologia pode ser uma ferramenta importante para transformar ideias em oportunidades e, quem sabe, futuramente desenvolver meu próprio negócio.

## Como utilizei a inteligência artificial

Utilizei a inteligência artificial como ferramenta de apoio durante o desenvolvimento do desafio. Ela me ajudou a compreender melhor as atividades, esclarecer dúvidas e acompanhar explicações passo a passo quando encontrava dificuldades. Também contribuiu com ideias para a organização e o visual da interface da TechStore, além de auxiliar na elaboração e revisão do código. Durante o processo, fui adaptando as orientações ao projeto e verificando seu funcionamento no navegador, realizando simulações de compra para conferir os cálculos e os resultados apresentados. Essa experiência me mostrou que a inteligência artificial pode ajudar no aprendizado, mas que é importante entender e testar aquilo que está sendo desenvolvido.

## Observação

Este é um projeto educativo de simulação. Não realiza pagamentos nem compras reais.
