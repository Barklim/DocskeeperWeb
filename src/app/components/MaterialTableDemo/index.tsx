import React from 'react';
import MaterialTable, { Column } from 'material-table';
import Icon from '@material-ui/core/Icon';

interface Row {
  id: number,
  baseDoc: number,
  recipient: string,
  periodicity: number,
  address: string,
  contact: string,
  periodicityRecipient: number,
  performanceIndicator: boolean,
  executor: string
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

const dbTable = 
[
  {
    id: 1,
    baseDoc: 228525978,
    recipient: "Организация 'Альфа'",
    periodicity: 30,
    reportDoc: 228525978,
    address: "Багратионовский пр-д, д.7 стр.33, к2, офис 228",
    contact: "Иванов Г.В.  8-800-555-35-35",
    periodicityRecipient: 30,
    performanceIndicator: true,
    executor: "Верещагин Б.Н."
  },
  {
    id: 2,
    baseDoc: 228525978,
    recipient: "ООО Торговая фирма 'Гермес'",
    periodicity: 14,
    reportDoc: 228525978,
    address: "Думская д2, офис 123",
    contact: "Дворецков Александр Сергеевич  8-800-555-35-35",
    periodicityRecipient: 14,
    performanceIndicator: true,
    executor: "Воротников"
  },
  {
    id: 3,
    baseDoc: 228525978,
    recipient: "Сельскохозяйственнй кооператив Око",
    periodicity: 50,
    reportDoc: 228525978,
    address: "Багратионовский пр-д, д.7 стр.33, к2, офис 228",
    contact: "Иванов Г.В.  8-800-555-35-35",
    periodicityRecipient: 40,
    performanceIndicator: false,
    executor: ""
  },
  {
    id: 4,
    baseDoc: 228525978,
    recipient: "Организация 'Альфа'",
    periodicity: 30,
    reportDoc: 228525978,
    address: "Багратионовский пр-д, д.7 стр.33, к2, офис 228",
    contact: "Иванов Г.В.  8-800-555-35-35",
    periodicityRecipient: 30,
    performanceIndicator: true,
    executor: "Борис Бояршинов"
  },
  {
    id: 5,
    baseDoc: 228525978,
    recipient: "ООО Торговая фирма 'Гермес'",
    periodicity: 14,
    reportDoc: 228525978,
    address: "Думская д2, офис 123",
    contact: "Дворецков Александр Сергеевич  8-800-555-35-35",
    periodicityRecipient: 14,
    performanceIndicator: true,
    executor: "Воротников"
  },
  {
    id: 6,
    baseDoc: 228525978,
    recipient: "Сельскохозяйственнй кооператив Око",
    periodicity: 50,
    reportDoc: 228525978,
    address: "Багратионовский пр-д, д.7 стр.33, к2, офис 228",
    contact: "Иванов Г.В.  8-800-555-35-35",
    periodicityRecipient: 40,
    performanceIndicator: false,
    executor: "Борис Бояршинов"
  },
  {
    id: 7,
    baseDoc: 228525978,
    recipient: "Организация 'Альфа'",
    periodicity: 30,
    reportDoc: 228525978,
    address: "Багратионовский пр-д, д.7 стр.33, к2, офис 228",
    contact: "Иванов Г.В.  8-800-555-35-35",
    periodicityRecipient: 30,
    performanceIndicator: true,
    executor: "Верещагин Б.Н."
  },
  {
    id: 8,
    baseDoc: 228525978,
    recipient: "ООО Торговая фирма 'Гермес'",
    periodicity: 14,
    reportDoc: 228525978,
    address: "Думская д2, офис 123",
    contact: "Дворецков Александр Сергеевич  8-800-555-35-35",
    periodicityRecipient: 14,
    performanceIndicator: true,
    executor: "Воротников"
  },
  {
    id: 9,
    baseDoc: 228525978,
    recipient: "Сельскохозяйственнй кооператив Око",
    periodicity: 50,
    reportDoc: 228525978,
    address: "Багратионовский пр-д, д.7 стр.33, к2, офис 228",
    contact: "Иванов Г.В.  8-800-555-35-35",
    periodicityRecipient: 40,
    performanceIndicator: false,
    executor: ""
  }
]

export function MaterialTableDemo(props) {

  const [state, setState] = React.useState<TableState>({
    columns: [
      { title: '', field: 'id', type: 'numeric',
        cellStyle: {
          backgroundColor: '#039be5',
          color: '#FFF',
          width: '10px',
        },
        headerStyle: {
          backgroundColor: '#039be5',
        }
       },
      { title: 'BaseDoc', field: 'baseDoc', type: 'numeric', 
        cellStyle: {
            width: '130px',
          }, 
        },
      { title: 'Recipient', field: 'recipient',
        cellStyle: {
          width: '20vw',
        }, 
      },
      { title: 'T', field: 'periodicity' },
      { title: 'ReportDoc', field: 'reportDoc',
        cellStyle: {
          width: '134px',
        }, 
       },
      { title: 'Address', field: 'address' },
      { title: 'Contact', field: 'contact' },
      { title: 't', field: 'periodicityRecipient' },
      { title: '', field: 'performanceIndicator',
        render: rowData =>  rowData.performanceIndicator ? 
          <div style={{width: 25, borderRadius: '25%', backgroundColor: "green"}}>&nbsp;</div> : 
          <div style={{width: 25, borderRadius: '25%', backgroundColor: "red"}}>&nbsp;</div>
      },
      { title: 'Executor', field: 'executor',
        cellStyle: {
          width: '130px',
        }, 
      },
    ],
    data: dbTable,
  });

  return (
    <MaterialTable
      title="Editable Table"
        detailPanel={rowData => {
          return (
            <div 
              style={{width: "100%", height:"115px", margin:"20px"}}>
              <div>BaseDoc:</div>
              <Icon color="primary">print</Icon>
              <div>ReportDoc:</div>
              <Icon color="primary">print</Icon>
            </div>
          )
        }}
      columns={state.columns}
      data={state.data}
      style={{ margin: 30 }}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}