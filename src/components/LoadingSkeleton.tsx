export default function LoadingSkeleton() {
  return (
    <div className="w-full animate-pulse" aria-hidden="true">
      <div className="aspect-[4/5] w-full bg-[#EFE7DA] rounded-t-[28px]" />
      <div className="p-4 space-y-3">
        <div className="h-4 bg-[#EFE7DA] rounded w-3/4" />
        <div className="h-3 bg-[#EFE7DA] rounded w-1/2" />
        <div className="h-8 bg-[#EFE7DA] rounded-full w-full mt-4" />
      </div>
    </div>
  )
}
