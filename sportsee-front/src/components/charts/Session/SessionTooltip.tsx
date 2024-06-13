interface PayloadItem {
  value: number;
}

const SessionToolTip = ({ payload }: { payload: PayloadItem[] }) => {
    if (payload && payload.length) {
      return (
        <div className="bg-white p-2">
          <p>{payload[0].value + " min"}</p>
        </div>
      );
    } else {
      return null;
    }
  };

  export default SessionToolTip;