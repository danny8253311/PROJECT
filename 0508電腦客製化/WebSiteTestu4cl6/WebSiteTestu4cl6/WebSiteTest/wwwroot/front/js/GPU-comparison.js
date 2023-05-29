

var baseAddress = "https://localhost:7117";
var vueApp = {
    data() {
        return {
            filter: "",
            GpuDTOes: [],
        };
    },
    mounted: function () {
        let _this = this;
        _this.getGpuDTOes();
    },
    methods: {
        getGpuDTOes: function () {
            let _this = this;
            axios.get(`${baseAddress}/api/GpuApi`).then(response => {
                //alert(JSON.stringify(response.data))
                _this.GpuDTOes = response.data;
                var GpuList = []
                for (var i = 0; i < _this.GpuDTOes.length; i++) {
                    var item = _this.GpuDTOes[i]
                    GpuList.push(item)
                }
                _this.GpuDTOes = GpuList;
                //var Gpu4k = _this.GpuDTOes.map(item => {
                //    return {
                //        productsID: item.productsID,
                //        _4K_mark: item._4K_mark,
                //        fhD_mark: item.fhD_mark,
                //        basE_mark: item.basE_mark,
                //        ffxiV_mark: item.ffxiV_mark,
                //        temperature: item.temperature,
                //        img: item.temperature
                //    };
                //});
                //console.log(GpuList);
                /*console.log(Gpu4k[0]);*/
                //var baseMarks = Gpu4k[0].map(item => item.basE_mark);

                //console.log("123",baseMarks);
            })
        }
    }
}
var app = Vue.createApp(vueApp).mount("#app1");




// img
const img_A = document.getElementById('GPU-img-A');
const img_B = document.getElementById('GPU-img-B');
// select
const select_A = document.getElementById('GPU-A');
const select_B = document.getElementById('GPU-B');
// pct
let GPU_textcontent_A = document.getElementById('GPU-textcontent-A');
const GPU_textcontent_B = document.getElementById('GPU-textcontent-B');
const GPU_transition_A = document.getElementById('GPU-transition-A');
const GPU_transition_B = document.getElementById('GPU-transition-B');
// p
const p_A = document.getElementById('GPU-p-A');
const p_B = document.getElementById('GPU-p-B');
// price
const price_A = document.getElementById('GPU-price-A');
const price_B = document.getElementById('GPU-price-B');
// 4k
const _4k_A = document.getElementById('GPU-4k-A');
const _4k_B = document.getElementById('GPU-4k-B');
// fhd
const fhd_A = document.getElementById('GPU-fhd-A');
const fhd_B = document.getElementById('GPU-fhd-B');
// base
const base_A = document.getElementById('GPU-base-A');
const base_B = document.getElementById('GPU-base-B');
// ffxiv
const ffxiv_A = document.getElementById('GPU-ffxiv-A');
const ffxiv_B = document.getElementById('GPU-ffxiv-B');
// temper
const temper_A = document.getElementById('GPU-temper-A');
const temper_B = document.getElementById('GPU-temper-B');
// transition_4k
const transition_4k_A = document.getElementById('transition-4k-A');
const transition_4k_B = document.getElementById('transition-4k-B');
const textContent_4k_A = document.getElementById('textcontent-4K-A');
const textContent_4k_B = document.getElementById('textcontent-4K-B');
// transition_fhd
const transition_fhd_A = document.getElementById('transition-fhd-A');
const transition_fhd_B = document.getElementById('transition-fhd-B');
const textContent_fhd_A = document.getElementById('textcontent-fhd-A');
const textContent_fhd_B = document.getElementById('textcontent-fhd-B');
// transition_base
const transition_base_A = document.getElementById('transition-base-A');
const transition_base_B = document.getElementById('transition-base-B');
const textContent_base_A = document.getElementById('textcontent-base-A');
const textContent_base_B = document.getElementById('textcontent-base-B');
// transition_ffxiv
const transition_ffxiv_A = document.getElementById('transition-ffxiv-A');
const transition_ffxiv_B = document.getElementById('transition-ffxiv-B');
const textContent_ffxiv_A = document.getElementById('textcontent-ffxiv-A');
const textContent_ffxiv_B = document.getElementById('textcontent-ffxiv-B');
// Value
_4k_A_Value = "";
_4k_B_Value = "";
fhd_A_Value = "";
fhd_B_Value = "";
base_A_Value = "";
base_B_Value = "";
ffxiv_A_Value = "";
ffxiv_B_Value = "";

