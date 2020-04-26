import React, { Fragment } from 'react';
import { Item } from '../Common/Item';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }
    render() {
        const { list } = this.state;
        return (
            <Fragment>
                <div className="container">
                {
                    list && list.map((item, ind) => {
                        return <Item key={ind} data={item} />
                    })
                }
                <div className="div-text">This is a bottom text</div>
                </div>
            </Fragment>
        )
    }
}

export default ProductList;