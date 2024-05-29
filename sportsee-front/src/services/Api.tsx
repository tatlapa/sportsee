import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./MockedData.tsx";

const MockedAPI = (userId: number) => {
  return {
    getUserMainData: async () => {
      const response = fetch(`http://localhost:3000/user/${userId}`);
      const USER_MAIN_DATA = await response.json();
      return USER_MAIN_DATA;
    },
    getUserActivity: async () => {
      return USER_ACTIVITY;
    },
    getUserAverageSessions: async () => {
      return USER_AVERAGE_SESSIONS;
    },
    getUserPerformance: async () => {
      return USER_PERFORMANCE;
    },
  };
};

export default MockedAPI;