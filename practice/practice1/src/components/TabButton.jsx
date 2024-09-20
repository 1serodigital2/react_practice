export default function TabButton({ children }) {
  function handleClick() {
    console.log("button clicked");
  }

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
