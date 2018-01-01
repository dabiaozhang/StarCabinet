export default interface IProfile {
    name: string;
    avatar_url: string;

    id: number;
    login: string;
    avatarUrl: string;
    gravatarId: string;
    url: string;
    htmlUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    starredUrl: string;
    subscriptionsUrl: string;
    organizationsUrl: string;
    reposUrl: string;
    eventsUrl: string;
    receivedEventsUrl: string;
    type: string;
    siteAdmin: boolean;
    // name: string;
    company: string;
    blog: string;
    location: string;
    hireable: boolean;
    publicRepos: number;
    publicGists: number;
    followers: number;
    following: number;
    createdAt: string;
    createdTime: number;
    updatedAt: string;
    updatedTime: number;
    privateGists: number;
    totalPrivateRepos: number;
    ownedPrivateRepos: number;
    diskUsage: number;
    collaborators: number;
    twoFactorAuthentication: boolean;
}
