import * as XLSX from "xlsx";

export const readExcelFile = async (file) => {
    const data = await file.arrayBuffer(); // Esta función lee el archivo Excel y lo convierte en un ArrayBuffer
    const workbook = XLSX.read(data); // Esta función lee el ArrayBuffer y lo convierte en un objeto de libro de trabajo (workbook) que contiene todas las hojas del archivo Excel
    const sheet = workbook.Sheets[workbook.SheetNames[0]]; // Esta función obtiene la primera hoja del libro de trabajo y la segunda función convierte la hoja en un objeto JSON
    return XLSX.utils.sheet_to_json(sheet) // Esta función convierte la hoja en un objeto JSON
};