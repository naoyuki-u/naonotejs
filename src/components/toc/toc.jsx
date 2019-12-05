import React, {Component} from "react"

import {Anchor} from "antd"

import styled from "./toc.module.css"

const {Link} = Anchor

class TOC extends Component {
  render() {
    const {headings} = this.props;
    return(
      <div>
        <Anchor className={styled.toc}>
          <div>
            <ul><li>
            {
              headings != null
              &&
              headings.map((head) =>
                <div>
                {head.depth == 1 && <Link href={`#${(head.value)}`}
                                          title={head.value}/>}

                {head.depth == 2 && <ul className={styled.toc_list}>
                                      <li className={styled.toc_li}>
                                        <Link href={`#${(head.value)}`}
                                              title={head.value}/>
                                      </li>
                                    </ul>}
                {/* {head.depth == 3 && <ul className={styled.toc_list}>
                                      <li>
                                        <ul className={styled.toc_list}>
                                          <li className={styled.toc_li}>
                                            <Link href={`#${(head.value)}`}
                                                  title={head.value}/>
                                          </li>
                                        </ul>
                                      </li>
                                    </ul>} */}
                </div>
              )
            }
            </li></ul>
          </div>
        </Anchor>
      </div>
    )
  }
}

export default TOC;
