import React, { ReactElement } from "react"
import { initialPerson } from "../utils"
import { IndexedPerson } from "../types/IndexedPerson"

// Kimrof = Formik reversed :-)
import { UserEditor } from "./UserEditor"
import { Kimrof } from "./kimrof/Kimrof"

export function KimrofUserEditor(): ReactElement {
  return (
    <Kimrof
      initialValues={initialPerson as IndexedPerson}
      onSubmit={(person) => alert(JSON.stringify(person, null, 2))}
    >
      <UserEditor />
    </Kimrof>
  )
}
