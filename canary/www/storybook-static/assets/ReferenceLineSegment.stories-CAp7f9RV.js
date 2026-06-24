import{R as e}from"./iframe-D4CuLoZz.js";import{R as i}from"./zIndexSlice-SXe885_i.js";import{C as a}from"./ComposedChart-DB0jlCn6.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-Dq-8txx_.js";import{X as s}from"./XAxis-eawce65C.js";import{Y as c}from"./YAxis-LKz9SoCr.js";import{L as d}from"./Line-CEbuZzhx.js";import{R as g}from"./ReferenceLine-Cswi-rBG.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CFokkZQV.js";import"./index-DKrwxI3E.js";import"./index-Cama49zD.js";import"./get-DBuLXD7N.js";import"./resolveDefaultProps-BIWi1Y-8.js";import"./isWellBehavedNumber-BHyLU3rm.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BytBl7Lq.js";import"./index-D0U5tyHV.js";import"./index-CRkJbrCH.js";import"./renderedTicksSlice-DHw40_9x.js";import"./axisSelectors-BkOYejTH.js";import"./d3-scale-Bg-gbMqf.js";import"./CartesianChart-D5hGWEsl.js";import"./chartDataContext-BdBlfWO1.js";import"./CategoricalChart-CDNCF4CW.js";import"./CartesianAxis-ntk7Om5m.js";import"./Layer-xCWemoOx.js";import"./Text-xYQOnqwx.js";import"./DOMUtils-CZgli98g.js";import"./Label-CcUkFPjg.js";import"./ZIndexLayer-CwgCBSKX.js";import"./types-DyFRA-Bh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BhJuHD0L.js";import"./step-DSq6gAzd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-EJSTJ3cq.js";import"./useAnimationId-DrVwX4j9.js";import"./ActivePoints-BXZGkgHe.js";import"./Dot-Du83lW60.js";import"./RegisterGraphicalItemId-BYXBvuEW.js";import"./ErrorBarContext-uD9druzE.js";import"./GraphicalItemClipPath-Dcao9gEo.js";import"./SetGraphicalItem-D5XyE2WD.js";import"./getRadiusAndStrokeWidthFromDot-CsYgyjN7.js";import"./ActiveShapeUtils-B2FaHUJe.js";import"./CartesianScaleHelper-C9Oze4oB.js";const pe={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
