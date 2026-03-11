import { useState } from "react";

export default function DiagramViewer({ image }) {

  const [zoom, setZoom] = useState(1);

  function zoomIn() {
    setZoom(prev => prev + 0.2);
  }

  function zoomOut() {
    setZoom(prev => prev - 0.2);
  }

  function resetZoom() {
    setZoom(1);
  }

  return (
    <div className="viewer">

      <div>
        <button onClick={zoomIn}>Zoom In</button>
        <button onClick={zoomOut}>Zoom Out</button>
        <button onClick={resetZoom}>Reset</button>
      </div>

      {image && (
        <img
          src={image}
          alt="diagram"
          style={{
            transform: `scale(${zoom})`,
            transition: "0.2s"
          }}
        />
      )}

    </div>
  );
}