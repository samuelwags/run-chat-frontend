import React, { useCallback, useEffect, useState } from 'react';
import { api_url } from '../helpers/constants';

export type PRType = {
  category: 'distance' | 'average' | 'split';
  run_id: number,
  user_id: number
}

export type RunType = {
  date?: string;
  distance?: number;
  description?: string;
  id: string;
  prs: {
    average?: PRType,
    split?: PRType,
    distance?: PRType
  }
  user: {
    user_name: string
  };
  time?: number;
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