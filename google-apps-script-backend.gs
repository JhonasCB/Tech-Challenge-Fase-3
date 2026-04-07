// ============================================================
// iFood Insiders — Backend de Lista de Espera
// Google Apps Script · Deploy como Web App
// ============================================================
//
// INSTRUÇÕES DE CONFIGURAÇÃO (5 minutos):
//
// 1. Acesse script.google.com e clique em "Novo projeto"
// 2. Nomeie o projeto: "iFood Insiders Waitlist"
// 3. Delete o código padrão e cole TODO este arquivo
// 4. Crie uma Google Planilha em drive.google.com
//    - Nomeie como "iFood Insiders - Lista de Espera"
//    - Copie o ID da planilha da URL:
//      docs.google.com/spreadsheets/d/ >>> ESSE_ID_AQUI <<< /edit
// 5. Cole o ID abaixo na variável SHEET_ID
// 6. Clique em "Implantar" > "Nova implantação"
//    - Tipo: App da Web
//    - Executar como: Eu (sua conta)
//    - Quem tem acesso: Qualquer pessoa
// 7. Autorize o acesso quando solicitado
// 8. Copie a URL de implantação gerada
// 9. No arquivo ifood-insiders-landing_v2.html, cole essa URL
//    na variável APPS_SCRIPT_URL no topo do bloco <script>
//
// ============================================================

const SHEET_ID = 'COLE_SEU_SHEET_ID_AQUI';

// Recebe os dados do formulário (POST)
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);

    const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
    let sheet = spreadsheet.getSheetByName('Inscritos');

    // Cria a aba se não existir
    if (!sheet) {
      sheet = spreadsheet.insertSheet('Inscritos');
      sheet.appendRow([
        'Data/Hora',
        'Nome',
        'Email',
        'Frequência de uso',
        'Interesse principal'
      ]);
      // Formata o cabeçalho
      const header = sheet.getRange(1, 1, 1, 5);
      header.setFontWeight('bold');
      header.setBackground('#E8002D');
      header.setFontColor('#FFFFFF');
    }

    // Traduz os valores dos selects para português
    const frequencyMap = {
      'daily':      'Quase todo dia',
      'weekly':     '2 a 3 vezes por semana',
      'occasional': '1 vez por semana',
      'rare':       '1 a 2 vezes no mês'
    };
    const interestMap = {
      'coupons':   'Cupons de desconto',
      'freefrete': 'Frete grátis',
      'status':    'Títulos e status no app',
      'partners':  'Benefícios com parceiros'
    };

    sheet.appendRow([
      new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      data.name,
      data.email,
      frequencyMap[data.frequency] || data.frequency,
      interestMap[data.interest]   || data.interest
    ]);

    // Conta inscritos (descontando a linha de cabeçalho)
    const total = Math.max(0, sheet.getLastRow() - 1);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, count: total }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Retorna o total de inscritos (GET) — usado pelo contador da landing
function doGet(e) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName('Inscritos');
    const count = sheet ? Math.max(0, sheet.getLastRow() - 1) : 0;

    return ContentService
      .createTextOutput(JSON.stringify({ success: true, count: count }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, count: 0 }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
