export const Footer = () => {
    return (
        <>
            <footer className="py-8 px-6 md:px-12 lg:px-20 text-center text-gray-600 dark:text-gray-400">
                <p>© {new Date().getFullYear()} JiraFun • Built for learning purposes</p>
            </footer>
        </>
    );
}