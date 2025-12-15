import { useRef, useLayoutEffect } from 'react'
import gsap from 'gsap'

export function useIntroAnimation() {
    const tl = useRef<gsap.core.Timeline>(null)

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline()
                .to('#loader-progress', {
                    width: '100%',
                    duration: 1.2,
                    ease: 'power2.inOut',
                    onUpdate: function () {
                        const text = document.getElementById('loader-text')
                        if (text) {
                            text.innerText = Math.round(this.progress() * 100) + '%'
                        }
                    },
                })
                .to(
                    '#loader',
                    {
                        yPercent: -100,
                        duration: 0.6,
                        ease: 'power4.inOut',
                        delay: 0.1,
                    },
                )
                // Hero Reveal
                .to(
                    '.hero-glow',
                    {
                        opacity: 1,
                        duration: 1.5,
                        ease: 'power2.out',
                    },
                    '-=0.5',
                )
                .to(
                    '.hero-char',
                    {
                        opacity: 1,
                        y: 0,
                        filter: 'blur(0px)',
                        duration: 1.2,
                        stagger: 0.1,
                        ease: 'power3.out',
                    },
                    '-=1.0',
                )
                .to(
                    '.hero-fade-in',
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.8,
                        stagger: 0.1,
                        ease: 'power2.out',
                    },
                    '-=0.8',
                )
        })

        return () => ctx.revert()
    }, [])

    return tl
}
