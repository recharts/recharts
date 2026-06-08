import{R as e}from"./iframe-CT_on4dN.js";import{R as i}from"./zIndexSlice-9YwY2T6T.js";import{C as a}from"./ComposedChart-CqZcgDJh.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DEgNtFsT.js";import{X as s}from"./XAxis-DM4CuZe_.js";import{Y as c}from"./YAxis-C8PhcMfF.js";import{L as d}from"./Line-DjA4uRiB.js";import{R as g}from"./ReferenceLine-CgKlgQaH.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-MMHbxa5P.js";import"./index-gBOeA-qD.js";import"./index-DQkieKcs.js";import"./get-DAlxn1Zj.js";import"./resolveDefaultProps-Ngbi67w9.js";import"./isWellBehavedNumber-DcXfDBUW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-C-4qOiYS.js";import"./index-B37YLZmy.js";import"./index-BLrAz-7b.js";import"./renderedTicksSlice-Bp1Fmq8H.js";import"./axisSelectors-CiriuU2L.js";import"./d3-scale-B0V457C8.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CPDAsd82.js";import"./chartDataContext-BNQnQ5VT.js";import"./CategoricalChart-BJTL86x_.js";import"./CartesianAxis-Dqr_Wojb.js";import"./Layer-BDukNzPA.js";import"./Text-CMIOZbxn.js";import"./DOMUtils-CLh3lutj.js";import"./Label-DK-X0Mes.js";import"./ZIndexLayer-BBvvwP5n.js";import"./types-BSLS2Rfw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-D3g77UHX.js";import"./step-D6LclrFL.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B___w46g.js";import"./useAnimationId-DfgP8Qzr.js";import"./ActivePoints-DaxBQcxo.js";import"./Dot-LnWMvtRz.js";import"./RegisterGraphicalItemId-aTaFmyQg.js";import"./ErrorBarContext-BWZYzIr8.js";import"./GraphicalItemClipPath-BI7LHR9E.js";import"./SetGraphicalItem-Cgc_8Ru0.js";import"./getRadiusAndStrokeWidthFromDot-1x2538jp.js";import"./ActiveShapeUtils-7HjO8Td_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
