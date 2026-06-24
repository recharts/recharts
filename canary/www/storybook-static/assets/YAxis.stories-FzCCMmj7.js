import{R as t}from"./iframe-NH2HoEvn.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-DayohGi9.js";import{R as h}from"./zIndexSlice-CCMkrqvp.js";import{L as A}from"./LineChart-D3w8adBv.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DREgyLbK.js";import{X as f}from"./XAxis-CWamoSoZ.js";import{L as E}from"./Legend-Kz0f1qHr.js";import{L as n}from"./Line-B-WZkr-r.js";import{T as v}from"./Tooltip-oyWUi0pB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Bo5cNVvp.js";import"./CartesianAxis-BKNqtnIf.js";import"./Layer-CmQSLVxb.js";import"./resolveDefaultProps-BGihd8_H.js";import"./Text-Dxh69SU_.js";import"./DOMUtils-DIF_Gs9K.js";import"./isWellBehavedNumber-DL2i4yQU.js";import"./Label-DT7zDdgZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-4vtT6ix2.js";import"./index-C8dhIkrl.js";import"./index-B6meFPDo.js";import"./types-CyGlxecW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C1ge3ajN.js";import"./immer-SVzhbtzF.js";import"./RechartsWrapper-DYZBcomz.js";import"./index-DwDUEQ_a.js";import"./index-KEn5cK9h.js";import"./axisSelectors-BVEg60Nu.js";import"./d3-scale-BOfgX5mI.js";import"./CartesianChart-n5KlOJWr.js";import"./chartDataContext-DOG-KHg0.js";import"./CategoricalChart-r18o97_M.js";import"./Symbols-BMA4KExo.js";import"./symbol-CAZ7nIX0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-dSnxC0p_.js";import"./uniqBy-Bxb6tPL4.js";import"./iteratee-B0XxpJgf.js";import"./Curve-7UCJoGzD.js";import"./step-D8rYwkpZ.js";import"./AnimatedItems-GETRY_YP.js";import"./useAnimationId-BkMnFoWD.js";import"./ActivePoints-DP4Q2WUd.js";import"./Dot-4iBWGC61.js";import"./RegisterGraphicalItemId-QTMlMqrn.js";import"./ErrorBarContext-DlMVuBVO.js";import"./GraphicalItemClipPath-C94rECFA.js";import"./SetGraphicalItem-DpdjJmMm.js";import"./getRadiusAndStrokeWidthFromDot-DfNtTuJE.js";import"./ActiveShapeUtils-C_uRJL3Z.js";import"./Cross-CuzgB31v.js";import"./Rectangle-OLM2G5r9.js";import"./util-Dxo8gN5i.js";import"./Sector-DEgeb_w6.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: Args) => {
    const width = getWidth(args.width);
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: {
      value: 'The Axis Label',
      position: 'center',
      angle: 90
    }
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      category: 'Product A',
      value: 400,
      target: 450
    }, {
      category: 'Product B',
      value: 300,
      target: 350
    }, {
      category: 'Product C',
      value: 200,
      target: 250
    }, {
      category: 'Product D',
      value: 278,
      target: 300
    }, {
      category: 'Product E',
      value: 189,
      target: 220
    }];
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis {...args} tick={<CustomYAxisTickWithPadding />} width={100} />
          <Line type="monotone" dataKey="value" stroke="#3498db" name="Actual" />
          <Line type="monotone" dataKey="target" stroke="#e74c3c" strokeDasharray="5 5" name="Target" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    padding: {
      top: 25,
      bottom: 35
    },
    width: 100,
    tickMargin: 10
  }
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const St=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,St as __namedExportsOrder,Rt as default};
