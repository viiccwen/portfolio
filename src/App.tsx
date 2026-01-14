import { Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ThemeProvider } from "@/components/ui/theme-provider";
import About from "@/pages/About";
import { metadata } from "@/lib/metadata";

import "@/index.css";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Helmet>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/svg+xml" href={metadata.icons.icon} />
      </Helmet>
      <Routes>
        <Route path="/" element={<About />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
