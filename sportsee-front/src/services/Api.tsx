import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "./MockedData.tsx";

interface ApiProps {
  userId: number;
}

const useMock = true;

const Api = ({ userId }: ApiProps) => {
  if (useMock) {
    return {
      getUserMainData: async () => {
        const data = USER_MAIN_DATA.find((user) => user.userId === userId);
        console.log(data);
        return data;
      },
      getUserActivity: async () => {
        const data = USER_ACTIVITY.find((user) => user.userId === userId);
        return data;
      },
      getUserSession: async () => {
        const data = USER_AVERAGE_SESSIONS.find(
          (user) => user.userId === userId
        );
        return data;
      },
      getUserPerformance: async () => {
        const data = USER_PERFORMANCE.find((user) => user.userId === userId);
        return data;
      },
    };
  } else {
    return {
      getUserMainData: async () => {
        const response = await fetch(`http://localhost:3000/user/${userId}`);
        const data = await response.json();
        console.log(data.data);
        return data.data;
      },
      getUserActivity: async () => {
        const response = await fetch(
          `http://localhost:3000/user/${userId}/activity`
        );
        const data = await response.json();
        return data.data;
      },
      getUserSession: async () => {
        const response = await fetch(
          `http://localhost:3000/user/${userId}/average-sessions`
        );
        const data = await response.json();
        return data.data;
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
