import satData from "./satData"

const Table = ({ sat }) => {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
            </tr>
            <tr>
                <th>Type of Satellite</th>
            </tr>
            <tr>
                <th>Launch Date</th>
            </tr>
            <tr>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
        {sat.map((data) => (
           <tr key= {data.id}>
            <td>{data.name}</td> 
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            <td>{data.operational ? "Operational": "Non-operational"}</td>
            </tr>
            ))}
        </tbody>
   </table>
          );
        };

export default Table;
