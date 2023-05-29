
// 引入three.js
import * as THREE from '../../three.js_dev/build/three.module.js';
// 引入three.js
//import * as THREEMODELS from '../../three.js_dev/build/three.js';
// 引入FBX加載器
import { GLTFLoader } from '../../three.js_dev/examples/jsm/loaders/GLTFLoader.js';
// CPUGLTF加載器對象
const loaderCPU_Intel_Core_i7 = new GLTFLoader();
const loaderCPU_Intel_Core_i7_6950X = new GLTFLoader();
const loaderCPU_Intel_Core_i5_7500 = new GLTFLoader();
// CPU風扇GLTF加載器對象
const loaderCPURan = new GLTFLoader();
//主機板GLTF加載器對象
const loaderMB_Aorus_z690_ELITE = new GLTFLoader();
const loaderMB_Rog_STRIX_z690_E_Gaming = new GLTFLoader();
const loaderMB_Rog_STRIX_z790_A_GAMING_WIFI_D4 = new GLTFLoader();
const loaderMB_Rog_z690_Maximus_XIII_Hero = new GLTFLoader();
// 顯示卡GLTF加載器對象
const loaderGPU_Nvidia_RTX2060 = new GLTFLoader();
const loaderGPU_Nvidia_RTX2070 = new GLTFLoader();
const loaderGPU_Nvidia_RTX2080TI = new GLTFLoader();
const loaderGPU_Nvidia_RTX_Titan = new GLTFLoader();
const loaderGPU_Nvidia_RTX3070 = new GLTFLoader();
const loaderGPU_MSI_RTX3080 = new GLTFLoader();
const loaderGPU_Nvidia_RTX3090 = new GLTFLoader();
const loaderGPU_Nvidia_RTX3060 = new GLTFLoader();
const loaderGPU_Nvidia_RTX3090TI = new GLTFLoader();
// 記憶體GLTF加載器對象
const loaderRAM_ddr4_G_SKILL_Trident_z_rgb = new GLTFLoader();
const loaderRAM_ddr4_G_SKILL_Trident_z_rgb2 = new GLTFLoader();
const loaderRAM_ddr4_G_SKILL_Trident_z_rgb3 = new GLTFLoader();
const loaderRAM_ddr4_G_SKILL_Trident_z_rgb4 = new GLTFLoader();
const loaderRAM_ddr4_G_SKILL_TridentZ = new GLTFLoader();
const loaderRAM_ddr4_G_SKILL_TridentZ2 = new GLTFLoader();
const loaderRAM_ddr4_G_SKILL_TridentZ3 = new GLTFLoader();
const loaderRAM_ddr4_G_SKILL_TridentZ4 = new GLTFLoader();
const loaderRAM_ddr4_T_Force_Delta_rgb = new GLTFLoader();
const loaderRAM_ddr4_T_Force_Delta_rgb2 = new GLTFLoader();
const loaderRAM_ddr4_T_Force_Delta_rgb3 = new GLTFLoader();
const loaderRAM_ddr4_T_Force_Delta_rgb4 = new GLTFLoader();
const loaderRAM_ddr4_XPG_SPECTRIX_D41_rgb = new GLTFLoader();
const loaderRAM_ddr4_XPG_SPECTRIX_D41_rgb2 = new GLTFLoader();
const loaderRAM_ddr4_XPG_SPECTRIX_D41_rgb3 = new GLTFLoader();
const loaderRAM_ddr4_XPG_SPECTRIX_D41_rgb4 = new GLTFLoader();
// SSD GLTF加載器對象
const loaderSSD_SAMSUNG_970EVO_500GB_m2 = new GLTFLoader();
const loaderSSD_WD_BLUE_500GB_m2 = new GLTFLoader();
// 機殼GLTF加載器對象
const loaderCASE_dark_person = new GLTFLoader();
const loaderCASE_colorful_warrior = new GLTFLoader();
const loaderCASE_caller = new GLTFLoader();
// 電源供應器GLTF加載器對象
const loaderPOWER_supply = new GLTFLoader();
const loaderPOWER_unit = new GLTFLoader();
// 桌子GLTF加載器對象
const loaderTable = new GLTFLoader();

