import { Button, Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPatientQueueLength, updateStatus } from "../AppReducer/action";

const Schedule = () => {
  const { queue } = useSelector((state) => state.app);
  const { singledoc } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const handleUpdated = (id) => {
    console.log(id);
    dispatch(updateStatus(id, { completed: true })).then(() =>
      dispatch(getPatientQueueLength(singledoc._id))
    );
  };

  useEffect(() => {
    if (queue.length === 0) {
      dispatch(getPatientQueueLength(singledoc._id));
    }
  }, [dispatch, queue.length]);
  return (
    <div>
      {queue.length !== 0 ? (
        <Table border="1px solid red" w="60%" m="auto" mt="10">
          <Thead>
            <Th textAlign="center">ID</Th>
            <Th textAlign="center">name</Th>
            <Th textAlign="center">description</Th>
            <Th textAlign="center">Delete</Th>
          </Thead>
          <Tbody>
            {queue?.map((patient, i) => (
              <Tr>
                <Td textAlign="center">{i + 1}</Td>
                <Td textAlign="center">{patient.patientname}</Td>
                <Td textAlign="center">{patient.description}</Td>
                <Td textAlign="center">
                  <Button
                    isDisabled={patient.completed}
                    colorScheme="green"
                    onClick={() => handleUpdated(patient._id)}
                  >
                    Completed
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      ) : (
        ""
      )}
    </div>
  );
};

export default Schedule;
