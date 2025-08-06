import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

export default function Projects() {
  const GithubRepoCard = lazy(() =>
    import("../../components/githubRepoCard/GithubRepoCard")
  );
  const FailedLoading = () => null;
  const renderLoader = () => <Loading />;
  const [repo, setRepo] = useState([]);
  const { isDark } = useContext(StyleContext);

  // Add your live demo URLs mapping
  const LIVE_DEMO_URLS = {
    "Online-Voting-App": "https://votting-system.netlify.app/",
    PersonalFinanceManagement: "https://personalfinancemanagement.netlify.app",
    PayoutAutomationSystem: "https://payoutautomationsystem.onrender.com/",
    "pradeep-portfolio": "https://pk65arya.github.io/pradeep-portfolio/",
  };

  useEffect(() => {
    const getRepoData = () => {
      fetch(`${process.env.PUBLIC_URL}/profile.json`)
        .then((result) => {
          if (result.ok) return result.json();
          throw result;
        })
        .then((response) => {
          // Enhance repo data with live links before setting state
          const enhancedRepos = response.data.user.pinnedItems.edges.map(
            (edge) => ({
              ...edge,
              liveUrl: LIVE_DEMO_URLS[edge.node.name] || null,
            })
          );
          setRepo(enhancedRepos);
        })
        .catch((error) => {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setRepo("Error");
        });
    };
    getRepoData();
  }, []);

  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <div className="main" id="opensource">
          <h1 className="project-title">Open Source Projects</h1>
          <div className="repo-cards-div-main">
            {repo.map((v, i) => {
              if (!v) {
                console.error(
                  `Github Object for repository number : ${i} is undefined`
                );
                return null;
              }
              return (
                <GithubRepoCard
                  repo={v}
                  key={v.node.id}
                  isDark={isDark}
                  liveUrl={v.liveUrl} // Pass live URL to card component
                />
              );
            })}
          </div>
          <Button
            text={"More Projects"}
            className="project-button"
            href={socialMediaLinks.github}
            newTab={true}
          />
        </div>
      </Suspense>
    );
  } else {
    return <FailedLoading />;
  }
}
