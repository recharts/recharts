import{e as t}from"./iframe-DHSCsAdF.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-B3RnLl7T.js";import{R as h}from"./arrayEqualityCheck-DejELsrN.js";import{L as A}from"./LineChart-ByyADZkz.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-zapa5v6t.js";import{X as x}from"./XAxis-rIWvyQc_.js";import{L as E}from"./Legend-wGf0l-XN.js";import{L as n}from"./Line-xRKz7Lqu.js";import{T as v}from"./Tooltip-DmuGD4wR.js";import{R as k}from"./RechartsHookInspector-Bl_b1l7P.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BCj8T9-Z.js";import"./Layer-CgIzBpZ9.js";import"./resolveDefaultProps-DdBt44A0.js";import"./Text-BU_Eo4vH.js";import"./DOMUtils-DnRUdIba.js";import"./Label-C3rJ2_4a.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-NxKSFRC9.js";import"./zIndexSlice-CsWdvizj.js";import"./immer-B7vO4s3P.js";import"./types-BJ3oAoHr.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BJJo2R47.js";import"./hooks-Ed4LhnTQ.js";import"./axisSelectors-CI0vprku.js";import"./d3-scale-m9dtnhXI.js";import"./RechartsWrapper-DegZicoB.js";import"./index-CpBtaSsl.js";import"./CartesianChart-OvkPOyqJ.js";import"./chartDataContext-CG3f3Y43.js";import"./CategoricalChart-DOIkqHpB.js";import"./Symbols-ChUxQx2e.js";import"./symbol-Dw26CW2u.js";import"./step-BXBXLUST.js";import"./useElementOffset-DK8TM0kx.js";import"./uniqBy-BXsrqUuV.js";import"./iteratee-RqtmE6ui.js";import"./ReactUtils-CI0cWBwW.js";import"./ActivePoints-BU40hces.js";import"./Dot-BKOJ7ZOA.js";import"./RegisterGraphicalItemId-Co8itO9h.js";import"./ErrorBarContext-BnFLkwS3.js";import"./GraphicalItemClipPath-7TaZPKiL.js";import"./SetGraphicalItem-CGPj629n.js";import"./useAnimationId-DdH8uK_v.js";import"./getRadiusAndStrokeWidthFromDot-C6SN24Cr.js";import"./ActiveShapeUtils-D-9eavqk.js";import"./isPlainObject-DIsRAxNl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-D-nZJBYK.js";import"./Trapezoid-DaZMlX5v.js";import"./Sector-DwAaS_QE.js";import"./Curve-DdDf1hH6.js";import"./Cross-DqE97NNl.js";import"./index-C9zRLUqd.js";import"./ChartSizeDimensions-na2CXaMS.js";import"./OffsetShower-BYL_rrah.js";import"./PlotAreaShower-BF-kz2CC.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
