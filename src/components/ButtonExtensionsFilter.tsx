export default function ButtonExtensionsFilter({
  children,
  active = false,
}: {
  children: string;
  active?: boolean;
}) {
  const activeClass =
    "font-notosans-m rounded-4xl border-1 text-neutral-0 cursor-pointer border-red-700 bg-red-700 px-4 py-2 shadow active:border-red-700 active:bg-red-700 dark:border-red-500 dark:bg-red-500 dark:text-neutral-900 dark:active:border-red-500 dark:active:bg-red-500";
  const inactiveClass =
    "font-notosans-m dark:text-neutral-0 rounded-4xl bg-neutral-0 border-1 hover:text-neutral-0 cursor-pointer border-neutral-300 px-4 py-2 text-neutral-900 shadow hover:border-red-700 hover:bg-red-700 active:border-red-700 active:bg-red-700 dark:border-neutral-500 dark:bg-neutral-600 dark:hover:border-red-500 dark:hover:bg-red-500 dark:hover:text-neutral-900 dark:active:border-red-500 dark:active:bg-red-500";

  return (
    <button className={`${active ? activeClass : inactiveClass}`}>
      {children}
    </button>
  );
}
