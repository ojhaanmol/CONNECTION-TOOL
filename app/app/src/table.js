const Table = (data ) => {
    return (
      <table>
        {/* <thead>
          <tr>
            <th>Key</th>
            <th>Value</th>
          </tr>
        </thead> */}
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

export default Table;