import { useEffect, useState } from 'react';

export default function useMediaQuery(initalQuery) {
  const [query, setQuery] = useState(initalQuery);
  const [matches, setMatches] = useState(false);

  // check query and listen for media change.
  useEffect(() => {
    if (!query) return;

    const _onChange = (mql) => {
      setMatches(mql.matches);
    };

    const mql = window.matchMedia(query);

    setMatches(mql.matches);

    try {
      mql.addEventListener('change', _onChange);
    } catch {
      mql.addEventListener(_onChange);
    }

    return () => {
      try {
        mql.removeEventListener('change', _onChange);
      } catch {
        mql.removeEventListener(_onChange);
      }
    };
  }, [query]);

  return [matches, setQuery];
}
