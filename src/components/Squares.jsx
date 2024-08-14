function Squares({ value, onClick }) {
  return (
    <div className="squareItem" onClick={onClick}>
      {value}
    </div>
  );
}

export default Squares;
