import{R as t}from"./iframe-D_khPHZ1.js";import{z as p}from"./RechartsWrapper-Do2gsgG0.js";import{R as a}from"./zIndexSlice-KFlckT-7.js";import{C as n}from"./ComposedChart-v5twU8VD.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CHEB0oTV.js";import{X as l}from"./XAxis-CG7KNKev.js";import{Y as h}from"./YAxis-CYrms82_.js";import{L as c}from"./Legend-CSNjMX4v.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BBG9DHK8.js";import"./get-cF5BDHN6.js";import"./axisSelectors-CBjKjY28.js";import"./throttle-BBn7lrSC.js";import"./index-CB03tEHO.js";import"./index-BuxDgG-t.js";import"./isWellBehavedNumber-DGsU9FBh.js";import"./d3-scale-BLOap0UK.js";import"./index-syOpg8yK.js";import"./index-BI2dlpsL.js";import"./renderedTicksSlice-Jho7gpOC.js";import"./index-CHrlhwwU.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ci9HbE6G.js";import"./chartDataContext-DTR5p3jS.js";import"./CategoricalChart-Bfua2ObC.js";import"./Layer-D1docXzT.js";import"./Curve-D4vzOHVD.js";import"./types-DL7z7syQ.js";import"./step-BnRh-hkR.js";import"./path-DyVhHtw_.js";import"./activeStyles-DVSsJDko.js";import"./Label-DNajAghq.js";import"./Text-CRLTQjiS.js";import"./pageBackground-Cdf9H4fo.js";import"./useId-DisFqhsr.js";import"./useBackwardsCompatibleTheme-BLiMjfFD.js";import"./ZIndexLayer-BGvEmvHh.js";import"./dataEntryStyles-2My5Q2VA.js";import"./useAnimationId-BOA4oZA_.js";import"./ActivePoints-B4rNmWdt.js";import"./Dot-DSp-kazZ.js";import"./RegisterGraphicalItemId-CFGUNGbT.js";import"./ErrorBarContext-DWMtIAoI.js";import"./SetGraphicalItem-CGqBV4nA.js";import"./getRadiusAndStrokeWidthFromDot-ycj1XfTC.js";import"./ActiveShapeUtils-C8SJzoVE.js";import"./useEffectiveDataKey-B2F1WAcU.js";import"./CartesianAxis-DtPap_2c.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Symbols-BCYNi6oJ.js";import"./symbol-CdZ0n7Lr.js";import"./useElementOffset-9IHiAY7G.js";import"./uniqBy-DXUw7-JM.js";import"./iteratee-C2BbWe9-.js";import"./isArguments-yB-y1yaH.js";const ft={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},o={name:"usePlotAreaExample",render:r=>t.createElement(a,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},yt=["UsePlotArea"];var e,i,m;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    width: '100%',
    height: 400,
    margin: {
      top: 30,
      right: 170,
      bottom: 30,
      left: 120
    },
    style: {
      border: '1px solid #ccc'
    }
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{o as UsePlotArea,yt as __namedExportsOrder,ft as default};
