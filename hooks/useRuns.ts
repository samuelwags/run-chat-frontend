import React, { useCallback, useEffect, useState } from 'react';
import { api_url } from '../helpers/constants';

export const useRuns = (): [any[], ()=>void] => {
  const [runs, setRuns] = useState([]);

  const fetchRuns = useCallback(
    () => {
      fetch(`${api_url}/runs`, {
        method: 'GET',
        credentials: 'include',
      })
      .then( (res) => res.json())
      .then( (data) => Array.isArray(data) ? setRuns(data) : setRuns([]))
    }, []);
  
  useEffect(fetchRuns, []);

  return [runs, fetchRuns]
}