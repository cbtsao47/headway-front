import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  Input,
  Space,
  Spinner,
  Stack,
  Text
} from "@trendmicro/react-styled-ui";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useQuery, gql } from "@apollo/client";

const GET_URL = gql`
  query {
    url {
      id
      originalUrl
    }
  }
`;

export default function App() {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const { loading, error, data } = useQuery(GET_URL);
  const handleChange = (e) => {
    setUrl(e.target.value);
  };
  const copy = () => {
    setCopied(true);
  };
  useEffect(() => {
    setCopied(false);
  }, [url]);
  const callApi = () => {};
  return (
    <Stack>
      <Input
        onChange={handleChange}
        value={url}
        placeholder="Enter a link to be shortened..."
      />
      {error && <Text>{error}</Text>}
      <Flex my=".5rem">
        {copied ? (
          <Button flexGrow={1}>Copied</Button>
        ) : (
          <CopyToClipboard onCopy={copy} text={url}>
            <Button flexGrow={1}>Copy</Button>
          </CopyToClipboard>
        )}
        <Space width=".5rem" />
        <Button disabled={loading} onClick={callApi} flexGrow={1}>
          {loading ? <Spinner /> : <Text>Shorten</Text>}
        </Button>
      </Flex>
    </Stack>
  );
}
