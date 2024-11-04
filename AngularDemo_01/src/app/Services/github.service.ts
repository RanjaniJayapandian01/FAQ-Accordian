import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class GitHubService{
    constructor(private _http: HttpClient) {        
    }

    getGitHubUserData(_searchTerm) : Observable<GitHubUser>{
        return this._http.get<GitHubUser>(`https://api.github.com/search/users?q=${_searchTerm}&per_page=${2}`);
        //https://api.github.com/search/users?q=greg

    }

}

export interface GitHubUser{
    html_url: string,
    avatar_url : string,
    login : string,
    score: string
}