// group
// CPU
const modelCPU_Intel_Core_i7 = new THREE.Group();
const modelCPU_Intel_Core_i7_6950X = new THREE.Group();
const modelCPU_Intel_Core_i5_7500 = new THREE.Group();
// CPURAN
const modelCPURan = new THREE.Group();
// MB
const modelMB_Aorus_z690_ELITE = new THREE.Group();
const modelMB_Rog_z690_Maximus_XIII_Hero = new THREE.Group();
const modelMB_Rog_STRIX_z690_E_Gaming = new THREE.Group();
const modelMB_Rog_STRIX_z790_A_GAMING_WIFI_D4 = new THREE.Group();
// GPU
const modelGPU_Nvidia_RTX2060 = new THREE.Group();
const modelGPU_Nvidia_RTX2070 = new THREE.Group();
const modelGPU_Nvidia_RTX2080TI = new THREE.Group();
const modelGPU_Nvidia_RTX_Titan = new THREE.Group();
const modelGPU_Nvidia_RTX3070 = new THREE.Group();
const modelGPU_MSI_RTX3080 = new THREE.Group();
const modelGPU_Nvidia_RTX3090 = new THREE.Group();
const modelGPU_Nvidia_RTX3060 = new THREE.Group();
const modelGPU_Nvidia_RTX3090TI = new THREE.Group();
// RAM
const modelRAM_ddr4_G_SKILL_Trident_z_rgb = new THREE.Group();
const modelRAM_ddr4_G_SKILL_Trident_z_rgb2 = new THREE.Group();
const modelRAM_ddr4_G_SKILL_Trident_z_rgb3 = new THREE.Group();
const modelRAM_ddr4_G_SKILL_Trident_z_rgb4 = new THREE.Group();
const modelRAM_ddr4_G_SKILL_TridentZ = new THREE.Group();
const modelRAM_ddr4_G_SKILL_TridentZ2 = new THREE.Group();
const modelRAM_ddr4_G_SKILL_TridentZ3 = new THREE.Group();
const modelRAM_ddr4_G_SKILL_TridentZ4 = new THREE.Group();
const modelRAM_ddr4_T_Force_Delta_rgb = new THREE.Group();
const modelRAM_ddr4_T_Force_Delta_rgb2 = new THREE.Group();
const modelRAM_ddr4_T_Force_Delta_rgb3 = new THREE.Group();
const modelRAM_ddr4_T_Force_Delta_rgb4 = new THREE.Group();
const modelRAM_ddr4_XPG_SPECTRIX_D41_rgb = new THREE.Group();
const modelRAM_ddr4_XPG_SPECTRIX_D41_rgb2 = new THREE.Group();
const modelRAM_ddr4_XPG_SPECTRIX_D41_rgb3 = new THREE.Group();
const modelRAM_ddr4_XPG_SPECTRIX_D41_rgb4 = new THREE.Group();
// SSD
const modelSSD_SAMSUNG_970EVO_500GB_m2 = new THREE.Group();
const modelSSD_WD_BLUE_500GB_m2 = new THREE.Group();
// CASE
const modelCASE_dark_person = new THREE.Group();
const modelCASE_colorful_warrior = new THREE.Group();
const modelCASE_caller = new THREE.Group();
// POWER
const modelPOWER_supply = new THREE.Group();
const modelPOWER_unit = new THREE.Group();

// 創建一個桌子模組
const scenemodel = new THREE.Group();
// 創建一個紋理加載器對象
const loadTex = new THREE.TextureLoader();
// 加載圖片返回一個紋理對象
const texturetable = loadTex.load('../../front/scenemodel/textures/Cylinder_002_0_diffuse.jpeg')
const texturetable2 = loadTex.load('../../model/CPU-i7/textures/material_diffuse.png')
const Cpumap = loadTex.load('../../model/CPU_Intel_Core_i7_6950X/textures/text_baseColor.jpeg')
   
// 主機殼
loaderCASE_dark_person.load('../../model/CASE_dark_person/mb.gltf', function (gltf) {
    modelCASE_dark_person.add(gltf.scene);
    modelCASE_dark_person.scale.set(10, 10, 10);
    modelCASE_dark_person.position.set(0, 237, 20);

})

