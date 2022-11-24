import {
  AnimatePresence,
  AnimatePresenceProps,
  HTMLMotionProps,
  motion,
  Variants
} from 'framer-motion'
import { forwardRef, ReactNode, useImperativeHandle, useState } from 'react'

export interface ISliderState {
  showingIndex: number
  direction: 'right' | 'left'
}

export interface ISliderForward {
  onLeftClick: () => void
  onRightClick: () => void
}

export interface ISimpleSliderProps {
  items: ReactNode[]
  motionProps?: HTMLMotionProps<'div'>
  animatePresenceProps?: AnimatePresenceProps
}

const SimpleSlider = forwardRef<ISliderForward, ISimpleSliderProps>(
  ({ items, animatePresenceProps, motionProps }, ref) => {
    const [{ showingIndex, direction }, setSlider] = useState({
      showingIndex: 0,
      direction: 'right'
    })

    const itemVariants: Variants = {
      enter: { x: '0%' },
      exit: { x: direction === 'right' ? '-100%' : '100%' },
      initial: { x: direction === 'right' ? '-100%' : '100%' }
    }

    const onRightClick = () => {
      setSlider(prev => {
        const newIndex = prev.showingIndex + 1

        return {
          direction: 'right',
          showingIndex:
            newIndex <= items.length - 1 ? newIndex : prev.showingIndex
        }
      })
    }

    const onLeftClick = () => {
      setSlider(prev => {
        const newIndex = prev.showingIndex - 1

        return {
          direction: 'left',
          showingIndex: newIndex >= 0 ? newIndex : prev.showingIndex
        }
      })
    }

    useImperativeHandle(ref, () => ({ onRightClick, onLeftClick }), [])

    return (
      <>
        <AnimatePresence exitBeforeEnter={true} {...animatePresenceProps}>
          {items.map(
            (item, index) =>
              index === showingIndex && (
                <motion.div
                  exit='exit'
                  key={index}
                  animate='enter'
                  initial='initial'
                  variants={itemVariants}
                  transition={{ type: 'tween', duration: 0.3 }}
                  {...motionProps}
                >
                  {item}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </>
    )
  }
)

export default SimpleSlider
