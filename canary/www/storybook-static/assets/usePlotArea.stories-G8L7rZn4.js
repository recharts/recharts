import{R as t}from"./iframe-u4ce63CG.js";import{j as a}from"./RechartsWrapper-Zz5ful62.js";import{R as p}from"./zIndexSlice-BYJycarP.js";import{C as n}from"./ComposedChart-C2sXY6fb.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-BGSQWkLw.js";import{X as l}from"./XAxis-ycYuR5GD.js";import{Y as h}from"./YAxis-BSJWLgXb.js";import{L as c}from"./Legend-BtGPt8jj.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CgaWkI-c.js";import"./get-C2VjdU0L.js";import"./axisSelectors-CGHflyYT.js";import"./throttle-B6MgLZYN.js";import"./index-BVP_svq1.js";import"./index-BKlhDgWa.js";import"./isWellBehavedNumber-DjD-6vVv.js";import"./d3-scale-B8KmfmKn.js";import"./index-pI1Zm9lH.js";import"./index-PkCf_CwH.js";import"./renderedTicksSlice-Cs4cysVU.js";import"./index-CMticpJd.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-Ddb32mjN.js";import"./chartDataContext-0PEmuSXk.js";import"./CategoricalChart-BiBJy5y7.js";import"./Layer-DNxK11xQ.js";import"./Curve-Cpv10agS.js";import"./types-BSKo_D-h.js";import"./step-B8l-YbAv.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B0QYHb0Z.js";import"./Label-D-DGLST-.js";import"./Text-B-fKZlN3.js";import"./DOMUtils-DPz05X-i.js";import"./useId-CDzZCSG6.js";import"./useBackwardsCompatibleTheme-BMXS8hwA.js";import"./ZIndexLayer-BDv8sIeq.js";import"./useAnimationId-CFY7vA8F.js";import"./ActivePoints-CmJoQcI8.js";import"./Dot-CyCokxWF.js";import"./RegisterGraphicalItemId-CERn6dbU.js";import"./ErrorBarContext-D7weRgKB.js";import"./GraphicalItemClipPath-BkjNj3rm.js";import"./SetGraphicalItem-R2AcNzTI.js";import"./getRadiusAndStrokeWidthFromDot-BNYPB0Rc.js";import"./ActiveShapeUtils-D76eZVf4.js";import"./useGraphicalItemIdentity-DQSDp_oq.js";import"./CartesianAxis-BCYFcWgI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-ChXPCZdB.js";import"./symbol-je1hzkfs.js";import"./useElementOffset-DFmVgwFI.js";import"./uniqBy-DhJnILqR.js";import"./iteratee-DjERPAQW.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
