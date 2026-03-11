import { useState } from "react";
import UploadBox from "../components/UPloadBox";
import DiagramViewer from "../components/DiagramViewer";
import ComponentList from "../components/ComponentList";

export default function Dashboard() {

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [selectedComponent, setSelectedComponent] = useState(null);

  return (
    <div className="dashboard">

      <UploadBox
        setImage={setImage}
        setFileName={setFileName}
      />

      <div className="main">

        <DiagramViewer
          image={image}
        />

        <ComponentList
          selectedComponent={selectedComponent}
          setSelectedComponent={setSelectedComponent}
        />

      </div>

    </div>
  );
}