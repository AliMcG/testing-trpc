import { expect, it } from "@jest/globals";
import { Session } from "next-auth";
import { prisma } from "../../../../server/db";
import { appRouter } from "../../root";

it("tests the get Secret message router", async () => {
  const mockSession: Session = {
    expires: new Date().toISOString(),
    user: { id: "test-user-id" },
  };

  const caller = appRouter.createCaller({
    session: mockSession,
    prisma: prisma,
  });

  const result = await caller.example.getSecretMessage();

  expect(result).toBe("you can now see this secret message!");
});

