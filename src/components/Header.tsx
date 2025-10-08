import { Button } from "@/components/ui/button";
import { Code2, Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Code2 className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold">CodeNavigator</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#docs" className="text-sm font-medium hover:text-primary transition-colors">
              Docs
            </a>
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="w-9 h-9 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
