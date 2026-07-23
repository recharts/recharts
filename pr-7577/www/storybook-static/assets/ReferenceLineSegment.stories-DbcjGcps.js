import{R as e}from"./iframe-DDIh6oSg.js";import{R as i}from"./zIndexSlice-D80Tj10e.js";import{C as a}from"./ComposedChart-Bwi8FpMM.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DZFbX-zF.js";import{X as s}from"./XAxis-BkhNyeaA.js";import{Y as c}from"./YAxis-DvaopW4j.js";import{L as d}from"./Line-DXn8wVtE.js";import{R as g}from"./ReferenceLine-T4mysaaw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Bz-N2EDI.js";import"./index-Dxp0N8dY.js";import"./index-BAP9iPcz.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BovobWDa.js";import"./isWellBehavedNumber-m0qYgEug.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DOoCLeb6.js";import"./index-BwBS1vT9.js";import"./index-CVFqeXWK.js";import"./renderedTicksSlice-CodWg03c.js";import"./axisSelectors-Cj35qO4m.js";import"./d3-scale-DyPEX_SS.js";import"./CartesianChart-B73dWYbg.js";import"./chartDataContext-CsvjkcDn.js";import"./CategoricalChart-B8WXtgJK.js";import"./CartesianAxis-DjQVT2FJ.js";import"./Layer-BjK-uYm4.js";import"./Text-DiDEm6xU.js";import"./DOMUtils-DNdwN9ud.js";import"./Label-7ECcoRBX.js";import"./ZIndexLayer-CDkdwb16.js";import"./types-CnDlnigw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-Cd-wWA8T.js";import"./step-i4RfCE80.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BksUzG9w.js";import"./useAnimationId-Cx3p02Wi.js";import"./ActivePoints-D9ieR1r7.js";import"./Dot-C-WD7XjH.js";import"./RegisterGraphicalItemId-CqU17xv7.js";import"./ErrorBarContext-Bx5pZcRj.js";import"./GraphicalItemClipPath-BMP70uQv.js";import"./SetGraphicalItem-BS0-pWrT.js";import"./getRadiusAndStrokeWidthFromDot-B0O65Yh_.js";import"./ActiveShapeUtils-DSNDz2f-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
