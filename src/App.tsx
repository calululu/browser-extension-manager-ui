import DeleteModal from "./components/DeleteModal";
import Extensions from "./components/Extensions";
import Header from "./components/Header";
import { ModalProvider } from "./contexts/modalContext/ModalProvider";

function App() {
  return (
    <div className="max-w-[1440px]">
      <Header />
      <h1 className="font-notosans-b my-4 text-center text-3xl dark:text-neutral-100">
        Extensions List
      </h1>

      {/* wrap all the components I need in the ConextAPI component */}
      <ModalProvider>
        <Extensions />
        <DeleteModal />
      </ModalProvider>
    </div>
  );
}

export default App;
