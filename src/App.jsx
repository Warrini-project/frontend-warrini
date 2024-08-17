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
            <Route path="/certificates" element={<ProtectedRoutes><Certificates/></ProtectedRoutes>}/>
            <Route path="/resume" element={<ProtectedRoutes><Cv/></ProtectedRoutes>}/>
            <Route path="/training" element={<ProtectedRoutes><Training/></ProtectedRoutes>}/>
            <Route path="/guide-me" element={<ProtectedRoutes><GuideMe/></ProtectedRoutes>}/>
            <Route path="/guide-me/development" element={<Dev/>}/>
            <Route path="/guide-me/data-and-analytics" element={<Data/>}/>
            <Route path="/freelance" element={<Freelance/>}/>
          </Routes>
        </Layout>
      </Router>
    </Provider>
  )
}

export default App
