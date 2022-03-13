import { useFetchUserInfo } from "~api/index";
import Spinner from "~components/atoms/Spinner";
import SidebarCommunityBox from "~components/organisms/SidebarCommunityBox";
import SidebarProfileBox from "~components/organisms/SidebarProfileBox";
import SidebarRankBox from "~components/organisms/SidebarRankBox";
import { User } from "~types/user";
import { userUtil } from "~utils/Utils";

const UserInfoBox: React.FC = () => {
  const fetchUserInfoResult = useFetchUserInfo().data;
  const user: User | undefined = fetchUserInfoResult?.data;

  return user ? (
    <>
      <SidebarProfileBox id={user.id} profile={user.profile} />
      <SidebarRankBox rating={user.rating} tierRank={userUtil.getTierRank(user.rating)} />
      <SidebarCommunityBox />
    </>
  ) : (
    <Spinner />
  );
};

export default UserInfoBox;
