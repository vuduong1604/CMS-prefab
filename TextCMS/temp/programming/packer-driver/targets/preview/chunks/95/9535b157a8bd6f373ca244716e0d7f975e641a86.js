System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Question, Answer, RootObject, _crd;

  _export({
    Question: void 0,
    Answer: void 0,
    RootObject: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26b55UxkYRCmpCV2S4XSC1k", "JsonData", undefined);

      _export("Question", Question = class Question {
        constructor() {
          this.Id = void 0;
          this.Image = void 0;
          this.Text = void 0;
          this.Sound = void 0;
          this.Gif = void 0;
          this.Spine = void 0;
          this.Index = void 0;
          this.Json = void 0;
        }

      });

      _export("Answer", Answer = class Answer {
        constructor() {
          this.Id = void 0;
          this.Image = void 0;
          this.Text = void 0;
          this.Sound = void 0;
          this.Gif = void 0;
          this.Spine = void 0;
          this.IsCorrect = void 0;
          this.Index = void 0;
          this.Json = void 0;
        }

      });

      _export("RootObject", RootObject = class RootObject {
        constructor() {
          this.IdItem = void 0;
          this.Title = void 0;
          this.question = void 0;
          this.answer = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9535b157a8bd6f373ca244716e0d7f975e641a86.js.map