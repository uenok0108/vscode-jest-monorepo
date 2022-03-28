import { main } from "../handler";

describe("handler", () => {
  it("should return response", async () => {
    const res = await main(
      {
        body: {
          name: "NAME",
        },
      },
      {
        functionName: "function-name",
        awsRequestId: "aws-request-id",
        callbackWaitsForEmptyEventLoop: false,
        functionVersion: "function-version",
        getRemainingTimeInMillis: () => {
          return 0;
        },
        invokedFunctionArn: "invoked-function-arn",
        logGroupName: "log-group-name",
        logStreamName: "log-stream-name",
        memoryLimitInMB: "memory-limit-in-MB",
        done: () => {},
        fail: () => {},
        succeed: () => {},
      }
    );
    expect(res).toEqual({
      body: JSON.stringify({
        message: "Hello NAME, welcome to the exciting Serverless world!",
        event: {
          body: {
            name: "NAME",
          },
        },
      }),
      statusCode: 200,
    });
  });
});
