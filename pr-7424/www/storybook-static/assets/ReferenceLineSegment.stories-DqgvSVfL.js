import{R as e}from"./iframe-B27eVaFF.js";import{R as i}from"./zIndexSlice-DLq0QSm6.js";import{C as a}from"./ComposedChart-CYtA9C9q.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-DXZtGi0Y.js";import{X as s}from"./XAxis-C-VjsgkB.js";import{Y as c}from"./YAxis-CC995jnJ.js";import{L as d}from"./Line-Bk9BDUUg.js";import{R as g}from"./ReferenceLine-YT7THk9e.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-YcLAmGMI.js";import"./index-DoegUUyt.js";import"./index-DDpWztz3.js";import"./get-BRxKQDDf.js";import"./resolveDefaultProps-BE08UwbV.js";import"./isWellBehavedNumber-CotgHNs1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DlESZ7tm.js";import"./index-Cw-Wuc3D.js";import"./index-DI6zkpD0.js";import"./renderedTicksSlice-DHlObRt7.js";import"./axisSelectors-DxuiIF3z.js";import"./d3-scale-BTGRH2n_.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Bm35oZlB.js";import"./chartDataContext-Cx0GXsRx.js";import"./CategoricalChart-DFkUIq_Y.js";import"./CartesianAxis-1UkcRdSJ.js";import"./Layer-CvC1SkE0.js";import"./Text-dTW2gHUK.js";import"./DOMUtils-DxsvOJTL.js";import"./Label-k_ca_Zdh.js";import"./ZIndexLayer-DlBEWXQx.js";import"./types-CkVecV7M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-C9ctIi4z.js";import"./step-C1n6zis1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-6YxWbeO7.js";import"./useAnimationId-BitHcKd_.js";import"./ActivePoints-59Xfju6r.js";import"./Dot-CXeM3dGw.js";import"./RegisterGraphicalItemId-oZqB1u6h.js";import"./ErrorBarContext-tb2PhcR_.js";import"./GraphicalItemClipPath-BA_nO_Lx.js";import"./SetGraphicalItem-DWdSfkk6.js";import"./getRadiusAndStrokeWidthFromDot-Dvm3ARSn.js";import"./ActiveShapeUtils-Bzy2q7aU.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
