import {
  _decorator,
  Component,
  Node,
  Prefab,
  instantiate,
  Label,
  assetManager,
  SpriteFrame,
  Texture2D,
  find,
  Sprite,
} from "cc";
import { Item } from "./Item";
import { ItemShip } from "./ItemShip";
const { ccclass, property } = _decorator;

@ccclass("Gamemanager")
export class Gamemanager extends Component {
  @property(Prefab)
  Item: Prefab = null;

  @property(Prefab)
  ItemShip: Prefab = null;

  @property(Node)
  BG: Node = null;

  @property(Node)
  noti: Node = null;
  @property(Node)
  popupupload: Node = null;


  @property(Node)
  button_tpnl: Node = null;

  @property(Node)
  ListItem: Node[] = [];

  @property(SpriteFrame)
  disableSoundSprite: SpriteFrame = null;

  @property(SpriteFrame)
  enableSoundSprite: SpriteFrame = null;


  i = 0;
  maxpage = 10;

  baseUrlfile = "https://ctm-cms.myg.vn";

  onLoad() {
    window.addEventListener("message", (e) => {
      var data = e.data;
      // console.log("Data=> ", e.data);

      // console.log("Method =>> ", data.method);

      // console.log("Params =>> ", data.params);
      if (data.method == "setimage") {
      }
      if (data.method == "setsound") {
      }
      if (data.method == "loaddata") {
        console.log("Nhận data từ cms");
        this.loadData(data.params.data);
      }
    });
  }

  start() {
    //this.AddItem();

    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      ".AspNetCore.Session=CfDJ8GmrYVI6VxlFp5hvVMclUtbNYSmkex1UtQdZ6smB73vnw%2FSlHIHLyBsSs49nxoK2jNqvBJyT2It39gKhkIsNIJiRbIW5FRzG44gYrHZS%2BWb8Z16d36OZAUXKppJBY87rjLyA878IoIyeXuA3koV8x%2BPFlMabeTalTDMkpaKf4pw3"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://dev-cms-teacher.consangtao.vn/Api/UrlBase", requestOptions)
      .then((response) => response.text())
      .then((result) => this.baseUrlfile = JSON.parse(result).fileUrl, window.top.display())
      .catch((error) => window.top.display());

  }

  loadData(data) {
    // console.log(data);
    for (var i = 0; i < data.length; i++) {
      this.AddItem();
      this.ListItem[this.ListItem.length - 1].getComponent(Item).iditem.string =
        data[i].id;
      this.ListItem[this.ListItem.length - 1]
        .getComponent(Item)
        .LoadData(data[i].jsonData);
    }
  }

  /**
   * AddItem
   */
  public AddItem() {
    if (this.ListItem.length < this.maxpage) {
      this.i = this.ListItem.length + 1;
      this.ListItem.forEach((element) => {
        element.active = false;
      });

      var a = instantiate(this.Item);
      a.parent = this.BG;
      a.getComponent(Item).PageName.string = this.i.toString();
      this.ListItem.push(a);
      this.ListItem.forEach((element) => {
        console.log(element.getComponent(Item).PageName.string);
      });
      this.popupupload.active = false;

    } else {
      this.Noti("Bạn không thể tạo thêm nữa!!!");
    }

  }

  public AddItem1() {
    if (this.ListItem.length < this.maxpage) {
      this.i = this.ListItem.length + 1;
      this.ListItem.forEach((element) => {
        element.active = false;
      });

      var a = instantiate(this.ItemShip);
      a.parent = this.BG;
      a.getComponent(ItemShip).PageName.string = this.i.toString();
      this.ListItem.push(a);
      this.ListItem.forEach((element) => {
        console.log(element.getComponent(ItemShip).PageName.string);
      });
      this.popupupload.active = false;
    } else {
      this.Noti("Bạn không thể tạo thêm nữa!!!");
    }

  }