loaderCASE_colorful_warrior.load('../../model/CASE_colorful_warrior/scene.gltf', function (gltf) {
    modelCASE_colorful_warrior.add(gltf.scene);
    modelCASE_colorful_warrior.scale.set(9.2, 9.2, 9.2);
    modelCASE_colorful_warrior.position.set(-4, 125.5, 91.5);
    modelCASE_colorful_warrior.rotation.set(0, 1.58, 0);
})
loaderCASE_caller.load('../../model/CASE_caller/scene.gltf', function (gltf) {
    modelCASE_caller.add(gltf.scene);
    modelCASE_caller.scale.set(7, 7, 7);
    modelCASE_caller.position.set(3.7, 92.5, 13);
    // modelCASE_caller.rotation.set(0, 1.58, 0);
})
// 顯示卡
loaderGPU_MSI_RTX3080.load('../../model/GPU_MSI_RTX3080/scene.gltf', function (gltf) {

    const animations = gltf.animations;
    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clock = new THREE.Clock(); // 創建全局的 clock 變數
    // 檢查有無動畫模組
    // if (gltf.animations && gltf.animations.length > 0) {
    //     console.log('有動畫', gltf.animations);
    // }
    // else {
    //     console.log('無動畫');
    // }
    if (gltf.animations && gltf.animations.length) {

        //     // 添加動畫到 mixer 中
        animations.forEach((animation) => {
            mixer.clipAction(animation).play();
        });

    }

    // 風扇動畫
    function animate() {

        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);

    }
    // 模型XY軸旋轉
    modelGPU_MSI_RTX3080.rotation.x = 9.43;
    modelGPU_MSI_RTX3080.rotation.y = 12.55;
    modelGPU_MSI_RTX3080.position.x = -0.6;
    modelGPU_MSI_RTX3080.position.y = 125;
    modelGPU_MSI_RTX3080.position.z = 13.1;
    modelGPU_MSI_RTX3080.scale.set(5, 5, 5);
    modelGPU_MSI_RTX3080.add(gltf.scene);

    animate();


})
loaderGPU_Nvidia_RTX2060.load('../../model/GPU_Nvidia_RTX2060/scene.gltf', function (gltf) {

    const animations = gltf.animations;
    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clock = new THREE.Clock(); // 創建全局的 clock 變數
    // 檢查有無動畫模組
    // if (gltf.animations && gltf.animations.length > 0) {
    //     console.log('有動畫', gltf.animations);
    // }
    // else {
    //     console.log('無動畫');
    // }
    if (gltf.animations && gltf.animations.length) {

        //     // 添加動畫到 mixer 中
        animations.forEach((animation) => {
            mixer.clipAction(animation).play();
        });

    }

    // 風扇動畫
    function animate() {

        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);

    }
    // 模型XY軸旋轉
    modelGPU_Nvidia_RTX2060.rotation.set(0, 0, 3.15);
    modelGPU_Nvidia_RTX2060.position.set(-2, 120, 13.3);
    modelGPU_Nvidia_RTX2060.scale.set(12.5, 12.5, 12.5);
    modelGPU_Nvidia_RTX2060.add(gltf.scene);

    animate();


})
loaderGPU_Nvidia_RTX2070.load('../../model/GPU_Nvidia_RTX2070/scene.gltf', function (gltf) {

    const animations = gltf.animations;
    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clock = new THREE.Clock(); // 創建全局的 clock 變數
    // 檢查有無動畫模組
    // if (gltf.animations && gltf.animations.length > 0) {
    //     console.log('有動畫', gltf.animations);
    // }
    // else {
    //     console.log('無動畫');
    // }
    if (gltf.animations && gltf.animations.length) {

        //     // 添加動畫到 mixer 中
        animations.forEach((animation) => {
            mixer.clipAction(animation).play();
        });

    }

    // 風扇動畫
    function animate() {

        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);

    }
    // 模型XY軸旋轉
    modelGPU_Nvidia_RTX2070.rotation.set(3.13, 0, 0);
    modelGPU_Nvidia_RTX2070.position.set(-2.2, 120.3, 13.3);
    modelGPU_Nvidia_RTX2070.scale.set(12.5, 12.5, 12.5);
    modelGPU_Nvidia_RTX2070.add(gltf.scene);

    animate();


})
loaderGPU_Nvidia_RTX2080TI.load('../../model/GPU_Nvidia_RTX2080TI/scene.gltf', function (gltf) {

    const animations = gltf.animations;
    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clock = new THREE.Clock(); // 創建全局的 clock 變數
    // 檢查有無動畫模組
    // if (gltf.animations && gltf.animations.length > 0) {
    //     console.log('有動畫', gltf.animations);
    // }
    // else {
    //     console.log('無動畫');
    // }
    if (gltf.animations && gltf.animations.length) {

        //     // 添加動畫到 mixer 中
        animations.forEach((animation) => {
            mixer.clipAction(animation).play();
        });

    }

    // 風扇動畫
    function animate() {

        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);

    }
    // 模型XY軸旋轉
    modelGPU_Nvidia_RTX2080TI.rotation.set(1.565, 0, 0);
    modelGPU_Nvidia_RTX2080TI.position.set(-155, 251.5, 18.2);
    modelGPU_Nvidia_RTX2080TI.scale.set(10, 10, 10);
    modelGPU_Nvidia_RTX2080TI.add(gltf.scene);

    animate();


})
loaderGPU_Nvidia_RTX_Titan.load('../../model/GPU_Nvidia_RTX_Titan/scene.gltf', function (gltf) {

    const animations = gltf.animations;
    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clock = new THREE.Clock(); // 創建全局的 clock 變數
    // 檢查有無動畫模組
    // if (gltf.animations && gltf.animations.length > 0) {
    //     console.log('有動畫', gltf.animations);
    // }
    // else {
    //     console.log('無動畫');
    // }
    if (gltf.animations && gltf.animations.length) {

        //     // 添加動畫到 mixer 中
        animations.forEach((animation) => {
            mixer.clipAction(animation).play();
        });

    }

    // 風扇動畫
    function animate() {

        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);

    }
    // 模型XY軸旋轉
    modelGPU_Nvidia_RTX_Titan.rotation.set(1.58, 0, 0);
    modelGPU_Nvidia_RTX_Titan.position.set(-2.8, 121.5, 12);
    modelGPU_Nvidia_RTX_Titan.scale.set(10, 10, 10);
    modelGPU_Nvidia_RTX_Titan.add(gltf.scene);

    animate();


})
loaderGPU_Nvidia_RTX3060.load('../../model/GPU_Nvidia_RTX3060/scene.gltf', function (gltf) {

    const animations = gltf.animations;
    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clock = new THREE.Clock(); // 創建全局的 clock 變數
    // 檢查有無動畫模組
    // if (gltf.animations && gltf.animations.length > 0) {
    //     console.log('有動畫', gltf.animations);
    // }
    // else {
    //     console.log('無動畫');
    // }
    if (gltf.animations && gltf.animations.length) {

        //     // 添加動畫到 mixer 中
        animations.forEach((animation) => {
            mixer.clipAction(animation).play();
        });

    }

    // 風扇動畫
    function animate() {

        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);

    }
    // 模型XY軸旋轉
    modelGPU_Nvidia_RTX3060.rotation.set(3.15, 0, 0);
    modelGPU_Nvidia_RTX3060.position.set(9, 124, 10);
    modelGPU_Nvidia_RTX3060.scale.set(7, 7, 7);
    modelGPU_Nvidia_RTX3060.add(gltf.scene);

    animate();


})
loaderGPU_Nvidia_RTX3070.load('../../model/GPU_Nvidia_RTX3070/scene.gltf', function (gltf) {

    const animations = gltf.animations;
    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clock = new THREE.Clock(); // 創建全局的 clock 變數
    // 檢查有無動畫模組
    // if (gltf.animations && gltf.animations.length > 0) {
    //     console.log('有動畫', gltf.animations);
    // }
    // else {
    //     console.log('無動畫');
    // }
    if (gltf.animations && gltf.animations.length) {

        //     // 添加動畫到 mixer 中
        animations.forEach((animation) => {
            mixer.clipAction(animation).play();
        });

    }

    // 風扇動畫
    function animate() {

        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);

    }
    // 模型XY軸旋轉
    modelGPU_Nvidia_RTX3070.rotation.set(3.15, 0, 0);
    modelGPU_Nvidia_RTX3070.position.set(-3.5, 120, 12);
    modelGPU_Nvidia_RTX3070.scale.set(14.5, 14.5, 14.5);
    modelGPU_Nvidia_RTX3070.add(gltf.scene);

    animate();


})
loaderGPU_Nvidia_RTX3090.load('../../model/GPU_Nvidia_RTX3090/scene.gltf', function (gltf) {

    const animations = gltf.animations;
    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clock = new THREE.Clock(); // 創建全局的 clock 變數
    // 檢查有無動畫模組
    // if (gltf.animations && gltf.animations.length > 0) {
    //     console.log('有動畫', gltf.animations);
    // }
    // else {
    //     console.log('無動畫');
    // }
    if (gltf.animations && gltf.animations.length) {

        //     // 添加動畫到 mixer 中
        animations.forEach((animation) => {
            mixer.clipAction(animation).play();
        });

    }

    // 風扇動畫
    function animate() {

        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);

    }
    // 模型XY軸旋轉
    modelGPU_Nvidia_RTX3090.rotation.set(3.15, 0, 0);
    modelGPU_Nvidia_RTX3090.position.set(-2.1, 123, 12);
    modelGPU_Nvidia_RTX3090.scale.set(7, 7, 7);
    modelGPU_Nvidia_RTX3090.add(gltf.scene);

    animate();


})
loaderGPU_Nvidia_RTX3090TI.load('../../model/GPU_Nvidia_RTX3090TI/scene.gltf', function (gltf) {

    const animations = gltf.animations;
    const mixer = new THREE.AnimationMixer(gltf.scene);
    const clock = new THREE.Clock(); // 創建全局的 clock 變數
    // 檢查有無動畫模組
    // if (gltf.animations && gltf.animations.length > 0) {
    //     console.log('有動畫', gltf.animations);
    // }
    // else {
    //     console.log('無動畫');
    // }
    if (gltf.animations && gltf.animations.length) {

        //     // 添加動畫到 mixer 中
        animations.forEach((animation) => {
            mixer.clipAction(animation).play();
        });

    }

    // 風扇動畫
    function animate() {

        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        mixer.update(delta);

    }
    // 模型XY軸旋轉
    modelGPU_Nvidia_RTX3090TI.rotation.set(3.15, 0, 0);
    modelGPU_Nvidia_RTX3090TI.position.set(-2.1, 120, 13.5);
    modelGPU_Nvidia_RTX3090TI.scale.set(7.5, 7.5, 7.5);
    modelGPU_Nvidia_RTX3090TI.add(gltf.scene);

    animate();


})
// 主機板
loaderMB_Rog_STRIX_z790_A_GAMING_WIFI_D4.load('../../model/MB_ROG_STRIX_z790_A_GAMING_WIFI_D4/scene.gltf', function (gltf) {

    modelMB_Rog_STRIX_z790_A_GAMING_WIFI_D4.add(gltf.scene);
    modelMB_Rog_STRIX_z790_A_GAMING_WIFI_D4.scale.set(1.15, 1.15, 1.3);
    modelMB_Rog_STRIX_z790_A_GAMING_WIFI_D4.position.set(-238.8, 124.5, 32.8)
});
loaderMB_Aorus_z690_ELITE.load('../../model/MB_AORUS_z690_ELITE/scene.gltf', function (gltf) {

    modelMB_Aorus_z690_ELITE.add(gltf.scene);
    modelMB_Aorus_z690_ELITE.scale.set(8, 10, 6.5);
    modelMB_Aorus_z690_ELITE.rotation.set(1.575, 0, 0);
    modelMB_Aorus_z690_ELITE.position.set(-4.5, 127.5, 6.3);
});
loaderMB_Rog_STRIX_z690_E_Gaming.load('../../model/MB_ROG_z690/scene.gltf', function (gltf) {

    modelMB_Rog_STRIX_z690_E_Gaming.add(gltf.scene);
    modelMB_Rog_STRIX_z690_E_Gaming.scale.set(3.3, 3, 3.3);
    modelMB_Rog_STRIX_z690_E_Gaming.rotation.set(0, 0, 0);
    modelMB_Rog_STRIX_z690_E_Gaming.position.set(-6.5, 125.5, 31.7);
});
loaderMB_Rog_z690_Maximus_XIII_Hero.load('../../model/MB_ROG_z690_hero/scene.gltf', function (gltf) {

    modelMB_Rog_z690_Maximus_XIII_Hero.add(gltf.scene);
    modelMB_Rog_z690_Maximus_XIII_Hero.scale.set(10, 10, 10);
    modelMB_Rog_z690_Maximus_XIII_Hero.rotation.set(0, 1.6, 0);
    modelMB_Rog_z690_Maximus_XIII_Hero.position.set(0, 125.5, 99);
});


