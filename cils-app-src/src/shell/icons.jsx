// Line icons used by the shell. One stroke weight, inherits the text colour.
const base = {
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

const make = (children) =>
  function Icon({ size = 22, ...rest }) {
    return (
      <svg {...base} width={size} height={size} {...rest}>
        {children}
      </svg>
    );
  };

export const IconToday = make(
  <>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <path d="M8 2v4M16 2v4M3 10h18" />
  </>,
);
export const IconTests = make(
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M8 13h8M8 17h5" />
  </>,
);
export const IconWords = make(
  <>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
  </>,
);
export const IconExplore = make(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M16.2 7.8l-2.1 6.3-6.3 2.1 2.1-6.3 6.3-2.1z" />
  </>,
);
export const IconProgress = make(<path d="M18 20V10M12 20V4M6 20v-6" />);
export const IconBack = make(<path d="M15 18l-6-6 6-6" />);
export const IconArrow = make(<path d="M5 12h14M13 6l6 6-6 6" />);
export const IconClock = make(
  <>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </>,
);
export const IconClose = make(<path d="M18 6L6 18M6 6l12 12" />);
export const IconCheck = make(<path d="M20 6L9 17l-5-5" />);
export const IconChevron = make(<path d="M9 18l6-6-6-6" />);
export const IconText = make(
  <>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <path d="M14 2v6h6M8 13h8M8 17h8" />
  </>,
);
export function IconPause({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="6" y="4" width="4" height="16" rx="1" />
      <rect x="14" y="4" width="4" height="16" rx="1" />
    </svg>
  );
}
export function IconPlay({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 4l13 8-13 8V4z" />
    </svg>
  );
}
