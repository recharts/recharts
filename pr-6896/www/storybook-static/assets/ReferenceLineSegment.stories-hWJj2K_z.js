import{e}from"./iframe-C-3BuwuQ.js";import{R as i}from"./arrayEqualityCheck-FeQgOIOo.js";import{C as a}from"./ComposedChart-BKINFeBC.js";import{C as p}from"./CartesianGrid-BjcHRlcY.js";import{X as n}from"./XAxis-C5T_Hme-.js";import{Y as s}from"./YAxis-BdnZ6VvH.js";import{L as c}from"./Line-CISr_YoD.js";import{R as d}from"./ReferenceLine-BnfSASnh.js";import{R as g}from"./RechartsHookInspector-_jP1ustk.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-B8KPX6JC.js";import"./PolarUtils-C0kEye-G.js";import"./RechartsWrapper-Bcu3XnIN.js";import"./hooks-DEo8Vj_c.js";import"./axisSelectors-TDNCuVG_.js";import"./zIndexSlice-CFeEDpl4.js";import"./CartesianChart-DDw6NmdK.js";import"./chartDataContext-CCRblB7F.js";import"./CategoricalChart-E0yZOneU.js";import"./CartesianAxis-CtyApd07.js";import"./Layer-BtreNavR.js";import"./Text-DQ4MnNVk.js";import"./DOMUtils-g9jP34sD.js";import"./Label-C_nqqcnR.js";import"./ZIndexLayer-cK31z4E4.js";import"./types-CX-GD2h3.js";import"./ReactUtils-DhVfiJt6.js";import"./ActivePoints-CWUIUowx.js";import"./Dot-DyDE0Uuu.js";import"./RegisterGraphicalItemId-CC6kQy01.js";import"./ErrorBarContext--fqfYIAi.js";import"./GraphicalItemClipPath-4wjIziT0.js";import"./SetGraphicalItem-wdcyb_2X.js";import"./useAnimationId-0OWcJ5q4.js";import"./getRadiusAndStrokeWidthFromDot-BnVuhiTb.js";import"./ActiveShapeUtils-BI8SVP5k.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BYl-A-mY.js";import"./Trapezoid-DRLGjDBA.js";import"./Sector-Dgl5Ps14.js";import"./Symbols-mlCUJH03.js";import"./Curve-DOZfooTf.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DWdef0jv.js";import"./ChartSizeDimensions-B8NVQVZ1.js";import"./OffsetShower-g_YOgmWj.js";import"./PlotAreaShower-CrDYc66T.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  }
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const se=["Segment"];export{t as Segment,se as __namedExportsOrder,ne as default};
