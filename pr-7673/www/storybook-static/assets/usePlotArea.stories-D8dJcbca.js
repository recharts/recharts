import{R as t}from"./iframe-WAmwAwqv.js";import{u as a}from"./CategoricalChart-BhQV0u5E.js";import{R as p}from"./zIndexSlice-B7760TIp.js";import{C as s}from"./ComposedChart-CXlUTja7.js";import{p as n}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DurF_OOw.js";import{X as l}from"./XAxis-C0HQ7bAn.js";import{Y as h}from"./YAxis-CvqgpJJX.js";import{L as c}from"./Legend-BexoLQlr.js";import"./preload-helper-Dp1pzeXC.js";import"./RechartsWrapper-DKs-TVlY.js";import"./index-BrLHScrZ.js";import"./index-BaF8VV2T.js";import"./index-dES25ELm.js";import"./index-BtWjEEaM.js";import"./throttle-DaWJmTtS.js";import"./get-C2VjdU0L.js";import"./axisSelectors-P4MAoEAr.js";import"./resolveDefaultProps-SfzQDdEE.js";import"./isWellBehavedNumber-BFdGE5VX.js";import"./d3-scale-B9CJnMVD.js";import"./renderedTicksSlice-QjUf-6mF.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-1FQk5Fvk.js";import"./chartDataContext-DyeMEqHY.js";import"./Layer-CduouMU4.js";import"./Curve-sYCo-eDU.js";import"./types-MF287rET.js";import"./step-BqQm5Gfz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dygs4a37.js";import"./Label-BI58xTcy.js";import"./Text-BQOM4h-3.js";import"./DOMUtils-BipZejVj.js";import"./useId-C6WCz-Hg.js";import"./useBackwardsCompatibleTheme-BbiUPV5J.js";import"./ZIndexLayer-BMgwtUUQ.js";import"./useAnimationId-DhhiM2kh.js";import"./ActivePoints-CCxDSDuJ.js";import"./Dot-BMicymMQ.js";import"./RegisterGraphicalItemId-eBpDv0na.js";import"./ErrorBarContext-BIoHTUJq.js";import"./GraphicalItemClipPath-Dnbhxb72.js";import"./SetGraphicalItem-CTKvKbys.js";import"./getRadiusAndStrokeWidthFromDot-7A-aLYCL.js";import"./ActiveShapeUtils-C0CPvy3n.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-BJa8Ix1s.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DkWxdQn-.js";import"./symbol-BXLJz2oe.js";import"./useElementOffset-DQMWT-KB.js";import"./uniqBy-D-IG-Bst.js";import"./iteratee-CJxJZXFJ.js";const ut={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(s,{data:n,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
