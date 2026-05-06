import{e as t}from"./iframe-6KIzFwNo.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-BQuCUfzU.js";import{R as h}from"./arrayEqualityCheck-CGqQmqAs.js";import{L as A}from"./LineChart-BVZ-QyFc.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-DOgFM7CW.js";import{X as x}from"./XAxis-D1NIlvkv.js";import{L as E}from"./Legend-BxMxi4eG.js";import{L as n}from"./Line-BsmGvey2.js";import{T as v}from"./Tooltip-CSrMRVS2.js";import{R as k}from"./RechartsHookInspector-DHKbTB6e.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-ByaVWi8_.js";import"./Layer-qh1dFQeJ.js";import"./resolveDefaultProps-CCemV21k.js";import"./Text-EuDfZQJr.js";import"./DOMUtils-CF_DubJK.js";import"./Label-LIb90dQ2.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-oU3hoYkX.js";import"./zIndexSlice-NyQa_NDp.js";import"./immer-ql4DR2MT.js";import"./types-Bw6Zsg7c.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Bre3xjAe.js";import"./hooks-DBLrG0Zs.js";import"./axisSelectors-IZ0_1Z0f.js";import"./d3-scale-CbScBmFc.js";import"./RechartsWrapper-BS52G--d.js";import"./index-CsYEUaZR.js";import"./CartesianChart-BlXPw11X.js";import"./chartDataContext-BRQTC3wB.js";import"./CategoricalChart-C7SCseXA.js";import"./Symbols-MySoeztG.js";import"./symbol-9PvFUqwr.js";import"./step-CIIfuNim.js";import"./useElementOffset-BgX62E1v.js";import"./uniqBy-DVX4SdIc.js";import"./iteratee-BVIhKU_O.js";import"./ReactUtils-6iymp8WO.js";import"./ActivePoints-DJj1zq0e.js";import"./Dot-CqmXJMhg.js";import"./RegisterGraphicalItemId-BJjNu8aV.js";import"./ErrorBarContext-BCQYaQUJ.js";import"./GraphicalItemClipPath-BiTFGdna.js";import"./SetGraphicalItem-B20_5yrQ.js";import"./useAnimationId-sBKnBvXo.js";import"./getRadiusAndStrokeWidthFromDot-Df503nhX.js";import"./ActiveShapeUtils-DmtFxvwi.js";import"./isPlainObject-CESm1hTz.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BFSMfk7Q.js";import"./Trapezoid-R4CEZFO4.js";import"./Sector-BUTYQkfs.js";import"./Curve-BHLjwYFi.js";import"./Cross-DYI1Me4C.js";import"./index-D6ot0Q8y.js";import"./ChartSizeDimensions-Cv_HNug1.js";import"./OffsetShower-DwEE3buh.js";import"./PlotAreaShower-BdnS3yQL.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
