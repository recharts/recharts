import{R as e}from"./iframe-Brw_3xg7.js";import{R as i}from"./zIndexSlice-2iAxrZkm.js";import{C as n}from"./ComposedChart-DXqSl_Jh.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BxIxxakc.js";import{X as s}from"./XAxis-DXhKRI9c.js";import{Y as c}from"./YAxis-B_qMueqj.js";import{L as d}from"./Line-BR2md8Jx.js";import{R as g}from"./ReferenceLine-CugM2hee.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ConCS3s7.js";import"./index-CtKZ7ilo.js";import"./index-BzcphCAG.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-6Y628-3q.js";import"./isWellBehavedNumber-CKWY2x6w.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CMScH4Y-.js";import"./axisSelectors-BgtJq2Kp.js";import"./d3-scale-DDiKCNKi.js";import"./index-BcnaSdn8.js";import"./index-DAIxs-aJ.js";import"./renderedTicksSlice-7YaTp-wU.js";import"./index-DZwFur8w.js";import"./CartesianChart-D0m-K2vW.js";import"./chartDataContext-B_uwNVrC.js";import"./CategoricalChart-CtbAzaJE.js";import"./CartesianAxis-DBWQUVsj.js";import"./Layer-U4JZqCxa.js";import"./Text-DAJ7DyY-.js";import"./DOMUtils-Df1YjqfK.js";import"./useId-DReBIxno.js";import"./useBackwardsCompatibleTheme-bimwwtgB.js";import"./Label-CpCnMIaY.js";import"./ZIndexLayer-DvhvnUDg.js";import"./types-BTkYx2NR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C9eVciME.js";import"./step-Bi6RETvz.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-O-Ra8tLQ.js";import"./useAnimationId-LBf_tWSw.js";import"./ActivePoints-CFOMS5xz.js";import"./Dot-CwLVs_ZX.js";import"./RegisterGraphicalItemId-11bybKxG.js";import"./ErrorBarContext-FTmrznrA.js";import"./GraphicalItemClipPath-SQ9_TryA.js";import"./SetGraphicalItem-CcGmMfg9.js";import"./getRadiusAndStrokeWidthFromDot-DFfjCAar.js";import"./ActiveShapeUtils-DolYUreE.js";import"./useGraphicalItemIdentity-CdCNj1VU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
