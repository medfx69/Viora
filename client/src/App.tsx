import Landing from "./pages/Landing";
import { ThemeProvider } from "@/components/Theme/theme-provider";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Home from "./pages/Home";
import Plot from "./pages/Plot";
import Profile from "./components/Profile/Profile";
import Settings from "./pages/Settings";
import PrivacyPolicy from "./pages/Privacypolicy";
import Docs from "./pages/Docs";
import WorldChat from "./pages/WorldChat";
import TermsAndConditions from "./pages/TermsAndConditions";

const App = () => {
  localStorage.setItem("username", "testttttt");
  // toast.success("Signin Successful", {
  //   description: `Welcome, testttttt`,
  // });
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="/plot" element={<Plot />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/worldchat" element={<WorldChat />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
      <Toaster />
    </ThemeProvider>
  );
};

export default App;
