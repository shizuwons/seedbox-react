import Meta from "../components/meta";
import { withRouter } from "next/router";

function Default({ meta, children }) {
    return (
        <div>
            <Meta props={meta} />
            {children}
        </div>
    );
}

export default withRouter(Default);