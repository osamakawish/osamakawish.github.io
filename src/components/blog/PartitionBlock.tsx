import "./PartitionBlock.css";

type PartitionBlockProps = {
  children: React.ReactNode;
};

export default function PartitionBlock({ children }: PartitionBlockProps) {
  return (
    <>
      <div className="partitioned-block">{children}</div>
    </>
  );
}
