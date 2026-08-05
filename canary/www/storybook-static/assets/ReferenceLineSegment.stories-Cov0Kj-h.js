import{R as e}from"./iframe-D972tbhF.js";import{R as i}from"./zIndexSlice-Dmvy26G-.js";import{C as a}from"./ComposedChart-CTTx4JQZ.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CY_9Ffyk.js";import{X as s}from"./XAxis-QP_2w1I7.js";import{Y as c}from"./YAxis-MB1xCt9L.js";import{L as d}from"./Line-DPj7HunO.js";import{R as g}from"./ReferenceLine-B9nBekXu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2OThsuy.js";import"./index-D9VN6yju.js";import"./index-C5z2sCvf.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D_CwbNhq.js";import"./isWellBehavedNumber-CISTmZa5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ouFvztbg.js";import"./index-oKVWKKHt.js";import"./index-zPQcggW0.js";import"./axisSelectors-uJIqnO2D.js";import"./d3-scale-CR9xOcuY.js";import"./renderedTicksSlice-Dv4CGxUS.js";import"./CartesianChart-BjAe6VAT.js";import"./chartDataContext-Cq56uXGO.js";import"./CategoricalChart-DKJz-sZX.js";import"./CartesianAxis-B06URywl.js";import"./Layer-C5RVdPDc.js";import"./Text-Dysxol0f.js";import"./DOMUtils-DPBa-ha3.js";import"./Label-BZnc8KKN.js";import"./ZIndexLayer-Dhusbhig.js";import"./types-DLeA2L4w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C7EwwBej.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DGKxAkYd.js";import"./step-9Pc3Vsuh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-2p3qtLJi.js";import"./useAnimationId-BPwHrlOs.js";import"./ActivePoints-SQF2J3GR.js";import"./Dot-DBr8YjaB.js";import"./RegisterGraphicalItemId-ySe1Fca9.js";import"./ErrorBarContext-DNvNglsi.js";import"./GraphicalItemClipPath-DuVjniBd.js";import"./SetGraphicalItem-EZqGepIx.js";import"./graphicalItemIdentity-BolIVYF7.js";import"./ActiveShapeUtils-D5m6KacQ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const se={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ce=["Segment"];export{t as Segment,ce as __namedExportsOrder,se as default};
