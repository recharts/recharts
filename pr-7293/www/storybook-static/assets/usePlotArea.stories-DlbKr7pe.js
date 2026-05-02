import{e as t}from"./iframe-CGwnqAI9.js";import{P as a}from"./PlotAreaShower-C1OT31tE.js";import{c as p}from"./hooks-CyDmPBvG.js";import{R as s}from"./arrayEqualityCheck-DRh0NsZa.js";import{C as n}from"./ComposedChart-C3W32EcH.js";import{p as l}from"./Page-Cj8EiXz7.js";import{L as d}from"./Line-hsHA11JF.js";import{X as h}from"./XAxis-B1wOh-_6.js";import{Y as c}from"./YAxis-DQ_Ub3Le.js";import{L as g}from"./Legend-DN_hPw8G.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DcTb07cJ.js";import"./immer-DfOKcAuw.js";import"./axisSelectors-BGY1T7LG.js";import"./d3-scale-DlZgn0s2.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-DSTq7oxQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DByz9jGi.js";import"./index-mavG575g.js";import"./zIndexSlice-BTBhIRz7.js";import"./renderedTicksSlice-C0ADS2ij.js";import"./CartesianChart-Bbfh0WUo.js";import"./chartDataContext-oPYA1VCq.js";import"./CategoricalChart-COt4unt0.js";import"./Layer-CQ6uqOgk.js";import"./ReactUtils-CbJaRrjx.js";import"./Label-CJpeNkBK.js";import"./Text-DNmyQGES.js";import"./DOMUtils-nZK1ZF4e.js";import"./ZIndexLayer-CMaPWngm.js";import"./ActivePoints-Cr6dU73k.js";import"./Dot-0lNFu7iq.js";import"./types-VBg1tlke.js";import"./RegisterGraphicalItemId-nbnlv4b-.js";import"./ErrorBarContext-CxWaFe4Q.js";import"./GraphicalItemClipPath-kWf0wfBs.js";import"./SetGraphicalItem-p36bNdDU.js";import"./useAnimationId-DHwy2PIZ.js";import"./getRadiusAndStrokeWidthFromDot-8id4PXjH.js";import"./ActiveShapeUtils-CKeH7i0X.js";import"./isPlainObject-BF1Vp7m2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BsqGVbsk.js";import"./Trapezoid-BXyomBoy.js";import"./Sector-NwDh2164.js";import"./Symbols-CWdafSUI.js";import"./symbol-D9RrWTM2.js";import"./step-BVKFw9bQ.js";import"./Curve-kVtEDQbb.js";import"./CartesianAxis-4LCb4x4u.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-CXOBSiaG.js";import"./uniqBy-DiZ8Z3bH.js";import"./iteratee-DjpPVy9L.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
