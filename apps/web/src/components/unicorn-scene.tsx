import UnicornScene from "unicornstudio-react";

export default function MyComponent() {
  const handleLoad = () => {
    console.log("Scene loaded successfully!");
  };

  const handleError = (error: Error) => {
    console.error("Scene loading failed:", error);
  };

  return (
    <UnicornScene
      projectId="n50wRZRCNWWhQCsXC1kq"
      width="100vw"
      height="100vh"
      scale={1}
      dpi={1.5}
      fps={60}
      altText="Interactive 3D scene"
      ariaLabel="Animated background scene"
      className="my-custom-class"
      lazyLoad={true}
      production={true}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
}