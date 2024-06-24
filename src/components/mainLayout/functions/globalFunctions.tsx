import { useState } from "react";

const validationError = (error:boolean = false) => {
    const[errorMsg, setError] = useState<boolean>(error);

    const errorMessage = () => {
        setError((errorMsg) => !errorMsg)
    }

    return [errorMsg, errorMessage] as const
}
export default validationError