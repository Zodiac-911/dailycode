import "./App.css";
import Topbar from "./components/topbar";
import HomeContent from "./components/home-content";
import { ShaderGradientCanvas } from "@shadergradient/react";
import { ShaderGradient } from "@shadergradient/react";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <ShaderGradientCanvas
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: "0",
          zIndex: "-3",
        }}
        lazyLoad={true}
        fov={10}
        pixelDensity={1}
        pointerEvents="none"
      >
        <ShaderGradient
          animate="on"
          type="waterPlane"
          wireframe={false}
          shader="defaults"
          uTime={0}
          uSpeed={0.1}
          uStrength={5}
          uDensity={1.2}
          uFrequency={0}
          uAmplitude={0}
          positionX={0}
          positionY={0.9}
          positionZ={-0.3}
          rotationX={45}
          rotationY={0}
          rotationZ={0}
          color1="#afd4ef"
          color2="#ffffff"
          color3="#ffffff"
          color4="#ffffff"
          reflection={0.1}
          // View (camera) props
          cAzimuthAngle={170}
          cPolarAngle={70}
          cDistance={10}
          cameraZoom={1}
          // Effect props
          lightType="3d"
          brightness={1.2}
          envPreset="city"
          grain="off"
          // Tool props
          toggleAxis={false}
          zoomOut={false}
          hoverState=""
          // Optional - if using transition features
          enableTransition={false}
        />
      </ShaderGradientCanvas>
      <Topbar />
      <HomeContent />
      <Footer />
    </>
  );
}

export default App;
