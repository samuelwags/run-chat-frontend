import { Modal } from "@mui/material";
import Calendar from "components/Calendar";
import { FlexBox } from "components/FlexBox";
import { IconButton } from "components/IconButton";
import { Layout } from "components/Layout"
import AddPlannedRunForm from "components/PlannedRunForm";
import { Tile } from "components/Tile";
import { Label, SmallBody } from "components/Typography/Label";
import dayjs, { Dayjs } from "dayjs";
import { useModal } from "hooks/useModal";
import { useSession } from "hooks/useSession";
import { useTrainingPlan } from "hooks/useTrainingPlan";
import { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  position: absolute;
  bottom: 8px;
  left: 8px;
`

export default function TrainingPlanPage() {
  const router = useRouter();
  const { id } = router.query;

  const {trainingPlan, fetchTrainingPlan} = useTrainingPlan(id as string);
  const session = useSession();

  const [selectedDate, setSelectedDate] = useState<Dayjs>();

  const { 
    isOpen: addPlannedRunIsOpen, 
    open: openAddPlannedRun,
    close: closeAddPlannedRun
  } = useModal();

  const dateContents = useCallback((day: Dayjs) => {
    const plannedRuns = trainingPlan?.planned_runs
      ?.filter( plannedRun => day.isSame(dayjs(plannedRun.date), 'date')) || [];
    
    const past = dayjs().isAfter(day);

    if (plannedRuns.length) {
      return plannedRuns.map( run => past ? (
          <SmallBody 
            style={{color: run.completed ? 'green' : 'red'}}
          >{run.completed ? '✓' : '⊗'} {run.user.user_name}: {run.distance} miles</SmallBody>
        ): (
          <SmallBody>{run.user.user_name}: {run.distance} miles</SmallBody>
        )
      )
    }
    return null;
  }, [trainingPlan]);

  const getButtons = useCallback((day: Dayjs) => {
    const past = dayjs().isAfter(day);
    if (!past) return (
      <IconButton 
        onClick={() => {
          setSelectedDate(day);
          openAddPlannedRun();
        }}
      />
    );
    else return null;
  }, [])

  const members = useMemo(() => [
    trainingPlan?.user,
    ...(trainingPlan?.members || [])
  ], [trainingPlan]);

  
  

  return (
    <>
      <Layout>
        <div>
          <h3>{trainingPlan?.name || '...'}</h3>
          <Label text='Training Plan'/>
        </div>
        <Tile label={'Members'}>
          <FlexBox gap={16} align='center' justify="center">
            { members.map( member => (
              <p>{member?.user_name}</p>
            ))}
            <IconButton onClick={() => console.log('hi')} />
          </FlexBox>
        </Tile>
        <Calendar getButtons={getButtons} getDayContents={dateContents}/>
      </Layout>
      { trainingPlan && session && selectedDate && (
        <Modal 
          open={addPlannedRunIsOpen}
          onClose={closeAddPlannedRun}
        >
          <AddPlannedRunForm
            trainingPlanId={trainingPlan.id}
            userId={session.user_id}
            date={selectedDate}
            callback={() => {
              closeAddPlannedRun();
              setSelectedDate(undefined);
              fetchTrainingPlan();
            }}
          />
        </Modal>
      )}
    </>
  )
}