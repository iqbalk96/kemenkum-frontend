export const QUERY_KEYS = {
  auth: {
    profile: ["auth", "profile"] as const,
  },

  users: {
    all: ["users"] as const,
    detail: (id: number | string) => ["users", id] as const,
  },
};