// 記憶體
loaderRAM_ddr4_G_SKILL_Trident_z_rgb.load('../../model/RAM_ddr4_G_SKILL_Trident_z_rgb/scene.gltf', function (gltf) {
    modelRAM_ddr4_G_SKILL_Trident_z_rgb.add(gltf.scene);
    modelRAM_ddr4_G_SKILL_Trident_z_rgb.scale.set(1.8, 1.8, 1.8);
    modelRAM_ddr4_G_SKILL_Trident_z_rgb.position.set(1.3, 130.8, 7.1);
    modelRAM_ddr4_G_SKILL_Trident_z_rgb.rotation.set(1.58, 1.56, 0);
})
loaderRAM_ddr4_G_SKILL_Trident_z_rgb2.load('../../model/RAM_ddr4_G_SKILL_Trident_z_rgb/scene.gltf', function (gltf) {
    modelRAM_ddr4_G_SKILL_Trident_z_rgb2.add(gltf.scene);
    modelRAM_ddr4_G_SKILL_Trident_z_rgb2.scale.set(1.8, 1.8, 1.8);
    modelRAM_ddr4_G_SKILL_Trident_z_rgb2.position.set(2.3, 130.8, 7.1);
    modelRAM_ddr4_G_SKILL_Trident_z_rgb2.rotation.set(1.58, 1.56, 0);
})
loaderRAM_ddr4_G_SKILL_Trident_z_rgb3.load('../../model/RAM_ddr4_G_SKILL_Trident_z_rgb/scene.gltf', function (gltf) {
    modelRAM_ddr4_G_SKILL_Trident_z_rgb3.add(gltf.scene);
    modelRAM_ddr4_G_SKILL_Trident_z_rgb3.scale.set(1.8, 1.8, 1.8);
    modelRAM_ddr4_G_SKILL_Trident_z_rgb3.position.set(3.3, 130.8, 7.1);
    modelRAM_ddr4_G_SKILL_Trident_z_rgb3.rotation.set(1.58, 1.56, 0);
})
loaderRAM_ddr4_G_SKILL_Trident_z_rgb4.load('../../model/RAM_ddr4_G_SKILL_Trident_z_rgb/scene.gltf', function (gltf) {
    modelRAM_ddr4_G_SKILL_Trident_z_rgb4.add(gltf.scene);
    modelRAM_ddr4_G_SKILL_Trident_z_rgb4.scale.set(1.8, 1.8, 1.8);
    modelRAM_ddr4_G_SKILL_Trident_z_rgb4.position.set(4.3, 130.8, 7.1);
    modelRAM_ddr4_G_SKILL_Trident_z_rgb4.rotation.set(1.58, 1.56, 0);
})

