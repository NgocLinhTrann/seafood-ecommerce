import React, { Component } from 'react'
import SkeletonItem from './SkeletonItem'

class LoadingProduct extends Component {
    render() {
        return (
            <div className="flex flex-wrap justify-between">
                {[...Array(8)].map((_, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mb-4">
                        <SkeletonItem />
                    </div>
                ))}
            </div>
        )
    }
}

export default LoadingProduct
