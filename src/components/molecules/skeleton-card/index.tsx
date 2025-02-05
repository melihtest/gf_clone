import { Skeleton } from "@/components/atoms/skeleton";

type Props = {
  className?: string;
};

export function SkeletonCard(props: Props) {
  const { className } = props;

  return (
    <div className={`flex flex-row md:flex-col h-50 gap-3 ${className}`}>
      <Skeleton className="md:w-full h-25 rounded-xl flex-1 md:flex-3" />
      <div className="flex flex-2 gap-3 flex-col">
        <div className="flex-1 w-full flex justify-between">
          <Skeleton className="w-12" />
          <Skeleton className="w-18" />
        </div>
        <Skeleton className="flex-1 w-full" />
        <Skeleton className="flex-1 w-full" />
      </div>
    </div>
  );
}
