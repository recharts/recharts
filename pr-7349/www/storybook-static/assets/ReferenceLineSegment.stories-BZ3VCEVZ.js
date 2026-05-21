import{e}from"./iframe-D2xkh5VA.js";import{g as i}from"./arrayEqualityCheck-BcvopYI_.js";import{C as a}from"./ComposedChart-oF9YiWjC.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-DkShnBeV.js";import{X as s}from"./XAxis-8irwFxlw.js";import{Y as c}from"./YAxis-Bb2589BF.js";import{L as d}from"./Line-C-3S5d4g.js";import{R as g}from"./ReferenceLine-Dn43ciGK.js";import{R as f}from"./RechartsHookInspector-BNLXTPTn.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-ba1qBB1K.js";import"./immer-CX6PUSO2.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAWcFgQP.js";import"./index-DQcqmY6q.js";import"./hooks-BYxDncjb.js";import"./axisSelectors-7PXIpU8J.js";import"./d3-scale-CrDd0VeH.js";import"./zIndexSlice-BbkJeUOK.js";import"./renderedTicksSlice-C-KOSoJD.js";import"./CartesianChart-BJzueQ6r.js";import"./chartDataContext-DR1VP15t.js";import"./CategoricalChart-BDCy0ysN.js";import"./CartesianAxis-DAZlFlgD.js";import"./Layer-DhOsa-t6.js";import"./Text-hIOc-MSS.js";import"./DOMUtils-BkYWFWy3.js";import"./Label-DeRbtMqy.js";import"./ZIndexLayer-C7En4AyY.js";import"./types-CxiHHYTB.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-DLNzalYA.js";import"./step-C9rAKZ37.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Bwb7QYmO.js";import"./ActivePoints-BGHqbzdd.js";import"./Dot-I5Kzo50C.js";import"./RegisterGraphicalItemId-D_8matpL.js";import"./ErrorBarContext-CJXaSsld.js";import"./GraphicalItemClipPath-DFyECcqW.js";import"./SetGraphicalItem-DpgyXd2u.js";import"./useAnimationId-DiNRYHAi.js";import"./getRadiusAndStrokeWidthFromDot-BhBat3wy.js";import"./ActiveShapeUtils-B5QqFS4A.js";import"./isPlainObject-BMKBAZsK.js";import"./isPlainObject-BSutPv-K.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-bibejZah.js";import"./ChartSizeDimensions-1DNJC0TT.js";import"./OffsetShower-CUjzMbk1.js";import"./PlotAreaShower-BjwPr_87.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(f,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const le=["Segment"];export{t as Segment,le as __namedExportsOrder,fe as default};
