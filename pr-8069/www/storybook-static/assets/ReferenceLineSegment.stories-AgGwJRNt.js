import{R as e}from"./iframe-DmOC-Kec.js";import{R as i}from"./zIndexSlice-Dnmn7sAe.js";import{C as n}from"./ComposedChart-BkZrMH3I.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-Wch0FJ_N.js";import{X as s}from"./XAxis-ByYBkyBH.js";import{Y as c}from"./YAxis-CcRfM4MH.js";import{L as d}from"./Line-DKDIyTAQ.js";import{R as g}from"./ReferenceLine-D2COgrH4.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-26j8lv8v.js";import"./index-B8dvCc79.js";import"./index-B0Er-kke.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-4b8FSqHP.js";import"./isWellBehavedNumber-CieT4pBa.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BAE5OfjG.js";import"./axisSelectors-BhU9IBL9.js";import"./d3-scale-BzcnxCkj.js";import"./index-DauADrzh.js";import"./index-FaI1Rch4.js";import"./renderedTicksSlice-BbRk6kVT.js";import"./index-D-7FIJbH.js";import"./CartesianChart-AsMQKsVq.js";import"./chartDataContext-CyP3b76p.js";import"./CategoricalChart-D6inGbGf.js";import"./CartesianAxis-D2u0I9ER.js";import"./Layer-DqeA_nA2.js";import"./Text-CTMopfR1.js";import"./pageBackground--_ixwiIK.js";import"./useId-BuaxFojz.js";import"./useBackwardsCompatibleTheme-BIerM7O_.js";import"./Label-Dya5Ed-c.js";import"./ZIndexLayer-CPUam-Va.js";import"./dataEntryStyles-CeCSWdpc.js";import"./types-Bi5NSMkf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-Dsy708jZ.js";import"./step-BqN3jYrj.js";import"./path-DyVhHtw_.js";import"./activeStyles-CHqa9trn.js";import"./useAnimationId-BrR1kfhy.js";import"./ActivePoints-BeW2RHR2.js";import"./Dot-Ck4Vihzk.js";import"./RegisterGraphicalItemId-CjMER2_v.js";import"./ErrorBarContext-CznJE672.js";import"./GraphicalItemClipPath-a-_vkjmo.js";import"./SetGraphicalItem-DTnHHD7N.js";import"./getRadiusAndStrokeWidthFromDot-CG4C4UUI.js";import"./ActiveShapeUtils-tFB41mpm.js";import"./useEffectiveDataKey-DpBICXZ6.js";import"./CartesianScaleHelper-C9Oze4oB.js";const fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},he=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,he as __namedExportsOrder,fe as default};
