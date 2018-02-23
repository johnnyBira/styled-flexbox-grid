import styled from 'styled-components';

const defaultHeight = '6rem';

const ExampleContent = styled.div`
  height: ${({ height }) => height || defaultHeight};
  margin-bottom: 1rem;
  background: rgba(219, 112, 147, 0.75);
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  line-height: ${({ height }) => height || defaultHeight};
  font-weight: 600;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, .25);

  > * {
    display: inline-block;
  }
`;

export default ExampleContent;
