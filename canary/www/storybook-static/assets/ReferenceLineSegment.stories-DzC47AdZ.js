import{e}from"./iframe-DU-LucVk.js";import{R as i}from"./arrayEqualityCheck-CclNUIwX.js";import{C as p}from"./ComposedChart-D6mSG6uW.js";import{C as a}from"./CartesianGrid-ZQnOdJGL.js";import{X as n}from"./XAxis-NPkkQ63f.js";import{Y as s}from"./YAxis-oxI_7caT.js";import{L as c}from"./Line-D0rR1HZ1.js";import{R as d}from"./ReferenceLine-BJ6qLnpu.js";import{R as g}from"./RechartsHookInspector-BEY9qfJh.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-B2aHdDhI.js";import"./immer-CeDnDLs7.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQ8ifATJ.js";import"./index-BvEdvQ3w.js";import"./hooks-5DppKLy_.js";import"./axisSelectors-1v6f9L3u.js";import"./d3-scale-s-kDCmvc.js";import"./zIndexSlice-BokCIqI7.js";import"./renderedTicksSlice-CYsmXTCd.js";import"./CartesianChart-Cbq4Hmtt.js";import"./chartDataContext-CG1EXfO5.js";import"./CategoricalChart-I9vscfUJ.js";import"./CartesianAxis-xpog4YLf.js";import"./Layer-8a5GeXWN.js";import"./Text-CzwymKY5.js";import"./DOMUtils-CWJBrBTl.js";import"./Label-OGUbf68M.js";import"./ZIndexLayer-BaiBFLw5.js";import"./types-Dgs-vk0Z.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-Ctv0Vese.js";import"./ActivePoints-CvZtNNWP.js";import"./Dot-D3cffN2_.js";import"./RegisterGraphicalItemId-CicihkEh.js";import"./ErrorBarContext-D0ejYvv2.js";import"./GraphicalItemClipPath-CL71Q66l.js";import"./SetGraphicalItem-DZHXtodu.js";import"./useAnimationId-CtR34_Zs.js";import"./getRadiusAndStrokeWidthFromDot-DiPRkIfe.js";import"./ActiveShapeUtils-CNQl8MpC.js";import"./isPlainObject-DmZ4Jk-5.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dh8uHokW.js";import"./Trapezoid-C0vmhZZj.js";import"./Sector-DdGN5B7D.js";import"./Symbols-BtQj-4ur.js";import"./symbol-m7w_ZRD-.js";import"./step-CgB13xZG.js";import"./Curve-rk5soVjK.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-k3KoyLP9.js";import"./ChartSizeDimensions-ChW5udk0.js";import"./OffsetShower-BWhNcTks.js";import"./PlotAreaShower-9QTURT9p.js";const Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(p,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(a,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
