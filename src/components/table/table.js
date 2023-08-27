import { Component } from "react"
import { TableBody } from "./tableBody"
import { TableHeader } from "./tableHeader"

export class Table extends Component{
    render(){
        const {data} = this.props;
        console.log(data);
        return (
        <>
         <table>
            <TableHeader data={data}/>
            <TableBody data={data}/>
          </table>
        </>
        )
    }
}