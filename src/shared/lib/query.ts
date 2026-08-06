import type { QueryKey } from "@tanstack/vue-query";

import { queryClient } from "./query-client";

export async function invalidateQuery(queryKey: QueryKey) {
    await queryClient.invalidateQueries({
        queryKey,
    });
}

export async function refetchQuery(queryKey: QueryKey) {
    await queryClient.refetchQueries({
        queryKey,
    });
}

export async function removeQuery(queryKey: QueryKey) {
    queryClient.removeQueries({
        queryKey,
    });
}

export async function resetQuery(queryKey: QueryKey) {
    await queryClient.resetQueries({
        queryKey,
    });
}