  public SubItem() {
    if (this.ListItem.length > 0) {
      this.ListItem[this.ListItem.length - 1].destroy();
      this.ListItem.pop();
      console.log("length=> ", this.ListItem.length);
      // this.ListItem.forEach(element => {
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

  public Noti(content) {
    this.noti.active = true;
    this.noti.setSiblingIndex(100000);
    this.noti.getChildByName("Label").getComponent(Label).string = content;
  }
  public closeNoti() {
    this.noti.active = false;
  }
  nodeupload = null; // node click upload
  public OpenpopupUpload(node) {
    this.popupupload.active = true;
    this.popupupload.setSiblingIndex(100000);
    this.nodeupload = node;
    console.log("nodeupload =>", this.nodeupload);
    if (this.nodeupload.name != "question") {
      this.button_tpnl.active = false;
    }
    if (this.nodeupload.name == "question") {
      if (
        this.nodeupload.parent.getChildByName("iditem").getComponent(Label)
          .string != "00000000-0000-0000-0000-000000000000"
      ) {
        this.button_tpnl.active = true;
      } else {
        this.button_tpnl.active = false;
      }
    }
  }
  public ClosepopupUpload() {
    this.popupupload.active = false;
  }

  public Next() {
    var index = 0; // id page dang active
    this.ListItem.forEach((element) => {
      if (element.active == true) {
        index = Number(element.getComponent(Item).PageName.string);
      }
    });
    console.log("Page đang active => ", index);
    if (index < this.ListItem.length) {
      this.ListItem[index - 1].active = false;
      this.ListItem[index].active = true;
    }
  }

  public Prev() {
    var index = 0; // id page dang active
    this.ListItem.forEach((element) => {
      if (element.active == true) {
        index = Number(element.getComponent(Item).PageName.string);
      }
    });
    console.log("Page đang active => ", index);
    if (index > 1) {
      this.ListItem[index - 1].active = false;
      this.ListItem[index - 2].active = true;
    }
  }

  // =============================== UPLOAD ======================================

  uploadimg() {
    this.UploadFile(this.nodeupload);
  }

  //call từ bên item
  UploadFile(node) {
    if (cc.sys.isBrowser) {
      let ipFile = document.createElement("input");
      ipFile.type = "file";
      ipFile.accept = "image/png/mp3";
      console.log("ipFile", ipFile);
      ipFile.click();
      ipFile.addEventListener(
        "change",
        () => {
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
              dataUrl =
                "data:application/octet-binary;base64," +
                dataUrl.replace("data:image/png;base64,", "");
              fetch(dataUrl)
                .then((res) => res.arrayBuffer())
                .then((buffer) => {
                  console.log("buffer", buffer);
                });
            };
          };
          console.log("ipFile.files[0]", ipFile.files);
          reader.readAsDataURL(ipFile.files[0]);
          // call Api

          var myHeaders = new Headers();
          myHeaders.append(
            "Cookie",
            ".AspNetCore.Session=CfDJ8GmrYVI6VxlFp5hvVMclUtanrpD%2BHH0oRRUDw6oaMn3NwyayHlyo3pNzp%2BEoa5sTRFRu%2Fiycjkfhs3cCAhcMz%2FI7uzsM8IQhc14aMSSnuv8PAShbhhpB538WNIJQxIwHCpD%2BNRNl1pW04TW%2FgN9%2BD%2BQcZFNbTHkI7U%2BOu4E7BK59"
          );

          var formdata = new FormData();
          formdata.append("Item", ipFile.files[0], ipFile.files[0].name);
          formdata.append("ClassItem", node.name);

          var requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: formdata,
            redirect: "follow",
          };

          fetch(
            "https://dev-cms-teacher.consangtao.vn/Api/UploadFile",
            requestOptions
          )
            .then((response) => response.text())
            .then((result) => {
              console.log(result);
              let classItem = JSON.parse(result).classItem;
              let url = JSON.parse(result).url;

              this.setImage(url, node);
            })
            .catch((error) => console.log("error", error));
        },
        false
      );
    }
    
  }

  xoaamthanh() {
    console.log("xoa am thanh", this.nodeupload);
    find("sound/Label_sound", this.nodeupload).getComponent(Label).string = "";
    find("sound", this.nodeupload).getComponent(Sprite).spriteFrame =
      this.disableSoundSprite;
  }

  setImage(remoteUrl, node) {
    this.ClosepopupUpload();
    var typefile = remoteUrl.substr(remoteUrl.length - 3);
    console.warn("typefile=>", typefile);
    if (typefile == "png" || typefile == "jpg") {
      assetManager.loadRemote(remoteUrl, (err, imageAsset) => {
        var spr = find("Mask/Sprite", node);
        console.log(spr);

        const spriteFrame = new SpriteFrame();
        const tex = new Texture2D();
        tex.image = imageAsset;
        spriteFrame.texture = tex;
        spr.getComponent(Sprite).spriteFrame = spriteFrame;
      });

      var textlabel = find("Mask/Sprite/Label_sprite", node);
      textlabel.getComponent(Label).string = remoteUrl;
    }
    if (typefile == "mp3") {
      var textlabel = find("sound/Label_sound", node);
      textlabel.getComponent(Label).string = remoteUrl;
      find("sound", node).getComponent(Sprite).spriteFrame =
        this.enableSoundSprite;
    }
  }

  addtpnl() {
    window.top.showmodal(
      [],
      this.nodeupload.parent.getChildByName("iditem").getComponent(Label)
        .string,
      0
    );
  }

  // upload data cms

  public SaveGame() {
    var listitemdata = [];
    this.ListItem.forEach((element) => {
      element.getComponent(Item).getData();
      listitemdata.push(element.getComponent(Item).item);
    });

    if(listitemdata == null || listitemdata.length == 0){
this.Noti("Tối thiểu 1 câu.")
    }
    else{
      console.log(JSON.stringify(listitemdata));
    window.top.receiveData(JSON.stringify(listitemdata));
    }
  }
}
