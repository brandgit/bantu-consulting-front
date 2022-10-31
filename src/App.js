import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdviceScreen } from "./screens/Advice/AdviceScreen";
import { CoachingScreen } from "./screens/Coaching/CoachingScreen";
import { HomeScreen } from "./screens/Home/HomeScreen";
import { ProjectManagementScreen } from "./screens/ProjectManagement/ProjectManagementScreen";
import { RhScreen } from "./screens/RH/RhScreen";
import { TrainingScreen } from "./screens/Training/TrainingScreen";
import { GestionClienteleScreen } from "./screens/GestionClientele/GestionClienteleScreen";
import { OprimisationFiscaleScreen } from "./screens/OprimisationFiscale/OprimisationFiscaleScreen";
import { InformatiqueScreen } from "./screens/Informatique/InformatiqueScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomeScreen />} />
          <Route path="advice" element={<AdviceScreen />} />
          <Route path="training" element={<TrainingScreen />} />
          <Route path="coaching" element={<CoachingScreen />} />
          <Route
            path="projectManagement"
            element={<ProjectManagementScreen />}
          />
          <Route path="rh" element={<RhScreen />} />
          <Route path="informatique" element={<InformatiqueScreen />} />
          <Route path="optimisationFiscale" element={<OprimisationFiscaleScreen />} />
          <Route path="gestionClientele" element={<GestionClienteleScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
