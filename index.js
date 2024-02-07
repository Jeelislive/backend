require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

const githubData =
{
    "login": "Jeels-code",
    "id": 108856045,
    "node_id": "U_kgDOBn0C7Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/108856045?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Jeels-code",
    "html_url": "https://github.com/Jeels-code",
    "followers_url": "https://api.github.com/users/Jeels-code/followers",
    "following_url": "https://api.github.com/users/Jeels-code/following{/other_user}",
    "gists_url": "https://api.github.com/users/Jeels-code/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Jeels-code/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Jeels-code/subscriptions",
    "organizations_url": "https://api.github.com/users/Jeels-code/orgs",
    "repos_url": "https://api.github.com/users/Jeels-code/repos",
    "events_url": "https://api.github.com/users/Jeels-code/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Jeels-code/received_events",
    "type": "User",
    "site_admin": false,
    "name": "JEEL RUPARELIYA",
    "company": "Vishvkarma Gov. Engg. College-Ahmedabad",
    "blog": "https://www.linkedin.com/in/jeel-rupareliya-34a4a8250",
    "location": "Ahmedabad",
    "email": null,
    "hireable": null,
    "bio": "Your Code Doesn't care About Your College.\r\n",
    "twitter_username": null,
    "public_repos": 22,
    "public_gists": 0,
    "followers": 0,
    "following": 7,
    "created_at": "2022-07-07T05:42:08Z",
    "updated_at": "2024-01-23T16:24:59Z"
}

app.get('./github', (req, res) => {
    res.json(githubData)
})

app.get('/', (req, res) => {
    res.send('Hellwcwo World!')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${ port }`)
})