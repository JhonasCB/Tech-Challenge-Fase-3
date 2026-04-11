// ─────────────────────────────────────────────────────────────────────────────
// iFood Insiders · Google Apps Script Backend
// Conecta o formulário da landing page ao Google Sheets.
//
// COMO USAR:
//   1. Abra o Google Sheets da sua planilha de inscrições
//   2. Extensões → Apps Script → cole este código
//   3. Implante: Implantar → Nova implantação → Tipo: App da Web
//      · Executar como: Eu mesmo
//      · Quem tem acesso: Qualquer pessoa (anônimo)
//   4. Copie a URL gerada e cole em APPS_SCRIPT_URL no HTML da landing page
// ─────────────────────────────────────────────────────────────────────────────

var SHEET_NAME = 'Inscrições'; // nome da aba na planilha

// ── GET: retorna o total de inscritos ────────────────────────────────────────
function doGet(e) {
  try {
    var sheet = getSheet();
    var count = Math.max(0, sheet.getLastRow() - 1); // desconta o cabeçalho
    return ContentService
      .createTextOutput(JSON.stringify({ count: count }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ count: 0, error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// ── POST: salva nova inscrição na planilha ───────────────────────────────────
function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var name      = sanitize(data.name      || '');
    var email     = sanitize(data.email     || '');
    var frequency = sanitize(data.frequency || '');
    var interest  = sanitize(data.interest  || '');

    if (!name || !email) {
      return respond({ success: false, error: 'Campos obrigatórios ausentes.' });
    }

    var sheet = getSheet();

    // Cria cabeçalho se a planilha estiver vazia
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Nome', 'E-mail', 'Frequência', 'Interesse']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
    }

    // Verifica se o e-mail já está cadastrado
    var emails = sheet.getRange(2, 3, Math.max(sheet.getLastRow() - 1, 1), 1).getValues();
    for (var i = 0; i < emails.length; i++) {
      if (emails[i][0].toLowerCase() === email.toLowerCase()) {
        return respond({ success: true, duplicate: true, count: sheet.getLastRow() - 1 });
      }
    }

    // Insere nova linha
    sheet.appendRow([
      new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' }),
      name,
      email,
      frequency,
      interest
    ]);

    var count = sheet.getLastRow() - 1;
    return respond({ success: true, count: count });

  } catch (err) {
    return respond({ success: false, error: err.message });
  }
}

// ── Helpers ──────────────────────────────────────────────────────────────────
function getSheet() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = ss.insertSheet(SHEET_NAME);
  }
  return sheet;
}

function respond(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function sanitize(str) {
  return String(str).trim().replace(/<[^>]*>/g, '');
}
