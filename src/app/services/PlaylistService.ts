import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { PlaylistEntry } from "../models/PlaylistEntry";
import { environment } from "../../environments/environment";

@Injectable()
export class PlaylistService {
    constructor(private httpClient: HttpClient){}

    getAllEntries(): Observable<Array<PlaylistEntry>> {
        return this.httpClient.get<Array<PlaylistEntry>>(`${environment.backendUrl}/playlist`);
    }

    updateEntry(entry: PlaylistEntry): Observable<PlaylistEntry> {
        return this.httpClient.put<PlaylistEntry>(`${environment.backendUrl}/playlist/manage`, entry, {headers:{
            'Authorization': 'Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ6YWhlbGEtYmFja2VuZCIsIm5iZiI6IjE1MjkyODAwMDAiLCJqdGkiOiIxYWFhYmFjZS0wYTEyLTRjOWQtODQzNi03ZDFkZTJhYjM5ZjgiLCJleHAiOiIxNTQ2MjE0NDAwIiwiaWF0IjoiMTUzODU3ODI5OSIsInVzZXIiOiJ7XCJVc2VybmFtZVwiOlwiemFoZWVyYW5kY2VsYUB6YWhlbGEudXNcIixcIkZpcnN0TmFtZVwiOlwiWmFoZWVyXCIsXCJMYXN0TmFtZVwiOlwiTWFyY2VsYVwiLFwiTWlkZGxlSW5pdGlhbFwiOlwiXCIsXCJDYXRlZ29yaWVzXCI6W1wiU2VsZlwiLFwiQWRtaW5cIl0sXCJEZXNjcmlwdGlvblwiOlwiVGhlIGJvc3NcIixcIkZhY2Vib29rVXJsXCI6e1wiVXJpXCI6XCJ3d3d3LmZhY2Vib29rLmNvbVwiLFwiSXNQdWJsaWNcIjpmYWxzZX0sXCJUd2l0dGVyVXJsXCI6e1wiVXJpXCI6XCJ3d3cudHdpdHRlci5jb21cIixcIklzUHVibGljXCI6ZmFsc2V9LFwiSW5zdGFncmFtVXJsXCI6e1wiVXJpXCI6XCJ3d3cuaW5zdGFncmFtLmNvbVwiLFwiSXNQdWJsaWNcIjpmYWxzZX0sXCJFbWFpbFwiOntcIlVyaVwiOlwiemFoZWVyYW5kY2VsYUB6YWhlbGEudXNcIixcIklzUHVibGljXCI6ZmFsc2V9LFwiSW50ZXJlc3RzXCI6W1wiTWFuYWdpbmdcIl0sXCJBdmF0YXJJbWFnZVwiOlwiaHR0cHM6Ly96YWhlbGFzdG9yYWdlLmJsb2IuY29yZS53aW5kb3dzLm5ldC96YWhlbGEtYXNzZXRzL2RlZmF1bHRBdmF0YXJzL21hbGUtMi5zdmdcIixcIkltYWdlc1wiOltcIlwiXSxcIkdlbmRlclwiOjEsXCJJZFwiOlwiODM4OTY0MTItOGQzZi00NDBmLWEzMGQtOGVhZGQ1YzQ3MWUwXCIsXCJMaW5rZWRHdWVzdHNcIjpudWxsLFwiQWxsZXJnaWVzXCI6W1wiXCJdLFwiRGlldGFyeVJlc3RyaWN0aW9uc1wiOltcIlwiXSxcIlJlbGlnaW91c1Jlc3RyaWN0aW9uc1wiOltcIlwiXSxcIkZyZWVmb3JtUmVzdHJpY3Rpb25zXCI6XCJcIixcIkZyZWVmb3JtQWxsZXJnaWVzXCI6XCJcIixcIlJTVlBTdGF0dXNcIjowLFwiVHlwZVwiOjN9IiwiZm9yYmlkZGVuUm91dGVzIjoiW10ifQ.FbeK1cXp3Yv-ZnJAEgU87YP7pvgb_uV9lxv0n7RSm0ePH85KmOZ0IxC28kEZ_vUan0F0kN7uNsfTmlqaCQeeEQ'
        }});
    }
}