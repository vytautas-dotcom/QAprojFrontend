import {
  Fieldset,
  FieldContainer,
  FieldLabel,
  FieldInput,
  FieldTextArea,
  FormButtonContainer,
  PrimaryButton,
} from "./Styles";
import { useForm } from "react-hook-form";
import React from "react";
import { Page } from "./Page";

type FormData = {
  title: string;
  content: string;
};

export const AskPage = () => {
  const { register } = useForm<FormData>();
  return (
    <Page title="Ask a question">
      <Fieldset>
        <FieldContainer>
          <FieldLabel htmlFor="title">Title</FieldLabel>
          <FieldInput
            id="title"
            type="text"
            {...register("title")}
          ></FieldInput>
        </FieldContainer>
        <FieldContainer>
          <FieldLabel htmlFor="content">Content</FieldLabel>
          <FieldTextArea id="content" {...register("content")}></FieldTextArea>
        </FieldContainer>
        <FormButtonContainer>
          <PrimaryButton type="submit">Submit Your Question</PrimaryButton>
        </FormButtonContainer>
      </Fieldset>
    </Page>
  );
};

export default AskPage;
