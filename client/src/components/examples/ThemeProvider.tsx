import { ThemeProvider } from '../ThemeProvider'

export default function ThemeProviderExample() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="p-8 min-h-screen bg-background text-foreground">
        <h1 className="text-2xl font-bold">Theme Provider Active</h1>
        <p className="text-muted-foreground">Dark theme is now active</p>
      </div>
    </ThemeProvider>
  )
}