import { useEffect } from 'react'
import { gsap } from 'gsap'

export const useCustomCursor = () => {
    useEffect(() => {
        const cursorDot = document.querySelector('.cursor-dot') as HTMLElement
        const cursorCircle = document.querySelector('.cursor-circle') as HTMLElement

        if (!cursorDot || !cursorCircle) return

        const cursor = { x: 0, y: 0 }
        const dot = { x: 0, y: 0 }
        const circle = { x: 0, y: 0 }

        gsap.set(cursorDot, { xPercent: -50, yPercent: -50 })
        gsap.set(cursorCircle, { xPercent: -50, yPercent: -50 })

        const moveCursor = (e: MouseEvent) => {
            cursor.x = e.clientX
            cursor.y = e.clientY
        }

        const animate = () => {
            // Dot follows immediately
            dot.x += (cursor.x - dot.x) * 1
            dot.y += (cursor.y - dot.y) * 1

            // Circle follows with lag
            circle.x += (cursor.x - circle.x) * 0.15
            circle.y += (cursor.y - circle.y) * 0.15

            gsap.set(cursorDot, { x: dot.x, y: dot.y })
            gsap.set(cursorCircle, { x: circle.x, y: circle.y })

            requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', moveCursor)
        const animationId = requestAnimationFrame(animate)

        // Hover effects
        const handleHover = () => document.body.classList.add('hover-active')
        const handleLeave = () => document.body.classList.remove('hover-active')

        const interactiveElements = document.querySelectorAll('a, button, input')
        interactiveElements.forEach((el) => {
            el.addEventListener('mouseenter', handleHover)
            el.addEventListener('mouseleave', handleLeave)
        })

        return () => {
            window.removeEventListener('mousemove', moveCursor)
            cancelAnimationFrame(animationId)
            interactiveElements.forEach((el) => {
                el.removeEventListener('mouseenter', handleHover)
                el.removeEventListener('mouseleave', handleLeave)
            })
        }
    }, [])
}
