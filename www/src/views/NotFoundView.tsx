import './NotFoundView.css';

export function NotFoundView() {
  return (
    <div className="page page-not-found">
      <div className="not-found-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page Not Found</h2>
        <p className="error-description">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <div className="actions">
          <a href="/" className="button home-button">
            Go to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
