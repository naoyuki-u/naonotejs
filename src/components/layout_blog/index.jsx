import React, {Component} from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

import { rhythm } from "../../utils/typography"

class Layout extends Component {
    render() {
        const {children} = this.props
        return(
        <div
            css={css`
            margin: 0 auto;
            max-width: 1200px;
            padding: ${rhythm(0.5)};
            padding-top: ${rhythm(1.5)};
            `}
        >
            {children}
        </div>
        )
    }
  }
export default Layout;