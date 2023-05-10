import { Button } from "primereact/button";

export default function Home() {
  return (
    <div className="flex h-screen w-full items-center justify-center  gap-2 bg-slate-400">
      <Button label="Submit" />
      <Button icon="pi pi-check" />
      <Button label="Submit" icon="pi pi-check" />
      <Button label="Submit" icon="pi pi-check" iconPos="right" />
    </div>
  );
}
