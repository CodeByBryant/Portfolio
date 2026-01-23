"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div
      className="min-h-screen bg-background text-foreground flex flex-col"
      data-testid="not-found-page"
    >
      <Navigation />
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <Card className="w-full max-w-lg mx-4">
          <CardContent className="pt-8 pb-8 text-center">
            <div className="flex justify-center mb-6">
              <AlertCircle className="h-16 w-16 text-destructive" />
            </div>

            <h1 className="text-4xl font-bold mb-4">404</h1>
            <h2 className="text-xl font-semibold mb-4 text-foreground">
              Page Not Found
            </h2>

            <p className="text-muted-foreground mb-8">
              The page you&apos;re looking for doesn&apos;t exist or has been moved.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Go Back
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
