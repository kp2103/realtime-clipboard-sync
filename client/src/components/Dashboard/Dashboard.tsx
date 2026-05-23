import Button from "../Button/Button";
import { ClipboardCheckIcon } from "lucide-react";
import Card from "../Card/Card";
import "./dashboard.type";
import "./dashboard.style.css";
import PreviewCard from '../Card/PreviewCard'
import RoomidCard from '../Card/RoomIdCard'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <section className="dashboard__header">
        <p className="dashboard__header-heading">Clipboard History</p>
        <div className="flex">
          <div className="circle green"></div>
          <p>Active & Synced</p>
        </div>
      </section>

      <section className="dashboard__main">
        <article className="dashboard__main-history">
          <Button title="Copy" leftIcon={<ClipboardCheckIcon />} />

          <Card contentType="Text" />
          <Card contentType="Code" />
          <Card contentType="Image" />
        </article>

        <article className="dashboard__main-preview">
          <PreviewCard contentType="Code"/>
          <RoomidCard roomId={13456}/>
        </article>
      </section>
    </div>
  );
}
