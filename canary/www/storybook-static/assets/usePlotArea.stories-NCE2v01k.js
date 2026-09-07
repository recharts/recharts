import{R as t}from"./iframe-RcHlpEKf.js";import{j as a}from"./RechartsWrapper-CqdoPGo4.js";import{R as p}from"./zIndexSlice-BoP2xr6w.js";import{C as n}from"./ComposedChart-EFkEwSkN.js";import{p as s}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-HYy8FRYx.js";import{X as l}from"./XAxis-BH3R8cCN.js";import{Y as h}from"./YAxis-C5hXHmze.js";import{L as c}from"./Legend-DuHhsx-p.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Sy-hwd8S.js";import"./get-C2VjdU0L.js";import"./axisSelectors-BfZD20OT.js";import"./throttle-B-NCjC4g.js";import"./index-vzeW1Ty_.js";import"./index-rSShmn2P.js";import"./isWellBehavedNumber-h-vCOYII.js";import"./d3-scale-phcZca4Z.js";import"./index-DfHRgTU5.js";import"./index-D8H-d46C.js";import"./renderedTicksSlice-Dzlqim1n.js";import"./index-BtSxVTMy.js";import"./PolarUtils-CTnnDHZv.js";import"./CartesianChart-DDx2cMpK.js";import"./chartDataContext-vN80Diu9.js";import"./CategoricalChart-CAKS8zF4.js";import"./Layer-Bl7Trn9v.js";import"./Curve-CcZscRZ7.js";import"./types-JXLuZB-s.js";import"./step-pIWHJRNG.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BD0VccbN.js";import"./Label-BpQvgwWr.js";import"./Text-DfdPFWZL.js";import"./DOMUtils-CQKDG8TV.js";import"./useId-B6srCqhz.js";import"./useBackwardsCompatibleTheme-nHddxgax.js";import"./ZIndexLayer-BNX-NDC0.js";import"./useAnimationId-9jumoZun.js";import"./ActivePoints-Ba2vyqxq.js";import"./Dot-C4knZ77r.js";import"./RegisterGraphicalItemId-CnIEFT0k.js";import"./ErrorBarContext-D1YbY_j0.js";import"./GraphicalItemClipPath-CsLhpBaz.js";import"./SetGraphicalItem-DuO6azf0.js";import"./getRadiusAndStrokeWidthFromDot-hc8l7Jma.js";import"./ActiveShapeUtils-B2oqSRKl.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianAxis-Br9WShXs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Symbols-DiD6U_fT.js";import"./symbol-D890eeWE.js";import"./useElementOffset-D_VyJzbA.js";import"./uniqBy-C7Ad3lRf.js";import"./iteratee-D_13UF3J.js";const At={title:"API/hooks/usePlotArea",component:a,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(p,{width:r.width,height:r.height},t.createElement(n,{data:s,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(l,{dataKey:"name"}),t.createElement(h,null),t.createElement(c,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}},ft=["UsePlotArea"];var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
