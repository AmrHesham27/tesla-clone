import { useRef, useState, useEffect } from 'react'

function useScrollToNextSectionParent() {
    const [sectionsInView, setSectionsInView] = useState([])
    const lastSection = useRef()

    useEffect(() => {
        lastSection.current = sectionsInView[sectionsInView.length - 1]?.current
        setTimeout(() => {
        if ( lastSection.current && sectionsInView.length > 0 ) {
            lastSection['current'].scrollIntoView()
            setSectionsInView([])
        }
        }, 900)
    }, [sectionsInView, setSectionsInView])

    return { setSectionsInView }
}

export default useScrollToNextSectionParent