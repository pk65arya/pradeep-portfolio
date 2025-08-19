import React from "react";
import "./Button.scss";

export default function Button({
  text,
  className,
  href,
  newTab,
  downloadAndOpen,
  viewHref,
  downloadHref,
}) {
  const handleClick = (e) => {
    if (downloadAndOpen && viewHref && downloadHref) {
      // Open in new tab (view)
      window.open(viewHref, "_blank");
      // Trigger download
      const link = document.createElement("a");
      link.href = downloadHref;
      link.setAttribute("download", "resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      e.preventDefault();
    }
  };

  return (
    <div className={className}>
      <a
        className="main-button"
        href={viewHref || href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
        onClick={handleClick}
      >
        {text}
      </a>
    </div>
  );
}
