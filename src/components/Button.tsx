export default function Button({
  children,
  modal = "",
  handleClick,
}: {
  children: string;
  modal?: "" | "yes" | "no";
  handleClick?: () => void;
}) {
  const baseClasses =
    "font-notosans-m rounded-4xl border-1 cursor-pointer px-4 py-2 shadow hover:text-neutral-0 hover:border-red-700 hover:bg-red-700 dark:hover:border-red-500 dark:hover:bg-red-500 dark:hover:text-neutral-900";

  const modalYesClasses =
    "border-neutral-300 bg-neutral-100 text-neutral-900 dark:border-0 dark:border-neutral-500 dark:bg-neutral-400";

  const modalNoClasses =
    "border-neutral-300 bg-red-100 text-neutral-900 dark:border-0 dark:border-neutral-500 dark:bg-red-300";

  const defaultClasses =
    "bg-neutral-0 border-neutral-300 text-neutral-900 dark:border-neutral-500 dark:bg-neutral-600 dark:text-neutral-0";

  const getButtonClasses = () => {
    if (modal === "yes") return `${baseClasses} ${modalYesClasses}`;
    if (modal === "no") return `${baseClasses} ${modalNoClasses}`;
    return `${baseClasses} ${defaultClasses}`;
  };

  return (
    <button onClick={handleClick} className={getButtonClasses()}>
      {children}
    </button>
  );
}
