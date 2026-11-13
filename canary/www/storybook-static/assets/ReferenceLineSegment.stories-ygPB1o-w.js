import{R as e}from"./iframe-CXZlrf2U.js";import{R as i}from"./zIndexSlice-BjX2jCNd.js";import{C as n}from"./ComposedChart-Cd7Rssjf.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BvL82dRH.js";import{X as s}from"./XAxis-CiwCXYrG.js";import{Y as c}from"./YAxis-DfNp35yd.js";import{L as d}from"./Line-Dlj8YF05.js";import{R as g}from"./ReferenceLine-Cd-4_WmW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DzsDYtS8.js";import"./throttle-CeMcgCrB.js";import"./index-BXews0N3.js";import"./index-BQ37V211.js";import"./RechartsWrapper-DH-5ZOsj.js";import"./axisSelectors-CXSRT8oe.js";import"./polarAxisSelectors-C9d2CYxT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BmN7CMF4.js";import"./index-CPNldOVQ.js";import"./index-Dwq43-hP.js";import"./renderedTicksSlice-CNKxG0p9.js";import"./index-B6CEgg-5.js";import"./fillDefinitions-CXni0F_U.js";import"./CartesianChart-BF67_Mbn.js";import"./chartDataContext-Cr6H1IFD.js";import"./CategoricalChart-C5S6zTyC.js";import"./CartesianAxis-BaftQfIs.js";import"./Layer-cEFsn6Cd.js";import"./Text-ypQmpcnA.js";import"./ZIndexLayer-oMBe6LXA.js";import"./Label-DMZfCKi2.js";import"./types-BoOwr3-k.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DIPpxfHS.js";import"./step-CMXLmVWU.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CAbAzZrW.js";import"./ActivePoints-BSxRgFzT.js";import"./Dot-jYZs8or3.js";import"./activeStyles-guaYkALv.js";import"./useAnimationId-Bvdrz9cO.js";import"./Symbols-BDMCO_-i.js";import"./symbol-BZ1H3BIy.js";import"./ErrorBarContext-Bx2AhXHF.js";import"./SetGraphicalItem-GFUHKXGI.js";import"./getRadiusAndStrokeWidthFromDot-CwxjjF24.js";import"./ActiveShapeUtils-DAjhd_ui.js";import"./useEffectiveDataKey-ojW0Z0fn.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,ge as __namedExportsOrder,de as default};
