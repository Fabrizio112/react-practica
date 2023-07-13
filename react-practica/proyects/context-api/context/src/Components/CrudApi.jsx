import { useEffect, useState } from "react";
import FormularioCrud from "./FormularioCrud";
import TableCrud from "./TableCrud";
import { DatabaseProvider } from "../context/DatabaseContext";


function CrudApi() {
    return (
        <>
            <DatabaseProvider>
                <FormularioCrud />
                <TableCrud />
            </DatabaseProvider>
        </>
    );
}

export default CrudApi;