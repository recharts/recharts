import{e as t}from"./iframe-HCWlV7eT.js";import{P as a}from"./PlotAreaShower-KC6xEH0b.js";import{Y as p}from"./hooks-Bu1aMOxG.js";import{g as s}from"./arrayEqualityCheck-Cf1iFAtr.js";import{C as n}from"./ComposedChart-nAk3IKvH.js";import{p as l}from"./Page-DPte-9pC.js";import{L as d}from"./Line-CKD_CZ72.js";import{X as h}from"./XAxis-Cvv7ki52.js";import{Y as c}from"./YAxis-D1dMwbfR.js";import{L as g}from"./Legend-DW4BvmKE.js";import"./preload-helper-Dp1pzeXC.js";import"./ChartSizeDimensions-DdWY1IL4.js";import"./immer-CyT7MAhj.js";import"./axisSelectors-kc4WL651.js";import"./d3-scale-DGA5oTTZ.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-CKTz6CIA.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B3_OF8yL.js";import"./index-CG6p6UQd.js";import"./zIndexSlice-BUPMHSoM.js";import"./renderedTicksSlice-DNGVWtDy.js";import"./CartesianChart-CIcvcNyp.js";import"./chartDataContext-C29Qu4zj.js";import"./CategoricalChart-DsLokalm.js";import"./Layer-BieoRt7-.js";import"./ReactUtils-C2TKIy08.js";import"./Label-Cz3tNLpR.js";import"./Text-Sb1Xn8CY.js";import"./DOMUtils-Bqm3Lq_z.js";import"./ZIndexLayer-DYTZmJpE.js";import"./ActivePoints-cTIowq9F.js";import"./Dot-CSOnHbFY.js";import"./types-BVJNSeSn.js";import"./RegisterGraphicalItemId-S6JUBuqk.js";import"./ErrorBarContext-D9407eJA.js";import"./GraphicalItemClipPath-BdouDh12.js";import"./SetGraphicalItem-C9MUiNjo.js";import"./useAnimationId-BbyheOhI.js";import"./getRadiusAndStrokeWidthFromDot-ClmLFBR-.js";import"./ActiveShapeUtils-DMoSdW99.js";import"./isPlainObject-DzHCCxCs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CsPKVDyM.js";import"./Trapezoid-CtygYOR4.js";import"./Sector-BWvy9RzL.js";import"./Symbols-Eaix-2lc.js";import"./symbol-DfBAaUU7.js";import"./step-BzEMV51B.js";import"./Curve-B-66MxCQ.js";import"./CartesianAxis-Br883KRe.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./useElementOffset-fRCyg0pc.js";import"./uniqBy-Bh4jR5DJ.js";import"./iteratee-AiWfzrMQ.js";const At={title:"API/hooks/usePlotArea",component:p,parameters:{docs:{description:{component:"This story demonstrates the use of the `usePlotArea` hook to read chart plot area dimensions in a responsive container."}}}},e={name:"usePlotAreaExample",render:r=>t.createElement(s,{width:r.width,height:r.height},t.createElement(n,{data:l,margin:r.margin,style:r.style},t.createElement(d,{dataKey:"pv"}),t.createElement(h,{dataKey:"name"}),t.createElement(c,null),t.createElement(g,null),t.createElement(a,null))),args:{width:"100%",height:400,margin:{top:30,right:170,bottom:30,left:120},style:{border:"1px solid #ccc"}}};var o,i,m;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
