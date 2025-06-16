export default function SwitchButton({
  isActive,
  onToggle,
}: {
  isActive: boolean;
  onToggle?: () => void;
}) {
  return (
    <label className="relative inline-block h-[26px] w-[50px]">
      <input
        className="peer sr-only h-0 w-0 opacity-0"
        type="checkbox"
        checked={isActive}
        onChange={onToggle}
      />
      <span className="before:bg-neutral-0 before:duration-400 duration-400 absolute inset-0 cursor-pointer rounded-[25px] bg-neutral-300 before:absolute before:bottom-1 before:left-1 before:h-[19px] before:w-[19px] before:rounded-[50%] before:content-[''] peer-checked:bg-red-700 peer-checked:before:translate-x-[23px] dark:bg-neutral-500 dark:peer-checked:bg-red-500"></span>
    </label>
  );
}
