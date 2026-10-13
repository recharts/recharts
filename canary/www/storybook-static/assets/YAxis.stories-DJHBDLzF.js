import{R as t}from"./iframe-NhQV4prz.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BZzMEbei.js";import{R as h}from"./zIndexSlice-CfLnBr12.js";import{L as A}from"./LineChart-CO_86BKH.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Cyv3Grcf.js";import{X as f}from"./XAxis-Fp7U60n2.js";import{L as E}from"./Legend-DhXEWDJ9.js";import{L as i}from"./Line-CK7ZFz0J.js";import{T as v}from"./Tooltip-BHAMG_eo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BUAYU6sx.js";import"./Text-BjHxixwZ.js";import"./resolveDefaultProps-DiB_0bHm.js";import"./pageBackground-CDOOBPh1.js";import"./isWellBehavedNumber-CZC1TcYQ.js";import"./useId-BhvwEVie.js";import"./useBackwardsCompatibleTheme-RAZcM6ed.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-L-3od7Tk.js";import"./index-BSL_lC_q.js";import"./index-CDv5DZpz.js";import"./axisSelectors-CI2m5dZK.js";import"./throttle-DIKmaWkS.js";import"./d3-scale-DKOiWQKf.js";import"./CartesianAxis-Brd3Au8o.js";import"./Layer-BBUzG4Ds.js";import"./types-CquoFe81.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3ai8iRv.js";import"./index-Cmohh-L0.js";import"./index-DaOiqL7H.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BxN86ujp.js";import"./index-Dc9b_9OD.js";import"./CartesianChart-CiIIIaIF.js";import"./chartDataContext-I3KBS5Dn.js";import"./CategoricalChart-BSIFNsGO.js";import"./Symbols-CvvF-3qc.js";import"./symbol-BdliE8yI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DkX5d6Uc.js";import"./uniqBy-eEafSCgx.js";import"./iteratee-1x0B9Dhz.js";import"./Curve-DQunGac-.js";import"./step-DAEVm6QR.js";import"./activeStyles-DbZl5mD5.js";import"./useAnimationId-CDdHAGde.js";import"./dataEntryStyles-C3Awxqtk.js";import"./ActivePoints-BaOlHly8.js";import"./Dot-Bbsv88JT.js";import"./ErrorBarContext-C6WKrP5w.js";import"./GraphicalItemClipPath-BZY88hTL.js";import"./SetGraphicalItem-BE6zKb5c.js";import"./getRadiusAndStrokeWidthFromDot-V6X0dMwc.js";import"./ActiveShapeUtils-B50xX2fH.js";import"./useEffectiveDataKey-CCR_17cw.js";import"./Cross-iti3Nuf1.js";import"./Rectangle-B_Rp6Z4j.js";import"./util-Dxo8gN5i.js";import"./Sector-DbC0iSiQ.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
