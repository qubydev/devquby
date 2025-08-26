import React from "react";
import styles from "./Hero.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Hero() {
    return (
        <header className={styles.hero}>
            <div className="container">
                <div className="row">
                    <div className="col col--6">
                        <h1>
                            Learn coding
                            <br />
                            with dev <span className="highlight">Quby</span>
                        </h1>
                        <Link
                            className={clsx(
                                "button button--primary button--lg",
                                styles.getStartedButton
                            )}
                            to="/docs/intro"
                        >
                            Get started
                        </Link>
                        <Link
                            className="button button--secondary button--lg"
                            to="https://github.com/qubydev/devquby"
                        >
                            <img
                                className={styles.githubIcon}
                                src={useBaseUrl("/img/github.svg")}
                                alt="GitHub Logo"
                            />{" "}
                            <span className={styles.githubButtonText}>GitHub</span>
                        </Link>
                        <p className={clsx(
                            "padding-top--md",
                            styles.description
                        )}>
                            Fastest tutorial to master various development skills.
                        </p>
                    </div>
                    <div className="col col--6">
                        <img
                            className={styles.logo}
                            src={useBaseUrl("/img/quby-computer.gif")}
                            alt="Gotenberg Hero Logo"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}