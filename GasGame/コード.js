// プレイエリアは20*20 上が0で下が20なので注意
// targetElevationはプレイヤーがこれから目指す高さ
// currentElevationCellは現在のプレイヤーの高さ  
// Jumpボタンが押されたらtargetElevationを-5し、上昇するようにする
// targetElevationに到達しったら20を設定し地面に落ちるようにする
// 上昇と下降は毎フレーム時±1移動する

// ゲームのマスタ関数
function main() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('index');
  SpreadsheetApp.getUi().showSidebar(htmlOutput);

  const sheet = SpreadsheetApp.getActiveSheet();
  
  const drawings = SpreadsheetApp.getActiveSheet().getDrawings();
  var targetElevationCell = sheet.getRange(1, 1);
  var currentElecationCell = sheet.getRange(1, 2);
  var targetElecation = targetElevationCell.getValue();
  var currentElecation = currentElecationCell.getValue();
  var score = 0;
  
  // ブロック位置初期化
  var blockPosition = [Math.floor( Math.random () * 20) - 4, 20]
  
  Logger.log(drawings);
  // メインループ開始
  sheet.getRange(23, 10).setValue("GameStart")
  while(true){
    // セルから現在のプレイヤーの情報をロード
    targetElevation = targetElevationCell.getValue();
    currentElecation = currentElecationCell.getValue();
    
    // ブロックが左端に来たら再初期化
    blockPosition[1] -= 1;
    if(blockPosition[1] < 1 ) blockPosition = [Math.floor( Math.random () * 20) - 4, 20];
    
    // プレイヤー移動処理
    if (currentElecation >= 0 && currentElecation > targetElevation ) currentElecation--;
    else if (currentElecation <= 20 && currentElecation < targetElevation ) currentElecation++;
    
    // セルに数値反映
    if(currentElecation == targetElevation) targetElevation = 20;
    currentElecationCell.setValue(currentElecation)
    targetElevationCell.setValue(targetElevation)
    
    // 当たり判定処理
    // ブロックの起点(左上)から下3セルとかぶっていたらゲームオーバー
    if(blockPosition[1] == 10 && blockPosition[0] <= currentElecation && (blockPosition[0] + 3)  >= currentElecation){
      sheet.getRange(23, 10).setValue("GameOver")
      // スコアを書き込む
      sheet.getRange(24, 10).setValue(score)
      break;
    }
    
    score += 10
    
    // 描画処理
    // x軸は湖底yはジャンプする
    drawings[0].setPosition(currentElecation, 10, 0, 0);
    drawings[2].setPosition(blockPosition[0], blockPosition[1], 0, 0);
  }
}

function showSidebar() {
  var htmlOutput = HtmlService.createHtmlOutputFromFile('index');
  DocumentApp.getUi().showSidebar(htmlOutput);
}

// プレイヤージャンプ処理
function playerJunp(){
  const sheet = SpreadsheetApp.getActiveSheet();
  targetElevationCell = sheet.getRange(1, 1);
  currentElecationCell = sheet.getRange(1, 2);
  targetElevationCell.setValue(currentElecationCell.getValue() - 5);
  
}