sumValue_4k = 0;
sumValue_fhd = 0;
sumValue_base = 0;
sumValue_ffxiv = 0;

// 顯卡AB預設值
fetch(`${baseAddress}/Api/GpuApi`)
    .then(response => response.json())
    .then(data => {
        fetch(`${baseAddress}/Api/GpuApi`)
            .then(response => response.json())
            .then(data => {
                var GpuList = [];
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    GpuList.push(item);
                }
                const targetGpu = GpuList.find(item => item.productsID[0] === item.productsID[0]);
                if (targetGpu && item._4K_mark != null && item.fhD_mark != null && item.basE_mark != null && item.ffxiV_mark != null && item.temperature != null) {
                    _4k_A.textContent = targetGpu._4K_mark;
                    fhd_A.textContent = targetGpu.fhD_mark;
                    base_A.textContent = targetGpu.basE_mark;
                    ffxiv_A.textContent = targetGpu.ffxiV_mark;
                    temper_A.textContent = targetGpu.temperature;
                    price_A.textContent = "$ " + targetGpu.price;
                    img_A.src = "../images/GPU_img/" + targetGpu.img;
                    


                    _4k_B.textContent = targetGpu._4K_mark;
                    fhd_B.textContent = targetGpu.fhD_mark;
                    base_B.textContent = targetGpu.basE_mark;
                    ffxiv_B.textContent = targetGpu.ffxiV_mark;
                    temper_B.textContent = targetGpu.temperature;
                    price_B.textContent = "$ " + targetGpu.price;
                    img_B.src = "../images/GPU_img/" + targetGpu.img;

                    // 分數變數儲存值
                    _4k_A_Value = parseInt(_4k_A.textContent);
                    fhd_A_Value = parseInt(fhd_A.textContent);
                    base_A_Value = parseInt(base_A.textContent);
                    ffxiv_A_Value = parseInt(ffxiv_A.textContent);
                    // 分數變數儲存值
                    _4k_B_Value = parseInt(_4k_B.textContent);
                    fhd_B_Value = parseInt(fhd_B.textContent);
                    base_B_Value = parseInt(base_B.textContent);
                    ffxiv_B_Value = parseInt(ffxiv_B.textContent);                           
                    minus();

                }
                else {
                    alert("沒有找到相關數據，請確認後端程序 ! ! ");
                    //console.log("item.productsID", item.productsID);
                    //console.log("selectValue.value", selectValue.value);
                }

            })
    })

