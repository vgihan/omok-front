import Spinner from "~components/atoms/Spinner";
import SidebarCommunityBox from "~components/organisms/SidebarCommunityBox";
import SidebarProfileBox from "~components/organisms/SidebarProfileBox";
import SidebarRankBox from "~components/organisms/SidebarRankBox";
import { useFetchUserInfo } from "~queries/index";
import { userUtil } from "~utils/Utils";

const UserInfoBox: React.FC = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useFetchUserInfo({
    onError: (err) => {
      alert(err.message);
    },
  });

  if (isLoading || error || !user) return <Spinner />;

  return (
    <>
      <SidebarProfileBox id={user.id} profile={user.profile} />
      <SidebarRankBox rating={user.rating} tierRank={userUtil.getTierRank(user.rating)} />
      <SidebarCommunityBox />
    </>
  );
};

export default UserInfoBox;
