export default function Icons() {
    return (
        <div className="fixed bottom-4 right-4 sm:flex sm:flex-row items-center gap-2 z-50">
            <a href="mailto:yudai3.1415926@gmail.com" className="bg-pink-400 text-white rounded-full px-4 py-2 text-xs shadow hover:bg-pink-500 transition flex items-center gap-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a3 3 0 0 0 3.22 0L22 8m-19 8V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                </svg>
                <p className="hidden sm:block">Email</p>
            </a>
            <a href="https://github.com/neko3141592" target="_blank" rel="noopener" className="bg-gray-900 text-white rounded-full px-4 py-2 text-xs shadow hover:bg-gray-700 transition flex items-center gap-2 mt-2 sm:mt-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="30" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                <p className="hidden sm:block">GitHub</p>
            </a>
        </div>
    )
}