import{e}from"./iframe-Dbih6tM_.js";import{g as i}from"./zIndexSlice-F7HsGAhb.js";import{C as a}from"./ComposedChart-hkcoJXW_.js";import{p}from"./Page-DPte-9pC.js";import{C as n}from"./CartesianGrid-B47bI95A.js";import{X as s}from"./XAxis-UKVsyr7-.js";import{Y as c}from"./YAxis-x6PKBVdt.js";import{L as d}from"./Line-DKLERS8c.js";import{R as g}from"./ReferenceLine-BL9IxKTo.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-u9L_0Kl5.js";import"./get-DVIR8H8G.js";import"./resolveDefaultProps-C6XhIduD.js";import"./isWellBehavedNumber-C76PNx6x.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzkBSRjy.js";import"./index-yjWx6Bgh.js";import"./index-C3fYT42t.js";import"./index-VrctuRm7.js";import"./renderedTicksSlice-CY1pIMUb.js";import"./axisSelectors-DGtb_paL.js";import"./d3-scale-QFZ3DYXF.js";import"./CartesianChart-sZ1KYKyT.js";import"./chartDataContext-CumcEPMe.js";import"./CategoricalChart-BUbHs2Eq.js";import"./CartesianAxis-sMFUgupR.js";import"./Layer-B42S8g5T.js";import"./Text-BD0wWctz.js";import"./DOMUtils-DtcMNyN4.js";import"./Label-CzYO866A.js";import"./ZIndexLayer-DaMCCGdS.js";import"./types-Bhc7gOzP.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Curve-CbpaSJeH.js";import"./step-EAtlMAAS.js";import"./path-DyVhHtw_.js";import"./ReactUtils-Bj9mmMxB.js";import"./ActivePoints-DzbjRTsh.js";import"./Dot-BKoIVpn9.js";import"./RegisterGraphicalItemId-CoMv7TZ7.js";import"./ErrorBarContext-CaITZn-H.js";import"./GraphicalItemClipPath-BqpiOJ0K.js";import"./SetGraphicalItem-C_rRFyeV.js";import"./useAnimationId-CWLhhp_H.js";import"./getRadiusAndStrokeWidthFromDot-DA8FMUL1.js";import"./ActiveShapeUtils-B7EaMEP1.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ae={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const pe=["Segment"];export{t as Segment,pe as __namedExportsOrder,ae as default};
