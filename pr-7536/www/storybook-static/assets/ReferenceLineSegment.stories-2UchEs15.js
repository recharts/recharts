import{R as e}from"./iframe-blo479ea.js";import{R as i}from"./zIndexSlice-B-NboAfn.js";import{C as a}from"./ComposedChart-CVG--YjL.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-D3R3TJGT.js";import{X as s}from"./XAxis-D2AMCCh6.js";import{Y as c}from"./YAxis-CbVMh33A.js";import{L as d}from"./Line-BBbdtddm.js";import{R as g}from"./ReferenceLine-C8Pb_Idz.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CAybpjPd.js";import"./index-5Xauv1a1.js";import"./index-DwOveEH0.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-d-c_EfmU.js";import"./isWellBehavedNumber-vMDquOd-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DZW1xtMc.js";import"./index-Bk8DAVsF.js";import"./index-D98VNpy1.js";import"./renderedTicksSlice-DSEoRhRT.js";import"./axisSelectors-BsWadBKB.js";import"./d3-scale-D5iAOdDh.js";import"./CartesianChart-QYdWDySw.js";import"./chartDataContext-Dkqb0EXV.js";import"./CategoricalChart-B3UrSPAC.js";import"./CartesianAxis-Cbfv_t23.js";import"./Layer-C26T8E2g.js";import"./Text-CjpmWysE.js";import"./DOMUtils-Tw2iKYp4.js";import"./Label-CXH82xbV.js";import"./ZIndexLayer-2I4OO_bH.js";import"./types-CAFMP27K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-2n5H6-9L.js";import"./step-D2-UZcK5.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bj_FYwBV.js";import"./useAnimationId-NeumBkdx.js";import"./ActivePoints-y80Iu2pf.js";import"./Dot-BqQZbjFP.js";import"./RegisterGraphicalItemId-D8SJKJaD.js";import"./ErrorBarContext-C5s-a9Tb.js";import"./GraphicalItemClipPath-BMIU9EC2.js";import"./SetGraphicalItem-DxPgsw5M.js";import"./getRadiusAndStrokeWidthFromDot-Bz6_dvfT.js";import"./ActiveShapeUtils-DIyj0lNk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ne=["Segment"];export{t as Segment,ne as __namedExportsOrder,pe as default};