loaderRAM_ddr4_G_SKILL_TridentZ.load('../../model/RAM_ddr4_G_SKILL_TridentZ/scene.gltf', function (gltf) {
    modelRAM_ddr4_G_SKILL_TridentZ.add(gltf.scene);
    modelRAM_ddr4_G_SKILL_TridentZ.scale.set(1.8, 1.8, 1.8);
    modelRAM_ddr4_G_SKILL_TridentZ.position.set(1.3, 130.8, 7.1);
    modelRAM_ddr4_G_SKILL_TridentZ.rotation.set(1.58, 1.56, 0);
})
loaderRAM_ddr4_G_SKILL_TridentZ2.load('../../model/RAM_ddr4_G_SKILL_TridentZ/scene.gltf', function (gltf) {
    modelRAM_ddr4_G_SKILL_TridentZ2.add(gltf.scene);
    modelRAM_ddr4_G_SKILL_TridentZ2.scale.set(1.8, 1.8, 1.8);
    modelRAM_ddr4_G_SKILL_TridentZ2.position.set(2.3, 130.8, 7.1);
    modelRAM_ddr4_G_SKILL_TridentZ2.rotation.set(1.58, 1.56, 0);
})
loaderRAM_ddr4_G_SKILL_TridentZ3.load('../../model/RAM_ddr4_G_SKILL_TridentZ/scene.gltf', function (gltf) {
    modelRAM_ddr4_G_SKILL_TridentZ3.add(gltf.scene);
    modelRAM_ddr4_G_SKILL_TridentZ3.scale.set(1.8, 1.8, 1.8);
    modelRAM_ddr4_G_SKILL_TridentZ3.position.set(3.3, 130.8, 7.1);
    modelRAM_ddr4_G_SKILL_TridentZ3.rotation.set(1.58, 1.56, 0);
})
loaderRAM_ddr4_G_SKILL_TridentZ4.load('../../model/RAM_ddr4_G_SKILL_TridentZ/scene.gltf', function (gltf) {
    modelRAM_ddr4_G_SKILL_TridentZ4.add(gltf.scene);
    modelRAM_ddr4_G_SKILL_TridentZ4.scale.set(1.8, 1.8, 1.8);
    modelRAM_ddr4_G_SKILL_TridentZ4.position.set(4.3, 130.8, 7.1);
    modelRAM_ddr4_G_SKILL_TridentZ4.rotation.set(1.58, 1.56, 0);
})

