import {useCallback, useState} from 'react'
import ExcelJS from "exceljs"

export function XlsxExporter(props) {

    /**
     * エクセルをダウンロードします
     * useState必要？
     */
    const handleExport = useCallback(
        async e => {

            console.log("00_handleExport");

            //ワークブックを作成する
            //const create_excelObj = () => {

                    let workbook = new ExcelJS.Workbook();
                    let worksheet = workbook.addWorksheet("sheet1") ;
                    worksheet.pageSetup = {orientation:'partrait'};


                    worksheet.columns = [
                      {header: "ID", key: "id"},
                      {header: "名前", key: "name"},
                      {header: "備考", key: "remark"}
                    ];
                    worksheet.addRows([
                        {
                            "id": 1,
                            "name": "ごるぴ",
                            "remark": "black"
                        },
                        {
                            "id": 2,
                            "name": "ごるぴ",
                            "remark": "black"
                        },
                    ]);

                    /*
                    //行を取得する
                    let sheetRow = worksheet.getRow( 1 ) ;

                    //値を設定
                    sheetRow.getCell(1).value = "ここはセルの１つ目" ;

                    //列の幅を設定（２行目）
                    sheetRow = worksheet.getRow( 2 ) ;
                    worksheet.getColumn( 2 ).width = 20 ;
                    sheetRow.getCell( 2 ).value = "ここはセルの２つ目" ;
                    */
            // }
            // create_excelObj();
            console.log("01_ブックを作成");
            console.log(worksheet);

            worksheet.getRow(1).getCell(1).value = 'test';

            
            //03-1_arrayBufferに変換
            //const download_xlsx = async() => {
                //エクセルファイルを生成する
                console.log("01-1");
                let uint8Array = (
                    async() => await workbook.xlsx.writeBuffer()
                )(); //xlsxの場合

                console.log("01-2");
                let blob = new Blob([uint8Array], { type: "application/octet-binary" });
                //let blob = new Blob([uint8Array], { type: "application/xlsx" });
            
                console.log(blob);

                //}
            //download_xlsx();
            
            console.log("03-1_ファイル生成");

            //03-2_buf->url化し、エンドポイント側にurlを取得させます
            
            //const export_xlsxURL = () => {
                let link = document.createElement( "a" );
                link.style.display = "none"
                document.body.appendChild(link);

                link.href = window.URL.createObjectURL( blob );
                link.download = "sample_" + new Date().toLocaleString() + ".xlsx" ;
                link.click();

                //下記では削除できないため、要リファクタリング
                window.URL.revokeObjectURL(link);
            //}
            //export_xlsxURL();

            console.log("03-2_ダウンロード");
            
        },
        
        //useCallback end
        []);

    return (
        <div>
            <h2>Excel Download</h2>
            <button onClick={handleExport}>
                DL
            </button>

        </div>
    );
}