import React, { Fragment, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "../src/component/header/header";
import Home from "../src/component/home/home";
// import Breadcrumb from "../src/component/header/breadCrumb";

import "./App.css";
import Ourstory from "./component/about/our-story";
import Aibidata from "./component/technologycoes/ai-bi-data";
import IotMobilityDevices from "./component/technologycoes/iot-mobility-devices";
import Devops from "./component/technologycoes/devops";
import Cloud from "./component/technologycoes/cloud";
import OpenSourceTech from "./component/technologycoes/open-source-tech";
import MicrosoftTechnologies from "./component/technologycoes/microsoft-technologies";
import DigitalTransformation from "./component/services/DigitalTransformation";
import EnterpriseApplications from "./component/services/EnterpriseApplications";
import PlatformEngineering from "./component/services/PlatformEngineering";
import VerificationandValidation from "./component/services/verification-and-validation";
import LeadershipTeam from "./component/about/Leadership-Team";
import OurStory from "./component/about/our-story";
import WhySynoverge from "./component/about/whysynoverge";
import Career from "./component/career/career";
import Contactus from "./component/contactus/contact";
import Error from "./component/error/error";
import Thankyou from "./component/thankyou/thank-you";
import Privacypolicy from "./component/privacypolicy/policy";
import ApplyCareer from "./component/career/applycareer";
import Pulses from "./component/products/PulsesAndLentils";
import Grains from "./component/products/GrainsAndMillets";
import NutsAndSeeds from "./component/products/NutsAndSeeds";
import AnimalFeeds from "./component/products/HealthyAndNutriFoods";
import RajmaKidneyBeans from "./component/products/RajmaKidneyBeans";
import MasalaAndSpices from "./component/products/MasalaAndSpices";
import HealthyAndNutriFoods from "./component/products/HealthyAndNutriFoods";

const Letstalk = lazy(() => import("./component/letstalk/talk"));
const Footer = lazy(() => import("../src/component/footer/footer"));
const AddTrailingSlash = () => {
  const location = useLocation();

  // Redirect to add trailing slash if missing (ignore root path)
  if (location.pathname !== "/" && !location.pathname.endsWith("/")) {
    return <Navigate to={`${location.pathname}/`} replace />;
  }

  return null;
};
// Inside some component

function App() {
  useEffect(() => {
    const { hostname, protocol, pathname, search } = window.location;

    // Check if the current hostname is the non-WWW version
    if (hostname === "synoverge.com") {
      // Redirect to the WWW version
      window.location.href = `${protocol}//www.synoverge.com${pathname}${search}`;
    }
  }, []);
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <ToastContainer />
        <Router>
          <Header />
          <AddTrailingSlash />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<Ourstory />} />
            <Route path="/pulses" element={<Pulses />} />
            <Route path="/grains" element={<Grains />} />
            <Route path="/nutsandseeds" element={<NutsAndSeeds />} />
            <Route path="/rajmakidneybeans" element={<RajmaKidneyBeans />} />
            <Route path="/masalaandspices" element={<MasalaAndSpices />} />
            <Route path="/career" element={<Career />} />
            <Route
              path="/healthyandnutrifoods"
              element={<HealthyAndNutriFoods />}
            />

            <Route
              path="/digital-transformation"
              element={<DigitalTransformation />}
            />
            <Route
              path="/enterprise-applications"
              element={<EnterpriseApplications />}
            />
            <Route
              path="/product-engineering-services"
              element={<PlatformEngineering />}
            />
            <Route
              path="/verification-and-validation"
              element={<VerificationandValidation />}
            />
            <Route path="/ai-bi-data" element={<Aibidata />} />
            <Route
              path="/iot-mobility-devices"
              element={<IotMobilityDevices />}
            />
            <Route path="/devops" element={<Devops />} />
            <Route path="/cloud" element={<Cloud />} />
            <Route
              path="/open-source-technologies"
              element={<OpenSourceTech />}
            />
            <Route
              path="/microsoft-technologies"
              element={<MicrosoftTechnologies />}
            />
            <Route path="/leadership-team" element={<LeadershipTeam />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/why-synoverge" element={<WhySynoverge />} />
            <Route path="/career/*" element={<ApplyCareer />} />
            <Route path="/contact-us" element={<Contactus />} />
            <Route path="/404-error" element={<Error />} />
            <Route path="/thank-you" element={<Thankyou />} />
            <Route path="/privacy-policy" element={<Privacypolicy />} />
            <Route path="/lets-talk" element={<Letstalk />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Router>
      </Suspense>
    </Fragment>
  );
}

export default App;
