

var baseAddress = "https://localhost:7117";
var vueApp = {
    data() {
        return {
            filter: "",
            CmpDTOes: [],
        };
    },
    mounted: function () {
        let _this = this;
        _this.getCmpDTOes();
    },
    methods: {
        getCmpDTOes: function () {
            let _this = this;
            axios.get(`${baseAddress}/api/ComputerModelsApi`).then(response => {
                _this.CmpDTOes = response.data;               
                var CmpList = []
                for (var i = 0; i < _this.CmpDTOes.length; i++) {
                    var item = _this.CmpDTOes[i]
                    CmpList.push(item)
                }
                _this.CmpDTOes = CmpList;
                
            })
        }

    }
}
var app = Vue.createApp(vueApp).mount("#app1");




// 引入three.js
import * as THREE from '../../three.js_dev/build/three.module.js';
// 引入相機控件
import { OrbitControls } from '../../three.js_dev/examples/jsm/controls/OrbitControls.js';
// 引入Stats性能監視器
import Stats from '../../three.js_dev/examples/jsm/libs/stats.module.js';
// 引入model
/*import { mesh, scenemodel, modelCPURan, modelCASE_dark_person, modelCASE_colorful_warrior, modelCASE_caller, modelGPU_MSI_RTX3080, modelGPU_Nvidia_RTX2060, modelGPU_Nvidia_RTX2070, modelGPU_Nvidia_RTX2080TI, modelGPU_Nvidia_RTX_Titan, modelGPU_Nvidia_RTX3060, modelGPU_Nvidia_RTX3070, modelGPU_Nvidia_RTX3090, modelGPU_Nvidia_RTX3090TI, modelCPU_Intel_Core_i7, modelCPU_Intel_Core_i5_7500, modelCPU_Intel_Core_i7_6950X, modelRAM_ddr4_G_SKILL_Trident_z_rgb, modelRAM_ddr4_G_SKILL_Trident_z_rgb2, modelRAM_ddr4_G_SKILL_Trident_z_rgb3, modelRAM_ddr4_G_SKILL_Trident_z_rgb4, modelRAM_ddr4_G_SKILL_TridentZ, modelRAM_ddr4_G_SKILL_TridentZ2, modelRAM_ddr4_G_SKILL_TridentZ3, modelRAM_ddr4_G_SKILL_TridentZ4, modelRAM_ddr4_T_Force_Delta_rgb, modelRAM_ddr4_T_Force_Delta_rgb2, modelRAM_ddr4_T_Force_Delta_rgb3, modelRAM_ddr4_T_Force_Delta_rgb4, modelRAM_ddr4_XPG_SPECTRIX_D41_rgb, modelRAM_ddr4_XPG_SPECTRIX_D41_rgb2, modelRAM_ddr4_XPG_SPECTRIX_D41_rgb3, modelRAM_ddr4_XPG_SPECTRIX_D41_rgb4, modelMB_Rog_STRIX_z790_A_GAMING_WIFI_D4, modelMB_Aorus_z690_ELITE, modelMB_Rog_STRIX_z690_E_Gaming, modelMB_Rog_z690_Maximus_XIII_Hero, modelPOWER_unit, modelPOWER_supply, modelSSD_SAMSUNG_970EVO_500GB_m2 } from '../js/3C_model.js';*/
import * as models from '../js/3C_model.js';
const { mesh, scenemodel, modelCPURan, modelCASE_dark_person, modelCASE_colorful_warrior, modelCASE_caller, modelGPU_MSI_RTX3080, modelGPU_Nvidia_RTX2060, modelGPU_Nvidia_RTX2070, modelGPU_Nvidia_RTX2080TI, modelGPU_Nvidia_RTX_Titan, modelGPU_Nvidia_RTX3060, modelGPU_Nvidia_RTX3070, modelGPU_Nvidia_RTX3090, modelGPU_Nvidia_RTX3090TI, modelCPU_Intel_Core_i7, modelCPU_Intel_Core_i5_7500, modelCPU_Intel_Core_i7_6950X, modelRAM_ddr4_G_SKILL_Trident_z_rgb, modelRAM_ddr4_G_SKILL_Trident_z_rgb2, modelRAM_ddr4_G_SKILL_Trident_z_rgb3, modelRAM_ddr4_G_SKILL_Trident_z_rgb4, modelRAM_ddr4_G_SKILL_TridentZ, modelRAM_ddr4_G_SKILL_TridentZ2, modelRAM_ddr4_G_SKILL_TridentZ3, modelRAM_ddr4_G_SKILL_TridentZ4, modelRAM_ddr4_T_Force_Delta_rgb, modelRAM_ddr4_T_Force_Delta_rgb2, modelRAM_ddr4_T_Force_Delta_rgb3, modelRAM_ddr4_T_Force_Delta_rgb4, modelRAM_ddr4_XPG_SPECTRIX_D41_rgb, modelRAM_ddr4_XPG_SPECTRIX_D41_rgb2, modelRAM_ddr4_XPG_SPECTRIX_D41_rgb3, modelRAM_ddr4_XPG_SPECTRIX_D41_rgb4, modelMB_Rog_STRIX_z790_A_GAMING_WIFI_D4, modelMB_Aorus_z690_ELITE, modelMB_Rog_STRIX_z690_E_Gaming, modelMB_Rog_z690_Maximus_XIII_Hero, modelPOWER_unit, modelPOWER_supply, modelSSD_SAMSUNG_970EVO_500GB_m2 } = models;
// 引入拖曳控制器
import { DragControls } from "../../three.js_dev/examples/jsm/controls/DragControls.js";

