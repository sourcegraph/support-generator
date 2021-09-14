// ANCHOR External Modules
import { useEffect, useState } from 'react';

// ANCHOR CSS
import './Descriptions.css';

export default function Description({
    func,
    info,
    currentInfoOpen,
    setCurrentInfoOpen
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
                <li
                    className="desc-item"
                    onMouseEnter={() => setShowInfoOption(true)}
                    onMouseLeave={() => setShowInfoOption(false)}
                    onClick={handleExpand}
                >
                    <div className={`row ${currentInfoOpen === func && 'expanded'}`}>
                        <div>
                            {func}
                        </div>
                        <button
                            className={`expand ${showInfoOption && "active"}`}
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
                        <div className="command-info">
                            <ul className="description">
                                <li>
                                    {info.description}
                                </li>
                            </ul>
                        </div>
                    }
                </li>
            }
        </>

    )
}