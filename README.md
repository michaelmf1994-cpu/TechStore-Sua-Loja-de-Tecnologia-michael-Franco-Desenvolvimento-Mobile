# TechStore — Simulador de Compras

**Aluno(a):** SEU NOME AQUI  
**Trilha:** PREENCHER NOME OFICIAL DA TRILHA  
**Desafio:** Minha Loja — Simulador de Compras

## Apresentação
A TechStore é uma loja fictícia de acessórios de tecnologia. O site permite simular compras informando a quantidade desejada de cada produto.

## Produtos
| Produto | Preço |
| --- | ---: |
| Mouse sem fio | R$ 59,90 |
| Teclado mecânico | R$ 149,90 |
| Headset gamer | R$ 119,90 |

Compras com subtotal a partir de **R$ 300,00** recebem **10% de desconto**.

## Tecnologias
- HTML5: estrutura da página.
- CSS3: visual e adaptação a diferentes telas.
- JavaScript: entrada das quantidades, cálculos, desconto e resultado.

## Como executar
1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` no navegador.
3. Clique em **Simular compra**.
4. Informe as quantidades nas janelas exibidas. Use 0 para não comprar um item.
5. Confira o resumo e o total no alerta final.

## Captura de tela
> **Antes de entregar:** abra a página no navegador, tire uma captura real, salve como `assets/screenshot.png` e mantenha a referência abaixo.

![Captura de tela da TechStore](assets/screenshot.png)

## Testes realizados
> **Preencher depois de executar os testes no navegador.** Casos sugeridos:

| Quantidades (mouse, teclado, headset) | Resultado esperado | Resultado obtido |
| --- | --- | --- |
| 0, 0, 0 | Mensagem de nenhum produto selecionado | PENDENTE |
| 1, 0, 0 | Total R$ 59,90, sem desconto | PENDENTE |
| 1, 1, 1 | Subtotal R$ 329,70; desconto R$ 32,97; total R$ 296,73 | PENDENTE |
| -1 (em qualquer produto) | Solicitar novamente uma quantidade válida | PENDENTE |
| Texto em vez de número | Solicitar novamente uma quantidade válida | PENDENTE |
| Cancelar uma pergunta | Encerrar a simulação sem mostrar compra | PENDENTE |

## Dificuldade encontrada e aprendizado
> **Escrever com suas palavras depois de testar:** qual parte foi mais difícil? O que você aprendeu sobre `prompt()`, `Number()`, condições ou cálculos?

## Uso de inteligência artificial
Utilizei o ChatGPT como apoio para propor a estrutura da loja, criar uma versão inicial dos arquivos e explicar a lógica da simulação. **Antes da entrega, descrever aqui as adaptações que realmente fiz e como conferi os resultados no navegador.**

## Observação
Projeto educativo. Não realiza pagamentos nem compras reais.
