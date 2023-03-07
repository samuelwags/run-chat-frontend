import { Button } from "components/Button";
import { FlexBox } from "components/FlexBox";
import { TextField } from "components/TextField";
import { Dayjs } from "dayjs";
import { api_url } from "helpers/constants";
import { useCallback, useState } from "react";
import styled from "styled-components";

const Container = styled(FlexBox)`
  background: white;
  padding: 20px;
  border-radius: 4px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const AddPlannedRunForm = ({
  trainingPlanId,
  userId,
  date,
  callback
}: {
  trainingPlanId: string,
  userId: string,
  date: Dayjs,
  callback: () => void
}) => {
  const [distance, setDistance] = useState<string>();
  const [description, setDescription] = useState<string>();

  const submit = useCallback(() => {
    fetch(`${api_url}/planned_runs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify({
        distance,
        description,
        training_plan_id: trainingPlanId,
        user_id: userId,
        date: date.toDate()
      })
    })
    .then((response) => response.json())
    .then((data) => {
      if (!data?.errors) callback();
    })
  }, [distance, description])

  return (
    <Container
      direction="column"
      gap={12}
      width='300px'
    >
      <TextField
        id='distance'
        label='Distance'
        value={distance}
        onChange={(e) => setDistance(e.target.value)}
        type='number'
      />
      <TextField
        id='description'
        label='notes'
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type='text'
        multiline
        rows={4}
      />
      <Button
        label='Create Training Run'
        onClick={submit}
      />
    </Container>
  )
}

export default AddPlannedRunForm;