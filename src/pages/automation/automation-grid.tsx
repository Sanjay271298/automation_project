import React from 'react'

interface AutomationGridProps {
    setPageViewFun: (value: any,editvalue:any) => void;
  }
  
function AutomationGrid({setPageViewFun}:AutomationGridProps) {
  return (
    <div>AutomationGrid</div>
  )
}

export default AutomationGrid