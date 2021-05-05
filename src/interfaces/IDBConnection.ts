import { Connection } from "mongoose";

export default interface IDBConnection {
  open: () => Promise<void>,
  close: () => void,
}