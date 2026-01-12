'use client'
import React, { memo } from 'react'
import { cn } from '@/lib/utils'
import useTradingViewHook from '@/hooks/UseTradingViewHook'

interface TradingViewWidgetProps {
  title?: string
  scriptUrl: string
  config: Record<string, unknown>
  height?: number
  className?: string
}

const TradingViewWidget = ({
  title,
  scriptUrl,
  config,
  height = 600,
  className
}: TradingViewWidgetProps) => {
  const containerRef = useTradingViewHook(scriptUrl, config, height)

  return (
    <div className="w-full">
      {title && (
        <h3 className="mb-4 text-2xl font-semibold text-gray-400">
          {title}
        </h3>
      )}

      {/* IMPORTANT: React does NOT create widget DOM */}
      <div ref={containerRef} className={cn('w-full', className)} />
    </div>
  )
}

export default memo(TradingViewWidget)
