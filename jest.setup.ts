import { toMatchDesign } from "@engi.network/design-matcher";
import dotenv from "dotenv";

dotenv.config();

expect.extend({ toMatchDesign });
