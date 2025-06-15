import logo from "../assets/images/logo.svg";
import logoLight from "../assets/images/logo-light.svg";
import sun from "../assets/images/icon-sun.svg";
import moon from "../assets/images/icon-moon.svg";
import { useEffect, useState } from "react";

export default function Header() {
  //di default prende il local storage, se esiste
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    // JSON.parse converte da stringa a booleano
    return savedTheme ? JSON.parse(savedTheme) : false;
    // in alternativa si può scrivere questo ma è meno intuitivo
    // return savedTheme === "true";
  });

  //dark mode toggle
  //documentElement è una proprietà di document, propria di JavaScript, che ritorna l'elemento Root dell'intero documento, quindi HTML, come se si avesse fatto docuement.querySelector("html")
  //la darkmode funziona così, si aggiunge un pezzo nel tailwind css che la abilita, e poi nell'html si aggiunge la classe dark. Quando la classe dark è attiva ogni volta che c'è
  //il prefisso dark: userà quella classe al posto di quella classica se è presente l'alternativa.
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", theme.toString());
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", theme.toString());
    }
  }, [theme]);

  return (
    <div className="bg-neutral-0 my-8 flex justify-between rounded-2xl border-2 border-neutral-300 p-4 shadow-xl dark:border-neutral-600 dark:bg-neutral-700">
      {theme ? (
        <img src={logoLight} alt="Extensions logo" />
      ) : (
        <img src={logo} alt="Extensions logo light" />
      )}

      <button
        className="rounded-2xl bg-neutral-100 p-4 dark:bg-neutral-600"
        onClick={() => {
          setTheme(!theme);
        }}
      >
        {theme ? (
          <img src={sun} alt="button-light" />
        ) : (
          <img src={moon} alt="button-dark" />
        )}
      </button>
    </div>
  );
}
