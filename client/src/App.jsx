import MainUI from "./Main UI/MainUI"

function App() {
  return (
    <div className="bg-main-gray  min-h-screen">
      <MainUI />
      <div className="fixed bottom-0 border border-t-black py-4 flex justify-between w-full z-50 bg-navigation">
        <button>o</button>
        <button>o</button>
        <button>o</button>
        <button>o</button>
      </div>
    </div>
  )
}
export default App