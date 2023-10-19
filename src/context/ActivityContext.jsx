import { createContext, useState } from "react";
import {
  createActivityRequest,
  deleteActivityRequest,
  getActivityRequest,
  getAllActivitiesRequest,
  updateActivityRequest,
} from "../api/activities";

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [activities, setActivities] = useState(null);
  const [activitySelected, setActivitySelected] = useState(null);

  const getAllActivities = async (id_project) => {
    try {
      const resp = await getAllActivitiesRequest(id_project);
      setActivities(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getActivity = async (id_project, id_activity) => {
    try {
      const resp = await getActivityRequest(id_project, id_activity);
      console.log(resp.data);
      setActivitySelected(resp.data)
    } catch (error) {
      console.log(error);
    }
  };

  const createActivity = async (id_project, data) => {
    try {
      const resp = await createActivityRequest(id_project, data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateActivity = async (id_project, id_activity, data) => {
    try {
      const resp = await updateActivityRequest(id_project, id_activity, data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteActivity = async (id_project, id_activity) => {
    try {
      setActivities(activities.filter((activity => activity._id != id_activity)))
      await deleteActivityRequest(id_project, id_activity);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ActivityContext.Provider
      value={{
        getAllActivities,
        getActivity,
        activities,
        activitySelected,
        updateActivity,
        deleteActivity,
        createActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
