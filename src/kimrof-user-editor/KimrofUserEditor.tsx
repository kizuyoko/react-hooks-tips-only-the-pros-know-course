import React, { ReactElement } from "react"

// import { initialPerson } from "../utils"
// import { IndexedPerson } from "../types/IndexedPerson";

// Kimrof = Formik reversed :-)
import { UserEditor } from "./UserEditor"
import { Kimrof } from "./kimrof/Kimrof"
import { initialPerson } from "../utils"
import { IndexedPerson } from "../types/IndexedPerson"

export function KimrofUserEditor(): ReactElement {
  return (
    <Kimrof initialValues={initialPerson as IndexedPerson}>
      <UserEditor />
    </Kimrof>
  )
}
