System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, find, assetManager, Sprite, SpriteFrame, Texture2D, EditBox, AudioSource, Gamemanager, datajs, move, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, ItemShip;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGamemanager(extras) {
    _reporterNs.report("Gamemanager", "./Gamemanager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmove(extras) {
    _reporterNs.report("move", "./move", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      find = _cc.find;
      assetManager = _cc.assetManager;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      EditBox = _cc.EditBox;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      Gamemanager = _unresolved_2.Gamemanager;
    }, function (_unresolved_3) {
      datajs = _unresolved_3;
    }, function (_unresolved_4) {
      move = _unresolved_4.move;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2975jvvYlNnbaDqBFfGb/w", "ItemShip", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemShip", ItemShip = (_dec = ccclass("ItemShip"), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(EditBox), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(SpriteFrame), _dec(_class = (_class2 = class ItemShip extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "PositionAns", _descriptor, this);

          _initializerDefineProperty(this, "btnTPNL", _descriptor2, this);

          _initializerDefineProperty(this, "PageName", _descriptor3, this);

          _initializerDefineProperty(this, "iditem", _descriptor4, this);

          _initializerDefineProperty(this, "Title", _descriptor5, this);

          this.baseurl = "";
          this.nodeSave = null;
          this.Index = 4;

          _initializerDefineProperty(this, "AmountItem", _descriptor6, this);

          _initializerDefineProperty(this, "Questnode", _descriptor7, this);

          this.scroll = true;

          _initializerDefineProperty(this, "enablesound", _descriptor8, this);

          this.item = null;
        }

        start() {
          if (this.iditem.string != "00000000-0000-0000-0000-000000000000") {
            this.btnTPNL.active = true;
          }

          this.PositionAns.forEach(element => {
            element.setSiblingIndex(100000);
          });
        }

        scrollevent(event) {
          console.log(event._scrolling);

          if (event._scrolling == true) {
            this.scroll = false;
          } else {
            this.scroll = true;
          }
        }

        UploadFile(event) {
          var namenode = event.target.uuid;
          console.log(event.target.uuid);
          console.log(event.target);
          this.nodeSave = event.target; //   console.log("aaaaa",find("Canvas"))

          if (cc.sys.isBrowser) {
            let ipFile = document.createElement("input");
            ipFile.type = "file";
            ipFile.accept = "image/png";
            console.log("ipFile", ipFile);
            ipFile.click();
            ipFile.addEventListener("change", () => {
              var img = document.createElement("img");
              var canvas = document.createElement("canvas");
              var reader = new FileReader();

              reader.onload = function (progressEvent) {
                img.src = progressEvent.target.result;

                img.onload = function () {
                  // access image size here
                  var ctx = canvas.getContext("2d");
                  ctx.drawImage(img, 0, 0);
                  var MAX_WIDTH = 800;
                  var MAX_HEIGHT = 600;
                  var width = img.width;
                  var height = img.height;

                  if (width > height) {
                    if (width > MAX_WIDTH) {
                      height *= MAX_WIDTH / width;
                      width = MAX_WIDTH;
                    }
                  } else {
                    if (height > MAX_HEIGHT) {
                      width *= MAX_HEIGHT / height;
                      height = MAX_HEIGHT;
                    }
                  }

                  canvas.width = width;
                  canvas.height = height;
                  var ctx = canvas.getContext("2d");
                  ctx.drawImage(img, 0, 0, width, height);
                  var dataUrl = canvas.toDataURL("image/png");
                  console.log("buffer", dataUrl);
                  dataUrl = "data:application/octet-binary;base64," + dataUrl.replace("data:image/png;base64,", "");
                  fetch(dataUrl).then(res => res.arrayBuffer()).then(buffer => {
                    console.log("buffer", buffer);
                  });
                };
              };

              console.log("ipFile.files[0]", ipFile.files);
              reader.readAsDataURL(ipFile.files[0]); // call Api

              var myHeaders = new Headers();
              myHeaders.append("Cookie", ".AspNetCore.Session=CfDJ8GmrYVI6VxlFp5hvVMclUtanrpD%2BHH0oRRUDw6oaMn3NwyayHlyo3pNzp%2BEoa5sTRFRu%2Fiycjkfhs3cCAhcMz%2FI7uzsM8IQhc14aMSSnuv8PAShbhhpB538WNIJQxIwHCpD%2BNRNl1pW04TW%2FgN9%2BD%2BQcZFNbTHkI7U%2BOu4E7BK59");
              var formdata = new FormData();
              formdata.append("Item", ipFile.files[0], ipFile.files[0].name);
              formdata.append("ClassItem", namenode);
              var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
              };
              fetch("http://localhost:64457/Api/UploadFile", requestOptions).then(response => response.text()).then(result => {
                console.log(result);
                let classItem = JSON.parse(result).classItem;
                let url = JSON.parse(result).url;
                console.log(this.nodeSave.uuid);
                this.setImage(url);
              }).catch(error => console.log("error", error));
            }, false);
          }
        }

        setImage(remoteUrl) {
          assetManager.loadRemote(remoteUrl, (err, imageAsset) => {
            var spr = find("Mask/Sprite", this.nodeSave);
            console.log(spr);
            console.log(spr.getComponent(Sprite));
            console.log("spriteFrame", spr.getComponent(Sprite).spriteFrame);
            console.log("spriteFrame", imageAsset);
            const spriteFrame = new SpriteFrame();
            const tex = new Texture2D();
            tex.image = imageAsset;
            spriteFrame.texture = tex;
            spr.getComponent(Sprite).spriteFrame = spriteFrame;
          });
          var textlabel = find("Mask/Sprite/Label_sprite", this.nodeSave);
          textlabel.getComponent(Label).string = remoteUrl;
        }

        OpenPopup(event) {
          if (this.scroll == true) {
            var gamemanager = find("Canvas/GameManager").getComponent(_crd && Gamemanager === void 0 ? (_reportPossibleCrUseOfGamemanager({
              error: Error()
            }), Gamemanager) : Gamemanager).OpenpopupUpload(event.target);
            console.log(gamemanager);
          }
        }

        getData() {
          console.warn(this.Index);
          var gamemanager = find("Canvas/GameManager").getComponent(_crd && Gamemanager === void 0 ? (_reportPossibleCrUseOfGamemanager({
            error: Error()
          }), Gamemanager) : Gamemanager);
          this.baseurl = gamemanager.baseUrlfile;
          this.item = new datajs.RootObject();
          this.item.Title = this.Title.string;
          this.item.IdItem = this.iditem.string;
          this.item.question = [];
          this.item.answer = [];
          var ques = new datajs.Question();
          ques.Image = find("Mask/Sprite/Label_sprite", this.Questnode).getComponent(Label).string.replace(this.baseurl, ""); // url img

          ques.Sound = find("sound/Label_sound", this.Questnode).getComponent(Label).string.replace(this.baseurl, ""); // url sound
          // ques.Text = find("ContentIMG/Mask/Sprite/Label_sprite", this.Questnode)
          //   .getComponent(Label)
          //   .string.replace(this.baseurl, ""); // anh cho keo position dien cau hoi
          // var stringpositonjson = [
          //   [0, this.PositionAns[0].position.x, this.PositionAns[0].position.y],
          //   [1, this.PositionAns[1].position.x, this.PositionAns[1].position.y],
          //   [2, this.PositionAns[2].position.x, this.PositionAns[2].position.y],
          //   [3, this.PositionAns[3].position.x, this.PositionAns[3].position.y],
          //   [4, this.PositionAns[4].position.x, this.PositionAns[4].position.y],
          // ];

          var stringpositonjson = [];
          this.PositionAns.forEach(element => {
            console.log(element.getComponent(_crd && move === void 0 ? (_reportPossibleCrUseOfmove({
              error: Error()
            }), move) : move).pos, element.position);

            if (element.getComponent(_crd && move === void 0 ? (_reportPossibleCrUseOfmove({
              error: Error()
            }), move) : move).pos.x != element.position.x && element.getComponent(_crd && move === void 0 ? (_reportPossibleCrUseOfmove({
              error: Error()
            }), move) : move).pos.y != element.position.y && element.active == true) {
              // console.log("position da thay doi!");
              var obj = [Number(element.getChildByName("Label").getComponent(Label).string), element.position.x, element.position.y];
              stringpositonjson.push(obj);
            } else {// console.log("position khong thay doi!");
            }
          });
          ques.Json = JSON.stringify(stringpositonjson); // them position sua doan nay
          //

          console.log("QuestJson=>", ques.Json);
          ques.Id = this.uuidv4();
          this.item.question.push(ques);

          for (var i = 0; i < this.Index; i++) {
            var ans = new datajs.Answer();
            ans.Text = find("Sprite/Content", this.AmountItem[i]).getComponent(EditBox).string.replace(this.baseurl, "");
            ; // url content

            ans.Image = find("ContentIMG/Mask/Sprite/Label_sprite", this.AmountItem[i]).getComponent(Label).string.replace(this.baseurl, ""); // url img

            ans.Sound = find("sound/Label_sound", this.AmountItem[i]).getComponent(Label).string.replace(this.baseurl, ""); // url sound ans

            ans.Index = i;
            ans.Id = this.uuidv4();
            this.item.answer.push(ans);
          }
        }

        playSound(event, id) {
          console.log(id);
          console.log(event.target.getChildByName("Label_sound").getComponent(Label).string);
          var url = event.target.getChildByName("Label_sound").getComponent(Label).string;
          assetManager.loadRemote(url, (err, audioClip) => {
            // this.node.getComponent(cc.AudioSource).clip.clear();
            this.node.getComponent(AudioSource).clip = audioClip;
            this.node.getComponent(AudioSource).play();
          });
        }

        LoadData(jsondata) {
          var gamemanager = find("Canvas/GameManager").getComponent(_crd && Gamemanager === void 0 ? (_reportPossibleCrUseOfGamemanager({
            error: Error()
          }), Gamemanager) : Gamemanager);
          this.baseurl = gamemanager.baseUrlfile;
          var deserializeJson = JSON.parse(jsondata);
          console.log("data deserialize=> ", deserializeJson); // console.log("so luong cau => ", deserializeJson.answer.length);

          this.setAmountItem(null, deserializeJson.answer.length);
          this.Title.string = deserializeJson.Title;

          for (var i = 0; i < deserializeJson.question.length; i++) {
            console.log("question: ", deserializeJson.question[i]);
            find("Mask/Sprite/Label_sprite", this.Questnode).getComponent(Label).string = this.baseurl + deserializeJson.question[i].Image;
            find("sound/Label_sound", this.Questnode).getComponent(Label).string = this.baseurl + deserializeJson.question[i].Sound;
            find("Sprite/Content", this.Questnode).getComponent(EditBox).string = deserializeJson.question[i].Text; // load position

            find("ContentIMG/Mask/Sprite/Label_sprite", this.Questnode).getComponent(Label).string = deserializeJson.question[i].Text;
            this.LoadImage(this.baseurl + deserializeJson.question[i].Text, find("ContentIMG/Mask/Sprite", this.Questnode).getComponent(Sprite));
            console.log("JSON POSITON: ", JSON.parse(deserializeJson.question[i].Json)); // load position

            var listPos = JSON.parse(deserializeJson.question[i].Json); // console.log(listPos[0]);
            // console.log(listPos[0][1], listPos[0][2]);

            for (var i = 0; i < listPos.length; i++) {
              // console.error("POSITION=> ",listPos[i]);
              console.log(i);
              this.PositionAns[listPos[i][0]].setPosition(listPos[i][1], listPos[i][2]);
            }

            this.LoadImage(this.baseurl + deserializeJson.question[0].Image, find("Mask/Sprite", this.Questnode).getComponent(Sprite));

            if (this.baseurl + deserializeJson.question[0].Sound != this.baseurl) {
              find("sound", this.Questnode).getComponent(Sprite).spriteFrame = this.enablesound;
            }
          }

          for (var i = 0; i < deserializeJson.answer.length; i++) {
            find("Mask/Sprite/Label_sprite", this.AmountItem[i]).getComponent(Label).string = this.baseurl + deserializeJson.answer[i].Image;
            find("sound/Label_sound", this.AmountItem[i]).getComponent(Label).string = this.baseurl + deserializeJson.answer[i].Sound;
            this.LoadImage(this.baseurl + deserializeJson.answer[i].Image, find("Mask/Sprite", this.AmountItem[i]).getComponent(Sprite));

            if (this.baseurl + deserializeJson.answer[i].Sound != this.baseurl) {
              find("sound", this.AmountItem[i]).getComponent(Sprite).spriteFrame = this.enablesound;
            }
          } // this.LoadImage(this.url_img_ans1.string, this.spr_a1);
          // this.LoadImage(this.url_img_ans2.string, this.spr_a2);
          // this.LoadImage(this.url_img_ans3.string, this.spr_a3);
          // this.LoadImage(this.url_img_ans4.string, this.spr_a4);
          // this.LoadImage(this.url_img_question.string, this.spr_q);
          // if (this.url_sound_question.string != this.baseurl) {
          //     this.spr_sound_q.spriteFrame = this.enablesound;
          // }
          // if (this.url_sound_ans1.string != this.baseurl) {
          //     this.spr_sound_a1.spriteFrame = this.enablesound;
          // }
          // if (this.url_sound_ans2.string != this.baseurl) {
          //     this.spr_sound_a2.spriteFrame = this.enablesound;
          // }
          // if (this.url_sound_ans3.string != this.baseurl) {
          //     this.spr_sound_a3.spriteFrame = this.enablesound;
          // }
          // if (this.url_sound_ans4.string != this.baseurl) {
          //     this.spr_sound_a4.spriteFrame = this.enablesound;
          // }

        }

        LoadImage(remoteUrl, Sprite) {
          console.log(remoteUrl);
          assetManager.loadRemote(remoteUrl, (err, imageAsset) => {
            const spriteFrame = new SpriteFrame();
            const tex = new Texture2D();
            tex.image = imageAsset;
            spriteFrame.texture = tex;
            Sprite.spriteFrame = spriteFrame;
          });
        }

        setAmountItem(event, customdata) {
          console.log(customdata);
          this.Index = customdata;
          this.AmountItem.forEach(element => {
            element.active = true;
          });
          this.PositionAns.forEach(element => {
            element.active = true;
          });

          if (customdata == 1) {
            this.AmountItem[1].active = false;
            this.AmountItem[2].active = false;
            this.AmountItem[3].active = false;
            this.AmountItem[4].active = false;
            this.PositionAns[1].active = false;
            this.PositionAns[2].active = false;
            this.PositionAns[3].active = false;
            this.PositionAns[4].active = false;
          }

          if (customdata == 2) {
            this.AmountItem[2].active = false;
            this.AmountItem[3].active = false;
            this.AmountItem[4].active = false;
            this.PositionAns[2].active = false;
            this.PositionAns[3].active = false;
            this.PositionAns[4].active = false;
          }

          if (customdata == 3) {
            console.log("customdata", this.Index);
            this.AmountItem[3].active = false;
            this.AmountItem[4].active = false;
            this.PositionAns[3].active = false;
            this.PositionAns[4].active = false;
          }

          if (customdata == 4) {
            this.AmountItem[4].active = false;
            this.PositionAns[4].active = false;
          }
        }

        uuidv4() {
          var uuid = ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16));
          return uuid;
        }

        addTPNL() {
          window.top.showmodal([], this.iditem.string, 0);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "PositionAns", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "btnTPNL", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "PageName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "iditem", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "Title", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "AmountItem", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "Questnode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "enablesound", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c1ceca6da438aaa0ff12405a1c360ab099ebe2a.js.map