let H_Case = "caller";
let L_Case = "dark_person";
let H_Mb = "AORUS_z790_ELITE_AX";
let L_Mb = "ROG_STRIX_z790_A_GAMING_WIFI_D4";
let H_Cpu = "Intel_Core_i7_6950X";
let L_Cpu = "Intel_Core_i5_7500";
let H_Gpu = "Nvidia_RTX_Titan";
let L_Gpu = "Nvidia_RTX3060";
let H_Ran = "CPU_cool";
let L_Ran = "CPU_cool";
let H_Ram = "ddr4_G_SKILL_Trident_z_rgb";
let L_Ram = "ddr4_G_SKILL_TridentZ";
let H_Ssd = "m.2_SANSUNG_V_Nand970EVO";
let L_Ssd = "m.2_WD_Blue_500GB";
let H_Power = "supply750w";
let L_Power = "unit500w";
// 新增stats物件
const stats = new Stats();
//添加到body子層元素
// document.body.appendChild(stats.domElement);

//場景-----------------------------------------------------------
//創建一個三圍空間scene
const scene = new THREE.Scene();

// 創建三維座標軸
const axesHelper = new THREE.AxesHelper(200);
scene.add(axesHelper);
// 創建輔助網格平面
const gridHelper = new THREE.GridHelper(5000, 30, 0x000000, 0x000000);
// scene.add(gridHelper);
// model.position.y = 110;
// scene.add(model);
scene.add(mesh);
scene.add(scenemodel);

// 創建點光源
const pointLight = new THREE.PointLight(0xffffff, 0.8, 100);
pointLight.position.set(0, 130, 20);
scene.add(pointLight);
const pointLightHelper = new THREE.PointLightHelper(pointLight);
// scene.add(pointLightHelper);
// 創建環境光
const ambient = new THREE.AmbientLight(0xffffff, 1);
// ambient.position.set(0, 150, 10);
scene.add(ambient);

//相機-----------------------------------------------------------
//定義相機輸出畫布的尺吋
const width = window.innerWidth;// 滿版寬
const height = window.innerHeight;// 滿版高
// 設置相機的四個參數
// 創建透視投影相機
const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 5000);
//設置相機位置
camera.position.set(0, 144, 250);


// WebGL渲染 -------------------------------------------------------
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height); // canvas寬高
renderer.render(scene, camera); // 執行渲染與相機拍照
renderer.setClearColor(0xffffff, 1.0); // 背景色白色
renderer.outputEncoding = THREE.sRGBEncoding;
document.getElementById('webgl').appendChild(renderer.domElement);
//創建循環渲染
const clock = new THREE.Clock();
function render() {
    cancelAnimationFrame(requestId);
    if (isRendering == true) {
        // model.rotateZ(0.002); // 週期性旋轉
        requestAnimationFrame(render);
        stats.update(); //刷新性能監視器
    }
    // requestId = requestAnimationFrame(render);
    renderer.render(scene, camera);


}




