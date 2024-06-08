import "./BAGrid.css";

export default function BAGrid({ datasource }: any) {
  if (!datasource || datasource.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div className="grid-container">
      {datasource.map((x: any, i: any) => (
        <div key={i} className="grid-item">
          {x.image && <img src={x.image} alt={x.title} />}
          <h3>{x.title}</h3>
          <p>{x.price}</p>
        </div>
      ))}
    </div>
  );
}
