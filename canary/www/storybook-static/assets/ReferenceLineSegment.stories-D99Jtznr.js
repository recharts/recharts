import{R as e}from"./iframe-DWz-Q7D1.js";import{R as i}from"./zIndexSlice-D4KjIdsO.js";import{C as n}from"./ComposedChart-DRhmHwTS.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BoGhBG8e.js";import{X as s}from"./XAxis-BZUBECrT.js";import{Y as c}from"./YAxis--VjP9Ce5.js";import{L as d}from"./Line-DmDKrJpN.js";import{R as g}from"./ReferenceLine-CDEnw1D6.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CiqOC1ip.js";import"./index-C1X2mD6F.js";import"./index-CkxejNVz.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CzYzgORH.js";import"./isWellBehavedNumber-DQa0E9-N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DTtBamZ0.js";import"./axisSelectors-Ce2rWziX.js";import"./d3-scale-B1h-c6nn.js";import"./index-Dr0ysyHn.js";import"./index-DIeZp5vP.js";import"./renderedTicksSlice-D1gMAPFE.js";import"./index-DXyt1obU.js";import"./CartesianChart-cCLETRDS.js";import"./chartDataContext-BJRXZyCP.js";import"./CategoricalChart-C1Rl-Y0X.js";import"./CartesianAxis-k4k8wY80.js";import"./Layer-0LCA68q2.js";import"./Text-Rsbaz2Nf.js";import"./pageBackground-Bn_EUSju.js";import"./useId-CKTYSt7x.js";import"./useBackwardsCompatibleTheme-40wyYpH8.js";import"./Label-DNBocu_e.js";import"./ZIndexLayer-Bg2Gmo9Q.js";import"./types-d8BMRC9H.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-57G7mADL.js";import"./step-CnBlCK_d.js";import"./path-DyVhHtw_.js";import"./activeStyles-cBdGFM1d.js";import"./useAnimationId-wagxbO9A.js";import"./dataEntryStyles-B5o6jV-U.js";import"./ActivePoints-BA6UWnZF.js";import"./Dot-DC9IrQq5.js";import"./ErrorBarContext-C2fYo0Zq.js";import"./GraphicalItemClipPath-CSYE-jHD.js";import"./SetGraphicalItem-D_zovdlO.js";import"./getRadiusAndStrokeWidthFromDot-Dqmrd8D2.js";import"./ActiveShapeUtils-C6nNN6Qs.js";import"./useEffectiveDataKey-kfwO5Jnl.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
