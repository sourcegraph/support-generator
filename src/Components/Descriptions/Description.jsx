import { useEffect, useState } from 'react';
import './Descriptions.css';

export default function Description({key, func, info, currentInfoOpen, setCurrentInfoOpen}) {
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

    useEffect(() => {
    }, [currentInfoOpen])

    return (
        <>
            {func !== "Function" &&
                <li 
                    key={key}
                    className="desc-item"
                    onMouseEnter={() => setShowInfoOption(true)}
                    onMouseLeave={() => setShowInfoOption(false)}
                >
                    <div className={`row ${currentInfoOpen === func && 'expanded'}`}>
                        <div>
                            {func}
                        </div>
                        {showInfoOption && 
                            <button
                                className="expand"
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
                                    <div>
                                        {`<`}
                                    </div>
                                )}
                            </button>
                        }
                    </div>
                    {currentInfoOpen === func && 
                        <div className="command-info">
                            <ul className="description">
                                <li>
                                    <span className="info-key">Description:&nbsp;</span>{info.description}
                                </li>
                            </ul>
                        </div>
                    }
                </li>
            }
        </>

    )
}