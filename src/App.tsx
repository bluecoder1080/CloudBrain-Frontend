import { Button } from "./components/ui/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <div>
      <div className="flex">
      <Button variant="primary" text="Add Content" startIcon={<ShareIcon/>}></Button>
      <Button variant="secondary" text="Share Brain" startIcon={<PlusIcon/>}></Button>
      </div>
    </div>
  );
}
export default App;
