import React from "react";
import { IAssetProps } from "./assetPreview";

/**
 * ImageAsset component used to render all image assets
 */
export class ImageAsset extends React.Component<IAssetProps> {
    private image: React.RefObject<HTMLImageElement> = React.createRef();

    public render() {
        const size = this.props.asset.size;
        let className = "";
        if (size) {
            className = size.width > size.height ? "landscape" : "portrait";
        }

        return (
            <img ref={this.image} className={className}
            src={this.props.asset.path} onLoad={this.onLoad} id = "Jacopo" />
        );
    }

    private onLoad = () => {
        if (this.props.onLoaded) {
            this.props.onLoaded(this.image.current);
        }
    }
}
