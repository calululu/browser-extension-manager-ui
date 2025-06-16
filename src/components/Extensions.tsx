// import { useExtensionsFilter } from "../contexts/extensionsFilterContext/useExtensionsFilter";
import ButtonExtensionsFilter from "./ButtonExtensionsFilter";
import CardCollection from "./CardCollection";

export default function Extensions() {
  return (
    <div>
      <div className="flex flex-col xl:flex-row xl:justify-between">
        <h1 className="font-notosans-b my-4 text-center text-3xl dark:text-neutral-100">
          Extensions List
        </h1>
        <div className="my-4 flex justify-around xl:justify-center xl:gap-4">
          <ButtonExtensionsFilter filter="All">All</ButtonExtensionsFilter>
          <ButtonExtensionsFilter filter="Active">
            Active
          </ButtonExtensionsFilter>
          <ButtonExtensionsFilter filter="Inactive">
            Inactive
          </ButtonExtensionsFilter>
        </div>
      </div>
      <CardCollection />
    </div>
  );
}
