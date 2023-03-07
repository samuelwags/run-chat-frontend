import { api_url } from "helpers/constants";
import { useCallback, useEffect, useState } from "react";
import { User } from "./useUser";

export type TrainingPlan = {
  id: string,
  members: User[],
  name: string,
  planned_runs: {
    id: string,
    date: Date,
    distance: number,
    user: User,
    completed: boolean
  }[]
  user: User
}

export const useTrainingPlan = (id?: string) => {
  const [trainingPlan, setTrainingPlan] = useState<TrainingPlan>();

  const fetchTrainingPlan = useCallback(
    () => {
      if (!id) return;
      console.log('hi');
      fetch(`${api_url}/training_plans/${id}`, {
        method: 'GET',
        credentials: 'include'
      })
      .then( (res) => res.json())
      .then((data) => {
        setTrainingPlan(data as TrainingPlan)
      })
    }, [id]
  );

  useEffect(() =>{
    if (!trainingPlan) fetchTrainingPlan();
  }, [id, trainingPlan]);

  return {trainingPlan, fetchTrainingPlan};
}