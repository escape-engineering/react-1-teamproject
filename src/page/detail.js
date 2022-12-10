import CommentInputComponent from "../component/comment/CommentInput";
import Comment from "../component/comment/Comment";
import Detailcomponent from "../component/detail/Detailindex";

const DetailPage = () => {
  return (
    <div>
      {/* 학준님 */}
      <Detailcomponent />

      {/* 상국님 */}
      <CommentInputComponent />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};
export default DetailPage;
