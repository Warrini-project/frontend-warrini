import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/user_authentication_pages/Login"
import Signup from "./pages/user_authentication_pages/Signup"
import ResetPassword from "./pages/user_authentication_pages/ResetPassword"
import ResetPasswordConfirm from "./pages/user_authentication_pages/ResetPasswordConfirm"
import Activate from "./pages/user_authentication_pages/Activate"
import { Provider } from "react-redux"
import store from "./services/store"
import Layout from "./services/hocs/Layout"
import Certificates from "./components/Services/Certificates/Certificates"
import Cv from "./components/Services/Cv/Cv"
import Training from "./components/Services/Training/Training"
import GuideMe from "./pages/GuideMe/GuideMe"
import Freelance from "./components/Services/Freelance/Freelance"
import Dev from "./pages/GuideMe/Services/Dev/Dev"
import Data from "./pages/GuideMe/Services/Data/Data"
import ProtectedRoutes from "./services/protected_routes/ProtectedRoutes"
import Careers from "./components/Services/Careers/Careers"
import CareerPage from "./components/Services/Careers/CareerPage"
import DynamicWebDev from "./pages/GuideMe/Services/Dev/web Dev/DynamicWebDev"
import DynamicDevFields from "./pages/GuideMe/Services/Dev/DynamicDevFields"
import DynamicMobileDev from "./pages/GuideMe/Services/Dev/mobile Dev/DynamicMobileDev"
import DynamicSoftwareDev from "./pages/GuideMe/Services/Dev/software Dev/DynamicSoftwareDev"
import GameDev from "./pages/GuideMe/Services/Dev/game Dev/GameDev"
import DynamicData from "./pages/GuideMe/Services/Data/DynamicData"
import InfraAndOperationsFields from "./pages/GuideMe/Services/Infrastructure_and_operations/InfraAndOperationsFields"
import DynamicInfrastructure from "./pages/GuideMe/Services/Infrastructure_and_operations/DynamicInfrastructure"

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/reset-password" element={<ResetPassword/>}/>
            <Route path="/password/reset/confirm/:uid/:token" element={<ResetPasswordConfirm/>}/>
            <Route path="/activate/:uid/:token" element={<Activate/>}/>
            {/*PROTECTED ROUTES*/}
            <Route path="/certificates/:domain?" element={<ProtectedRoutes><Certificates/></ProtectedRoutes>}/>
            <Route path="/resume" element={<ProtectedRoutes><Cv/></ProtectedRoutes>}/>
            <Route path="/training" element={<ProtectedRoutes><Training/></ProtectedRoutes>}/>
            <Route path="/guide-me" element={<ProtectedRoutes><GuideMe/></ProtectedRoutes>}/>
            <Route path="/careers" element={<ProtectedRoutes><Careers/></ProtectedRoutes>}/>
            <Route path="/careers/:title" element={<ProtectedRoutes><CareerPage/></ProtectedRoutes>}/>
            {/*END PROTECTED ROUTES*/}
            <Route path="/guide-me/development" element={<Dev/>}/>
            <Route path="/guide-me/data-and-analytics" element={<Data/>}/>
            <Route path="/guide-me/data-and-analytics/:skill" element={<DynamicData/>}/>
            <Route path="/freelance" element={<Freelance/>}/>
            <Route path="/guide-me/development/:field" element={<DynamicDevFields/>}/>
            <Route path="/guide-me/development/web development/:skill" element={<DynamicWebDev/>}/>
            <Route path="/guide-me/development/mobile development/:skill" element={<DynamicMobileDev/>}/>
            <Route path="/guide-me/development/software development/:skill" element={<DynamicSoftwareDev/>}/>
            <Route path="/guide-me/development/game development" element={<GameDev/>}/>
            <Route path="/guide-me/infrastructure-and-operations" element={<InfraAndOperationsFields/>}/>
            <Route path="/guide-me/infrastructure-and-operations/:skill" element={<DynamicInfrastructure/>}/>
          </Routes>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
