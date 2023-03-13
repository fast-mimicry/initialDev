import excel from 'exceljs'
import { useCallback, useState } from 'react';
import { Posts } from 'src/components/Posts';
import { usePosts } from 'src/hooks/usePosts';

const EXCEL_HEADER = [
    { header: 'Id', key: 'id', width: 10 },
    { header: 'Name', key: 'name', width: 32 }
];

const EXCEL_BODY = [
    {id: 1, name: 'John Doe'},
    {id: 2, name: 'vivi'}
];

/**
 * エクセル出力用のフックスです
 * @returns handleClick_ExcelExporter クリックイベントを返します
 */
export const useExcelExporter = () => {
    const [excelBody, setExcelBody] = useState([]);

    const handleChange_ExcelExporter = useCallback(
        e=> {
            console.log("handleChange_ExcelExporter");
            console.log(e.target.value);
            console.log(e.target.children);

        }
    );


    /**
     * エクセル出力ボタンのクリックイベントです
     */
    const handleClick_ExcelExporter = useCallback(
        async e => {

            const {data, error} = usePosts();

            //ブックを作成
            let workbook = new excel.Workbook();
            let worksheet = workbook.addWorksheet("sheet1");
            //ヘッダーを設定
            worksheet.columns = EXCEL_HEADER;
            //明細を設定
            if (data) {
                worksheet.addRows(
                    data.slice(0, 15)
                    .map(row => {
                        row.title
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

        }
    ,[]);

    return { handleClick_ExcelExporter };

};