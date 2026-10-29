import{R as e}from"./iframe-BWDOX6-u.js";import{R as i}from"./zIndexSlice-DNz64E0x.js";import{C as n}from"./ComposedChart-CBeAkuvH.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-DJvIAqQu.js";import{X as s}from"./XAxis-Bg1rIWpH.js";import{Y as c}from"./YAxis-CmY1zbsh.js";import{L as d}from"./Line-CuDWoKpi.js";import{R as g}from"./ReferenceLine-B1is7rtr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BcUHQ_F5.js";import"./throttle-CylvlJBG.js";import"./index-DzgZ7zsu.js";import"./index-DnIYcPIz.js";import"./RechartsWrapper-BRyXUEk1.js";import"./axisSelectors-DEg5_gPJ.js";import"./polarAxisSelectors-DK35yTF0.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B4wSjZj4.js";import"./index-BJ2UcSZQ.js";import"./index-w7-d2vln.js";import"./renderedTicksSlice-BqxX5aIt.js";import"./index-KUhAAXQC.js";import"./CartesianChart-BPCuN6sc.js";import"./ZIndexPortal-BU5aU1wi.js";import"./CategoricalChart--0r08YsN.js";import"./CartesianAxis-DBuYWNnG.js";import"./Layer-DzTaBPhB.js";import"./Text-BC76d3cf.js";import"./pageBackground-B9VN7P3l.js";import"./ZIndexLayer-BpYNbZQ_.js";import"./Label-C7PH8HeI.js";import"./types-Kg6mNYCQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CrU39aeO.js";import"./step-Cs1Ofcpa.js";import"./path-DyVhHtw_.js";import"./LabelList-Bpfp_vOc.js";import"./ActivePoints-CMBx6Neg.js";import"./Dot-BD2cxhmc.js";import"./activeStyles-1bnNLlnc.js";import"./useAnimationId-DnCcjn8H.js";import"./dataEntryStyles-BX1vU1kO.js";import"./Symbols-BzcCXNpL.js";import"./symbol-X6QlfoW2.js";import"./ErrorBarContext-CMdxFUFX.js";import"./SetGraphicalItem-DERdfH3j.js";import"./getRadiusAndStrokeWidthFromDot-02xZ6iGX.js";import"./ActiveShapeUtils-7f2VgziP.js";import"./useEffectiveDataKey-D_c8pfvC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
