import DeleteModal from "./components/DeleteModal";
import Extensions from "./components/Extensions";
import Header from "./components/Header";
import { ModalProvider } from "./contexts/modalContext/ModalProvider";

function App() {
  return (
    <div className="max-w-[1440px]">
      <Header />

      {/* wrap all the components I need in the ConextAPI component */}
      <ModalProvider>
        <Extensions />
        <DeleteModal />
      </ModalProvider>
    </div>
  );
}

export default App;
