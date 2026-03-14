import{e as t}from"./iframe-CMkrvckg.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwQ9PO5l.js";import{Y as s}from"./YAxis-DuUTIFNy.js";import{R as h}from"./arrayEqualityCheck-C-j9cVnD.js";import{L as A}from"./LineChart-IIS7shG-.js";import{C as f}from"./CartesianGrid-a6TSLvyJ.js";import{X as x}from"./XAxis-CRTScQzT.js";import{L as E}from"./Legend-DdLglC9M.js";import{L as n}from"./Line-DyabMQ5Q.js";import{T as v}from"./Tooltip-CJUTTQCb.js";import{R as k}from"./RechartsHookInspector-LPNgAumr.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BQn2ecgs.js";import"./Layer-4Y2Bpro8.js";import"./resolveDefaultProps-0hHUpMbb.js";import"./Text-CfL4AkJ2.js";import"./DOMUtils-CY4V2W-_.js";import"./Label-CK8WpSeL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--DEMgBxJ.js";import"./zIndexSlice-CRGV0CLv.js";import"./immer-CyD0Wx6o.js";import"./types-h_n1Y6CX.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DRtBvqzi.js";import"./hooks-z2F_PL2D.js";import"./axisSelectors-DiKss4V_.js";import"./d3-scale-fpsdvWAN.js";import"./RechartsWrapper-B_AEo7CP.js";import"./index-l2b25tqQ.js";import"./CartesianChart-mSJGg3IH.js";import"./chartDataContext-Dg6bbq-C.js";import"./CategoricalChart-Bl6nS1b9.js";import"./Symbols-C3K856pn.js";import"./symbol-C1RL9RI_.js";import"./step-BgKCtsuA.js";import"./useElementOffset-DQbTUIr9.js";import"./uniqBy-CWb_iLeu.js";import"./iteratee-q_l8ooCL.js";import"./ReactUtils-koRtCpPb.js";import"./ActivePoints-DPO6sfmL.js";import"./Dot-WqWz8qFp.js";import"./RegisterGraphicalItemId-B_jKurhL.js";import"./ErrorBarContext-DR1SZQJs.js";import"./GraphicalItemClipPath-CdBUcuRI.js";import"./SetGraphicalItem-D8O9NSBD.js";import"./useAnimationId-Dnz94C6_.js";import"./getRadiusAndStrokeWidthFromDot-BtVMYfvn.js";import"./ActiveShapeUtils-fAQzD1Cv.js";import"./isPlainObject-E65nxFXT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BXlSVzkG.js";import"./Trapezoid-B-eKIWgm.js";import"./Sector-BAVvYkxC.js";import"./Curve-D0J3TcJs.js";import"./Cross-DFlwbcoz.js";import"./index-BpykTG3u.js";import"./ChartSizeDimensions-tEh5XVCc.js";import"./OffsetShower-CI6ZxkzS.js";import"./PlotAreaShower-CiPqTN59.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
