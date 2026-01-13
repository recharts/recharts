import{e}from"./iframe-B6ZCI1X-.js";import{R as i}from"./arrayEqualityCheck-Vy2dcV_o.js";import{C as a}from"./ComposedChart-BW4GWPKl.js";import{C as p}from"./CartesianGrid-C7UogyGe.js";import{X as n}from"./XAxis-C4uw1-2Q.js";import{Y as s}from"./YAxis-Bknejqsk.js";import{L as c}from"./Line-B1fwKAvO.js";import{R as d}from"./ReferenceLine-BctJsFG4.js";import{R as g}from"./RechartsHookInspector-B_-BIKM5.js";import{p as f}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BfRNrOjX.js";import"./PolarUtils-DT5LUPN4.js";import"./RechartsWrapper-Cm4MNb60.js";import"./hooks-B7AKPgu3.js";import"./axisSelectors-B7jgX05e.js";import"./zIndexSlice-CZ608RYy.js";import"./CartesianChart-3kl8J4OM.js";import"./chartDataContext-K1HgDw51.js";import"./CategoricalChart-DmGE5R29.js";import"./CartesianAxis-Cgh_nqbT.js";import"./Layer-fYHElE4I.js";import"./Text-1BcInixy.js";import"./DOMUtils-DnJTSxHK.js";import"./Label-D44TMXj3.js";import"./ZIndexLayer-NdV45W3l.js";import"./types-lQyAqjcM.js";import"./ReactUtils-DztpHcKA.js";import"./ActivePoints-Dua7vnpk.js";import"./Dot-BNoOq719.js";import"./RegisterGraphicalItemId-CkZvvq8r.js";import"./ErrorBarContext-CRJ4zZZo.js";import"./GraphicalItemClipPath-BH-LuHt6.js";import"./SetGraphicalItem-BsBYfoCl.js";import"./useAnimationId-Czd9yhg2.js";import"./getRadiusAndStrokeWidthFromDot-CTkwUqhN.js";import"./ActiveShapeUtils-CayjX_j1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Dvu--PZM.js";import"./Trapezoid-CWebkWYz.js";import"./Sector-oW786f9C.js";import"./Symbols-BpZDCS87.js";import"./Curve-xA1LMbbI.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DYaSePyf.js";import"./ChartSizeDimensions-B6sRHlXe.js";import"./OffsetShower-BW9M7Gqo.js";import"./PlotAreaShower-BOQNx6Qk.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:f,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(n,{dataKey:"name"}),e.createElement(s,{type:"number"}),e.createElement(c,{dataKey:"uv"}),e.createElement(d,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]}),e.createElement(g,null)))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
