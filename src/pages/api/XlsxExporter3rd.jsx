import excel from 'exceljs'

export async function XlsxExporter3rd(props){

    const handleExport = async e => {
        let workbook = new excel.Workbook()
        let worksheet = workbook.addWorksheet('My Sheet')
        worksheet.columns = [
            { header: 'Id', key: 'id', width: 10 },
            { header: 'Name', key: 'name', width: 32 },
        ];
        worksheet.addRow(
            {id: 1, name: 'John Doe'},
            {id: 2, name: 'vivi'}
        );
            
        //res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
        //res.setHeader('Content-Disposition', 'attachment; filename=excel-file.xlsx')
        //await workbook.xlsx.write(res)
        //res.end();
    }

    return (
        <div>
            <h3>Excel DL3</h3>
            <button onClick={handleExport}>DL3</button>
        </div>
    );
}
