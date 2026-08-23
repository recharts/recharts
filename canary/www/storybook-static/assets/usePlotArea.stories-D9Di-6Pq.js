import{R as t}from"./iframe-Bva2xGHH.js";import{u as a}from"./CategoricalChart-DYOSFUHe.js";import{R as p}from"./zIndexSlice-DeikvbmU.js";import{C as s}from"./ComposedChart-CvLJWAQC.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CogWmZIW.js";import{X as l}from"./XAxis-CsoDjkEh.js";import{Y as h}from"./YAxis-B36u7uIT.js";import{L as c}from"./Legend-D6c_RVFa.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DkrfE3IH.js";import"./index-VUoyG6xU.js";import"./index-EwtDjp0y.js";import"./index-Bo6z76Fs.js";import"./index-DT3MRaoS.js";import"./throttle-CFyzV36U.js";import"./get-C2VjdU0L.js";import"./axisSelectors-1RAYR2bl.js";import"./resolveDefaultProps-BuBoAocm.js";import"./isWellBehavedNumber-D9_2opJl.js";import"./d3-scale-CJSi8F9P.js";import"./renderedTicksSlice-CmjvxnPV.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-KP50bz7-.js";import"./chartDataContext-DHJzh3Cw.js";import"./Layer-PgPW5wj-.js";import"./Curve-C5PYz-5A.js";import"./types-CDHj9Y5Z.js";import"./step-C1KJzklo.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dw2l639N.js";import"./Label-Dki1vWaX.js";import"./Text-D8IJbXoV.js";import"./DOMUtils-CMvwzHzQ.js";import"./useId-Bwx6_eZW.js";import"./useBackwardsCompatibleTheme-3vkLTFmK.js";import"./ZIndexLayer-B1sYnbf5.js";import"./useAnimationId-DDHow2US.js";import"./ActivePoints-DDTXKmxX.js";import"./Dot-TiF0MySe.js";import"./RegisterGraphicalItemId-CycuLbwA.js";import"./ErrorBarContext-tOF5cXSF.js";import"./GraphicalItemClipPath-D8nHpKQ-.js";import"./SetGraphicalItem-482J7PRy.js";import"./getRadiusAndStrokeWidthFromDot-D-WW1Ids.js";import"./ActiveShapeUtils-zdhhOiSb.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-aOVQqLXO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-D9JQNcnZ.js";import"./symbol-8Tla0VKV.js";import"./useElementOffset-BC3T1f5H.js";import"./uniqBy-CeO9av7b.js";import"./iteratee-WIaZd5o8.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const At=["UsePlotArea"];export{e as UsePlotArea,At as __namedExportsOrder,ut as default};
