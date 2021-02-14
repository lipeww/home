'use strict'

import React, { useState, forwardRef} from 'react'
import * as XLSX from 'xlsx'
import FileImport from './fileImport'
import MaterialTable from "material-table";

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import codigo from '../components/codigo'
import { CallReceived } from '@material-ui/icons';
import convertData from '../components/convertData'

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const readExcel = (file, setState) => {
  const promise = new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsArrayBuffer(file);

    fileReader.onload = (e) => {
      const bufferArray = e.target.result;
      const wb = XLSX.read(bufferArray, {type: 'buffer'});
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      const questoes = XLSX.utils.sheet_to_json(ws);

      for(let i = 0; i < questoes.length; i++) {
        delete questoes[i]["Avaliar/10,00"];
        delete questoes[i].Completo;
        delete questoes[i].Departamento;
        delete questoes[i]["Endereço de email"];
        delete questoes[i].Estado;
        delete questoes[i]["Iniciado em"];
        delete questoes[i].Instituição;
        delete questoes[i].Nome;
        delete questoes[i].Sobrenome;
        delete questoes[i]["Tempo utilizado"]         
      }

      const data2 = convert(data,questoes,file)
      setState({name: file.name.match(/^\w{5}-\d{2}\s-\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*\s*\w*/gi), data: data2, isLoading: false});
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });     
}

const get_header_row = (sheet) => {
  var headers = [];
  var range = XLSX.utils.decode_range(sheet['!ref']);
  var C, R = range.s.r; /* start in the first row */
  /* walk every column in the range */
  for(C = range.s.c; C <= range.e.c; ++C) {
      var cell = sheet[XLSX.utils.encode_cell({c:C, r:R})] /* find the cell in the first row */

      var hdr = "UNKNOWN"; // <-- replace with your desired default 
      if(cell && cell.t) hdr = XLSX.utils.format_cell(cell);

      if(hdr != "UNKNOWN") {
        headers.push(hdr);
      }
  }
  return headers;
}

const convert = (json, questoes, file) => {
  const data = json.map((e, index) => {
    return {
      Semestre: convertData(e.Completo),
      Codigo: codigo(e["Instituição"]),
      Disciplina: file.name.match(/^\w{5}-\d{2}/)[0],
      Turma: '',
      Matricula: '',
      Nome: `${e.Nome} ${e.Sobrenome}`, 
      Nota: Object.keys(questoes[index]).map(x => parseFloat(e[x].replace(',', '.'))).reduce((acc, current) => acc + current),
      Questoes: Object.keys(questoes[index]),
      NotaQuestao: Object.keys(questoes[index]).map(x => parseFloat(e[x].replace(',', '.')))
    }
  })

  return data;
}

const tabley = () => {
  const [state, setState] = useState({
    name: '',
    data: [],
    isLoading: false
  })

  return (
    <div style={{ width: '100%' }}>
      <FileImport onChange={(e) => {
        setState({isLoading: true})
        const file = e.target.files[0];
        readExcel(file, setState);
      }}
      />
      <MaterialTable
        isLoading={state.isLoading}
        style={{margin: '20px'}}
        icons={tableIcons}
        columns={[
          { title: 'Semestre', field: 'Semestre', type: 'numeric', align: 'center', cellStyle: {width: 10}, sorting: false },
          { title: 'Codigo', field: 'Codigo', type: 'numeric', align: 'center', cellStyle: {width: 5}, sorting: false },
          { title: 'Disciplina', field: 'Disciplina', align: 'center', cellStyle: {width: 10}, sorting: false },
          { title: 'Turma', field: 'Turma', align: 'center', cellStyle: {width: 20} },
          { title: 'Matricula', field: 'Matricula', type: 'numeric', align: 'center', cellStyle: {width: 20} },
          { title: 'Nome', field: 'Nome', align: 'center', cellStyle: {width: 880} },
          { title: 'Nota', field: 'Nota', type: 'numeric', align: 'center', cellStyle: {width: 10} }
        ]}
        data={state.data}
        title={state.name}
        options={{pageSize: 15, pageSizeOptions: [15,35,55,75,85], exportButton: true, exportDelimiter: ';', draggable: false,}}
      />
    </div>
  )

}

export default tabley;
