import{e}from"./iframe-CjUtT138.js";import{R as i}from"./arrayEqualityCheck-B-tT2ESq.js";import{C as a}from"./ComposedChart-DK7N52sv.js";import{C as p}from"./CartesianGrid-CV6eQNdN.js";import{X as n}from"./XAxis-CEXHANTM.js";import{Y as s}from"./YAxis-Cz0XZWIE.js";import{L as c}from"./Line-BZe_CoGr.js";import{R as d}from"./ReferenceLine-CYC8vAh4.js";import{R as g}from"./RechartsHookInspector-BSSs4sC-.js";import{p as f}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DXKWDAOg.js";import"./PolarUtils-_eTStEZn.js";import"./RechartsWrapper-it-0F-jx.js";import"./hooks-4UrLvWFw.js";import"./axisSelectors-BX9CBNHK.js";import"./zIndexSlice-DsVMOISz.js";import"./CartesianChart-DOBNNTq5.js";import"./chartDataContext-Cd_ntzly.js";import"./CategoricalChart-QNPsXY_1.js";import"./CartesianAxis-OEoEt9oE.js";import"./Layer-D_MGslDL.js";import"./Text-DwSJp926.js";import"./DOMUtils-D7gju_6v.js";import"./Label-BL8V4Wmg.js";import"./ZIndexLayer-DLNaK2nP.js";import"./types-C9Ftyw06.js";import"./ReactUtils-CHVaJjT2.js";import"./ActivePoints-ggcLh7it.js";import"./Dot-C7pBRmz2.js";import"./RegisterGraphicalItemId-BsU6Bbki.js";import"./ErrorBarContext-M64mzIpO.js";import"./GraphicalItemClipPath-BkNEqUtH.js";import"./SetGraphicalItem-pIRkDX-c.js";import"./useAnimationId-D51fABKH.js";import"./getRadiusAndStrokeWidthFromDot-BnN5ibWF.js";import"./ActiveShapeUtils-BsX54dsF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Btcn2slE.js";import"./Trapezoid-tluOV2am.js";import"./Sector-DLzrEVZJ.js";import"./Symbols-Lp37GtaH.js";import"./Curve-vYHSIBiw.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-CYZv41C2.js";import"./ChartSizeDimensions-CNTgDKUn.js";import"./OffsetShower-Cvrl070M.js";import"./PlotAreaShower-Bo9f_x1d.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
