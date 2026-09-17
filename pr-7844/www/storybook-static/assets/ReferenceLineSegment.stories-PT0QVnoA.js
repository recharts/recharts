import{R as e}from"./iframe-Bcl-Wsua.js";import{R as i}from"./zIndexSlice-CAQaUmZK.js";import{C as n}from"./ComposedChart-BCODivHJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-B2dFGKDr.js";import{X as s}from"./XAxis-BkzTF5vO.js";import{Y as c}from"./YAxis-DiEiYw2x.js";import{L as d}from"./Line-BYiC1NaN.js";import{R as g}from"./ReferenceLine-Dw7BWj3Z.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-ByTEOgqW.js";import"./index-Byo_Z8h8.js";import"./index-CiCiyWr1.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dz58eYC6.js";import"./isWellBehavedNumber-DyceyyjX.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DAZxuN02.js";import"./axisSelectors-HkZtvUb3.js";import"./d3-scale-Bz3uBv2F.js";import"./index-YOpejnVN.js";import"./index-6jgft-oG.js";import"./renderedTicksSlice-BjEraSyi.js";import"./index-D0zdUyje.js";import"./CartesianChart-5huH0yXB.js";import"./chartDataContext-LpcG4P9k.js";import"./CategoricalChart-xwTlxCLL.js";import"./CartesianAxis-C4G_M4Jp.js";import"./Layer-DZWwUS0u.js";import"./Text-82Vb94kC.js";import"./DOMUtils-f-jZlskf.js";import"./useId-B3g5LtRX.js";import"./useBackwardsCompatibleTheme-hNwFldyo.js";import"./Label-CKR6MZGL.js";import"./ZIndexLayer-j6jNc8g-.js";import"./types-DyxZGeRY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-nBoa-bSt.js";import"./step-D_84ehuK.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Du4sNDn0.js";import"./useAnimationId-CLfnnxh1.js";import"./ActivePoints-DjQ1bPvM.js";import"./Dot-BL8fSCF8.js";import"./RegisterGraphicalItemId-gwGVCH_O.js";import"./ErrorBarContext-Yi3ZPeq6.js";import"./GraphicalItemClipPath-w0-QNnMD.js";import"./SetGraphicalItem-Bv_ZKENs.js";import"./getRadiusAndStrokeWidthFromDot-A7w8EsXG.js";import"./ActiveShapeUtils-BI8YD_7c.js";import"./useGraphicalItemIdentity-BOUOyfoU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
