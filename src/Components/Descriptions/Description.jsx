// ANCHOR External Modules
import { useEffect, useState } from 'react';

// ANCHOR CSS
import './Descriptions.css';

export default function Description({
    func,
    info,
    currentInfoOpen,
    setCurrentInfoOpen,
    mode
}) {
    const [showInfoOption, setShowInfoOption] = useState(false);
    const [showDesc, setShowDesc] = useState(false);

    const handleExpand = () => {
        if (currentInfoOpen !== func) {
            setCurrentInfoOpen(func);
            setShowDesc(true)
        } else {
            setCurrentInfoOpen("Function")
            setShowDesc(false)
        }
    }

    useEffect(() => { }, [currentInfoOpen])

    return (
        <>
            {func !== "Function" &&
                <div
                    className={`desc-item ${mode === 'dark' ? 'dark' : 'light'}`}
                    onMouseEnter={() => setShowInfoOption(true)}
                    onMouseLeave={() => setShowInfoOption(false)}
                    onClick={handleExpand}
                >
                    <div className={`row ${currentInfoOpen === func && 'expanded'} ${mode === "dark" ? "dark" : "light"}`} >
                        <div>
                            {func}
                        </div>
                        <button
                            className={`expand ${showInfoOption && "active"} ${mode === "dark" ? "dark" : "light"}`}
                            onClick={handleExpand}
                        >
                            <div>
                                i&nbsp;
                            </div>
                            {(showDesc && currentInfoOpen === func) ? (
                                <div className="rotated">
                                    {`<`}
                                </div>
                            ) : (
                                <div className="not-rotated">
                                    {`<`}
                                </div>
                            )}
                        </button>
                    </div>
                    {currentInfoOpen === func &&
                        <div className={`command-info ${mode === 'dark' ? 'dark' : 'light'}`}>
                            <ul className={`description ${mode === 'dark' && 'dark'}`}>
                                <li>
                                    {info.description}
                                </li>
                            </ul>
                        </div>
                    }
                </div>
            }
        </>

    )
}