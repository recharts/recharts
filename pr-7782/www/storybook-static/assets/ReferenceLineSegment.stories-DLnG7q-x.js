import{R as e}from"./iframe-SqguF_NX.js";import{R as i}from"./zIndexSlice-BkiV0otE.js";import{C as n}from"./ComposedChart-Dvz2V-iv.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Bt3LKIpL.js";import{X as s}from"./XAxis-P_and3Qh.js";import{Y as c}from"./YAxis-BezMzOf0.js";import{L as d}from"./Line-D3r5tZJE.js";import{R as g}from"./ReferenceLine-DehFbP2k.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BK_PPAk1.js";import"./index-B3GChKJN.js";import"./index-DZzaZipo.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BXjF7TxP.js";import"./isWellBehavedNumber-BVNp7Lfk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DtX1Azw0.js";import"./axisSelectors-zCi_DHLv.js";import"./d3-scale-HQIXvxJU.js";import"./index-GGoi087z.js";import"./index-BzPNjXR5.js";import"./renderedTicksSlice-CMNm7EBg.js";import"./index-BH7LBhiS.js";import"./CartesianChart-0Tm9s_Qh.js";import"./chartDataContext-Cw_Hfd-o.js";import"./CategoricalChart--bg0gB1r.js";import"./CartesianAxis-IyngpyO5.js";import"./Layer-DMTzFJJY.js";import"./Text-CGVR5o-9.js";import"./DOMUtils-C7uSFAMW.js";import"./useId-DDimChZF.js";import"./useBackwardsCompatibleTheme-Csth7N6u.js";import"./Label-Ln0updaQ.js";import"./ZIndexLayer-2JAxRQj0.js";import"./types-C4DG-fsm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-TumiDsb0.js";import"./step-DI1tw62n.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CVudD1tP.js";import"./useAnimationId-Cnc3ou0l.js";import"./ActivePoints-BdsoqPbh.js";import"./Dot-D7HgwkXZ.js";import"./RegisterGraphicalItemId-B2ssVdOY.js";import"./ErrorBarContext-CKOKE4j7.js";import"./GraphicalItemClipPath-DQVG9W_P.js";import"./SetGraphicalItem-DnieI-cg.js";import"./getRadiusAndStrokeWidthFromDot-C8zV7Km-.js";import"./ActiveShapeUtils-C8315rjX.js";import"./useGraphicalItemIdentity-CEMH6EIi.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
