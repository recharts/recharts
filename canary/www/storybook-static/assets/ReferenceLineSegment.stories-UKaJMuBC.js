import{e}from"./iframe-D_8UNJGJ.js";import{R as i}from"./arrayEqualityCheck-DLi0Ag40.js";import{C as p}from"./ComposedChart-D_1Rjk4a.js";import{C as a}from"./CartesianGrid-DoYIeoEt.js";import{X as n}from"./XAxis-nL349YCp.js";import{Y as s}from"./YAxis-UxrLaYW9.js";import{L as c}from"./Line-BhgCy_e3.js";import{R as d}from"./ReferenceLine-Cprbp8me.js";import{R as g}from"./RechartsHookInspector-DqWSEPyK.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B5V57fEA.js";import"./immer-DgVi67O2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CeUnYUBi.js";import"./index-CjxbrGoj.js";import"./hooks-BZrhZ7vg.js";import"./axisSelectors-CS_KlM3N.js";import"./d3-scale-DRFIPlHa.js";import"./zIndexSlice-B5sMKRff.js";import"./renderedTicksSlice-DMlkCP1f.js";import"./CartesianChart-6BHGgpGM.js";import"./chartDataContext-ClhoRpui.js";import"./CategoricalChart-DcPua93T.js";import"./CartesianAxis-CmGsQYnB.js";import"./Layer-CSFY2JoB.js";import"./Text-BpbKY-ox.js";import"./DOMUtils-Dbz4rk_T.js";import"./Label-fZtmoCeO.js";import"./ZIndexLayer-B2K1T5O_.js";import"./types-DAVY4nYI.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-lBfKzFjL.js";import"./ActivePoints-DBRR_Zdk.js";import"./Dot-C1CtLKbe.js";import"./RegisterGraphicalItemId-DLMmL-q8.js";import"./ErrorBarContext-F8JTwXXl.js";import"./GraphicalItemClipPath-BRXvyRUx.js";import"./SetGraphicalItem-CMT6Fqt6.js";import"./useAnimationId-BTJ6QCKz.js";import"./getRadiusAndStrokeWidthFromDot-DQGbBU8q.js";import"./ActiveShapeUtils-CXuAv7RR.js";import"./isPlainObject-CmeHN-q2.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CviW58v0.js";import"./Trapezoid-BoP7ymTd.js";import"./Sector-BL-LF7sA.js";import"./Symbols-CHCjzVCk.js";import"./symbol-bY4o9tnw.js";import"./step-CSwA1lmy.js";import"./Curve-ICQj_4TC.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CFdITy7w.js";import"./ChartSizeDimensions-CZ_yFPOk.js";import"./OffsetShower-CkWYNF-8.js";import"./PlotAreaShower-iC8rErQ_.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis type="number" />
          <Line dataKey="uv" />
          <ReferenceLine segment={[{
          x: 'Page A',
          y: 0
        }, {
          x: 'Page E',
          y: 1500
        }]} />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
