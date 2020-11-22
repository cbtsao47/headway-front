import React, { useState, useEffect } from "react";
import { Button, Flex, Input, Space, Stack } from "@trendmicro/react-styled-ui";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function App() {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);
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
      <Flex my=".5rem">
        {copied ? (
          <Button flexGrow={1}>Copied</Button>
        ) : (
          <CopyToClipboard onCopy={copy} text={url}>
            <Button flexGrow={1}>Copy</Button>
          </CopyToClipboard>
        )}
        <Space width=".5rem" />
        <Button onClick={callApi} flexGrow={1}>
          Shorten
        </Button>
      </Flex>
    </Stack>
  );
}
