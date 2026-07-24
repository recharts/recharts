import{R as e}from"./iframe-Cug8bpW1.js";import{R as i}from"./zIndexSlice-9cZpiRga.js";import{C as a}from"./ComposedChart-Bv2dV5dB.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-BjNhFx1r.js";import{X as s}from"./XAxis-BfPgGv85.js";import{Y as c}from"./YAxis-uhDp_b-D.js";import{L as d}from"./Line-B5X5EC2f.js";import{R as g}from"./ReferenceLine-BqyN-VOa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B6lLkzEm.js";import"./index-BU-oTyxR.js";import"./index-A9iLt5fb.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CWL5wq5C.js";import"./isWellBehavedNumber-1QeuJ8xh.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DxwXXeuL.js";import"./index-GrHgVuHl.js";import"./index-C2En2hdi.js";import"./renderedTicksSlice-DuZDB9Ry.js";import"./axisSelectors-BKPMDK9R.js";import"./d3-scale-Dh_zFLyg.js";import"./CartesianChart-DEYZwCE3.js";import"./chartDataContext-BQl3S7aI.js";import"./CategoricalChart-1sHQms95.js";import"./CartesianAxis-BVOPpVQH.js";import"./Layer-DAaIMucZ.js";import"./Text-Y2ry5wK9.js";import"./DOMUtils-DIK0_8l8.js";import"./Label-C_AgOq8t.js";import"./ZIndexLayer-B_am4wav.js";import"./types-BJnTryYo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-C1DFTxWC.js";import"./step-DmCiiBno.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C6_8UlhB.js";import"./useAnimationId-iyUsFQUM.js";import"./ActivePoints-D2WCNAyw.js";import"./Dot-g0fXnjiJ.js";import"./RegisterGraphicalItemId-D2I1FNOP.js";import"./ErrorBarContext-DaF_EPCk.js";import"./GraphicalItemClipPath-48VFK23w.js";import"./SetGraphicalItem-CCK_hlSi.js";import"./getRadiusAndStrokeWidthFromDot-BrSt3YdC.js";import"./ActiveShapeUtils-CL8eHJZj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
