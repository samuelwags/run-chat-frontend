import { api_url } from "helpers/constants";
import { useCallback, useEffect, useState } from "react";
import { TrainingPlan } from "./useTrainingPlan";

export type User = {
  user_name: string,
  id: string,
  training_plans: TrainingPlan[]
}

export const useUser = (userId?: string) => {
  if (!userId) return undefined;

  const [user, setUser] = useState<User>();

  const fetchUser = useCallback(
    () => {
      fetch(`${api_url}/users/${userId}`, {
        method: 'GET',
        credentials: 'include'
      })
      .then( (res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data as User)
      })
    }, []
  );

  useEffect(() =>{
    if (!user) fetchUser();
  }, [user]);

  return user;
}