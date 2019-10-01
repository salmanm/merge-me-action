export declare const approveAndMergePullRequestMutation = "\n  mutation ($commitHeadline: String!, $pullRequestId: ID!) {\n    addPullRequestReview(input: {event: APPROVE, pullRequestId: $pullRequestId}) {\n      clientMutationId\n    }\n    mergePullRequest(input: {commitBody: \"\", commitHeadline: $commitHeadline, mergeMethod: SQUASH, pullRequestId: $pullRequestId}) {\n      clientMutationId\n    }\n  }\n";
//# sourceMappingURL=mutations.d.ts.map