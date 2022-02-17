import "../Styles/ColorApp.css";

export function Colorbox({ color }) {
  console.log(color)
  const colorboxstyles = {
    backgroundColor: color,
  };
  console.log(colorboxstyles)
  return (
    <div>
      <p className="colorbox" style={colorboxstyles}></p>
    </div>
  );
}
