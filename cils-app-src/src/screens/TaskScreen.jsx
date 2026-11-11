/*
 * The full-screen frame for one exercise: a photo with the title on it, the
 * exercise in a sheet that rises over the photo, and the main action pinned
 * at the bottom. It covers the tab bar so nothing competes with the task.
 *
 * Closing it is a "back" step, so Android's back button and the browser's
 * back button both close the task instead of leaving the section.
 */
import { useEffect, useRef } from 'react';
import { IconClose } from '../shell/icons.jsx';

export default function TaskScreen({ photo, overline, title, context, onClose, closeLabel, aside, footer, children }) {
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;
  const scrollRef = useRef(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.history.pushState({ imTask: true }, '');
    const onPop = () => onCloseRef.current();
    window.addEventListener('popstate', onPop);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('popstate', onPop);
    };
  }, []);

  // A new exercise in the same frame starts at the top.
  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  }, [title]);

  return (
    <div className="im-task" role="dialog" aria-modal="true" aria-label={title}>
      <div className="im-task-scroll" ref={scrollRef}>
        <header className="im-task-photo">
          <img src={photo} alt="" />
          <div className="im-scrim" aria-hidden="true" />
          <div className="im-task-bar">
            <button type="button" className="im-round static" onClick={() => window.history.back()} aria-label={closeLabel || 'Chiudi'}>
              <IconClose />
            </button>
            {aside}
          </div>
          <div className="im-task-title">
            {overline && <span className="im-overline on-photo">{overline}</span>}
            <h1>{title}</h1>
            {context && <p>{context}</p>}
          </div>
        </header>
        <div className="im-task-sheet">{children}</div>
      </div>
      {footer && <div className="im-task-footer">{footer}</div>}
    </div>
  );
}
