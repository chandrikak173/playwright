import {readDataFromExcelFile} from '../Utility/readDataExcel.js';
import {readAllDataExcelFile} from 'C:/Users/vijay/OneDrive/Desktop/PlaywrightProject/Utility/readDataExcel.js';
import  {readRowData} from 'C:/Users/vijay/OneDrive/Desktop/PlaywrightProject/Utility/readDataExcel.js';
import {readColData} from '../Utility/readDataExcel.js';
import {writetoExcelSingleCell} from '../Utility/readDataExcel.js'
import {test} from '@playwright/test'
 test('excel',async()=>{
   
 const cellData=await readDataFromExcelFile('Sheet1','C:/Users/vijay/OneDrive/Desktop/PlaywrightProject/testdata/testdata.xlsx',2,1)
 console.log(cellData);

 const allData=await readAllDataExcelFile('Sheet1','C:/Users/vijay/OneDrive/Desktop/PlaywrightProject/testdata/testdata.xlsx')
 console.log(allData);
 
const rowData=await readRowData('Sheet1','C:/Users/vijay/OneDrive/Desktop/PlaywrightProject/testdata/testdata.xlsx',1)
console.log(rowData);
const colData=await readColData('Sheet1','C:/Users/vijay/OneDrive/Desktop/PlaywrightProject/testdata/testdata.xlsx',1)
console.log(colData);
writetoExcelSingleCell('Sheet2','C:/Users/vijay/OneDrive/Desktop/PlaywrightProject/testdata/testdata.xlsx',1,1)


 })