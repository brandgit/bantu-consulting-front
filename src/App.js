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
import { GestionFinanciereScreen } from "./screens/GestionFinanciere/GestionFinanciereScreen";
import { DeveloppementPersonnelScreen } from "./screens/DeveloppementPersonnel/DeveloppementPersonnelScreen";
import { GestionDesPrioritesScreen } from "./screens/GestionDesPriorites/GestionDesPrioritesScreen";
import { InterventionScreen } from "./screens/Intervention/InterventionScreen";
import { ManagerEtLeaderScreen } from "./screens/ManagerEtLeader/ManagerEtLeaderScreen";
import { ComplémentsDeRevenusScreen } from "./screens/ComplémentsDeRevenus/ComplémentsDeRevenusScreen";
import { ImmobilierScreen } from "./screens/Immobilier/ImmobilierScreen";
import { BusinessScreen } from "./screens/Business/BusinessScreen";
import { RetraiteScreen } from "./screens/Retraite/RetraiteScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="*" element={<HomeScreen />} />
          <Route exact path="/advice" element={<AdviceScreen />} />
          <Route exact path="/training" element={<TrainingScreen />} />
          <Route exact path="/coaching" element={<CoachingScreen />} />
          <Route
            exact
            path="/projectManagement"
            element={<ProjectManagementScreen />}
          />
          <Route exact path="/rh" element={<RhScreen />} />
          <Route exact path="/informatique" element={<InformatiqueScreen />} />
          <Route
            exact
            path="/optimisationFiscale"
            element={<OprimisationFiscaleScreen />}
          />
          <Route
            exact
            path="/gestionClientele"
            element={<GestionClienteleScreen />}
          />
          <Route
            exact
            path="/GestionDesPriorites"
            element={<GestionDesPrioritesScreen />}
          />
          <Route
            exact
            path="/GestionFinanciere"
            element={<GestionFinanciereScreen />}
          />
          <Route
            exact
            path="/DeveloppementPersonnel"
            element={<DeveloppementPersonnelScreen />}
          />
          <Route exact path="/Intervention" element={<InterventionScreen />} />
          <Route
            exact
            path="/ManagerEtLeader"
            element={<ManagerEtLeaderScreen />}
          />
          <Route exact path="/Retraite" element={<RetraiteScreen />} />
          <Route exact path="/Business" element={<BusinessScreen />} />
          <Route exact path="/Immobilier" element={<ImmobilierScreen />} />
          <Route
            exact
            path="/ComplémentsDeRevenus"
            element={<ComplémentsDeRevenusScreen />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
