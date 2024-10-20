import { Loader2 } from "lucide-react";
import React from "react";

const Loading = () => (
  <div className="flex items-center gap-2 justify-center">
    <span className="animate-spin">
      <Loader2 />
    </span>
    <span>Loading...</span>
  </div>
);

export default Loading;
