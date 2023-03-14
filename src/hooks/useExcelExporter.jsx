import excel from 'exceljs'
import { useCallback, useState } from 'react';

const EXCEL_HEADER = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'title', key: 'title', width: 80 }
];

/**
 * エクセル出力用のフックスです
 * @returns handleClick_ExcelExporter クリックイベントを返します
 */
export const useExcelExporter = () => {

    /**
     * エクセル出力ボタンのクリックイベントです
     */
    const exportExcel = useCallback( async (data) => {

        console.log({data: data});

        //ブックを作成
        let workbook = new excel.Workbook();
        let worksheet = workbook.addWorksheet("sheet1");
        //ヘッダーを設定
        worksheet.columns = EXCEL_HEADER;
        //明細を設定
        if (data) {
            worksheet.addRows(
                data.slice(0, 15)
                .map(({id, title}) => {
                    return {
                        id:id,
                        title: title,
                    }
                })
            );
        }
    
        //エクセルを出力します
        let uint8Array = await workbook.xlsx.writeBuffer();
        let blob = new Blob([uint8Array], { type: "application/octet-binary" });
        let link = document.createElement( "a" );
        link.href = window.URL.createObjectURL( blob );
        link.download = "sample_" + new Date().toLocaleString() + ".xlsx" ;
        link.click();
    
    },[]);

    return { exportExcel };
};