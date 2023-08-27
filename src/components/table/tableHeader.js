export const TableHeader = (props)=>{
    // const headers = Object.keys(props.data[0]).map((e,i)=>{
    //     return <th key={i}>{e}</th>
    // });
    // console.log(headers)
    return(
        <>
          <thead>
            <tr className="headers">
                {/* {headers} */}
                <th>Name</th>
                <th>Job</th>
            </tr>
          </thead>
        </>
    )
}