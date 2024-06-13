interface PayloadItem {
    value: number;
  }

const ActivityTooltip = ({payload}: { payload: PayloadItem[] }) => {
    if (payload && payload.length)
    return (
        <div className="bg-[#E60000] px-1.5 py-4 flex flex-col gap-5 text-white text-center">
            <p>{payload[0].value + "kg"}</p>
            <p>{payload[1].value + "Kcal"}</p>
        </div>
    );  

}
export default ActivityTooltip;