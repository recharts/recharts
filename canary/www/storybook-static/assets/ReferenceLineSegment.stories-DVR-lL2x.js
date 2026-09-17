import{R as e}from"./iframe-DqSUlz6e.js";import{R as i}from"./zIndexSlice-DtAX5jMh.js";import{C as n}from"./ComposedChart-j0xuhBF1.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-yxTxSCue.js";import{X as s}from"./XAxis-DmD7UEym.js";import{Y as c}from"./YAxis-DegTMzbt.js";import{L as d}from"./Line-Dnsu9Jwi.js";import{R as g}from"./ReferenceLine-Y_DGxgff.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DHy4hNYv.js";import"./index-CvBr5MD5.js";import"./index-Dw4JWeKW.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CwPSCmmx.js";import"./isWellBehavedNumber-DsplX-23.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B0IxRf2C.js";import"./axisSelectors-Bh_wIpJu.js";import"./d3-scale-CkMKmC-4.js";import"./index-BuJIoyr5.js";import"./index-7NBQQOYh.js";import"./renderedTicksSlice-Iw1xe9hi.js";import"./index-GNQmxyz-.js";import"./CartesianChart-BZt0ttBq.js";import"./chartDataContext-DLE2_VFr.js";import"./CategoricalChart-Chjdlx8c.js";import"./CartesianAxis-BPJ_bm1Z.js";import"./Layer-CcVS5xmO.js";import"./Text-rxtWTnFK.js";import"./DOMUtils-BO-LSrQT.js";import"./useId-DIxfitZT.js";import"./useBackwardsCompatibleTheme-Cpo7LNnn.js";import"./Label-COTXmSNC.js";import"./ZIndexLayer-w7X3Qx8i.js";import"./types-BK6ZMP2B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-XYmMSxrQ.js";import"./step-C_sGtyz6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DZn2nJaS.js";import"./useAnimationId-B7qxPui8.js";import"./ActivePoints-QMBiBXLX.js";import"./Dot-BfFUZLy_.js";import"./RegisterGraphicalItemId-GuyP8w5W.js";import"./ErrorBarContext-C2faiS6t.js";import"./GraphicalItemClipPath-CXwxXFyI.js";import"./SetGraphicalItem-BNDeXFGY.js";import"./getRadiusAndStrokeWidthFromDot-HVfHJii_.js";import"./ActiveShapeUtils-D4bP4Qte.js";import"./useGraphicalItemIdentity-P2fDicxj.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,fe as __namedExportsOrder,ge as default};
