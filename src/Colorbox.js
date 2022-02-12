
export function Colorbox({ color }) {
  const styles = {
    height: "35px",
    width: "100%",
    borderRadius: "10px",
    backgroundColor: color,
    marginTop: "10px",
  };
  return <div style={styles}></div>;
}
