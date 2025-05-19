"use client";

import * as React from "react";
import Link from "next/link";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/shared/mode-toggle";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent"
    )}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">Pixelcraft AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <DesktopNav />
            <div className="flex items-center gap-4">
              <ModeToggle />
              <Button asChild size="sm" variant="outline">
                <Link href="#login">Log in</Link>
              </Button>
              <Button asChild size="sm">
                <Link href="#signup">Start free trial</Link>
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center gap-4 md:hidden">
            <ModeToggle />
            <Sheet>
              <SheetTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <MobileNav />
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}

function DesktopNav() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Features</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <ListItem href="#image-generation" title="AI Image Generation">
                Create stunning visuals with a simple text prompt
              </ListItem>
              <ListItem href="#background-removal" title="Background Removal">
                Remove backgrounds with one click
              </ListItem>
              <ListItem href="#image-compression" title="Image Compression">
                Reduce file size without quality loss
              </ListItem>
              <ListItem href="#editing-tools" title="Editing Tools">
                Advanced editing capabilities powered by AI
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#use-cases" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Use Cases
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="#pricing" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              <ListItem href="#blog" title="Blog">
                Tips, tutorials, and industry insights
              </ListItem>
              <ListItem href="#tutorials" title="Tutorials">
                Step-by-step guides to get the most out of Pixelcraft
              </ListItem>
              <ListItem href="#api" title="API Documentation">
                Integrate Pixelcraft into your workflow
              </ListItem>
              <ListItem href="#faq" title="FAQ">
                Answers to common questions
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function MobileNav() {
  return (
    <div className="flex flex-col gap-6 pt-6">
      <Link href="/" className="flex items-center gap-2">
        <Sparkles className="h-6 w-6 text-primary" />
        <span className="font-bold text-xl">Pixelcraft AI</span>
      </Link>
      <div className="flex flex-col gap-4">
        <div className="border-b pb-2">
          <h4 className="font-medium mb-1">Features</h4>
          <nav className="flex flex-col gap-2">
            <Link href="#image-generation" className="text-muted-foreground hover:text-foreground transition-colors">AI Image Generation</Link>
            <Link href="#background-removal" className="text-muted-foreground hover:text-foreground transition-colors">Background Removal</Link>
            <Link href="#image-compression" className="text-muted-foreground hover:text-foreground transition-colors">Image Compression</Link>
            <Link href="#editing-tools" className="text-muted-foreground hover:text-foreground transition-colors">Editing Tools</Link>
          </nav>
        </div>
        <Link href="#use-cases" className="font-medium">Use Cases</Link>
        <Link href="#pricing" className="font-medium">Pricing</Link>
        <div className="border-b pb-2">
          <h4 className="font-medium mb-1">Resources</h4>
          <nav className="flex flex-col gap-2">
            <Link href="#blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link>
            <Link href="#tutorials" className="text-muted-foreground hover:text-foreground transition-colors">Tutorials</Link>
            <Link href="#api" className="text-muted-foreground hover:text-foreground transition-colors">API Documentation</Link>
            <Link href="#faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
          </nav>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-auto">
        <Button asChild variant="outline" className="w-full">
          <Link href="#login">Log in</Link>
        </Button>
        <Button asChild className="w-full">
          <Link href="#signup">Start free trial</Link>
        </Button>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    title: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";