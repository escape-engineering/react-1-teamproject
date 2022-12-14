import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { __getComments } from "../../redux/modules/todolist";
import { useParams } from "react-router-dom";
import CommentItem from "./CommentItem";

const Comment = () => {
  const params = useParams().id;
  const dispatch = useDispatch();

  // params에 맞는 todo 소환
  const { comments } = useSelector((state) => state.todolist);

  //댓글 배열 소환
  useEffect(() => {
    dispatch(__getComments(params));
  }, [dispatch]);

  //댓글 배열에서 해당 todo에 대한 댓글만 나오도록 필터링
  const todoComments = comments
    .filter((list) => list.postId === parseInt(params))
    //최근에 남긴 댓글이 위로가도록 reverse
    .reverse();

  return (
    <div>
      {comments
        ? todoComments.map((comment) => {
            return <CommentItem key={comment.id} comment={comment} />;
          })
        : null}
    </div>
  );
};

export default Comment;
