export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl">Hello world</h1>
        <User name="tusha" />
        <User name="kishu" />
        <User name="riya" />
        <User name="isha" />
        <User name="tisha" />
      </main>
    </div>
  );
}

const User = (props) => {
  return (
    <>
      <p>Your name is {props.name} </p>
    </>
  )
}
