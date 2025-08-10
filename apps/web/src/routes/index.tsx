import { createFileRoute } from "@tanstack/react-router";
import UnicornSceneComponent from "../components/unicorn-scene";
import ScrollIndicator from "../components/scroll-indicator";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-black">
      <UnicornSceneComponent />
      <ScrollIndicator />
    </div>
  );
}