loaderRAM_ddr4_T_Force_Delta_rgb.load('../../model/RAM_ddr4_T_Force_Delta_rgb/scene.gltf', function (gltf) {
    modelRAM_ddr4_T_Force_Delta_rgb.add(gltf.scene);
    modelRAM_ddr4_T_Force_Delta_rgb.scale.set(2.8, 2.8, 2.8);
    modelRAM_ddr4_T_Force_Delta_rgb.position.set(1.3, 130.8, 7.5);
    modelRAM_ddr4_T_Force_Delta_rgb.rotation.set(1.58, 1.56, 0);
})
loaderRAM_ddr4_T_Force_Delta_rgb2.load('../../model/RAM_ddr4_T_Force_Delta_rgb/scene.gltf', function (gltf) {
    modelRAM_ddr4_T_Force_Delta_rgb2.add(gltf.scene);
    modelRAM_ddr4_T_Force_Delta_rgb2.scale.set(2.8, 2.8, 2.8);
    modelRAM_ddr4_T_Force_Delta_rgb2.position.set(2.3, 130.8, 7.5);
    modelRAM_ddr4_T_Force_Delta_rgb2.rotation.set(1.58, 1.56, 0);
})
loaderRAM_ddr4_T_Force_Delta_rgb3.load('../../model/RAM_ddr4_T_Force_Delta_rgb/scene.gltf', function (gltf) {
    modelRAM_ddr4_T_Force_Delta_rgb3.add(gltf.scene);
    modelRAM_ddr4_T_Force_Delta_rgb3.scale.set(2.8, 2.8, 2.8);
    modelRAM_ddr4_T_Force_Delta_rgb3.position.set(3.3, 130.8, 7.5);
    modelRAM_ddr4_T_Force_Delta_rgb3.rotation.set(1.58, 1.56, 0);
})
loaderRAM_ddr4_T_Force_Delta_rgb4.load('../../model/RAM_ddr4_T_Force_Delta_rgb/scene.gltf', function (gltf) {
    modelRAM_ddr4_T_Force_Delta_rgb4.add(gltf.scene);
    modelRAM_ddr4_T_Force_Delta_rgb4.scale.set(2.8, 2.8, 2.8);
    modelRAM_ddr4_T_Force_Delta_rgb4.position.set(4.3, 130.8, 7.5);
    modelRAM_ddr4_T_Force_Delta_rgb4.rotation.set(1.58, 1.56, 0);
})

