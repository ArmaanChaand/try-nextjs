import { headers } from 'next/headers'


export default async function NotFound(){
    const headersList = headers()
    const domain = headersList.get('host') || ""
    
    return (
        <div className="mockup-browser h-screen border bg-base-300">
            <div className="mockup-browser-toolbar">
                <div className="input">
                    {domain}
                </div>
            </div>
            <div className="flex justify-center items-center px-4 py-16 bg-base-200 h-full">
            <div className="mockup-code">
                <pre data-prefix="1"><code>Page Not Found</code></pre> 
                <pre data-prefix="2" className="bg-error text-warning-content"><code>404</code></pre>
            </div>
            </div>
        </div>
    )
}