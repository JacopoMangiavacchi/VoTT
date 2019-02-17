import { ToolbarItem } from "./toolbarItem";

/**
 * @name - ActiveLearning
 * @description - Toolbar item to auto draw rectangles
 */
export class ActiveLearning extends ToolbarItem {
    protected onItemClick() {
        console.log("Active Learning");
        this.props.onClick(this);
    }
}
