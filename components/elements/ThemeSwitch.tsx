import { useEffect, useState } from "react"

export default function ThemeSwitch() {
    const [theme, setTheme] = useState<string>(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") || "light-theme"
        }
        return "light-theme"
    })

    useEffect(() => {
        // Remove both theme classes before adding the current one
        document.body.classList.remove("light-theme", "dark-theme")
        document.body.classList.add(theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === "light-theme" ? "dark-theme" : "light-theme"))
    }

    return (
        <>
            <nav className="switcher__tab" onClick={toggleTheme}>
                <span className={`switcher__btn ${theme === "light-theme" ? "light-mode" : "dark-mode"}`}>
                    {theme === "light-theme" ? <i className="flaticon-sun" /> : <i className="flaticon-moon" />}
                </span>
                <span className="switcher__mode" />
                <span className={`switcher__btn ${theme === "light-theme" ? "dark-mode" : "light-mode"}`}>
                    {theme === "light-theme" ? <i className="flaticon-moon" /> : <i className="flaticon-sun" />}
                </span>
            </nav>
        </>
    )
}
