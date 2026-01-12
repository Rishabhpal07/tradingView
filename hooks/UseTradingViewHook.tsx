'use client'
import { useEffect, useRef } from "react"

const useTradingViewHook = (
  scriptUrl: string,
  config: Record<string, unknown>,
  height = 600
) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const configString = JSON.stringify(config)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.innerHTML = `
      <div class="tradingview-widget-container">
        <div 
          class="tradingview-widget-container__widget"
          style="width:100%; height:${height}px;"
        ></div>
      </div>
    `

    const script = document.createElement("script")
    script.src = scriptUrl
    script.async = true
    script.innerHTML = configString

    container.appendChild(script)

    return () => {
      container.innerHTML = ''
    }
  }, [scriptUrl, configString, height])

  return containerRef
}

export default useTradingViewHook