loaderRAM_ddr4_XPG_SPECTRIX_D41_rgb.load('../../model/RAM_ddr4_XPG_SPECTRIX_D41_rgb/scene.gltf', function (gltf) {
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb.add(gltf.scene);
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb.scale.set(2.8, 2.8, 2.8);
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb.position.set(1.3, 130.8, 7.5);
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb.rotation.set(1.58, 1.56, 0);
})
loaderRAM_ddr4_XPG_SPECTRIX_D41_rgb2.load('../../model/RAM_ddr4_XPG_SPECTRIX_D41_rgb/scene.gltf', function (gltf) {
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb2.add(gltf.scene);
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb2.scale.set(2.8, 2.8, 2.8);
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb2.position.set(2.3, 130.8, 7.5);
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb2.rotation.set(1.58, 1.56, 0);
})
loaderRAM_ddr4_XPG_SPECTRIX_D41_rgb3.load('../../model/RAM_ddr4_XPG_SPECTRIX_D41_rgb/scene.gltf', function (gltf) {
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb3.add(gltf.scene);
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb3.scale.set(2.8, 2.8, 2.8);
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb3.position.set(3.3, 130.8, 7.5);
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb3.rotation.set(1.58, 1.56, 0);
})
loaderRAM_ddr4_XPG_SPECTRIX_D41_rgb4.load('../../model/RAM_ddr4_XPG_SPECTRIX_D41_rgb/scene.gltf', function (gltf) {
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb4.add(gltf.scene);
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb4.scale.set(2.8, 2.8, 2.8);
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb4.position.set(4.3, 130.8, 7.5);
    modelRAM_ddr4_XPG_SPECTRIX_D41_rgb4.rotation.set(1.58, 1.56, 0);
})
// CPU
loaderCPU_Intel_Core_i7.load('../../model/CPU-i7/scene.gltf', function (gltf) {
    gltf.scene.traverse((child) => {

        // 如果是模型就抓出來
        if (child.isMesh) {
            // 抓出來後並貼上材質貼圖           
            child.material = new THREE.MeshLambertMaterial({ map: texturetable2 });

        }
    })
    modelCPU_Intel_Core_i7.add(gltf.scene);
    modelCPU_Intel_Core_i7.scale.set(8, 8, 8);
    modelCPU_Intel_Core_i7.position.set(-2.8, 129.8, 8);
    modelCPU_Intel_Core_i7.rotation.set(1.58, -1.58, 3.38);

})

loaderCPU_Intel_Core_i5_7500.load('../../model/CPU-Intel_Core_i5_7500/scene.gltf', function (gltf) {
    
    modelCPU_Intel_Core_i5_7500.add(gltf.scene);
    modelCPU_Intel_Core_i5_7500.scale.set(1.8,1.8, 1.8);
    modelCPU_Intel_Core_i5_7500.position.set(-4, 130.8, 5.8);
    modelCPU_Intel_Core_i5_7500.rotation.set(1.56,0,0);

})

loaderCPU_Intel_Core_i7_6950X.load('../../model/CPU_Intel_Core_i7_6950X/scene.gltf', function (gltf) {
    gltf.scene.traverse((child) => {
        // 如果是模型就抓出來
        if (child.isMesh) {
            // 抓出來後並貼上材質貼圖           
            child.material = new THREE.MeshLambertMaterial({ map: Cpumap });

        }
    })
    modelCPU_Intel_Core_i7_6950X.add(gltf.scene);
    modelCPU_Intel_Core_i7_6950X.scale.set(1.3, 1.3, 1.3);
    modelCPU_Intel_Core_i7_6950X.position.set(-4, 130.8, 5.8);
    modelCPU_Intel_Core_i7_6950X.rotation.set(1.56, 3.15, 0);

})


