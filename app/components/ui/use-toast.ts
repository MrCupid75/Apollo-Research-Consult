"use client"

// Simplified version of the toast hook
import { useState, useCallback } from "react"

type ToastProps = {
  title?: string
  description?: string
  variant?: "default" | "destructive"
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = useCallback(({ title, description, variant = "default" }: ToastProps) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { title, description, variant }])

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast !== { title, description, variant }))
    }, 5000)

    return id
  }, [])

  return { toast, toasts }
}
