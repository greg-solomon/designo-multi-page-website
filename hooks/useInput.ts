import { ChangeEvent, useState } from "react";

export const useInput = (): [
  string,
  {
    onChange: (e: ChangeEvent) => void;
    reset: () => void;
  }
] => {
  const [input, setInput] = useState("");
  const [showEmptyMessage, setShowEmptyMessage] = useState(false);

  const handlers = {
    onChange: (e) => {
      setInput(e.target.value);
      setShowEmptyMessage(false);
    },
    reset: () => {
      setInput("");
      setShowEmptyMessage(false);
    },
  };

  return [input, handlers];
};
