import{R as t}from"./iframe-C3lSaTFw.js";import{j as a}from"./RechartsWrapper-CM9ySMEh.js";import{R as p}from"./zIndexSlice-CVjGcfFW.js";import{C as n}from"./ComposedChart-ByMiL3yy.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-DICJfQJU.js";import{X as l}from"./XAxis-MYsgX6vB.js";import{Y as h}from"./YAxis-CGdCh3qj.js";import{L as c}from"./Legend-cxhj2kjR.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Cy9S0LxM.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BkcaIfMI.js";import"./throttle-BAVesAqd.js";import"./index-8Y4ihDcT.js";import"./index-CyFP1eEz.js";import"./isWellBehavedNumber-tLnZyTMG.js";import"./d3-scale-3ZX1sJwh.js";import"./index-Dt3obc0C.js";import"./index-BruKCsOi.js";import"./renderedTicksSlice-BCrJLlNF.js";import"./index-CCHBt1wf.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-66zTmp_E.js";import"./chartDataContext-8kJMOLTT.js";import"./CategoricalChart-PbT_m_Z4.js";import"./Layer-DCoygAxl.js";import"./Curve-D4S8erUE.js";import"./types-BmaDYfeO.js";import"./step-DxtN-o39.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BIU8Piw-.js";import"./Label-DRjcihT7.js";import"./Text-H-IPTcTj.js";import"./DOMUtils-DW6zNYNN.js";import"./useId-ByxRmCjV.js";import"./useBackwardsCompatibleTheme-BMLwE0D6.js";import"./ZIndexLayer-BIuAiCXb.js";import"./useAnimationId-Dtjg15yn.js";import"./ActivePoints-CS5Q6FEx.js";import"./Dot-zciZMpDM.js";import"./RegisterGraphicalItemId-C6IEzR7X.js";import"./ErrorBarContext-urOk63oK.js";import"./GraphicalItemClipPath-CWU7eMW9.js";import"./SetGraphicalItem-BLqiLXhC.js";import"./getRadiusAndStrokeWidthFromDot-p4PngwyL.js";import"./ActiveShapeUtils-Dqjt7W9Y.js";import"./useGraphicalItemIdentity-B93Md1_E.js";import"./CartesianAxis-BQ-frZs4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-gLeSQBZx.js";import"./symbol-BKxV6GsZ.js";import"./useElementOffset-Cal3qYIU.js";import"./uniqBy-CNbis68a.js";import"./iteratee-BZbHMMPe.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
