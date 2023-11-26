import PayTokenFunctionCall from "./dApps/PayTokenFunctionCall";
import TransferCUSD from "./dApps/TransferCUSD";

export default function App() {
    return (
        <div
            style={{
                marginTop: "200px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "102px",
            }}
        >
            <TransferCUSD />
            <PayTokenFunctionCall />
        </div>
    );
}