// 監聽事件option_A
select_A.addEventListener("change", function () {
    const selectOption = select_A.options[select_A.selectedIndex];
    const selectValue = selectOption;
    
    if (selectValue.value) {
        fetch(`${baseAddress}/Api/GpuApi`)
            .then(response => response.json())
            .then(data => {
                var GpuList = [];
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    GpuList.push(item);
                }

                //alert(GpuList);

                //var Gpu4k = GpuList.map(item => {
                //    return {
                //        _4K_mark: item._4K_mark,
                //        fhD_mark: item.fhD_mark,
                //        basE_mark: item.basE_mark,
                //        ffxiV_mark: item.ffxiV_mark,
                //        temperature: item.temperature,
                //        img: item.img
                //    };
                //});
                const targetGpu = GpuList.find(item => item.productsID === selectValue.value);
                if (targetGpu && item._4K_mark != null && item.fhD_mark != null && item.basE_mark != null && item.ffxiV_mark != null && item.temperature != null) {

                    _4k_A.textContent = targetGpu._4K_mark;
                    fhd_A.textContent = targetGpu.fhD_mark;
                    base_A.textContent = targetGpu.basE_mark;
                    ffxiv_A.textContent = targetGpu.ffxiV_mark;
                    temper_A.textContent = targetGpu.temperature;
                    price_A.textContent = "$ " + targetGpu.price;                
                    img_A.src = "../images/GPU_img/" + targetGpu.img;

                    // 分數變數儲存值
                    _4k_A_Value = parseInt(_4k_A.textContent);
                    fhd_A_Value = parseInt(fhd_A.textContent);
                    base_A_Value = parseInt(base_A.textContent);
                    ffxiv_A_Value = parseInt(ffxiv_A.textContent);
                    
                    //console.log("4K在這裡", _4k_A_Value)
                    minus();

                }
                else {
                    alert("沒有找到相關數據，請確認後端程序 ! ! ");
                    //console.log("item.productsID", item.productsID);
                    //console.log("selectValue.value", selectValue.value);
                }
                
            })
    }
           
})
// 監聽事件option_B
select_B.addEventListener("change", function () {
    const selectOption = select_B.options[select_B.selectedIndex];
    const selectValue = selectOption;
    
    if (selectValue.value) {
        fetch(`${baseAddress}/Api/GpuApi`)
            .then(response => response.json())
            .then(data => {
                var GpuList = [];
                for (var i = 0; i < data.length; i++) {
                    var item = data[i];
                    GpuList.push(item);
                }

                //alert(GpuList);

                //var Gpu4k = GpuList.map(item => {
                //    return {
                //        _4K_mark: item._4K_mark,
                //        fhD_mark: item.fhD_mark,
                //        basE_mark: item.basE_mark,
                //        ffxiV_mark: item.ffxiV_mark,
                //        temperature: item.temperature,
                //        img: item.img
                //    };
                //});
                const targetGpu = GpuList.find(item => item.productsID === selectValue.value);
                if (targetGpu && item._4K_mark != null && item.fhD_mark != null && item.basE_mark != null && item.ffxiV_mark != null && item.temperature != null) {

                    _4k_B.textContent = targetGpu._4K_mark;
                    fhd_B.textContent = targetGpu.fhD_mark;
                    base_B.textContent = targetGpu.basE_mark;
                    ffxiv_B.textContent = targetGpu.ffxiV_mark;
                    temper_B.textContent = targetGpu.temperature;
                    price_B.textContent = "$ " + targetGpu.price;
                    img_B.src = "../images/GPU_img/" + targetGpu.img;

                    // 分數變數儲存值
                    _4k_B_Value = parseInt(_4k_B.textContent);
                    fhd_B_Value = parseInt(fhd_B.textContent);
                    base_B_Value = parseInt(base_B.textContent);
                    ffxiv_B_Value = parseInt(ffxiv_B.textContent);

                    //console.log("4K在這裡", _4k_A_Value)
                    minus();

                }
                else {
                    alert("沒有找到相關數據，請確認後端程序 ! ! ");
                    //console.log("item.productsID", item.productsID);
                    //console.log("selectValue.value", selectValue.value);
                }

            })
    }

})
//console.log(_4k_B_Value);
//console.log(_4k_A_Value);
function minus() {
    if (_4k_A_Value != null && _4k_B_Value != null && fhd_A_Value != null && fhd_B_Value != null && base_A_Value != null & base_B_Value != null && ffxiv_A_Value != null && ffxiv_B_Value != null) {

        if (_4k_A_Value > _4k_B_Value) {

            // 歸零
            GPU_textcontent_B.textContent = 0 + '%';
            GPU_transition_B.style.paddingLeft = 0 + 'px';
            textContent_4k_B.textContent = 0 + '%';
            textContent_fhd_B.textContent = 0 + '%';
            textContent_base_B.textContent = 0 + '%';
            textContent_ffxiv_B.textContent = 0 + '%';
            transition_4k_B.style.paddingLeft = 0 + 'px';
            transition_fhd_B.style.paddingLeft = 0 + 'px';
            transition_base_B.style.paddingLeft = 0 + 'px';
            transition_ffxiv_B.style.paddingLeft = 0 + 'px';

            transition_4k_B.style.backgroundColor = 'rgb(139, 253, 135)';
            transition_fhd_B.style.backgroundColor = 'rgb(139, 253, 135)';
            transition_base_B.style.backgroundColor = 'rgb(139, 253, 135)';
            transition_ffxiv_B.style.backgroundColor = 'rgb(139, 253, 135)';

            textContent_4k_B.style.color = '#339900';
            textContent_fhd_B.style.color = '#339900';
            textContent_base_B.style.color = '#339900';
            textContent_ffxiv_B.style.color = '#339900';

            _4k_B.style.color = 'black';
            fhd_B.style.color = 'black';
            base_B.style.color = 'black';
            ffxiv_B.style.color = 'black';
            // --------------------------------------------------------------

            sumValue_4k = (parseInt(_4k_A_Value) / parseInt(_4k_B_Value) - 1) * 100;
            sumValue_fhd = (parseInt(fhd_A_Value) / parseInt(fhd_B_Value) - 1) * 100;
            sumValue_base = (parseInt(base_A_Value) / parseInt(base_B_Value) - 1) * 100;
            sumValue_ffxiv = (parseInt(ffxiv_A_Value) / parseInt(ffxiv_B_Value) - 1) * 100;
            
            // console.log("sumValue_fhd", sumValue_ffxiv);
            // console.log(sumValue_4k);
            const targetValue = [sumValue_4k, sumValue_fhd, sumValue_base, sumValue_ffxiv];
            const maxvalue = 100; // 最大值
            function animateValue(currentValue, targetValue, duration) {
                // currentValue 目前數值
                // targetValue 目標數值
                // duration 動畫時間
                const start = performance.now();
                // performance 獲取當前時間

                function updateValue(timestamp) {
                    // timestamp 追蹤時間
                    const elapsed = timestamp - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const value_4k = Math.floor(currentValue + (targetValue[0] - currentValue) * progress);                   
                    const value_fhd = Math.floor(currentValue + (targetValue[1] - currentValue) * progress);                   
                    const value_base = Math.floor(currentValue + (targetValue[2] - currentValue) * progress);
                    const value_ffxiv = Math.floor(currentValue + (targetValue[3] - currentValue) * progress);                  
                    // console.log("fhd", value_fhd);
                    let barWidth_4k = value_4k;
                    let barWidth_fhd = value_fhd;
                    let barWidth_base = value_base;
                    let barWidth_ffxiv = value_ffxiv;
                    let GPU_text = 0;
                    let GPU_barWidth = 0;
                    let bool_4k = false;
                    let bool_fhd = false;
                    let bool_base = false;
                    let bool_ffxiv = false;

                    GPU_text = (parseInt(value_4k) + parseInt(value_fhd) + parseInt(value_base) + parseInt(value_ffxiv)) / 4;                   
                    GPU_barWidth = GPU_text;

                    if (value_4k > maxvalue) { barWidth_4k = maxvalue; }
                    if (value_fhd > maxvalue) { barWidth_fhd = maxvalue; }
                    if (value_base > maxvalue) { barWidth_base = maxvalue; }
                    if (value_ffxiv > maxvalue) { barWidth_ffxiv = maxvalue; }
                    if (value_ffxiv > maxvalue) { barWidth_ffxiv = maxvalue; }
                    if (GPU_barWidth > 130) { GPU_barWidth = 130; }

                    // +-判斷
                    if (value_4k >= 0) { bool_4k = true; }
                    else { bool_4k = false; }
                    if (value_fhd >= 0) { bool_fhd = true; }
                    else { bool_fhd = false }
                    if (value_base >= 0) { bool_base = true; }
                    else { bool_base = false }
                    if (value_ffxiv >= 0) { bool_ffxiv = true; }
                    else { bool_ffxiv = false }

                    // 進度條動態顏色調整
                    if (bool_4k == true) {
                        textContent_4k_A.textContent = '+' + value_4k + '%';
                        textContent_4k_A.style.color = '#339900';
                        _4k_A.style.color = 'black';
                        transition_4k_A.style.paddingLeft = barWidth_4k + 'px';
                        transition_4k_A.style.backgroundColor = 'rgb(139, 253, 135)';                        
                    }
                    else {
                        textContent_4k_A.textContent = value_4k + '%';
                        textContent_4k_A.style.color = 'red';
                        _4k_A.style.color = 'red';
                        transition_4k_A.style.paddingLeft = Math.abs(barWidth_4k) + 'px';
                        transition_4k_A.style.backgroundColor = 'red';
                    };
                    if (bool_fhd == true) {
                        textContent_fhd_A.textContent = '+' + value_fhd + '%';
                        textContent_fhd_A.style.color = '#339900';
                        fhd_A.style.color = 'black';
                        transition_fhd_A.style.paddingLeft = barWidth_fhd + 'px';
                        transition_fhd_A.style.backgroundColor = 'rgb(139, 253, 135)';
                    }
                    else {
                        textContent_fhd_A.textContent = value_fhd + '%';
                        textContent_fhd_A.style.color = 'red';
                        fhd_A.style.color = 'red';
                        transition_fhd_A.style.paddingLeft = Math.abs(barWidth_fhd) + 'px';
                        transition_fhd_A.style.backgroundColor = 'red';
                    };
                    if (bool_base == true) {
                        textContent_base_A.textContent = '+' + value_base + '%';
                        textContent_base_A.style.color = '#339900';
                        base_A.style.color = 'black';
                        transition_base_A.style.paddingLeft = barWidth_base + 'px';
                        transition_base_A.style.backgroundColor = 'rgb(139, 253, 135)';
                    }
                    else {
                        textContent_base_A.textContent = value_base + '%';
                        textContent_base_A.style.color = 'red';
                        base_A.style.color = 'red';
                        transition_base_A.style.paddingLeft = Math.abs(barWidth_base) + 'px';
                        transition_base_A.style.backgroundColor = 'red';
                    };
                    if (bool_ffxiv == true) {
                        textContent_ffxiv_A.textContent = '+' + value_ffxiv + '%';
                        textContent_ffxiv_A.style.color = '#339900';
                        ffxiv_A.style.color = 'black';
                        transition_ffxiv_A.style.paddingLeft = barWidth_ffxiv + 'px';
                        transition_ffxiv_A.style.backgroundColor = 'rgb(139, 253, 135)';
                    }
                    else {
                        textContent_ffxiv_A.textContent = "-" + Math.abs(value_ffxiv) + '%';
                        textContent_ffxiv_A.style.color = 'red';
                        ffxiv_A.style.color = 'red';
                        transition_ffxiv_A.style.paddingLeft = Math.abs(barWidth_ffxiv) + 'px';
                        transition_ffxiv_A.style.backgroundColor = 'red';
                    };
                    GPU_textcontent_A.textContent = '+' + GPU_text + '%';
                    GPU_transition_A.style.paddingLeft = GPU_barWidth * 2.5 + 'px';
                    if (progress < 1) {
                        requestAnimationFrame(updateValue);
                    }
                }

                requestAnimationFrame(updateValue);
            }
            animateValue(0, targetValue, 1000); //執行動畫效果

        }
        else {
            // 歸零
            GPU_textcontent_A.textContent = 0 + '%';
            GPU_transition_A.style.paddingLeft = 0 + 'px';
            textContent_4k_A.textContent = 0 + '%';
            textContent_fhd_A.textContent = 0 + '%';
            textContent_base_A.textContent = 0 + '%';
            textContent_ffxiv_A.textContent = 0 + '%';

            transition_4k_A.style.paddingLeft = 0 + 'px';
            transition_fhd_A.style.paddingLeft = 0 + 'px';
            transition_base_A.style.paddingLeft = 0 + 'px';
            transition_ffxiv_A.style.paddingLeft = 0 + 'px';

            transition_4k_A.style.backgroundColor = 'rgb(139, 253, 135)';
            transition_fhd_A.style.backgroundColor = 'rgb(139, 253, 135)';
            transition_base_A.style.backgroundColor = 'rgb(139, 253, 135)';
            transition_ffxiv_A.style.backgroundColor = 'rgb(139, 253, 135)';

            textContent_4k_A.style.color = '#339900';
            textContent_fhd_A.style.color = '#339900';
            textContent_base_A.style.color = '#339900';
            textContent_ffxiv_A.style.color = '#339900';

            _4k_A.style.color = 'black';
            fhd_A.style.color = 'black';
            base_A.style.color = 'black';
            ffxiv_A.style.color = 'black';
            // --------------------------------------------------------------

            sumValue_4k = (parseInt(_4k_B_Value) / parseInt(_4k_A_Value) - 1) * 100;
            sumValue_fhd = (parseInt(fhd_B_Value) / parseInt(fhd_A_Value) - 1) * 100;
            sumValue_base = (parseInt(base_B_Value) / parseInt(base_A_Value) - 1) * 100;
            sumValue_ffxiv = (parseInt(ffxiv_B_Value) / parseInt(ffxiv_A_Value) - 1) * 100;
            // console.log("sumValue_fhd", sumValue_ffxiv);
            // console.log(sumValue_4k);
            const targetValue = [sumValue_4k, sumValue_fhd, sumValue_base, sumValue_ffxiv];
            const maxvalue = 100; // 最大值
            //console.log(targetValue);
            function animateValue(currentValue, targetValue, duration) {
                // currentValue 目前數值
                // targetValue 目標數值
                // duration 動畫時間
                const start = performance.now();
                // performance 獲取當前時間

                function updateValue(timestamp) {
                    // timestamp 追蹤時間
                    const elapsed = timestamp - start;
                    const progress = Math.min(elapsed / duration, 1);
                    const value_4k = Math.floor(currentValue + (targetValue[0] - currentValue) * progress);
                    const value_fhd = Math.floor(currentValue + (targetValue[1] - currentValue) * progress);
                    const value_base = Math.floor(currentValue + (targetValue[2] - currentValue) * progress);
                    const value_ffxiv = Math.floor(currentValue + (targetValue[3] - currentValue) * progress);
                    // console.log("fhd", value_fhd);
                    let barWidth_4k = value_4k;
                    let barWidth_fhd = value_fhd;
                    let barWidth_base = value_base;
                    let barWidth_ffxiv = value_ffxiv;
                    let GPU_text = 0;
                    let GPU_barWidth = 0;
                    let bool_4k = false;
                    let bool_fhd = false;
                    let bool_base = false;
                    let bool_ffxiv = false;
                    GPU_text = (parseInt(value_4k) + parseInt(value_fhd) + parseInt(value_base) + parseInt(value_ffxiv)) / 4;
                    GPU_barWidth = GPU_text;

                    if (value_4k > maxvalue) { barWidth_4k = maxvalue; }
                    if (value_fhd > maxvalue) { barWidth_fhd = maxvalue; }
                    if (value_base > maxvalue) { barWidth_base = maxvalue; }
                    if (value_ffxiv > maxvalue) { barWidth_ffxiv = maxvalue; }                    
                    if (GPU_barWidth > 130) { GPU_barWidth = 130; }
                    // +-判斷
                    if (value_4k >= 0) { bool_4k = true; }
                    else { bool_4k = false; }
                    if (value_fhd >= 0) { bool_fhd = true; }
                    else { bool_fhd = false }
                    if (value_base >= 0) { bool_base = true; }
                    else { bool_base = false }
                    if (value_ffxiv >= 0) { bool_ffxiv = true; }
                    else { bool_ffxiv = false }

                    // 進度條動態顏色調整
                    if (bool_4k == true) {
                        textContent_4k_B.textContent = '+' + value_4k + '%';
                        textContent_4k_B.style.color = '#339900';
                        _4k_B.style.color = 'black';
                        transition_4k_B.style.paddingLeft = barWidth_4k + 'px';
                        transition_4k_B.style.backgroundColor = 'rgb(139, 253, 135)';
                    }
                    else {
                        textContent_4k_B.textContent = value_4k + '%';
                        textContent_4k_B.style.color = 'red';
                        _4k_B.style.color = 'red';
                        transition_4k_B.style.paddingLeft = Math.abs(barWidth_4k) + 'px';
                        transition_4k_B.style.backgroundColor = 'red';
                    };
                    if (bool_fhd == true) {
                        textContent_fhd_B.textContent = '+' + value_fhd + '%';
                        textContent_fhd_B.style.color = '#339900';
                        fhd_B.style.color = 'black';
                        transition_fhd_B.style.paddingLeft = barWidth_fhd + 'px';
                        transition_fhd_B.style.backgroundColor = 'rgb(139, 253, 135)';
                    }
                    else {
                        textContent_fhd_B.textContent = value_fhd + '%';
                        textContent_fhd_B.style.color = 'red';
                        fhd_B.style.color = 'red';
                        transition_fhd_B.style.paddingLeft = Math.abs(barWidth_fhd) + 'px';
                        transition_fhd_B.style.backgroundColor = 'red';
                    };
                    if (bool_base == true) {
                        textContent_base_B.textContent = '+' + value_base + '%';
                        textContent_base_B.style.color = '#339900';
                        base_B.style.color = 'black';
                        transition_base_B.style.paddingLeft = barWidth_base + 'px';
                        transition_base_B.style.backgroundColor = 'rgb(139, 253, 135)';
                    }
                    else {
                        textContent_base_B.textContent = value_base + '%';
                        textContent_base_B.style.color = 'red';
                        base_B.style.color = 'red';
                        transition_base_B.style.paddingLeft = Math.abs(barWidth_base) + 'px';
                        transition_base_B.style.backgroundColor = 'red';
                    };
                    if (bool_ffxiv == true) {
                        textContent_ffxiv_B.textContent = '+' + value_ffxiv + '%';
                        textContent_ffxiv_B.style.color = '#339900';
                        ffxiv_B.style.color = 'black';
                        transition_ffxiv_B.style.paddingLeft = barWidth_ffxiv + 'px';
                        transition_ffxiv_B.style.backgroundColor = 'rgb(139, 253, 135)';                      
                    }
                    else {
                        textContent_ffxiv_B.textContent = value_ffxiv + '%';
                        textContent_ffxiv_B.style.color = 'red';
                        ffxiv_B.style.color = 'red';
                        transition_ffxiv_B.style.paddingLeft = Math.abs(barWidth_ffxiv)  + 'px';
                        transition_ffxiv_B.style.backgroundColor = 'red';
                    };
                                                           
                                                                            
                    GPU_textcontent_B.textContent = '+' + GPU_text + '%';
                    GPU_transition_B.style.paddingLeft = GPU_barWidth * 2.5 + 'px';
                    if (progress < 1) {
                        requestAnimationFrame(updateValue);
                    }
                }

                requestAnimationFrame(updateValue);
            }

            animateValue(0, targetValue, 1000); //執行動畫效果
        }
    }
    else {


    }
    
}



