import{R as e}from"./iframe-Ba761dAt.js";import{R as i}from"./zIndexSlice-QfUsSAvl.js";import{C as a}from"./ComposedChart-xz85xxXO.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-CjVT43kO.js";import{X as s}from"./XAxis-BFSA3F3Y.js";import{Y as c}from"./YAxis-BGJzMLCA.js";import{L as d}from"./Line-Bm1u625u.js";import{R as g}from"./ReferenceLine-B1UOVjYD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DM8vz_S7.js";import"./index-CD7Kt9vJ.js";import"./index-CQZXBhnc.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BbsZGrBO.js";import"./isWellBehavedNumber-DtdZYAzd.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bka_uKoY.js";import"./index-DNu-VFbT.js";import"./index-jmRPS8ks.js";import"./renderedTicksSlice-C9WcFyVD.js";import"./axisSelectors-Cn6pQrFe.js";import"./d3-scale-MektT9AZ.js";import"./CartesianChart-BhhNM2dx.js";import"./chartDataContext-CIdWR6fk.js";import"./CategoricalChart-B2LsRV82.js";import"./CartesianAxis-Dp6wkVSq.js";import"./Layer-B5w5vx75.js";import"./Text-CN68nsih.js";import"./DOMUtils-BwEbS88Q.js";import"./Label-BnOVxmge.js";import"./ZIndexLayer-DN2jzfCT.js";import"./types-0dL2Niha.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-mQomw5g8.js";import"./step-Bh181Pvp.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DBRlvqN4.js";import"./useAnimationId-Bb4M1zTw.js";import"./ActivePoints-BxdWxMht.js";import"./Dot-DfAT_SUP.js";import"./RegisterGraphicalItemId-BoJDveOV.js";import"./ErrorBarContext-kfdlWhVC.js";import"./GraphicalItemClipPath-CD6E6U12.js";import"./SetGraphicalItem-c2dU8YzM.js";import"./getRadiusAndStrokeWidthFromDot-DNi5zXue.js";import"./ActiveShapeUtils-SxPaImaJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
