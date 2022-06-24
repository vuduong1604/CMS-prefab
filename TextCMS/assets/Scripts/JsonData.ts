export class Question {
    Id: string;
    Image: string;
    Text?: any;
    Sound?: any;
    Gif?: any;
    Spine?: any;
    Index: number;
    Json: string;
}

export class Answer {
    Id: string;
    Image: string;
    Text?: any;
    Sound?: any;
    Gif?: any;
    Spine?: any;
    IsCorrect: boolean;
    Index: number;
    Json: string;
}

export class RootObject {
    IdItem: string;
    Title: string;
    question: Question[];
    answer: Answer[];
}