import React, { useEffect, useState } from 'react';
import '../styles/ContributorsPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGitAlt } from '@fortawesome/free-brands-svg-icons';
import {
    faUsers,
    faStar,
    faCodeBranch,
    faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';
import CountUp from 'react-countup';

const REPO_URL = 'https://api.github.com/repos/manikumarreddyu/AgroTech-AI';

const ContributorsPage = () => {
    const [contributors, setContributors] = useState([]);
    const [repoStats, setRepoStats] = useState({});
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const contributorsData = [];
            let page = 1;
            let isFetching = true;

            // Fetch repository stats
            const repoResponse = await fetch(REPO_URL);
            const repoData = await repoResponse.json();
            setRepoStats(repoData);

            // Fetch all contributors with pagination
            while (isFetching) {
                const response = await fetch(`${REPO_URL}/contributors?per_page=100&page=${page}`);
                const data = await response.json();

                if (!response.ok || data.length === 0) {
                    isFetching = false;
                } else {
                    contributorsData.push(...data);
                    page++;
                }
            }

            setContributors(contributorsData);
        } catch (error) {
            console.error('Error fetching data:', error);
            setContributors([]);
            setRepoStats({});
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const renderStats = () => {
        const contributorsCount = contributors.length;
        const totalContributions = contributors.reduce((sum, user) => sum + user.contributions, 0);

        const stats = [
            { label: 'Contributors', value: contributorsCount, icon: faUsers },
            { label: 'Total Contributions', value: totalContributions, icon: faGitAlt },
            { label: 'GitHub Stars', value: repoStats.stargazers_count || 0, icon: faStar },
            { label: 'Forks', value: repoStats.forks_count || 0, icon: faCodeBranch },
        ];

        return (
            <div className="contributor-stats-grid" id="statsGrid">
                {stats.map((stat, index) => (
                    <div className="contributor-stat-card" key={index}>
                        <div className="contributor-icon">
                            <FontAwesomeIcon icon={stat.icon} size="2x" className="text-green-600" />
                        </div>
                        <h3>
                            <CountUp start={0} end={stat.value} duration={2.5} separator="," />
                        </h3>
                        <p>{stat.label}</p>
                    </div>
                ))}
            </div>
        );
    };

    const renderContributors = () => {
        return (
            <div className="contributor-contributors-grid" id="contributorsGrid">
                {contributors.map((contributor) => (
                    <div className="contributor-contributor-card" key={contributor.login}>
                        <img
                            src={contributor.avatar_url}
                            alt={`${contributor.login}'s avatar`}
                            className="rounded-full border shadow-sm"
                        />
                        <h3>{contributor.login}</h3>
                        <p className="text-sm text-gray-500">{contributor.type}</p>
                        <div className="contributor-contributions text-green-600">
                            {contributor.contributions} Contributions
                        </div>
                        <div className="contributor-footer flex items-center gap-2 mt-2">
                            <a
                                href={contributor.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`GitHub profile of ${contributor.login}`}
                                className="text-gray-700 hover:text-green-600"
                            >
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{' '}
                                <FontAwesomeIcon icon={faGithub} className="ml-1" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section className="dark:bg-slate-900 py-16 px-6 sm:px-12">
            <div className="contributor-contributors text-center max-w-7xl mx-auto">
                {loading ? (
                    <div id="loading" className="contributor-loading text-green-600">Loading contributors...</div>
                ) : (
                    <>
                        <h2 className="text-3xl font-bold mb-6 text-green-500">📊 Project Statistics</h2>
                        {renderStats()}
                        <h2 className="text-3xl font-bold mt-12 mb-6 text-green-700">🌱 Meet Our Contributors</h2>
                        {renderContributors()}
                    </>
                )}
            </div>
        </section>
    );
};

export default ContributorsPage;