// 創建相機控件
// 創建相機控件起始值
const controlsTargetPosition = new THREE.Vector3(0, 120, 0)
const controls = new OrbitControls(camera, renderer.domElement);
// 調整相機視線
controls.target = controlsTargetPosition;
controls.enableDamping = true; // 啟用阻尼效果，平滑移動
controls.dampingFactor = 0.1; // 阻尼係數
controls.rotateSpeed = 0.5; // 旋轉速度
controls.zoomSpeed = 1.0; // 縮放速度
controls.panSpeed = 3.0; // 平移速度
controls.update(); // 刷新相機
function animate() {

    requestAnimationFrame(animate); // 重複執行
    controls.update(); // 刷新相機
    stats.update();
    renderer.render(scene, camera); // 渲染

}
animate();
// controls.addEventListener('change', function () {
//     console.log('canera', camera.position);
//     renderer.render(scene, camera);
// })
// 製作相機動畫

// 產生option

const selectF = document.getElementById('fruit');
const selectB = document.getElementById('budget');
const selectG = document.getElementById('gameNeeded');

// 類別option
const optionF_Data = [
    { text: "請選擇", value: "choose" },
    { text: "遊戲", value: "game" },
    { text: "文書", value: "paperwork" },
    { text: "繪圖", value: "drawing" },
    { text: "伺服器", value: "server" },
];
// console.log(optionF_Data.length);
for (let i = 0; i < optionF_Data.length; i++) {
    const option = document.createElement('option');
    option.text = optionF_Data[i].text;
    option.value = optionF_Data[i].value;
    selectF.add(option);
};
const options_fruit = document.querySelectorAll('#fruit option');
options_fruit.forEach(function (option) {
    if (option.value === "choose") {
        option.disabled = true;
    }
});
// 類別監聽事件
selectF.addEventListener("change", function () {
    const selectedOption = selectF.options[selectF.selectedIndex];
    const selectedValue = selectedOption;
    if (selectedValue.value == 'game') {
        const select = document.getElementById("gameLabel");
        const label = document.getElementById("gameNeeded");
        const fruit = document.getElementById("fruit");
        fruit.disabled = true;
        select.style.display = "block";
        label.style.display = "block";

    }
    console.log(selectedValue.value);
});
// 價格option
const optionB_Data = [
    { text: "請選擇", value: "choose" },
    { text: "20000 ~ 30000", value: "20000" },
    { text: "40000 ~ 50000", value: "40000" },
    { text: "60000 ~ 70000", value: "60000" },
    { text: "80000 ~ 100000", value: "80000" },
    { text: "100.000以上", value: "100000" },
];
for (let i = 0; i < optionB_Data.length; i++) {
    const option = document.createElement('option');
    option.text = optionB_Data[i].text;
    option.value = optionB_Data[i].value;
    selectB.add(option);
};
const options_budget = document.querySelectorAll('#budget option');
options_budget.forEach(function (option) {
    if (option.value === "choose") {
        option.disabled = true;
    }
});
// 價格監聽事件
selectB.addEventListener("change", function () {
    const selectedOption = selectB.options[selectB.selectedIndex];
    const selectedValue = selectedOption;
    console.log(selectedValue);
});
const optionG_Data = [
    { text: "請選擇", value: "choose" },
    { text: "------FPS射擊遊戲------", value: "fps" },
    { text: "APEX", value: "fps01" },
    { text: "CS:GO", value: "fps02" },
    { text: "戰地風雲2042", value: "fps03" },
    { text: "戰地風雲 現代戰爭2", value: "fps04" },
    { text: "虹彩六號 圍攻行動", value: "fps05" },
    { text: "PUBG", value: "fps06" },
    { text: "天命2", value: "fps07" },
    { text: "末日之戰：劫後餘生", value: "fps08" },
    { text: "------動作冒險遊戲------", value: "avg" },
    { text: "聖靈之光2", value: "avg01" },
    { text: "人中之龍 維新 ! 極", value: "avg02" },
    { text: "艾爾登法環", value: "avg03" },
    { text: "最後生還者第一部", value: "avg04" },
    { text: "鬼滅之刃 火之神血風譚", value: "avg05" },
    { text: "消逝的光芒2 人與仁之戰", value: "avg06" },
    { text: "----------格鬥遊戲----------", value: "fg" },
    { text: "碧藍幻想Versus", value: "fg01" },
    { text: "終極快打旋風 4 ", value: "fg02" },
    { text: "鐵拳7", value: "fg03" },
    { text: "火影忍者疾風傳 終極風暴4", value: "fg04" },

];

