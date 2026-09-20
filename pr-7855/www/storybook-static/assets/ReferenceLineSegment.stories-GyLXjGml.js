import{R as e}from"./iframe-DqQsSS-D.js";import{R as i}from"./zIndexSlice-DEwzQEF1.js";import{C as n}from"./ComposedChart-BtU6IVsu.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-71Vvtgk6.js";import{X as s}from"./XAxis-BKSYmnyE.js";import{Y as c}from"./YAxis-Ci8o-AKr.js";import{L as d}from"./Line-CDjjcyDk.js";import{R as g}from"./ReferenceLine-DPKUUup1.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Dfb6FQUp.js";import"./index-Dbmbbyfr.js";import"./index-DhKVfvgy.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BBiJzE-S.js";import"./isWellBehavedNumber-DnbbC0Ec.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DFStnfMW.js";import"./axisSelectors-B52U77Z-.js";import"./d3-scale-DCqqE6RI.js";import"./index-B8fZ1s7u.js";import"./index-B4bGAE3u.js";import"./renderedTicksSlice-TJkJQb3w.js";import"./index-O7IqxgVs.js";import"./CartesianChart-DxivySAt.js";import"./chartDataContext-BlgeEOzh.js";import"./CategoricalChart-BaEimrAw.js";import"./CartesianAxis-BYaiVNcC.js";import"./Layer-D_OCfv3y.js";import"./Text-C5ELFOWd.js";import"./DOMUtils-DfpUN1kn.js";import"./useId-CY4qsl1d.js";import"./useBackwardsCompatibleTheme-BgrGij6q.js";import"./Label-B79akpip.js";import"./ZIndexLayer-CAYm_Ybv.js";import"./types-Dtf5SFP2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-u85x6jSW.js";import"./step-B0zbwdDt.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DE7FMoaT.js";import"./useAnimationId-YdFm9roE.js";import"./ActivePoints-CoFSOxUI.js";import"./Dot-mDqKU7lL.js";import"./RegisterGraphicalItemId-B_u3-RKa.js";import"./ErrorBarContext-Bvj5AtLG.js";import"./GraphicalItemClipPath-CH5UCRjx.js";import"./SetGraphicalItem-DiUOXkHE.js";import"./getRadiusAndStrokeWidthFromDot-C_whAPwi.js";import"./ActiveShapeUtils-_QhNTD3X.js";import"./useGraphicalItemIdentity-DdD2mi7M.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
