import excel from 'exceljs'

export default async (req, res) => {
    let workbook = new excel.Workbook()
    let worksheet = workbook.addWorksheet('My Sheet')
    worksheet.columns = [
        { header: 'Id', key: 'id', width: 10 },
        { header: 'Name', key: 'name', width: 32 },
    ];
    worksheet.addRow({id: 1, name: 'John Doe'});
        
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    res.setHeader('Content-Disposition', 'attachment; filename=excel-file.xlsx')
    await workbook.xlsx.write(res)
    res.end();
}
