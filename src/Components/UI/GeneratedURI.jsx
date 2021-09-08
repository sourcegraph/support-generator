import './GeneratedURI.css';

export default function GeneratedURI({ generatedURI, setGeneratedURI }) {
    return (
        <div className="generated-uri-container">
            <input
                className="generated-uri"
                type="text"
                placeholder="Generated URL will appear here."
                value={generatedURI}
            />
        </div>
    )
}