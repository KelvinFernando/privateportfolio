import { createFileRoute } from "@tanstack/react-router";
import UnicornSceneComponent from "../components/unicorn-scene";
import ScrollIndicator from "../components/scroll-indicator";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="container mx-auto px-4 py-8 flex justify-center items-center min-h-screen bg-stone-100">
      <UnicornSceneComponent />
      <ScrollIndicator />
    </div>
  );
}
