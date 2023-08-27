export const TableBody = (props) => {
    const rows = props.data.map((row,index)=>{
        console.log('tablebody')
        return(
            <tr className={index} key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
            </tr>
        )
    })
    return( 
        <>
        <tbody>{rows}</tbody>
        {/* <tbody>
            <tr>
                <td>Charlie</td>
                <td>Janitor</td>
            </tr>
            <tr>
                <td>Mac</td>
                <td>Bouncer</td>
            </tr>
            <tr>
                <td>Dee</td>
                <td>Aspiring actress</td>
            </tr>
            <tr>
                <td>Dennis</td>
                <td>Bartender</td>
            </tr>
        </tbody> */}
        </>
    )
}