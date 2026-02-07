import React from "react"

type BannerProps = {
    children: React.ReactNode
}

const Banner = ({ children }: BannerProps) => {
    return (
        <div className="container mt-3">
            <div className="p-4 rounded bg-light text-center">
                {children}
            </div>
        </div>
    )
}

export default Banner
