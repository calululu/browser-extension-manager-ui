import DeleteModal from "./components/DeleteModal";
import Extensions from "./components/Extensions";
import Header from "./components/Header";
//Context API
import ExtensionsFilterProvider from "./contexts/extensionsFilterContext/ExtensionsFilterProvider";
import { ModalProvider } from "./contexts/modalContext/ModalProvider";

function App() {
  return (
    <div className="max-w-[1440px]">
      <Header />

      {/* wrap all the components I need in the ConextAPI component */}
      <ModalProvider>
        <ExtensionsFilterProvider>
          <Extensions />
        </ExtensionsFilterProvider>
        <DeleteModal />
      </ModalProvider>
    </div>
  );
}

export default App;
