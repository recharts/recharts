import{R as t}from"./iframe-DmaTyynO.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DzMB2LoA.js";import{R as h}from"./zIndexSlice-C61SZGFC.js";import{L as A}from"./LineChart-DuaGwSK4.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BGx6CIJQ.js";import{X as f}from"./XAxis-Nv8Uh7AY.js";import{L as E}from"./Legend-BzvPZGhO.js";import{L as i}from"./Line-DxjJsn0p.js";import{T as v}from"./Tooltip-D6I9ojHD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CMdX73k3.js";import"./Text-2AUGODc6.js";import"./resolveDefaultProps-CtyyIUUO.js";import"./DOMUtils-BpsSUmre.js";import"./isWellBehavedNumber-BK90QDph.js";import"./useId-3sGAzHtm.js";import"./useBackwardsCompatibleTheme-DqjXKSq9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cc-SqaEZ.js";import"./index-OHCUWRAn.js";import"./index-V9EvyoG7.js";import"./RechartsWrapper-BGC7v2QA.js";import"./axisSelectors-BM_a9F6K.js";import"./throttle-DMA9KLNR.js";import"./d3-scale-DI5fHYPy.js";import"./index-HETsTNte.js";import"./index-COAu8Zax.js";import"./renderedTicksSlice-DqtLTQXs.js";import"./index-C4wr6Lq-.js";import"./CartesianAxis-CUMWkMKo.js";import"./Layer-CKq6pjpc.js";import"./types-DmC6Y3U4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BKxlRmtn.js";import"./chartDataContext-DAmq05uD.js";import"./CategoricalChart-BUSfmukV.js";import"./Symbols-Ceoa5jAY.js";import"./symbol-DJiPU_Yr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DgjamZIE.js";import"./uniqBy-CTKPSl-J.js";import"./iteratee-CWLa6CO6.js";import"./Curve-Bgge_Gh-.js";import"./step-D7AfTI4H.js";import"./AnimatedItems-BAF8K0tv.js";import"./useAnimationId-DxNsV_0m.js";import"./ActivePoints-CNIiMQe1.js";import"./Dot-CR2DCP22.js";import"./RegisterGraphicalItemId-CDWIwrm3.js";import"./ErrorBarContext-uI5M5418.js";import"./GraphicalItemClipPath-DsQ7p0LM.js";import"./SetGraphicalItem-D6LEIG6h.js";import"./getRadiusAndStrokeWidthFromDot-DfMtRmCC.js";import"./ActiveShapeUtils-BIrsW6YR.js";import"./useGraphicalItemIdentity-Cz-Bal4G.js";import"./Cross-BrgKHXM5.js";import"./Rectangle-BZia4JMZ.js";import"./util-Dxo8gN5i.js";import"./Sector-DWK5NZTy.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
