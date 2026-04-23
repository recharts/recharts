import{e as t}from"./iframe-9z1u-Aav.js";import{P as a}from"./PlotAreaShower-B88-OHCb.js";import{c as p}from"./hooks-6Kt3djxY.js";import{R as s}from"./arrayEqualityCheck-BxC1vNgX.js";import{C as n}from"./ComposedChart-BYDqkFXo.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-Eu88whDC.js";import{X as h}from"./XAxis-40ikClNA.js";import{Y as c}from"./YAxis-DrCwJ6Az.js";import{L as g}from"./Legend-B3VISwut.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-Dl068BxX.js";import"./immer-Bw5e914R.js";import"./axisSelectors-COp_2eg-.js";import"./d3-scale-Gw1yRTSk.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-hYLPXQk1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCPy8B0Q.js";import"./index-B2EC147Y.js";import"./zIndexSlice-CgHKAdAg.js";import"./renderedTicksSlice-BHud9xuy.js";import"./CartesianChart-BYVE1KsL.js";import"./chartDataContext-C3cOG7oG.js";import"./CategoricalChart-BSBYVT05.js";import"./Layer-CQ8qv4WV.js";import"./ReactUtils-BhZgkjsQ.js";import"./Label-CLPrmfez.js";import"./Text-hlTX4MHR.js";import"./DOMUtils-C8Hk5ID2.js";import"./ZIndexLayer-DD6-9cCr.js";import"./ActivePoints-BrNY2xuv.js";import"./Dot-Bkkq57cb.js";import"./types-DkmL6Els.js";import"./RegisterGraphicalItemId-BFftKPbg.js";import"./ErrorBarContext-C3IrAAAi.js";import"./GraphicalItemClipPath-BPP11Y5p.js";import"./SetGraphicalItem-DhXUBNxa.js";import"./useAnimationId-DEUiQ2FH.js";import"./getRadiusAndStrokeWidthFromDot-OHnzfSYw.js";import"./ActiveShapeUtils-Dr5kvCCk.js";import"./isPlainObject-C-oBiTzF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BL9Pth1-.js";import"./Trapezoid-Cob3LyNG.js";import"./Sector-Blap6T8q.js";import"./Symbols-Do-WoS-v.js";import"./symbol-CozNTkvH.js";import"./step-DgnayOtY.js";import"./Curve-CaIVque-.js";import"./CartesianAxis-CCI6UuOV.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CgJ9LAWC.js";import"./uniqBy-klSQtmRp.js";import"./iteratee-CZCXTLGV.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: 'usePlotAreaExample',
  render: (args: Args) => {
    return <ResponsiveContainer width={args.width} height={args.height}>
        <ComposedChart data={pageData} margin={args.margin} style={args.style}>
          <Line dataKey="pv" />
          <XAxis dataKey="name" />
          <YAxis />
          <Legend />
          <PlotAreaShower />
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
}`,...(m=(i=e.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ft=["UsePlotArea"];export{e as UsePlotArea,ft as __namedExportsOrder,At as default};
