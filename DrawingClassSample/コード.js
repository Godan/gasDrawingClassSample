function printDrawingClass() {
  const drawings =SpreadsheetApp.getActiveSheet().getDrawings();

  Logger.log(drawings[0].getMethods)
}


function printDrawSize() {
  const drawings =SpreadsheetApp.getActiveSheet().getDrawings();

  // 縦(pixels)
  Logger.log(drawings[0].getHeight())
  // 横(pixels)
  Logger.log(drawings[0].getWidth())
  // 重なり順(数字が大きいものほど手前になります)
  Logger.log(drawings[0].getZIndex())
  // 設置されてるシート名
  Logger.log(drawings[0].getSheet())
}


function printDrawPosition() {
  const drawings =SpreadsheetApp.getActiveSheet().getDrawings();
  // 設置されている列番号
  Logger.log(drawings[0].getContainerInfo().getAnchorColumn())
  // 設置されている行番号
  Logger.log(drawings[0].getContainerInfo().getAnchorRow())
  // 設置されているセルの左上からどれだけx軸で離れているか(pixcel)
  Logger.log(drawings[0].getContainerInfo().getOffsetX())
  // 設置されているセルの左上からどれだyy軸で離れているか(pixcel)
  Logger.log(drawings[0].getContainerInfo().getOffsetY())
}

function moveFigure() {
  const drawings =SpreadsheetApp.getActiveSheet().getDrawings();
  
  // 高さと横幅変更[
  drawings[0].setWidth(200)
  drawings[0].setHeight(200)
  
  // 場所変更
  drawings[0].setPosition(2, 3, 0, 0)

}

function coverCell() {
  const drawings =SpreadsheetApp.getActiveSheet().getDrawings();
  
  // 高さと横幅変更[
  drawings[0].setWidth(1920)
  drawings[0].setHeight(1080)
  // 場所変更
  drawings[0].setPosition(1, 1, 0, 0)
  
  // … 処理後 …
  
  // 高さと横幅変更
  drawings[0].setWidth(0)
  drawings[0].setHeight(0)
  // 場所変更
  drawings[0].setPosition(1, 1, 0, 0)
}


function progressbar() {
  
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const width = 500
  const Height = 100
  const drawings = spreadsheet.getSheetByName('進捗バー').getDrawings()
  
  Logger.log(drawings[0])
  window = drawings[0]
  progress = drawings[1]
  
  // 初期化
  window.setHeight(Height)
  window.setWidth(width)
  window.setPosition(1, 1, 0, 0)
  
  progress.setHeight(100)
  progress.setWidth(1)  // \進捗ゼロ!/
  progress.setPosition(1, 1, 0, 0)
  
  for(var i = 1; i <= 100; i++){
    progress.setWidth((width/100) * i)
  }
  
  
  
}