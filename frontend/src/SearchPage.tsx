/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useSearchParams } from "react-router-dom";
import { QuestionList } from "./QuestionList";
import { searchQuestions } from "./QuestionData";
import { Page } from "./Page";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AppState,
  searchingQuestionsAction,
  searchedQuestionsAction,
} from "./Store";

export const SearchPage = () => {
  const dispatch = useDispatch();
  const questions = useSelector((state: AppState) => state.questions.searched);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("criteria") || "";

  React.useEffect(() => {
    const doSearch = async (criteria: string) => {
      dispatch(searchingQuestionsAction());
      const foundResults = await searchQuestions(criteria);
      dispatch(searchedQuestionsAction(foundResults));
    };
    doSearch(search);
    //eslint-disable-next-line
  }, [search]);
  return (
    <Page title="Search Results">
      {search && (
        <p
          css={css`
            font-size: 16px;
            font-style: italic;
            margin-top: 0px;
          `}
        >
          for "{search}"
        </p>
      )}
      <QuestionList data={questions} />
    </Page>
  );
};
