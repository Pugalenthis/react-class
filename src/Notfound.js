export function Notfound() {
  const notfoundstyles = {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  };
  return (
    <div className="container" id="notfound-container">
      <div className="row" id="notfound-row " style={notfoundstyles}>
        <h1>404 ERROR</h1>
        <h3>The page you are looking is not available in this website,Get back to <a href="http://localhost:3000/">Home</a></h3>

        <img src="https://media.istockphoto.com/vectors/error-page-or-file-not-found-icon-vector-id924949200"></img>
      </div>
    </div>
  );
}
