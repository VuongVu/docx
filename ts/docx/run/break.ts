// http://officeopenxml.com/WPtextSpecialContent-break.php
import { XmlComponent } from "../xml-components";

export class Break extends XmlComponent {

    constructor() {
        super("w:br");
    }
}
