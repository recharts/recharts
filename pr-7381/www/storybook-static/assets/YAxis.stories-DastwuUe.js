import{e as t}from"./iframe-nKBNN5B0.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-FQ23aVkz.js";import{g as h}from"./arrayEqualityCheck-CxT-wzVL.js";import{L as A}from"./LineChart-iAlNTIgQ.js";import{a as b}from"./Coordinate-CcdTesrj.js";import{C as f}from"./CartesianGrid-CfI49b5n.js";import{X as x}from"./XAxis-DU_guq9x.js";import{L as E}from"./Legend-DHZMD3TY.js";import{L as n}from"./Line-UdkVxmSF.js";import{T as v}from"./Tooltip-DFHt6nwC.js";import{R as k}from"./RechartsHookInspector-sGkexO-0.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bnh1LK4J.js";import"./Layer-Dlo03F9V.js";import"./resolveDefaultProps-B1K37wAO.js";import"./Text-DB5b8CCD.js";import"./DOMUtils-B7v60ynE.js";import"./Label-CsEI_R5F.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C2zC9czD.js";import"./zIndexSlice-D0XiDET1.js";import"./immer-CyCHtQC_.js";import"./types-DsvdP6xG.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CO8dGGel.js";import"./hooks-D9IV7SS_.js";import"./axisSelectors-Ce9ynWe4.js";import"./d3-scale-BkKzcfBn.js";import"./RechartsWrapper-CtYT8XrE.js";import"./index-92xVHDbu.js";import"./CartesianChart-B93j2FVh.js";import"./chartDataContext-C9hfLHwH.js";import"./CategoricalChart-DseIVHYy.js";import"./Symbols-xmaVfyL9.js";import"./symbol-BlBeMTm8.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DCLSj0kl.js";import"./uniqBy-DFrX51Ib.js";import"./iteratee-CGccbjb5.js";import"./Curve-EceyF-XR.js";import"./step-Cz7IIlWp.js";import"./ReactUtils-DZyDsCqU.js";import"./ActivePoints-BzC087aM.js";import"./Dot-CoS0_Gc_.js";import"./RegisterGraphicalItemId-DX6ZWJJQ.js";import"./ErrorBarContext-DtqQSr6r.js";import"./GraphicalItemClipPath-DenedrNc.js";import"./SetGraphicalItem-v3AApP2y.js";import"./useAnimationId-C5EqhcJr.js";import"./getRadiusAndStrokeWidthFromDot-2U1M0l9R.js";import"./ActiveShapeUtils-ZBGHGQd-.js";import"./Cross-Bo684PKa.js";import"./Rectangle-BECvYQY2.js";import"./Sector-DeoU1Iib.js";import"./index-zSDCnArX.js";import"./ChartSizeDimensions-NMIHm-Kh.js";import"./OffsetShower-6NeAlfeU.js";import"./PlotAreaShower-DGsJDI99.js";const It={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
          <RechartsHookInspector />
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Ot=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Ot as __namedExportsOrder,It as default};
