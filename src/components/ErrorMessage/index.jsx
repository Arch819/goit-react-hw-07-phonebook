import { ErrorMessageText } from './ErrorMessage.styled';

export const ErrorMessage = ({ error }) => {
  return <ErrorMessageText>{error}</ErrorMessageText>;
};
