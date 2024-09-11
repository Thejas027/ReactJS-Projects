import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Headings";
import Row from "./ui/Row";

function App() {
  return (
    <>
      <GlobalStyles />
      <Row>
        <Row type="horizontal">
          <Heading as="h1">The wild Oasis</Heading>
          <div>
            <Heading as="h2">Check in and out </Heading>
            <Button>Check in</Button>
            <Button variation="secondary" size="small">
              Check out
            </Button>
          </div>
        </Row>

        <Row>
          <Heading as="h3">Form</Heading>
          <form type="vertical">
            <Input type="number" placeholder="Number of guests" />
            <Input type="number" placeholder="Number of guests" />
          </form>
        </Row>
      </Row>
    </>
  );
}

export default App;
