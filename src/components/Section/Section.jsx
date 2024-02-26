import { Title } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <Title>{title}</Title>
      <div>{children}</div>
    </div>
  );
};
