"use client"

import { useState } from "react"
import { useTheme } from "../../components/themeprovider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  const { theme } = useTheme()
  const [isToggled, setIsToggled] = useState(false)

  return (
    <footer className="w-full p-6 mt-10 border-t bg-background text-foreground">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4">
        
        {/* Subscribe Box */}
        <div 
          className={`flex w-full max-w-md items-center space-x-2 border p-3 rounded-lg transition-colors ${
            isToggled ? "bg-primary text-primary-foreground" : "bg-muted"
          }`}
        >
          <Input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 bg-transparent border-none focus:outline-none"
          />
          <Button 
            onClick={() => setIsToggled(!isToggled)} 
            className="bg-accent text-accent-foreground"
          >
            Subscribe
          </Button>
        </div>
        
        {/* Copyright Text */}
        <p className="text-sm text-center">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>

      </div>
    </footer>
  )
}
