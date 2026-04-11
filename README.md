# 🍔 iFood Insiders — Programa de Membros

> *Você não usa o iFood. Você faz parte dele.*

Landing page MVP do **iFood Insiders**, um programa de fidelidade por progressão para usuários frequentes do iFood — desenvolvido como Tech Challenge da Fase 3 da Pós-Tech em Digital Product Management pela FIAP, 2026.

---

## 🧠 O Conceito

A maioria dos programas de fidelidade premia quem **gasta mais**. O Insiders premia quem **está sempre lá**.

Cada pedido completo gera XP. Pedidos em sequência formam streaks com multiplicadores. Com XP suficiente, o usuário sobe de nível — de **Bronze** a **Platina** — e desbloqueia benefícios reais: cupons, frete especial, acesso antecipado a promoções e vantagens com parceiros.

Sem mensalidade. Sem taxa de adesão. Só o seu histórico falando por você.

---

## ✨ Funcionalidades da Landing Page

| Seção | O que faz |
|---|---|
| **Hero** | Apresentação do programa com call-to-action direto para a lista de espera |
| **Como funciona** | Explica a mecânica em 4 passos: pedido → streak → nível → benefício |
| **Clube + Insiders** | Diferencia os dois produtos e apresenta o bônus de Duplo Membro (1,5× XP) |
| **Níveis** | Bronze, Prata, Ouro e Platina — com faixas de XP e benefícios por tier |
| **Títulos Sazonais** | Conquistas colecionáveis ligadas a datas especiais (Copa 2026, Carnaval, Black Friday, Natal) |
| **Recompensas** | Visão geral das categorias de benefício por nível |
| **Mockup do app** | Visualização de como o Insiders ficaria no perfil do iFood |
| **Roadmap** | Transparência sobre o estágio atual e o que vem a seguir |
| **FAQ** | Accordion com as principais dúvidas respondidas |
| **Formulário** | Lista de espera com integração ao Google Sheets via Apps Script |

---

## 🛠️ Stack Técnica

```
HTML5 + CSS3 + JavaScript vanilla
Bootstrap 5.3.3          → grid responsivo + collapse mobile
Google Fonts             → Bebas Neue · DM Sans
Google Apps Script       → backend serverless para o formulário
Google Sheets            → banco de dados da lista de espera
```

Sem frameworks JavaScript. Sem build step. Abre no navegador e funciona.

---

## 📱 Responsividade

A página foi construída mobile-first com Bootstrap 5 e breakpoints customizados:

- **≥ 1100px** — layout wide com seções em duas colunas e conteúdo centrado em 1240px
- **768px – 1100px** — tablet, uma coluna, ajustes tipográficos
- **≤ 600px** — mobile completo, nav com hamburger, hero ajustado, formulário empilhado
- **≤ 380px** — telas muito pequenas, tamanhos mínimos garantidos

---

## 🔧 Backend — Google Apps Script

O arquivo `google-apps-script-backend.gs` é um App da Web serverless que:

- **GET** → retorna o total de inscritos na planilha (`{ count: N }`) para o contador dinâmico da página
- **POST** → recebe os dados do formulário, valida, verifica duplicatas por e-mail e insere uma nova linha na planilha com timestamp

### Como conectar

1. Abra o Google Sheets da sua planilha de inscrições
2. Vá em **Extensões → Apps Script** e cole o conteúdo de `google-apps-script-backend.gs`
3. Clique em **Implantar → Nova implantação**
   - Tipo: **App da Web**
   - Executar como: **Eu mesmo**
   - Acesso: **Qualquer pessoa**
4. Copie a URL gerada e cole na constante `APPS_SCRIPT_URL` dentro do HTML

---

## 🗂️ Estrutura do Repositório

```
📦 Tech-Challenge-Fase-3
 ┣ 📄 ifood-insiders-landing_v2.html   → landing page completa (self-contained)
 ┣ 📄 google-apps-script-backend.gs   → backend Google Sheets
 ┗ 📄 README.md                        → você está aqui
```

---

## 🚀 Como rodar localmente

Não precisa de servidor. Literalmente:

```bash
# Clone o repositório
git clone https://github.com/JhonasCB/Tech-Challenge-Fase-3.git

# Abra o arquivo no navegador
start ifood-insiders-landing_v2.html   # Windows
open ifood-insiders-landing_v2.html    # macOS
```

Ou simplesmente arraste o `.html` para o navegador.

---

## 🎓 Contexto Acadêmico

Este projeto é o MVP da **Fase 3 do Tech Challenge** da Pós-Tech em **Digital Product Management** pela FIAP (2026). O objetivo é validar a proposta de valor do iFood Insiders com usuários reais antes de qualquer desenvolvimento de produto.

A landing page é o instrumento de validação: mede interesse através da taxa de conversão do formulário de lista de espera, e coleta dados qualitativos sobre frequência de uso e preferências de benefício.

---

## 👤 Autor

**João Mór** — Pós-Tech Digital Product Management · FIAP 2026  
[github.com/JhonasCB](https://github.com/JhonasCB)

---

<p align="center">
  Feito com 🍔 e muito XP acumulado
</p>
