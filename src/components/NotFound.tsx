type Props = {
  message?: string;
};

export default function NotFound({ message }: Props) {
  return (
    <>
      <div>Not found.</div>
      <p>{message}</p>
    </>
  );
}
