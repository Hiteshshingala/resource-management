import React, { useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {
  textFilter,
  dateFilter,
  selectFilter 
} from "react-bootstrap-table2-filter";
import * as data from '../../constant/data.json'

function Table() {
  const [bookingsData, setBookingsData] = useState([]);
  useEffect(() => {
    console.log('@@@@bookingsData', data)
    getBookingData();
  }, []);
  
  const getBookingData = async () => {
      console.log('@@@@default', data.default)
      setBookingsData(data.default);
  };
  // const filterByDate = (filterVal, data) => {
  //   const  todayDate = moment();
  //   let future = [], past = [];
  //   data.forEach(date => {
  //     if (!todayDate.isAfter(date.time)) {
  //       console.log('Date is future');
  //       future.push(date)
  //     }else{
  //       past.push(date)
  //         console.log('Date is not future');
  //     }
  //   });
  //   if(filterVal == 1){
  //     return past;
  //   } else {
  //     return future;
  //   }
  // }

  // const timeOptions = [
  //   { value: 1, label: 'past' },
  //   { value: 2, label: 'future' }
  // ]

  const columns = [
    {
      dataField: "name",
      text: "name",
      filter: textFilter({
        style: {
          marginTop: "20px",
        },
      }),
      headerAlign: "center",
      align: "center",
    }
    // {
    //   dataField: "noOfSeats",
    //   text: "noOfSeats",
    //   filter: textFilter({
    //     style: {
    //       marginTop: "20px",
    //     },
    //   }),
    //   align: "center",
    //   headerAlign: "center",
    // },
    // {
    //   dataField: "contactNumber",
    //   text: "contactNumber",
    //   filter: textFilter({
    //     style: {
    //       marginTop: "20px",
    //     },
    //   }),
    //   headerAlign: "center",
    //   align: "center",
    // },
    // {
    //   dataField: "time",
    //   text: "Time for filter",
    //   formatter: (cell) => {
    //     return <>{moment(cell).add(1, 'day').format('DD-MM-YYYY hh:mm')}</>
    //   },
    //   filter: selectFilter({
    //     onFilter: filterByDate,
    //     options: timeOptions
    //   })
    // },
  ];
  return (
    <div>
      {/* <BootstrapTable
        keyField="id"
        data={bookingsData}
        // filter={filterFactory()}
        columns={columns}
      /> */}
      hello
    </div>
  );
}

export default Table;
