import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "@lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Portfolio from "@/pages/Portfolio";
import About from "@/pages/About";
import Projects from "@/pages/Projects";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

function Router() {
  const base = import.meta.env.BASE_URL;
  
  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path="/" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <ThemeProvider defaultTheme="dark">
            <Toaster />
            <Router />
          </ThemeProvider>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