loaderCPURan.load('../../model/RAN_CPU_cool/scene.gltf', function (gltf) {
    modelCPURan.add(gltf.scene);
    modelCPURan.scale.set(1.2, 1.2, 1.2);
    modelCPURan.position.set(1, 130.8, 15.5);
    modelCPURan.rotation.set(1.55, 0, 0);

})
loaderPOWER_unit.load('../../model/POWER_unit/scene.gltf', function (gltf) {
    modelPOWER_unit.add(gltf.scene);
    modelPOWER_unit.scale.set(-0.75, -0.75, -0.75);
    modelPOWER_unit.position.set(-12.2, 103.7, 13.9);
    modelPOWER_unit.rotation.set(0, -1.57, 0);

})
loaderPOWER_supply.load('../../model/POWER_supply/scene.gltf', function (gltf) {
    modelPOWER_supply.add(gltf.scene);
    modelPOWER_supply.scale.set(4.5, 4.5, 4.5);
    modelPOWER_supply.position.set(-14.8, 105.7, 11);
    modelPOWER_supply.rotation.set(0, -1.55, 0);

})
// SSD
loaderSSD_SAMSUNG_970EVO_500GB_m2.load('../../model/SSD_m.2/SSD_m.2_SAMSUNG_V_Nand970EVO.gltf', function (gltf) {
    modelSSD_SAMSUNG_970EVO_500GB_m2.add(gltf.scene);
    modelSSD_SAMSUNG_970EVO_500GB_m2.scale.set(0.5, 0.5, 0.5);
    modelSSD_SAMSUNG_970EVO_500GB_m2.position.set(0, 114.2, 5.7);
    modelSSD_SAMSUNG_970EVO_500GB_m2.rotation.set(1.58, 0, 0);

})
// 添加桌子場景
loaderTable.load('../../front/scenemodel/scene.gltf', function (gltf) {
    //console.log('gltftable', gltf);
    // 取出桌子的小孩
    gltf.scene.traverse((child) => {

        // 如果是模型就抓出來
        if (child.isMesh) {
            // 抓出來後並貼上材質貼圖           
            child.material = new THREE.MeshLambertMaterial({ map: texturetable });

        }
    })
    // 導出
    scenemodel.add(gltf.scene);
})
// 調整桌子大小
scenemodel.scale.set(100, 100, 100);



// 地板
// 創建幾何體
const geometry = new THREE.PlaneGeometry(5000, 5000);
const texLoader = new THREE.TextureLoader();
// .load() 方法加載圖片，返回一個紋理對象Texture
const texture = texLoader.load('../../front/img/floor.jpg');

// 允許陣列模式
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(30, 30);

const material = new THREE.MeshLambertMaterial({
    map: texture,
});
const mesh = new THREE.Mesh(geometry, material);
// 旋轉90度
mesh.rotateX(-Math.PI / 2);



export { mesh, scenemodel, modelCPURan, modelCASE_dark_person, modelCASE_colorful_warrior, modelCASE_caller, modelGPU_MSI_RTX3080, modelGPU_Nvidia_RTX2060, modelGPU_Nvidia_RTX2070, modelGPU_Nvidia_RTX2080TI, modelGPU_Nvidia_RTX_Titan, modelGPU_Nvidia_RTX3060, modelGPU_Nvidia_RTX3070, modelGPU_Nvidia_RTX3090, modelGPU_Nvidia_RTX3090TI, modelCPU_Intel_Core_i7, modelCPU_Intel_Core_i5_7500, modelCPU_Intel_Core_i7_6950X,modelRAM_ddr4_G_SKILL_Trident_z_rgb, modelRAM_ddr4_G_SKILL_Trident_z_rgb2, modelRAM_ddr4_G_SKILL_Trident_z_rgb3, modelRAM_ddr4_G_SKILL_Trident_z_rgb4, modelRAM_ddr4_G_SKILL_TridentZ, modelRAM_ddr4_G_SKILL_TridentZ2, modelRAM_ddr4_G_SKILL_TridentZ3, modelRAM_ddr4_G_SKILL_TridentZ4, modelRAM_ddr4_T_Force_Delta_rgb, modelRAM_ddr4_T_Force_Delta_rgb2, modelRAM_ddr4_T_Force_Delta_rgb3, modelRAM_ddr4_T_Force_Delta_rgb4, modelRAM_ddr4_XPG_SPECTRIX_D41_rgb, modelRAM_ddr4_XPG_SPECTRIX_D41_rgb2, modelRAM_ddr4_XPG_SPECTRIX_D41_rgb3, modelRAM_ddr4_XPG_SPECTRIX_D41_rgb4, modelMB_Rog_STRIX_z790_A_GAMING_WIFI_D4, modelMB_Aorus_z690_ELITE, modelMB_Rog_STRIX_z690_E_Gaming, modelMB_Rog_z690_Maximus_XIII_Hero, modelPOWER_unit, modelPOWER_supply, modelSSD_SAMSUNG_970EVO_500GB_m2 };