// 遊戲總類option
for (let i = 0; i < optionG_Data.length; i++) {
    const option = document.createElement('option');
    option.text = optionG_Data[i].text;
    option.value = optionG_Data[i].value;
    selectG.classList.add("center-text");
    selectG.add(option);
};
// 獲得所有option元素
const options_game = document.querySelectorAll('#gameNeeded option');
// console.log(options);
// 對指定value值做字體加粗
options_game.forEach(function (option) {
    if (option.value === "fps") {
        option.style.fontWeight = "bold";
        option.disabled = true;
    }
    if (option.value === "avg") {
        option.style.fontWeight = "bold";
        option.disabled = true;
    }
    if (option.value === "fg") {
        option.style.fontWeight = "bold";
        option.disabled = true;
    }
    if (option.value === "choose") {
        option.disabled = true;
    }
});

fetch(`${baseAddress}/api/ComputerModelsApi`)
    .then(response => response.json())
    .then(data => {
        var CmpList = [];
        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            CmpList.push(item);

        }
        console.log(CmpList[0].value);
        console.log(models);

        const match = Object.keys(models).find(key => key === CmpList[0].value && CmpList[1].value && CmpList[2].value && CmpList[3].value && CmpList[4].value && CmpList[5].value && CmpList[6].value && CmpList[7].value);
        
        if (match) {
            StringModel();
            console.log("有找到");
        } else {
            console.log("沒找到");
        }
    })


let isRendering = false;
const button = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const button5 = document.createElement("button");
const button6 = document.createElement("button");
const button7 = document.createElement("button");
const button8 = document.createElement("button");
const reset = document.createElement("button");
let requestId;
button.innerHTML = "裝上機殼";
button2.innerHTML = "裝上主機板";
button3.innerHTML = "裝上CPU";
button4.innerHTML = "裝上CPU風扇";
button5.innerHTML = "裝上顯示卡";
button6.innerHTML = "裝上記憶體*2";
button7.innerHTML = "裝上記憶體*4";
button8.innerHTML = "裝上電源供應器";
reset.innerHTML = "重置模型";
button2.disabled = true;
button3.disabled = true;
button4.disabled = true;
button5.disabled = true;
button6.disabled = true;
button7.disabled = true;
button8.disabled = true;
// button.addEventListener("click", () => {
//     // 按鈕被點擊時的處理程序
//     // isRendering = true;
//     // console.log(isRendering);
//     button.disabled = true;
//     button2.disabled = false;
//     scene.add(modelCASE_dark_person);

// });
// scene.add(modelCASE_colorful_warrior);
// scene.add(modelCASE_caller);
// scene.add(modelGPU_Nvidia_RTX2060);
// scene.add(modelGPU_Nvidia_RTX2070);
// scene.add(modelGPU_Nvidia_RTX2080TI);
// scene.add(modelGPU_Nvidia_RTX_Titan);
// scene.add(modelGPU_Nvidia_RTX3060);
// scene.add(modelGPU_Nvidia_RTX3070);
// scene.add(modelGPU_Nvidia_RTX3070);
// scene.add(modelGPU_Nvidia_RTX3090);
// scene.add(modelGPU_Nvidia_RTX3090TI);

