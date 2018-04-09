import * as React from 'react';
import './xw-button.scss';

interface Style {
  className: string;
}

export const XwButton = (
  {
    className,
  }: Style) => (
    <div className={`${className} xw-button`}>
      <button>
        <a href="mailto:pierrot-app@edu.gobelins.fr">Demander une d&#233;mo</a>
      </button>
    </div>
);