import { describe, expect, it } from "vitest";
import * as embeddedAgentRunner from "../embedded-agent-runner.js";
import * as embeddedAgent from "../embedded-agent.js";
import { normalizeEmbeddedAgentRuntime } from "./runtime.js";

describe("embedded runner compatibility aliases", () => {
  it("keeps the embedded-agent barrel bound to the runner implementation", () => {
    expect(embeddedAgent.runEmbeddedAgent).toBe(embeddedAgentRunner.runEmbeddedAgent);
    expect(embeddedAgent.compactEmbeddedAgentSession).toBe(
      embeddedAgentRunner.compactEmbeddedAgentSession,
    );
    expect(embeddedAgent.abortEmbeddedAgentRun).toBe(embeddedAgentRunner.abortEmbeddedAgentRun);
  });

  it("normalizes shipped built-in runtime aliases", () => {
    expect(normalizeEmbeddedAgentRuntime("pi")).toBe("openclaw");
    expect(normalizeEmbeddedAgentRuntime("codex-app-server")).toBe("codex");
  });
});
