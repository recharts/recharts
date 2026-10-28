import{R as t}from"./iframe-OqKJbU5N.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BvbToLwB.js";import{R as h}from"./zIndexSlice-SR00o6sl.js";import{L as A}from"./LineChart-KI9tVRMh.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BiyHkmur.js";import{X as f}from"./XAxis-BOpO9kNQ.js";import{L as E}from"./Legend-LpcTH5CK.js";import{L as i}from"./Line-D87hppUw.js";import{T as v}from"./Tooltip-B-vv3o_Q.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Du8bKZih.js";import"./Text-BBVNpawX.js";import"./resolveDefaultProps-CJu8DiNV.js";import"./pageBackground-Cszwy4wg.js";import"./ZIndexLayer-UUbhXFJu.js";import"./index-Dpjuq2Lp.js";import"./index-DZqDb_nm.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Ds9uThXq.js";import"./throttle-Dd4NMqKN.js";import"./axisSelectors-DgBSWf8B.js";import"./d3-scale-BY5IvaL3.js";import"./CartesianAxis-pqwy63jz.js";import"./Layer-Cr-Iv08I.js";import"./types-9svgO-k7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DNR3Nm-M.js";import"./index-D0vXz4xA.js";import"./index-D-gzGN7z.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DR91apNy.js";import"./index-DYD5HM8H.js";import"./CartesianChart-CtxmU-X6.js";import"./ZIndexPortal-SXFY_RF7.js";import"./CategoricalChart-CphpP2QN.js";import"./Symbols-ayOQu3YZ.js";import"./symbol-DNYfeltN.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CzQY9gJ2.js";import"./uniqBy-DsfhD18s.js";import"./iteratee-Cyssn55k.js";import"./isArguments-yB-y1yaH.js";import"./Curve-61gTtyRO.js";import"./step-BRtTreeO.js";import"./LabelList-s2IEt-iE.js";import"./ActivePoints-DniM9AXi.js";import"./Dot-C7hW2lTf.js";import"./activeStyles-DnmgD4rl.js";import"./useAnimationId-DvBUlVSU.js";import"./dataEntryStyles-KId877_8.js";import"./ErrorBarContext-DPjF7BBQ.js";import"./SetGraphicalItem-CvB1j4dG.js";import"./getRadiusAndStrokeWidthFromDot-BDb9Uw_H.js";import"./ActiveShapeUtils-DR5Jktsx.js";import"./useEffectiveDataKey-CV_AhX-p.js";import"./Cross-CUTxlgQS.js";import"./Rectangle-CMG9couI.js";import"./util-Dxo8gN5i.js";import"./Sector-tnQ6QhLg.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Mt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
