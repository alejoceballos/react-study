import "./ActionButton.css";
import IconRemove from "../icon/IconRemove";
import IconAdd from "../icon/IconAdd";
import {capitalize} from "../../util/utils";

export const ACTION_TYPE = {
    ADD: "add",
    REMOVE: "remove"
};

export default function ActionButton({type = ACTION_TYPE.ADD, action}) {
    const actionType = [ACTION_TYPE.ADD, ACTION_TYPE.REMOVE].includes(type.toLowerCase()) ? type.toLowerCase() : ACTION_TYPE.ADD;

    const icon = actionType === ACTION_TYPE.REMOVE ? IconRemove() : IconAdd();

    return <button className="action-button" onClick={action}>
        {icon} {capitalize(actionType)}
    </button>
}