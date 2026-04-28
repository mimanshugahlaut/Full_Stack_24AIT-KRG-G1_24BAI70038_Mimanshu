import Header from "./Header";

function App() {
  const username = "Mimanshu";

  return (
    <div style={{ textAlign: "center" }}>
      <h1>App Component</h1>
      <Header username={username} />
    </div>
  );
}

export default App;