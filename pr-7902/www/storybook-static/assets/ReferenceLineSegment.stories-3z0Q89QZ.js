import{R as e}from"./iframe-BnuuYCdy.js";import{R as i}from"./zIndexSlice-BbvX8GRP.js";import{C as n}from"./ComposedChart-BSlw0HFk.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BoiYU0vs.js";import{X as s}from"./XAxis-SZJEJq9X.js";import{Y as c}from"./YAxis-C9KSlBTW.js";import{L as d}from"./Line-B-ErwV6g.js";import{R as g}from"./ReferenceLine-Fwx2NVmg.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-hzsPLVCI.js";import"./index-BBLVSC9o.js";import"./index-DGdfhc42.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BKuWdgA8.js";import"./isWellBehavedNumber-Bo6YgW7B.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-yuVx-GfW.js";import"./axisSelectors-LqE-nBKd.js";import"./d3-scale-Xitmtu6a.js";import"./index-B7n-SwGH.js";import"./index-Bpn4eiX5.js";import"./renderedTicksSlice-BB-WXCKZ.js";import"./index-Co63ZXDS.js";import"./CartesianChart-Csg_49y8.js";import"./chartDataContext-Cfs5ZB_U.js";import"./CategoricalChart-D69sax0F.js";import"./CartesianAxis-D94E5CAk.js";import"./Layer-CdUwTkt1.js";import"./Text-CGVn4Fi7.js";import"./DOMUtils-uoptzxcb.js";import"./useId-DfmsLig3.js";import"./useBackwardsCompatibleTheme-B5XCxlLZ.js";import"./Label-B4GoECSR.js";import"./ZIndexLayer-exEMosZg.js";import"./types-CkU7DeC5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DLpdI-qq.js";import"./step-CQAloss-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DduhreQ3.js";import"./useAnimationId-DPByLvsu.js";import"./ActivePoints-DSOuOqL1.js";import"./Dot-DZr8LyTD.js";import"./RegisterGraphicalItemId-DPzJCfll.js";import"./ErrorBarContext-Bs4CO-eU.js";import"./GraphicalItemClipPath-Dkj0uJsh.js";import"./SetGraphicalItem-DVMg4m0V.js";import"./getRadiusAndStrokeWidthFromDot-3avq4t8Q.js";import"./ActiveShapeUtils-7-0YNMZJ.js";import"./useGraphicalItemIdentity-C2Y0PCNK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
