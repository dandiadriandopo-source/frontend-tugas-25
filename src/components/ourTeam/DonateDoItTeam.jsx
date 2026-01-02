function TimKami({
  direktur,
  manager,
  sekretaris,
  kepalaRelawan,
  Staff1,
  Staff2,
  Staff3,
}) {
  return (
    <div>
      <h1>Our Team</h1>
      <ol>
        <li>Direktur: {direktur}</li>
        <li>{manager}</li>
        <li>{sekretaris}</li>
        <li>{kepalaRelawan}</li>
        <li>{Staff1}</li>
        <li>{Staff2}</li>
        <li>{Staff3}</li>
      </ol>
    </div>
  );
}
export default TimKami