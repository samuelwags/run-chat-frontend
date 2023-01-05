import React, { useCallback, useEffect, useState } from 'react';
import { api_url } from '../helpers/constants';

export type RunType = {
  date?: string,
  distance?: number,
  description?: string,
  time?: number,
  user: {
    user_name: string
  }
}

export const useRuns = (): [RunType[], ()=>void] => {
  const [runs, setRuns] = useState<RunType[]>([]);

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