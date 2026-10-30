import{R as t}from"./iframe-CNzr7bRc.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-B3tsMqyp.js";import{R as h}from"./zIndexSlice-BXquQra7.js";import{L as A}from"./LineChart-CYxFmw6i.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BBE-PR7v.js";import{X as f}from"./XAxis-BqePxvtA.js";import{L as E}from"./Legend-UVXvBnhj.js";import{L as i}from"./Line-C5pEban5.js";import{T as v}from"./Tooltip-BCC0qlIK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DK5ffKtI.js";import"./Text-DNGP5VRJ.js";import"./resolveDefaultProps-eALPB1-k.js";import"./DOMUtils-BNEhIoeS.js";import"./ZIndexLayer-iNGo5aF5.js";import"./index-BpBfKZ0c.js";import"./index-7EmzVii1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CghHQQ-X.js";import"./throttle-D60XWAz6.js";import"./axisSelectors-Cj1w7XZO.js";import"./d3-scale-BaY54_t1.js";import"./CartesianAxis-D3YDV11n.js";import"./Layer-CQb-3uv7.js";import"./types-VNEWdd_i.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DwMt-YUq.js";import"./index-vccdfSpl.js";import"./index-DkjLLMk5.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BDCqiBvb.js";import"./index-DPDqa0dF.js";import"./CartesianChart-9mx21EaK.js";import"./ZIndexPortal-DSFpx_T8.js";import"./CategoricalChart-B30IE8DU.js";import"./Symbols-CJLh5GL-.js";import"./symbol-CTtPmk_0.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-BZnJYQev.js";import"./dataEntryStyles-fZ5_Gy6u.js";import"./useElementOffset-BRAQ4wcr.js";import"./uniqBy-rckpUkc6.js";import"./iteratee-C6pzj2S7.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BKrC7pl3.js";import"./step-DQr3R_vt.js";import"./LabelList-BM4oqAMz.js";import"./ActivePoints-K0chRQ_g.js";import"./Dot-CUKZE6AE.js";import"./activeStyles-DoMnj4mo.js";import"./useAnimationId-CDC5NaEo.js";import"./ErrorBarContext-CNXHKdeb.js";import"./SetGraphicalItem-Dt3t9-Yy.js";import"./getRadiusAndStrokeWidthFromDot-COyF9q3U.js";import"./ActiveShapeUtils-BTkV1P67.js";import"./useEffectiveDataKey-CeL4hQha.js";import"./Cross-kZkGTP7N.js";import"./Rectangle-_7pUXE0L.js";import"./util-Dxo8gN5i.js";import"./Sector-DNATorIr.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
