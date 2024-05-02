import * as React from "react"
 
import { classNames } from "../lib/utils"

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => { 
  return (
    <p
      ref={ref}
      className={classNames("text-[0.8rem] text-muted-foreground", className)}
      {...props}
    />
  )
})
FormDescription.displayName = "FormDescription"

export { FormDescription }
