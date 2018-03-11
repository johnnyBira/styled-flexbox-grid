import styled from 'styled-components';

const defaultHeight = '6rem';

const ExampleContent = styled.div`
  height: ${({ height }) => height || defaultHeight};
  box-sizing: border-box;
  padding: .5rem;
  margin-bottom: 1rem;
  background: rgba(219, 112, 147, 0.75);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 600;
  text-align: center;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, .25);
  display: flex;
  justify-content: center;
  flex-direction: column;
  > * {
    display: inline-block;
  }
`;

ExampleContent.displayName = 'ExampleContent';
export default ExampleContent;
