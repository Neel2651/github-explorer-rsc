// app/user/[username]/loading.tsx

export default function LoadingUserPage() {
  return (
    <div className="animate-pulse space-y-4 p-6">
      <div className="h-6 w-40 rounded bg-gray-300" />
      <div className="flex items-center gap-4">
        <div className="h-20 w-20 rounded-full bg-gray-300" />
        <div className="space-y-2">
          <div className="h-4 w-48 rounded bg-gray-300" />
          <div className="h-3 w-32 rounded bg-gray-200" />
        </div>
      </div>
      <div className="mt-4 h-4 w-40 rounded bg-gray-300" />
      <div className="space-y-3">
        <div className="h-16 rounded bg-gray-200" />
        <div className="h-16 rounded bg-gray-200" />
        <div className="h-16 rounded bg-gray-200" />
      </div>
    </div>
  );
}
