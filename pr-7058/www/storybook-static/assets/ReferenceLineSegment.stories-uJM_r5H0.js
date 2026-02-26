import{e}from"./iframe-Cff4EXi3.js";import{R as i}from"./arrayEqualityCheck-VW91KjqU.js";import{C as p}from"./ComposedChart-B12oAa8n.js";import{C as a}from"./CartesianGrid-BGjt4faW.js";import{X as n}from"./XAxis-asdFitiM.js";import{Y as s}from"./YAxis-CEsMkUHq.js";import{L as c}from"./Line-lIDxBsgD.js";import{R as d}from"./ReferenceLine-BfvoKfdM.js";import{R as g}from"./RechartsHookInspector-qCKXCEwx.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-pLSVnyPY.js";import"./immer-Cixy3ajB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DMPfsW98.js";import"./index-B-6vBbA8.js";import"./hooks-DQBeyb0n.js";import"./axisSelectors-D22FLxk-.js";import"./d3-scale-DMGDf7_x.js";import"./zIndexSlice-C-izguCE.js";import"./renderedTicksSlice-B92sUlvw.js";import"./CartesianChart-B_TDMZX3.js";import"./chartDataContext-OdHOh49w.js";import"./CategoricalChart-CTT0iB0s.js";import"./CartesianAxis-CTKh-VYh.js";import"./Layer-D22mEoCB.js";import"./Text-DvkJV6Cf.js";import"./DOMUtils-CF14m3lA.js";import"./Label-KYKyDNcr.js";import"./ZIndexLayer-UZz4JYvU.js";import"./types-CtvHHRW4.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BhGfO_gM.js";import"./ActivePoints-D5hExdQG.js";import"./Dot-CzO0WPbv.js";import"./RegisterGraphicalItemId-CvWcZdp6.js";import"./ErrorBarContext-BXEok-II.js";import"./GraphicalItemClipPath-MuxXQAh9.js";import"./SetGraphicalItem-CGKCADpx.js";import"./useAnimationId-CJEIt2ET.js";import"./getRadiusAndStrokeWidthFromDot-uV2f5Ecx.js";import"./ActiveShapeUtils-BY5228yv.js";import"./isPlainObject-BUXLJ9Pn.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BITjWgSa.js";import"./Trapezoid-BMmW3PWG.js";import"./Sector-BomCciMR.js";import"./Symbols-i7pcWr_t.js";import"./symbol-7J1n19-D.js";import"./step-YwxG2wvl.js";import"./Curve-1dMXeL2S.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-lBMzeJSk.js";import"./ChartSizeDimensions-Bz5WY-XJ.js";import"./OffsetShower-C9tHURwR.js";import"./PlotAreaShower-iGisZace.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(m=(o=t.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const ye=["Segment"];export{t as Segment,ye as __namedExportsOrder,Re as default};
