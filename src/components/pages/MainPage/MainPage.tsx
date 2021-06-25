import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../../hooks/authHook";
import { useAppDispatch } from "../../../hooks/storeHooks";
import { oauthYndexSignIn } from "../../../store/authReducer";

import "./MainPage.scss";
import { DropdownMenu } from "../../DropdownMenu/DropdownMenu";

export const MainPage = (): JSX.Element => {

    const queryString = new URLSearchParams(useLocation().search);
    const code = queryString.get("code");
    const dispatch = useAppDispatch();
    const user = useAuth();

    const data = [
        { id: 1, label: "STARS" },
        { id: 2, label: "BASIC" }
    ];

    useEffect(() => {
        if (code && !user) {
            dispatch(oauthYndexSignIn(code));
        }
    });

    return (
        <main className="page page_centered">
            <div className="main-page__links">
                <Link to="/signup" className="main-page__link">
                    Регистрация
                </Link>
                <Link to="/login" className="main-page__link">
                    Вход
                </Link>
                <Link to="/profile" className="main-page__link">
                    Профиль
                </Link>
                <Link to="/game" className="main-page__link">
                    Игра
                </Link>
                <Link to="/leaderboard" className="main-page__link">
                    Доска почета
                </Link>
                <Link to="/forum" className="main-page__link">
                    Форум
                </Link>
                <DropdownMenu data={data} text="Выберите тему игрового поля"/>
            </div>
        </main>
    );
};

