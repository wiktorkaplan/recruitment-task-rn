import React from "react";
import { useMutation } from "react-query";
import { Formik } from "formik";
import * as yup from "yup";
import { ErrorLabel, SuccessLabel, InfoLabel } from "./AddNewComment.styles";
import { addComment } from "../../../api";
import { TextInputPrimary, ButtonPrimary } from "../../atoms";

type Props = {
  id: number;
};

type addCommentProps = {
  postId: number;
  comment: {
    userId: number;
    name: string;
    email: string;
    postId: number;
    body: string;
  };
};
const mockUser = {
  userId: 1,
  name: "Wiktor Kaplan",
  email: "wiktor.kaplan@gmail.com",
};

const AddNewComment: React.FC<Props> = ({ id }) => {
  const { mutate, isLoading, isError, isSuccess } = useMutation(
    ({ postId, comment }: addCommentProps) => addComment(postId, comment)
  );
  const handleOnSubmit = (comment: string) => {
    mutate({
      postId: id,
      comment: {
        userId: mockUser.userId,
        name: mockUser.name,
        email: mockUser.email,
        postId: id,
        body: comment,
      },
    });
  };
  return (
    <Formik
      initialValues={{ comment: "" }}
      validationSchema={yup.object({
        comment: yup
          .string()
          .min(6, "Too Short")
          .max(600, "Too Long")
          .required("To send, enter a comment"),
      })}
      onSubmit={(values) => handleOnSubmit(values.comment)}
    >
      {({ errors, touched, values, handleSubmit, handleChange }) => (
        <>
          <TextInputPrimary
            value={values.comment}
            placeholder="Here you can add your comment..."
            onChange={handleChange("comment")}
          />
          {touched.comment && Boolean(errors.comment) && (
            <ErrorLabel>{errors.comment}</ErrorLabel>
          )}

          <ButtonPrimary
            title="Add"
            additionalStyles={{ marginVertical: 15 }}
            onPress={handleSubmit}
          />
          {isLoading && <InfoLabel>Adding comment...</InfoLabel>}
          {isError && (
            <ErrorLabel>Something went wrong, please try again.</ErrorLabel>
          )}
          {isSuccess && <SuccessLabel>Comment added!</SuccessLabel>}
        </>
      )}
    </Formik>
  );
};
export default AddNewComment;