button.addEventListener("click", () => {
    // 按鈕被點擊時的處理程序
    // isRendering = true;
    // console.log(isRendering);
    button.disabled = true;
    button2.disabled = false;
    // scene.add(modelCASE_colorful_warrior);
    /*scene.add(modelCASE_caller);*/
    scene.add(modelCASE_caller);
    scene.add(modelCPU_Intel_Core_i7_6950X);
    scene.add(modelGPU_MSI_RTX3080);
    scene.add(modelMB_Aorus_z690_ELITE);
    scene.add(modelPOWER_unit);
    scene.add(modelRAM_ddr4_G_SKILL_Trident_z_rgb);
    scene.add(modelCPURan);
    scene.add(modelSSD_SAMSUNG_970EVO_500GB_m2);
});
// scene.add(modelMB_Rog_STRIX_z790_A_GAMING_WIFI_D4);
// scene.add(modelMB_Aorus_z690_ELITE);
// scene.add(modelMB_Rog_STRIX_z690_E_Gaming);
// scene.add(modelMB_Rog_z690_Maximus_XIII_Hero);
button2.addEventListener("click", () => {
    // 按鈕被點擊時的處理程序
    // isRendering = false;

    button2.disabled = true;
    button3.disabled = false;
    scene.add(modelMB_Rog_STRIX_z790_A_GAMING_WIFI_D4);

});
button3.addEventListener("click", () => {


    button3.disabled = true;
    button4.disabled = false;
    scene.add(modelCPU_Intel_Core_i7);


});
button4.addEventListener("click", () => {


    button4.disabled = true;
    button5.disabled = false;
    scene.add(modelCPURan);


});
// scene.add(modelGPU_MSI_RTX3080);
button5.addEventListener("click", () => {

    button5.disabled = true;
    button6.disabled = false;
    button7.disabled = false;
    scene.add(modelGPU_MSI_RTX3080);

});

// scene.add(modelRAM_ddr4_G_SKILL_Trident_z_rgb);
// scene.add(modelRAM_ddr4_G_SKILL_TridentZ);
// scene.add(modelRAM_ddr4_G_SKILL_TridentZ2);
// scene.add(modelRAM_ddr4_G_SKILL_TridentZ3);
// scene.add(modelRAM_ddr4_G_SKILL_TridentZ4);
// scene.add(modelRAM_ddr4_T_Force_Delta_rgb);
// scene.add(modelRAM_ddr4_T_Force_Delta_rgb2);
// scene.add(modelRAM_ddr4_T_Force_Delta_rgb3);
// scene.add(modelRAM_ddr4_T_Force_Delta_rgb4);
// scene.add(modelRAM_ddr4_XPG_SPECTRIX_D41_rgb);
// scene.add(modelRAM_ddr4_XPG_SPECTRIX_D41_rgb2);
// scene.add(modelRAM_ddr4_XPG_SPECTRIX_D41_rgb3);
// scene.add(modelRAM_ddr4_XPG_SPECTRIX_D41_rgb4);
button6.addEventListener("click", () => {


    button6.disabled = true;
    button7.disabled = true;
    button8.disabled = false;
    scene.add(modelRAM_ddr4_G_SKILL_Trident_z_rgb);
    scene.add(modelRAM_ddr4_G_SKILL_Trident_z_rgb3);
});
button7.addEventListener("click", () => {


    button6.disabled = true;
    button7.disabled = true;
    button8.disabled = false;
    scene.add(modelRAM_ddr4_G_SKILL_Trident_z_rgb);
    scene.add(modelRAM_ddr4_G_SKILL_Trident_z_rgb2);
    scene.add(modelRAM_ddr4_G_SKILL_Trident_z_rgb3);
    scene.add(modelRAM_ddr4_G_SKILL_Trident_z_rgb4);

});

