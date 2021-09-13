// ANCHOR CSS
import './DescriptionList.css';

export default function DescriptionList() {
    return (
        <div className="description-list">
            <div className="description-container">
                <div className="description-row">
                    <div className="function-name">
                        Get Logs
                    </div>
                    <div className="info-btn">
                        <div>i</div>
                        <div className="carat">{`<`}</div>
                    </div>
                </div>
                <div className="description-info">
                    Get the logs of a specific container.
                </div>
            </div>
            <div className="description-container">
                <div className="description-row">
                    <div className="function-name">
                        List Containers
                    </div>
                    <div className="expand-info-btn">
                        i <span className="carat">{`<`}</span>
                    </div>
                </div>
                <div className="description-info">
                    Get a list of all your containers.
                </div>
            </div>
        </div>
    )
}