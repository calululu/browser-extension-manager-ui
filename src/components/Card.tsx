import Button from "./Button";
import SwitchButton from "./SwitchButton";
import { type CardType } from "../types/type";
import { useState } from "react";

export default function Card({
  name,
  description,
  logo,
  isActive,
  onRemove,
}: CardType & { onRemove?: () => void }) {
  const [active, setActive] = useState(isActive);

  const toggleActive = () => {
    setActive(!active);
  };

  return (
    <div className="bg-neutral-0 rounded-4xl border-1 max-w-96 border-neutral-100 p-6 shadow dark:border-neutral-500 dark:bg-neutral-700">
      <div className="flex items-start gap-4">
        <img src={logo} alt="image" />
        <div>
          <h3 className="font-notosans-b text-2xl dark:text-neutral-100">
            {name}
          </h3>
          <p className="text-neutral-500 dark:text-neutral-200">
            {description}
          </p>
        </div>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <Button modal="" handleClick={onRemove}>
          Remove
        </Button>
        <SwitchButton isActive={active} onToggle={toggleActive} />
      </div>
    </div>
  );
}
