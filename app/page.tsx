import { getQueryClient,trpc } from "./trpc/server"
import { Client } from "./client"
import { HydrationBoundary,dehydrate } from "@tanstack/react-query"
import { queryObjects } from "v8"
const page = async() => {
  const queryClient = getQueryClient()

  void queryClient.prefetchQuery(trpc.hello.queryOptions({text:"harshal"}))
  return (
    <div className="min-h-screen min-w-screen items-center justify-center">
     <HydrationBoundary state={dehydrate(queryClient)}>
      <Client />
     </HydrationBoundary>
    </div>
  )
}

export default page