import { createContext, useState } from "react";

export const ServiceCtx = createContext(null)

export const ServiceProvier = ({ children }) => {
    const [serviceName, setServiceName] = useState('')
    const [pages, setPages] = useState()
    const [srcLogo, setSrcLogo] = useState('/logoIndusphere.png')
    const [background, setBackground] = useState('transparent')

    return (
        <ServiceCtx.Provider 
            value={{
                serviceName,
                background,
                pages,
                srcLogo,
                setServiceName,
                setBackground,
                setPages,
                setSrcLogo
            }}
        >
            {children}
        </ServiceCtx.Provider>
    )
}