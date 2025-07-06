import Link from 'next/link'

export default function Breadcrumb({ breadcrumbTitle }: any) {
    return (
        <>
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content">
                                <h2>{breadcrumbTitle}</h2>
                                <ul>
                                    <li>
                                        <Link href="/">Home</Link>
                                    </li>
                                    <li>{breadcrumbTitle}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