// 進度條動畫

// const targetValue = 100; // 目標數值

// function animateValue(currentValue, targetValue, duration) {

//     const start = performance.now();
//     // performance 獲取當前時間

//     function updateValue(timestamp) {
//         const elapsed = timestamp - start;
//         const progress = Math.min(elapsed / duration, 1);
//         const value = Math.floor(currentValue + (targetValue - currentValue) * progress);

//         textContent_4k_A.textContent = value + '%';
//         textContent_fhd_A.textContent = value + '%';
//         textContent_base_A.textContent = value + '%';
//         textContent_ffxiv_A.textContent = value + '%';
//         textContent_4k_B.textContent = value + '%';
//         textContent_fhd_B.textContent = value + '%';
//         textContent_base_B.textContent = value + '%';
//         textContent_ffxiv_B.textContent = value + '%';
//         transition_4k_A.style.paddingLeft = value + 'px';
//         transition_fhd_A.style.paddingLeft = value + 'px';
//         transition_base_A.style.paddingLeft = value + 'px';
//         transition_ffxiv_A.style.paddingLeft = value + 'px';
//         transition_4k_B.style.paddingLeft = value + 'px';
//         transition_fhd_B.style.paddingLeft = value + 'px';
//         transition_base_B.style.paddingLeft = value + 'px';
//         transition_ffxiv_B.style.paddingLeft = value + 'px';



//         if (progress < 1) {
//             requestAnimationFrame(updateValue);
//         }
//     }

//     requestAnimationFrame(updateValue);
// }

// animateValue(0, targetValue, 1000); //執行動畫效果