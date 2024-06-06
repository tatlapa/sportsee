import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./MockedData.tsx";

interface ApiProps {
  userId: number;
}

const useMock = false;

const Api = ({userId}: ApiProps) => {
  if (useMock) {
    return {
      getUserMainData: async () => {
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
  } else {
    return {
      getUserMainData: async () => {
        const response = await fetch(
          `http://localhost:3000/user/${userId}`
        );
        const data = await response.json();
        return data.data;
      },
      getUserActivity: async () => {
        const response = await fetch(
          `http://localhost:3000/user/${userId}/activity`
        );
        const data = await response.json();
        return data;
      },
      getUserAverageSessions: async () => {
        const response = await fetch(
          `http://localhost:3000/user/${userId}/average-sessions`
        );
        const data = await response.json();
        return data;
      },
      getUserPerformance: async () => {
        const response = await fetch(
          `http://localhost:3000/user/${userId}/performance`
        );
        const data = await response.json();
        return data.data;
      },
    };
  }
};

export default Api;
