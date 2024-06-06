import { Link } from "react-router-dom";

interface ProfileProps {
  name: string;
  image: string;
  id: number;
}

const Profile: React.FC<ProfileProps> = (props: ProfileProps) => {
  return (
    <Link to={`/Home/${props.id}`} className="text-center">
      <img src={props.image} className="rounded-t-xl w-96" alt="" />
      <h2 className="text-2xl p-4 bg-[#FF0000] rounded-b-xl">{props.name}</h2>
    </Link>
  );
};

export default Profile;
