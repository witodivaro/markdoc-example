import * as React from 'react';

const iconToPath = {
  'chainedLink': '/chained-link.svg',
  'arrowLink': '/arrow-link.svg',
};

export function OutLink({ title, icon, to, children }) {
  return (
    <a className="out-link" href={to}>
      <strong>{title}</strong>
      <span>{children}</span>
      {icon && <img src={iconToPath[icon]} />}
      <style jsx>
        {`
          .out-link {
            padding: 8px 24px;
            margin-right: 20px;

            display: inline-flex;
            align-items: center;
            background: #57e5b2;
            border-radius: 12px;
            font-size: 16px;
            box-shadow: 0 12px 24px 0 rgb(0 0 0 / 12%);
            max-width: 320px;
            min-width: 126px;

            grid-column-gap: 8px;
            font-size: 16px;
            line-height: 1.5;
            text-decoration: none;
            cursor: pointer;
            font-weight: 600;
            color: black;

            transition: 0.4s ease;
          }
          .out-link :global(p) {
            margin: 0;
          }

          .out-link :global(img) {
            width: 20px;
            height: 20px;
          }
          
          .out-link:hover {
            transform: translateY(-3px);
            background: #1ec085;
          }
        `}
      </style>
    </a>
  );
}
