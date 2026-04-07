# iFood Insiders — Landing Page de Lista de Espera

> *"Você não usa o iFood. Você faz parte dele."*

---

## O que é isso?

Uma landing page de validação para o **iFood Insiders** — um programa de membros e fidelidade pensado para os usuários que realmente vivem dentro do app. Sem mensalidade, sem pegadinha: quanto mais você pede, mais você avança.

O projeto foi construído como **Tech Challenge da Fase 3** da Pós-Tech em Digital Product Management da FIAP. A ideia não é só entregar um PDF bonito — é criar algo que pareça real, testável e que qualquer pessoa conseguisse abrir e entender em 30 segundos.

---

## O que o Insiders propõe?

- **Sistema de XP e níveis** — Bronze, Prata, Ouro e Platina, baseados no uso real
- **Streaks semanais** — pedidos consecutivos multiplicam o XP
- **Títulos sazonais colecionáveis** — Copa do Mundo, Carnaval, Black Friday, Natal
- **Integração com o Clube iFood** — assinantes do Clube ganham 1,5× XP (mecânica "Duplo Membro")
- **Gratuito** — o nível reflete presença, não gasto

---

## O que tem nesse repositório?

| Arquivo | O que faz |
|---|---|
| `index.html` | Landing page completa — HTML, CSS e JS em arquivo único |
| `google-apps-script-backend.gs` | Script para salvar inscrições no Google Sheets via Apps Script |
| `README.md` | Você está aqui |

---

## Stack utilizada

- **HTML/CSS/JS** puro — sem framework frontend
- **Bootstrap 5** — grid responsivo para não quebrar em nenhum dispositivo
- **Google Fonts** — Bebas Neue (títulos) + DM Sans (corpo)
- **Google Apps Script** — backend serverless para o formulário de lista de espera
- **Google Sheets** — banco de dados dos inscritos

Sim, zero dependências pagas. Sim, funciona.

---

## Como rodar localmente

Não precisa de servidor, build, npm install, nada disso.

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/ifood-insiders.git

# Abre o arquivo no navegador
open index.html
```

Isso. É só isso.

---

## Como conectar o formulário ao Google Sheets

O formulário já está funcional visualmente. Para salvar os dados de verdade:

1. Crie uma planilha no Google Drive
2. Acesse [script.google.com](https://script.google.com) e crie um novo projeto
3. Cole o conteúdo de `google-apps-script-backend.gs`
4. Substitua o `SHEET_ID` pelo ID da sua planilha (está na URL)
5. Implante como **Web App** com acesso "Qualquer pessoa"
6. Cole a URL gerada na variável `APPS_SCRIPT_URL` dentro do `index.html`

O tutorial completo está nos comentários do próprio arquivo `.gs`.

---

## Contexto acadêmico

**Instituição:** FIAP
**Curso:** Pós-Tech — Digital Product Management
**Fase:** 3 — Tech Challenge
**Ano:** 2026

O desafio propõe a criação de um produto digital com pesquisa, proposta de valor, prototipação e validação. O iFood Insiders foi desenvolvido como resposta a uma oportunidade real identificada no ecossistema iFood: usuários frequentes que não recebem nenhum reconhecimento por sua fidelidade orgânica à plataforma.

---

## Por que landing page e não só um deck?

Porque qualquer um faz slide. Uma landing page com formulário funcional, contador dinâmico de inscritos e backend real mostra que a ideia não existe só no Figma — ela pode existir no mundo.

E honestamente? É mais divertido de construir assim.

---

*Desenvolvido por João Mór — 2026*