// scene.add(modelPOWER_unit);
// scene.add(modelSSD_SAMSUNG_970EVO_500GB_m2);
// scene.add(modelPOWER_supply);
button8.addEventListener("click", () => {

    button8.disabled = true;
    scene.add(modelPOWER_unit);

});
reset.addEventListener("click", () => {
    // 重置模型
    scene.remove(modelCASE_caller);
    scene.remove(modelMB_Rog_STRIX_z790_A_GAMING_WIFI_D4);
    scene.remove(modelCPU_Intel_Core_i7);
    scene.remove(modelCPURan);
    scene.remove(modelGPU_MSI_RTX3080);
    scene.remove(modelRAM_ddr4_G_SKILL_Trident_z_rgb);
    scene.remove(modelRAM_ddr4_G_SKILL_Trident_z_rgb2);
    scene.remove(modelRAM_ddr4_G_SKILL_Trident_z_rgb3);
    scene.remove(modelRAM_ddr4_G_SKILL_Trident_z_rgb4);
    scene.remove(modelPOWER_unit);

    // 恢復按鈕狀態
    button.disabled = false;
    button2.disabled = true;
    button3.disabled = true;
    button4.disabled = true;
    button5.disabled = true;
    button6.disabled = true;
    button7.disabled = true;
    button8.disabled = true;

});
button.style.position = "absolute";
button.style.top = "85%";
button.style.left = "16%";
button.style.fontSize = "15px";
button2.style.position = "absolute";
button2.style.top = "90%";
button2.style.left = "16%";
button2.style.fontSize = "15px";
button3.style.position = "absolute";
button3.style.top = "95%";
button3.style.left = "16%";
button3.style.fontSize = "15px";
button4.style.position = "absolute";
button4.style.top = "100%";
button4.style.left = "16%";
button4.style.fontSize = "15px";
button5.style.position = "absolute";
button5.style.top = "105%";
button5.style.left = "16%";
button5.style.fontSize = "15px";
button6.style.position = "absolute";
button6.style.top = "110%";
button6.style.left = "16%";
button6.style.fontSize = "15px";
button7.style.position = "absolute";
button7.style.top = "115%";
button7.style.left = "16%";
button7.style.fontSize = "15px";
button8.style.position = "absolute";
button8.style.top = "120%";
button8.style.left = "16%";
button8.style.fontSize = "15px";
reset.style.position = "absolute";
reset.style.top = "125%";
reset.style.left = "16%";
reset.style.fontSize = "15px";
// 按鈕
const container = document.getElementById("webgl");
container.appendChild(button);
const container2 = document.getElementById("webgl");
container.appendChild(button2);
const container3 = document.getElementById("webgl");
container.appendChild(button3);
const container4 = document.getElementById("webgl");
container.appendChild(button4);
const container5 = document.getElementById("webgl");
container.appendChild(button5);
const container6 = document.getElementById("webgl");
container.appendChild(button6);
const container7 = document.getElementById("webgl");
container.appendChild(button7);
const container8 = document.getElementById("webgl");
container.appendChild(button8);
const container9 = document.getElementById("webgl");
container.appendChild(reset);





// const loader = new GLTFLoader();
// loader.load('./model/GPU_MSI_RTX3080/scene.gltf', function (gltf) {
//     const model = gltf.scene;
//     model.position.set(0, 120, 0);
//     model.rotation.set(3.13, 0, 0);
//     model.scale.set(4, 4, 4);
//     scene.add(model);
//     // mixer = new THREE.AnimationMixer(model);
//     // mixer.clipAction(gltf.animations[0]).play();
//     const dragControls = new DragControls(gltf.scene.children, camera, renderer.domElement);
//     // 開始拖曳
//     let offset = new THREE.Vector3();
//     dragControls.addEventListener('dragstart', function (event) {
//         offset.copy(model.position).sub(event.object.position);
//         controls.enabled = false;
//     });
//     // 拖曳過程
//     dragControls.addEventListener('drag', function (event) {
//         const position = event.object.position.clone().add(offset);
//         model.position.copy(position);
//         event.object.position.x += model.position.x;
//         event.object.position.y += model.position.y;
//         event.object.position.z += model.position.z;
//         model.position.copy(event.object.position);
//         event.object.position.set(0, 0, 0);
//     });
//     // 拖曳結束
//     dragControls.addEventListener('dragend', function () {
//         controls.enabled = true;
//     });
//     animate();
// });


// canvas滿版
// window.onresize = function () {
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     camera.aspect = window.innerWidth / window.innerHeight
//     camera.updateProjectionMatrix();
// }
window.onload = function () {
    renderer.setSize(1000, 800);
    camera.aspect = 800 / 600
    camera.updateProjectionMatrix();
}



