import { useEffect } from 'react'

function useDynamicContentChild(ref, newContent, setContent, setOpacity) {
    useEffect(() => {
        const scrollHandler = () => {
            const client = ref.current.getBoundingClientRect();
            const topPercent = Math.abs(client.top / client.height);

            if (topPercent < 0.5 && topPercent >= 0) {
                setContent(newContent)
                setOpacity(100 - (topPercent*100))
            };
        };

        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, [ref, newContent, setContent, setOpacity]);
}

export default useDynamicContentChild