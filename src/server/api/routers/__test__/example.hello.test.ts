import { expect, it } from "@jest/globals";
import { inferProcedureInput } from "@trpc/server";
import { prisma } from "../../../../server/db";
import { AppRouter, appRouter } from "../../root";

it("tests the example hello router", async () => {
  const caller = appRouter.createCaller({ session: null, prisma: prisma });

  type Input = inferProcedureInput<AppRouter["example"]["hello"]>;

  const input: Input = {
    text: "test",
  };

  const result = await caller.example.hello(input);

  expect(result).toStrictEqual({ greeting: "Hello test"})
});
