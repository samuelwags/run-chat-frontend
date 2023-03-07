import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { Layout } from "components/Layout"
import { TextField } from "components/TextField";
import { api_url } from "helpers/constants";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export default function TrainingPlanPage() {
  const router = useRouter();

  const [name, setName] = useState('');
  const [penalty, setPenalty] = useState('');

  const submit = useCallback(() => {
    fetch(`${api_url}/training_plans`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({name, penalty})
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.errors) console.log('ERROR:', data);
      else router.push(`/trainingPlan/${data.id}`);
    })
    .catch((err) => console.log('Error', err))
  }, [name, penalty]);

  return (
    <Layout>
      <FlexBox gap={12} direction='column' width='300px'>
        <TextField 
          id='name'
          label='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="penalty"
          label="Penalty"
          value={penalty}
          type='number'
          onChange={(e) => setPenalty(e.target.value)}
        />

        <Button
          label='Create'
          onClick={submit}
        />
      </FlexBox>
    </Layout>
  )
}