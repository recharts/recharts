import{R as t}from"./iframe-CExY2eWA.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-B_hjfjB_.js";import{R as h}from"./zIndexSlice-C37XV2sv.js";import{L as A}from"./LineChart-BbfXuiF0.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-aVowaFX_.js";import{X as f}from"./XAxis-CfGhwt3z.js";import{L as E}from"./Legend-BIDrTJ_w.js";import{L as i}from"./Line-D1ZVA3ri.js";import{T as v}from"./Tooltip-eFT7inFD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DKiyvKzI.js";import"./Text-B8G25q0u.js";import"./resolveDefaultProps-CjbXNHQ5.js";import"./pageBackground-DZSWUMfw.js";import"./ZIndexLayer-DlXNWMXh.js";import"./index-8pYktU8Y.js";import"./index-FNceUiie.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-YwnVtORU.js";import"./throttle-BBNIp7bK.js";import"./axisSelectors-DD16TRVI.js";import"./d3-scale-0yyW8T9p.js";import"./CartesianAxis-BL500t0F.js";import"./Layer-Bau4eIyO.js";import"./types-Dc-N9olf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DrzyKYB4.js";import"./index-AsSutFXR.js";import"./index-CUE47Bel.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DLH4YKyL.js";import"./index-Da9Adtew.js";import"./CartesianChart-BC6n1rn7.js";import"./ZIndexPortal-noF9F7eD.js";import"./CategoricalChart-CTKTm7QW.js";import"./Symbols-BL7s7DpT.js";import"./symbol-DETtOMtn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C39tezyP.js";import"./uniqBy-Crl5fHd8.js";import"./iteratee--CMPcs_W.js";import"./isArguments-yB-y1yaH.js";import"./Curve-DQpSgZo6.js";import"./step-BYC0RXYs.js";import"./LabelList-jPGn2qdg.js";import"./ActivePoints-hvZNmfX7.js";import"./Dot-DFSECcE9.js";import"./activeStyles-DJMtR5DX.js";import"./useAnimationId-DqJ2hXPF.js";import"./dataEntryStyles-iq_Y384c.js";import"./ErrorBarContext-CwvWWbXd.js";import"./SetGraphicalItem-BdGwDqMG.js";import"./getRadiusAndStrokeWidthFromDot-D9OCaedM.js";import"./ActiveShapeUtils-C53NOjZd.js";import"./useEffectiveDataKey-CZSLIZ23.js";import"./Cross-CO7Xs6dQ.js";import"./Rectangle-BbDfzF7k.js";import"./util-Dxo8gN5i.js";import"./Sector-BxZajP91.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Mt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
