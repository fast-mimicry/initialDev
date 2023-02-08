import excel from 'exceljs'
import { useCallback, useState } from 'react';

export const useExcelExporter = () => {
    //出力用エクセルです
    const [excelUrl, setExcelUrl] = useState("");

    /**
     * エクセル出力ボタンのクリックイベントです
     */
    const handleClick_ExcelExporter = useCallback(
        async e => {

            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet("sheet1");
            worksheet.columns = [
                { header: 'Id', key: 'id', width: 10 },
                { header: 'Name', key: 'name', width: 32 },
            ];
            worksheet.addRows([
                {id: 1, name: 'John Doe'},
                {id: 2, name: 'vivi'}
            ]);

            let uint8Array = await workbook.xlsx.writeBuffer();
            let blob = new Blob([uint8Array], { type: "application/octet-binary" });

            let link = document.createElement( "a" );
            link.href = window.URL.createObjectURL( blob );
            link.download = "sample_" + new Date().toLocaleString() + ".xlsx" ;
            link.click();

        }
    ,[]);

    return { handleClick_ExcelExporter };

};