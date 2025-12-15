import { useEffect } from "react";

export function useScrollAnimation() {
    useEffect(() => {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px",
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const target = entry.target as HTMLElement;
                    target.style.animationPlayState = "running";
                    target.style.opacity = "1";
                    observer.unobserve(target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll(".animate-on-scroll");
        elements.forEach((el) => {
            const target = el as HTMLElement;
            target.style.animationPlayState = "paused";
            observer.observe(target);
        });

        // Cleanup
        return () => {
            elements.forEach((el) => observer.unobserve(el));
            observer.disconnect();
        };
    }, []);
}
