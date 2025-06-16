import { useExtensionsFilter } from "../contexts/extensionsFilterContext/useExtensionsFilter";
import { type FilterOption } from "../types/type";

type ButtonExtensionsFilterProps = {
  filter: FilterOption;
  children?: React.ReactNode;
};

export default function ButtonExtensionsFilter({
  filter,
  children,
}: ButtonExtensionsFilterProps) {
  const { activeFilter, setActiveFilter } = useExtensionsFilter();

  function handleClick() {
    setActiveFilter(filter);
  }

  const isButtonActive = activeFilter === filter; // Check if this button is active

  const activeClass =
    "font-notosans-m rounded-4xl border-1 text-neutral-0 cursor-pointer border-red-700 bg-red-700 px-4 py-2 shadow active:border-red-700 active:bg-red-700 dark:border-red-500 dark:bg-red-500 dark:text-neutral-900 dark:active:border-red-500 dark:active:bg-red-500";
  const inactiveClass =
    "font-notosans-m dark:text-neutral-0 rounded-4xl bg-neutral-0 border-1 hover:text-neutral-0 cursor-pointer border-neutral-300 px-4 py-2 text-neutral-900 shadow hover:border-red-700 hover:bg-red-700 active:border-red-700 active:bg-red-700 dark:border-neutral-500 dark:bg-neutral-600 dark:hover:border-red-500 dark:hover:bg-red-500 dark:hover:text-neutral-900 dark:active:border-red-500 dark:active:bg-red-500";

  return (
    <button
      onClick={handleClick}
      className={`${isButtonActive ? activeClass : inactiveClass}`}
    >
      {children}
    </button>
  );
}
