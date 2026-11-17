import{R as e}from"./iframe-SOI7ETqc.js";import{R as i}from"./zIndexSlice-BU6oUWx4.js";import{C as n}from"./ComposedChart-CZsCC2GL.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BAWvBOLm.js";import{X as s}from"./XAxis-gIhRIlH1.js";import{Y as c}from"./YAxis-Du2dgY78.js";import{L as d}from"./Line-DxuNXVKF.js";import{R as g}from"./ReferenceLine-w9NoVKWe.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BpnJBtrD.js";import"./throttle-BuYpA644.js";import"./index-Code9Alh.js";import"./index-RwN-WdR-.js";import"./RechartsWrapper-2ihhOObz.js";import"./axisSelectors-DhazdA5O.js";import"./polarAxisSelectors-C18_Wica.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-3TBblIj9.js";import"./index-B7zG0fHt.js";import"./index-QpX9BTHL.js";import"./renderedTicksSlice-B4lGJD7y.js";import"./index-C2xwEmrx.js";import"./fillDefinitions-C3mr1Tm6.js";import"./CartesianChart-D5ZzAIe3.js";import"./chartDataContext-8RiMC0Sw.js";import"./CategoricalChart-D1aUY5yi.js";import"./CartesianAxis-CkyCX2PR.js";import"./Layer-BdUzTy7V.js";import"./Text-CVVDOvxk.js";import"./ZIndexLayer-uSStm6JU.js";import"./Label-_MgncHEc.js";import"./types-DLi1Gmf3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-CdssLho3.js";import"./Curve-B541BDSp.js";import"./step-B7wEb5SP.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Dm-FbuH_.js";import"./ActivePoints-D6TlCm2l.js";import"./Dot-QFOGovAa.js";import"./activeStyles--vF_fmID.js";import"./useAnimationId-C4SjfD_p.js";import"./Symbols-D5dhbVXH.js";import"./symbol-D7DCXDTW.js";import"./ErrorBarContext-DHxWeWr-.js";import"./SetGraphicalItem-CGNGdUIc.js";import"./ActiveShapeUtils-BXeGDetF.js";import"./useEffectiveDataKey-B6JvOkpp.js";import"./CartesianScaleHelper-C9Oze4oB.js";const de={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},ge=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
