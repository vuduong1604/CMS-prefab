System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, Label, SpriteFrame, find, Sprite, Item, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, Gamemanager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItem(extras) {
    _reporterNs.report("Item", "./Item", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      SpriteFrame = _cc.SpriteFrame;
      find = _cc.find;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      Item = _unresolved_2.Item;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8a173Vk8XRNgq6s9av4oCK+", "Gamemanager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Gamemanager", Gamemanager = (_dec = ccclass("Gamemanager"), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(SpriteFrame), _dec9 = property(SpriteFrame), _dec(_class = (_class2 = class Gamemanager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "Item", _descriptor, this);

          _initializerDefineProperty(this, "BG", _descriptor2, this);

          _initializerDefineProperty(this, "noti", _descriptor3, this);

          _initializerDefineProperty(this, "popupupload", _descriptor4, this);

          _initializerDefineProperty(this, "button_tpnl", _descriptor5, this);

          _initializerDefineProperty(this, "ListItem", _descriptor6, this);

          _initializerDefineProperty(this, "disableSoundSprite", _descriptor7, this);

          _initializerDefineProperty(this, "enableSoundSprite", _descriptor8, this);

          this.i = 0;
          this.maxpage = 10;
          this.baseUrlfile = "https://ctm-cms.myg.vn";
          this.nodeupload = null;
        }

        onLoad() {
          window.addEventListener("message", e => {
            var data = e.data; // console.log("Data=> ", e.data);
            // console.log("Method =>> ", data.method);
            // console.log("Params =>> ", data.params);

            if (data.method == "setimage") {}

            if (data.method == "setsound") {}

            if (data.method == "loaddata") {
              console.log("Nhận data từ cms");
              this.loadData(data.params.data);
            }
          });
        }

        start() {
          //this.AddItem();
          var myHeaders = new Headers();
          myHeaders.append("Cookie", ".AspNetCore.Session=CfDJ8GmrYVI6VxlFp5hvVMclUtbNYSmkex1UtQdZ6smB73vnw%2FSlHIHLyBsSs49nxoK2jNqvBJyT2It39gKhkIsNIJiRbIW5FRzG44gYrHZS%2BWb8Z16d36OZAUXKppJBY87rjLyA878IoIyeXuA3koV8x%2BPFlMabeTalTDMkpaKf4pw3");
          var requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
          };
          fetch("https://dev-cms-teacher.consangtao.vn/Api/UrlBase", requestOptions).then(response => response.text()).then(result => this.baseUrlfile = JSON.parse(result).fileUrl, window.top.display()).catch(error => window.top.display());
        }

        loadData(data) {
          // console.log(data);
          for (var i = 0; i < data.length; i++) {
            this.AddItem();
            this.ListItem[this.ListItem.length - 1].getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
              error: Error()
            }), Item) : Item).iditem.string = data[i].id;
            this.ListItem[this.ListItem.length - 1].getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
              error: Error()
            }), Item) : Item).LoadData(data[i].jsonData);
          }
        }
        /**
         * AddItem
         */


        AddItem() {
          if (this.ListItem.length < this.maxpage) {
            this.i = this.ListItem.length + 1;
            this.ListItem.forEach(element => {
              element.active = false;
            });
            var a = instantiate(this.Item);
            a.parent = this.BG;
            a.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
              error: Error()
            }), Item) : Item).PageName.string = this.i.toString();
            this.ListItem.push(a);
            this.ListItem.forEach(element => {
              console.log(element.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
                error: Error()
              }), Item) : Item).PageName.string);
            });
          } else {
            this.Noti("Bạn không thể tạo thêm nữa!!!");
          }
        }

        SubItem() {
          if (this.ListItem.length > 0) {
            this.ListItem[this.ListItem.length - 1].destroy();
            this.ListItem.pop();
            console.log("length=> ", this.ListItem.length); // this.ListItem.forEach(element => {
            //     console.log(element.getComponent(Item).PageName.string);
            // });

            if (this.ListItem.length > 0) {
              this.ListItem[this.ListItem.length - 1].active = true;
            }

            this.i = this.ListItem.length;
          } else {
            this.Noti("Bạn không thể xóa thêm nữa!!!");
          }
        }

        Noti(content) {
          this.noti.active = true;
          this.noti.setSiblingIndex(100000);
          this.noti.getChildByName("Label").getComponent(Label).string = content;
        }

        closeNoti() {
          this.noti.active = false;
        }

        // node click upload
        OpenpopupUpload(node) {
          this.popupupload.active = true;
          this.popupupload.setSiblingIndex(100000);
          this.nodeupload = node;
          console.log("nodeupload =>", this.nodeupload);

          if (this.nodeupload.name != "question") {
            this.button_tpnl.active = false;
          }

          if (this.nodeupload.name == "question") {
            if (this.nodeupload.parent.getChildByName("iditem").getComponent(Label).string != "00000000-0000-0000-0000-000000000000") {
              this.button_tpnl.active = true;
            } else {
              this.button_tpnl.active = false;
            }
          }
        }

        ClosepopupUpload() {
          this.popupupload.active = false;
        }

        Next() {
          var index = 0; // id page dang active

          this.ListItem.forEach(element => {
            if (element.active == true) {
              index = Number(element.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
                error: Error()
              }), Item) : Item).PageName.string);
            }
          });
          console.log("Page đang active => ", index);

          if (index < this.ListItem.length) {
            this.ListItem[index - 1].active = false;
            this.ListItem[index].active = true;
          }
        }

        Prev() {
          var index = 0; // id page dang active

          this.ListItem.forEach(element => {
            if (element.active == true) {
              index = Number(element.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
                error: Error()
              }), Item) : Item).PageName.string);
            }
          });
          console.log("Page đang active => ", index);

          if (index > 1) {
            this.ListItem[index - 1].active = false;
            this.ListItem[index - 2].active = true;
          }
        } // =============================== UPLOAD ======================================


        uploadimg() {
          this.UploadFile(this.nodeupload);
        } //call từ bên item


        UploadFile(node) {
          if (cc.sys.isBrowser) {
            let ipFile = document.createElement("input");
            ipFile.type = "file";
            ipFile.accept = "image/png/mp3";
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
              formdata.append("ClassItem", node.name);
              var requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: formdata,
                redirect: "follow"
              };
              fetch("https://dev-cms-teacher.consangtao.vn/Api/UploadFile", requestOptions).then(response => response.text()).then(result => {
                console.log(result);
                let classItem = JSON.parse(result).classItem;
                let url = JSON.parse(result).url;
                this.setImage(url, node);
              }).catch(error => console.log("error", error));
            }, false);
          }
        }

        xoaamthanh() {
          console.log("xoa am thanh", this.nodeupload);
          find("sound/Label_sound", this.nodeupload).getComponent(Label).string = "";
          find("sound", this.nodeupload).getComponent(Sprite).spriteFrame = this.disableSoundSprite;
        } // setImage(remoteUrl, node) {
        //   this.ClosepopupUpload();
        //   var typefile = remoteUrl.substr(remoteUrl.length - 3);
        //   console.warn("typefile=>", typefile);
        //   if (typefile == "png" || typefile == "jpg") {
        //     assetManager.loadRemote(remoteUrl, (err, imageAsset) => {
        //       var spr = find("Mask/Sprite", node);
        //       console.log(spr);
        //       const spriteFrame = new SpriteFrame();
        //       const tex = new Texture2D();
        //       tex.image = imageAsset;
        //       spriteFrame.texture = tex;
        //       spr.getComponent(Sprite).spriteFrame = spriteFrame;
        //     });
        //     var textlabel = find("Mask/Sprite/Label_sprite", node);
        //     textlabel.getComponent(Label).string = remoteUrl;
        //   }
        //   if (typefile == "mp3") {
        //     var textlabel = find("sound/Label_sound", node);
        //     textlabel.getComponent(Label).string = remoteUrl;
        //     find("sound", node).getComponent(Sprite).spriteFrame =
        //       this.enableSoundSprite;
        //   }
        // }


        addtpnl() {
          window.top.showmodal([], this.nodeupload.parent.getChildByName("iditem").getComponent(Label).string, 0);
        } // upload data cms


        SaveGame() {
          var listitemdata = [];
          this.ListItem.forEach(element => {
            element.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
              error: Error()
            }), Item) : Item).getData();
            listitemdata.push(element.getComponent(_crd && Item === void 0 ? (_reportPossibleCrUseOfItem({
              error: Error()
            }), Item) : Item).item);
          });

          if (listitemdata == null || listitemdata.length == 0) {
            this.Noti("Tối thiểu 1 câu.");
          } else {
            console.log(JSON.stringify(listitemdata));
            window.top.receiveData(JSON.stringify(listitemdata));
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "Item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "BG", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "noti", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "popupupload", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "button_tpnl", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "ListItem", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "disableSoundSprite", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "enableSoundSprite", [_dec9], {
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
//# sourceMappingURL=d4fc5e27019a38ce2fa687e907edf9a7ad4806ed.js.map