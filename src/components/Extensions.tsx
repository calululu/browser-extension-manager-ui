import Button from "./Button";
import CardCollection from "./CardCollection";

export default function Extensions() {
  return (
    <div>
      <div className="my-4 flex justify-around">
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Inactive</Button>
      </div>
      <CardCollection />
    </div>
  );
}
