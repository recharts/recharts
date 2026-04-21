import{e as t}from"./iframe-DkoPPqoz.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-BYjsEyTB.js";import{R as h}from"./arrayEqualityCheck-ConoiXxh.js";import{L as A}from"./LineChart-BG0rj6Z5.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-BT_ctgv2.js";import{X as x}from"./XAxis-TP4nil4a.js";import{L as E}from"./Legend-ESjSEemE.js";import{L as n}from"./Line-Ch8ZpIZ6.js";import{T as v}from"./Tooltip-1wKJEkgw.js";import{R as k}from"./RechartsHookInspector-JABbqkig.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DqLKklwY.js";import"./Layer-zW4foO2t.js";import"./resolveDefaultProps-rTEBizGM.js";import"./Text-Czgex7sv.js";import"./DOMUtils-BK7Rx0Uu.js";import"./Label-bvaOdScm.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DkIqpuZB.js";import"./zIndexSlice-DRo4EBFA.js";import"./immer-h70EVoAC.js";import"./types-BY9uJX-K.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C3i94H6-.js";import"./hooks-kkIG_obm.js";import"./axisSelectors-DrsKaFAE.js";import"./d3-scale-DMaSDVSj.js";import"./RechartsWrapper-D7r7vnZw.js";import"./index-avHK6rAb.js";import"./CartesianChart-FkpJPUOg.js";import"./chartDataContext-RI6mXRe4.js";import"./CategoricalChart-BVNqzoUx.js";import"./Symbols-riOWWUH2.js";import"./symbol-Mw7pfSpK.js";import"./step-BXtSxhKs.js";import"./useElementOffset-CaDAE_vK.js";import"./uniqBy-Dp6QPwT2.js";import"./iteratee-DHJJjjdJ.js";import"./ReactUtils-t--G_5qe.js";import"./ActivePoints-CofuFEcX.js";import"./Dot-C9hCbkHm.js";import"./RegisterGraphicalItemId-DO3T0gKQ.js";import"./ErrorBarContext-D8jzUn2M.js";import"./GraphicalItemClipPath-DPMqkNK-.js";import"./SetGraphicalItem-Dy_UcRx-.js";import"./useAnimationId-BkaDppf2.js";import"./getRadiusAndStrokeWidthFromDot-DA4yVcY7.js";import"./ActiveShapeUtils-DVJC97NJ.js";import"./isPlainObject-gasvROJA.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D0hnRgW6.js";import"./Trapezoid-BJDCCDSe.js";import"./Sector-hs2Rz1EN.js";import"./Curve-Ue3PdtjH.js";import"./Cross-oJRgsa_B.js";import"./index-B78ZsepT.js";import"./ChartSizeDimensions-DJpvKh-u.js";import"./OffsetShower-x7RdLh9q.js";import"./PlotAreaShower-BlqZdS3t.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
