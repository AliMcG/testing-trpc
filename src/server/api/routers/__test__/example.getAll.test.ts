import { expect, it } from "@jest/globals";
import { Example, PrismaClient } from "@prisma/client";
import { appRouter } from "../../root";
import { mockDeep } from "jest-mock-extended";

it("tests the getAll router", async () => {
  const prismaMock = mockDeep<PrismaClient>();
  const mockOutput: Example[] = [
    { id: "test", createdAt: new Date(), updatedAt: new Date() },
  ];

  prismaMock.example.findMany.mockResolvedValue(mockOutput)

  const caller = appRouter.createCaller({ session: null, prisma: prismaMock });

  const result = await caller.example.getAll();

  expect(result).toHaveLength(mockOutput.length)
  expect(result).toStrictEqual(mockOutput)
});
