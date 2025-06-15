export default function Button({
  children,
  modal = "",
  active = false,
  onClick,
}: {
  children: string;
  modal?: "" | "yes" | "no";
  active?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const activeClass =
    "font-notosans-m rounded-4xl border-1 text-neutral-0 cursor-pointer border-red-700 bg-red-700 px-4 py-2 shadow active:border-red-700 active:bg-red-700 dark:border-red-500 dark:bg-red-500 dark:text-neutral-900 dark:active:border-red-500 dark:active:bg-red-500";
  const inactiveClass =
    "font-notosans-m dark:text-neutral-0 rounded-4xl bg-neutral-0 border-1 hover:text-neutral-0 cursor-pointer border-neutral-300 px-4 py-2 text-neutral-900 shadow hover:border-red-700 hover:bg-red-700 active:border-red-700 active:bg-red-700 dark:border-neutral-500 dark:bg-neutral-600 dark:hover:border-red-500 dark:hover:bg-red-500 dark:hover:text-neutral-900 dark:active:border-red-500 dark:active:bg-red-500";

  if (modal === "yes") {
    return (
      <button
        onClick={onClick}
        className="font-notosans-m rounded-4xl border-1 hover:text-neutral-0 cursor-pointer border-neutral-300 bg-neutral-100 px-4 py-2 text-neutral-900 shadow hover:border-red-700 hover:bg-red-700 dark:border-0 dark:border-neutral-500 dark:bg-neutral-400 dark:text-neutral-900 dark:hover:border-red-500 dark:hover:bg-red-500 dark:hover:text-neutral-900"
      >
        {children}
      </button>
    );
  } else if (modal === "no") {
    return (
      <button
        onClick={onClick}
        className="font-notosans-m rounded-4xl border-1 hover:text-neutral-0 cursor-pointer border-neutral-300 bg-red-100 px-4 py-2 text-neutral-900 shadow hover:border-red-700 hover:bg-red-700 dark:border-0 dark:border-neutral-500 dark:bg-red-300 dark:text-neutral-900 dark:hover:border-red-500 dark:hover:bg-red-500 dark:hover:text-neutral-900"
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`${active ? activeClass : inactiveClass}`}
      >
        {children}
      </button>
    );
  }
}
