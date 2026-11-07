import{R as e}from"./iframe-DWt4J3JN.js";import{R as i}from"./zIndexSlice-NSNONz_v.js";import{C as n}from"./ComposedChart-Dnd49qHa.js";import{p}from"./Page-Cj8EiXz7.js";import{C as a}from"./CartesianGrid-CZCTJzkK.js";import{X as s}from"./XAxis-Ct82dr0g.js";import{Y as c}from"./YAxis-CsFlwLse.js";import{L as d}from"./Line-0mvPQ6iO.js";import{R as g}from"./ReferenceLine-4i7dBbbZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-D4EpIsqz.js";import"./throttle-Dk5xsQjg.js";import"./index-BdNcxnLc.js";import"./index-C3nO4u5d.js";import"./RechartsWrapper-COqAJslP.js";import"./axisSelectors-BS7avNJg.js";import"./polarAxisSelectors-BNqZLY2c.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BC5jrybd.js";import"./index-FrWa7Exr.js";import"./index-vXblBJSu.js";import"./renderedTicksSlice-C-fcLX-F.js";import"./index-Dvam2yfO.js";import"./fillDefinitions-CXWevUoQ.js";import"./CartesianChart-cgT47Vj6.js";import"./chartDataContext-CFu7cHCJ.js";import"./CategoricalChart-CSFFRE3G.js";import"./ZIndexPortal-CNwyGADw.js";import"./CartesianAxis-Ch6tESXa.js";import"./Layer-D1fzjsCN.js";import"./Text-BH_q_eI2.js";import"./DOMUtils-gLxo7mD7.js";import"./ZIndexLayer-gpvd6E93.js";import"./Label-Bkb0GMep.js";import"./types-BbXG2_az.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DrWralR8.js";import"./step-Bit_NyY0.js";import"./path-DyVhHtw_.js";import"./LabelList-DCtJIAIf.js";import"./ActivePoints-BL9AGUXf.js";import"./Dot-BgFpa2WJ.js";import"./activeStyles-DEL6Q9xK.js";import"./useAnimationId-DaySoH3H.js";import"./dataEntryStyles-CMWxjrvv.js";import"./Symbols-DwZTYmJ_.js";import"./symbol-DVO5NwTU.js";import"./ErrorBarContext-D_UxjrQr.js";import"./SetGraphicalItem-cSBJzNh5.js";import"./getRadiusAndStrokeWidthFromDot-KA7euB10.js";import"./ActiveShapeUtils-BICHaO6W.js";import"./useEffectiveDataKey---V5hCOC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const he={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},le=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};export{t as Segment,le as __namedExportsOrder,he as default};
