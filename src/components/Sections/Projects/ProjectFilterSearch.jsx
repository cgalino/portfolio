
const ProjectFilterSearch = ({ search, setSearch }) => {

    let typingTimer;
    const doneTypingInterval = 350;
    const inputTextFilter = document.getElementById('pf-search');
    const resetFilter = () => {
        if (search != '') {
            inputTextFilter.value = '';
            filter();
        }
    }

    const startCountDown = () => {
        clearTimeout(typingTimer);
        typingTimer = setTimeout(filter, doneTypingInterval);
    }

    const filter = () => setSearch(inputTextFilter.value.toUpperCase());

    return (
        <div className="relative text-gray-100 min-w-[50%] flex items-center border-2 py-2 bg-mid-light-transparent rounded-xl border-gray-600 w-full md:w-72">
            <input id="pf-search" className="bg-transparent w-full border-none mr-3 px-2 h-8 leading-tight focus:outline-none sm:text-sm"
                onKeyDown={() => clearTimeout()}
                onKeyUp={() => startCountDown()}
                type="text"
                placeholder="Filtro por texto"
                defaultValue={search} />
            <i onClick={e => resetFilter()} className={`absolute right-0 top-0 mt-4 mr-4 fas text-gray-400 " ${search.length > 0 ? "fa-times cursor-pointer" : "fa-search"}`}></i>
        </div>
    )
}

export default ProjectFilterSearch;