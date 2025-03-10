import { DatePipe } from "@angular/common"

export class Todo {
    id: number
    priority: string
    description: string
    title: string
    

    constructor({ id, priority, description, title }: any) {
        this.id = id
        this.priority = priority
        this.description = description
        this.title = title
  
    }



}

