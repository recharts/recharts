import{R as t}from"./iframe-7RWUuhSd.js";import{u as a}from"./CategoricalChart-Dy4quV1E.js";import{R as p}from"./zIndexSlice-C-1xueag.js";import{C as s}from"./ComposedChart-pOhFm8zP.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-CL693QeV.js";import{X as l}from"./XAxis-C-yl8jm9.js";import{Y as h}from"./YAxis-8kn4A2SS.js";import{L as c}from"./Legend-GiST82uZ.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-Bxby6BNU.js";import"./index-BfsW4WVk.js";import"./index-CJpx5Qie.js";import"./index-DH_Nh8tm.js";import"./index-ST-ozWV_.js";import"./throttle-C227k_Ys.js";import"./get-C2VjdU0L.js";import"./axisSelectors-DDo2hoqB.js";import"./resolveDefaultProps-DASEB5Wz.js";import"./isWellBehavedNumber-BpVUwl5Y.js";import"./d3-scale-BsnTxIDO.js";import"./renderedTicksSlice-CZ8pQT90.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Cp-UDomk.js";import"./chartDataContext-CBmAGHT1.js";import"./Layer-BumiLaGI.js";import"./Curve-K5B3Xoou.js";import"./types-DB_EcD1u.js";import"./step-9lMeGmm4.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-awhheCod.js";import"./Label-DVgNkXBe.js";import"./Text-C5AxehkZ.js";import"./DOMUtils-CAVKjQcs.js";import"./RechartsThemeContext-ajl3dqdh.js";import"./ZIndexLayer-CjyDq4Qz.js";import"./useAnimationId-CBjNqWHO.js";import"./ActivePoints-DdYZ5tMW.js";import"./Dot-KQ9Tkozj.js";import"./RegisterGraphicalItemId-1lBEDF1k.js";import"./ErrorBarContext-CFwTRIJP.js";import"./GraphicalItemClipPath-BA1h2NiZ.js";import"./SetGraphicalItem-90z5HlWu.js";import"./getRadiusAndStrokeWidthFromDot-CVzIRP5K.js";import"./ActiveShapeUtils-DetKTjsC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-DWQJI5tm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DKsKe8A2.js";import"./symbol-DIvMV5l6.js";import"./useElementOffset-BOAPUBRF.js";import"./uniqBy-CMb7Fqzi.js";import"./iteratee-0AIsNve9.js";const gt={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ut=["UsePlotArea"];export{e as UsePlotArea,ut as __namedExportsOrder,gt as default};
