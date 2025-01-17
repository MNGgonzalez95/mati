import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import Link from "next/link";


function SearchForm() {
    const [cat, setCat] = useState("");
    const [search, setSearch] = useState("");
    const [timer, setTimer] = useState(null);

    useEffect(() => {
        document.querySelector("body").addEventListener("click", onBodyClick);

        return (() => {
            document.querySelector("body").removeEventListener("click", onBodyClick);
        })
    }, [])


    function removeXSSAttacks(html) {
        const SCRIPT_REGEX = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

        // Removing the <script> tags
        while (SCRIPT_REGEX.test(html)) {
            html = html.replace(SCRIPT_REGEX, "");
        }

        // Removing all events from tags...
        html = html.replace(/ on\w+="[^"]*"/g, "");

        return {
            __html: html
        }
    }

    function matchEmphasize(name) {
        let regExp = new RegExp(search, "i");
        return name.replace(
            regExp,
            (match) => "<strong>" + match + "</strong>"
        );
    }

    function onSearchClick(e) {
        e.preventDefault();
        e.stopPropagation();
        e.currentTarget.parentNode.classList.toggle('show');
    }

    function onBodyClick(e) {
        if (e.target.closest('.header-search')) return e.target.closest('.header-search').classList.contains('show-results') || e.target.closest('.header-search').classList.add('show-results');

        document.querySelector('.header-search.show') && document.querySelector('.header-search.show').classList.remove('show');
        document.querySelector('.header-search.show-results') && document.querySelector('.header-search.show-results').classList.remove('show-results');
    }

    function onCatSelect(e) {
        setCat(e.target.value);
    }

    function onSearchChange(e) {
        setSearch(e.target.value);
    }

    function onSubmitSearchForm(e) {
        e.preventDefault();
    }

    return (
        <div className="header-search header-search-popup header-search-category d-none d-sm-block">
            <a href="#" className="search-toggle" role="button" onClick={onSearchClick}><i
                className="icon-magnifier"></i></a>
            <form action="#" method="get" onSubmit={(e) => onSubmitSearchForm(e)}>
                <div className="header-search-wrapper">
                    <input type="search" className="form-control" name="q" id="q" placeholder="Search..." value={search}
                           required onChange={(e) => onSearchChange(e)}/>
                    <div className="select-custom">
                        <select id="cat" name="cat" value={cat} onChange={(e) => onCatSelect(e)}>
                            <option value="">All Categories</option>
                            <option value="fashion">Fashion</option>
                            <option value="women">- Women</option>
                            <option value="men">- Men</option>
                            <option value="jewellery">- Jewellery</option>
                            <option value="kids-fashion">- Kids Fashion</option>
                            <option value="electronics">Electronics</option>
                            <option value="smart-tvs">- Smart TVs</option>
                            <option value="cameras">- Cameras</option>
                            <option value="games">- Games</option>
                            <option value="home-garden">Home &amp; Garden</option>
                            <option value="motors">Motors</option>
                            <option value="cars-and-trucks">- Cars and Trucks</option>
                            <option value="motorcycles-powersports">- Motorcycles &amp; Powersports</option>
                            <option value="parts-accessories">- Parts &amp; Accessories</option>
                            <option value="boats">- Boats</option>
                            <option value="auto-tools-supplies">- Auto Tools &amp; Supplies</option>
                        </select>
                    </div>

                    <button className="btn icon-magnifier p-0" title="search" type="submit"></button>

                    <div className="live-search-list">

                    </div>
                </div>
            </form>
        </div>
    );
}

export default (SearchForm);