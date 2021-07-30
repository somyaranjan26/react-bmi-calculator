export const Footer = () => {
return (
<footer className="text-gray-600 body-font">
    <div className="container px-3 py-5 mx-auto flex items-center md:justify-between sm:flex-row flex-col">
        <a href="/" className="flex title-font font-medium items-center justify-center text-gray-900">
            <p className="font-logo text-4xl text-pink-700">BMI</p>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">© 2021
            Somyaranjan Rout —
            <a href="https://github.com/somyaranjan26" className="text-gray-600 ml-1" rel="noopener noreferrer"
                target="_blank">@somyaranja26</a>
        </p>
    </div>
</footer>
)
}