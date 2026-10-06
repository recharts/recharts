import{R as e}from"./iframe-B0eldO7v.js";import{R as i}from"./zIndexSlice-CXop2G5e.js";import{C as n}from"./ComposedChart-Ddcti6fy.js";import{p as a}from"./Page-Cj8EiXz7.js";import{C as p}from"./CartesianGrid-BE58y5TH.js";import{X as s}from"./XAxis-GLXwZBor.js";import{Y as c}from"./YAxis-DlMMTkQY.js";import{L as d}from"./Line-YlkEKwc2.js";import{R as g}from"./ReferenceLine-QPhKy5Il.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D7OWylrB.js";import"./index-DCLOFYkq.js";import"./index-BKRX5CvI.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dl5A3vcA.js";import"./isWellBehavedNumber-Bs9ryC8U.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BwMPh17B.js";import"./axisSelectors-B4pxDEAY.js";import"./d3-scale-B5kcweJa.js";import"./index-C_-NyhpR.js";import"./index-Bdj7MaD4.js";import"./renderedTicksSlice-D3LeHV-Y.js";import"./index-DlY7-xoe.js";import"./CartesianChart-CoOYNy_x.js";import"./chartDataContext-1U_QIO6p.js";import"./CategoricalChart-B8AkurP8.js";import"./CartesianAxis-a7vTeDpH.js";import"./Layer-BkeFUCM0.js";import"./Text-DkYUHdlt.js";import"./DOMUtils-DXyJKZjT.js";import"./useId-ByWKwJ9t.js";import"./useBackwardsCompatibleTheme-peNjLWv-.js";import"./Label-wnFLP2Gb.js";import"./ZIndexLayer-CuGirjla.js";import"./types-BECNnjMS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-W12vhYO0.js";import"./step-BjD9SRNv.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bli2w_x8.js";import"./useAnimationId-REGnqG-r.js";import"./ActivePoints-oqRPT4fh.js";import"./Dot-poKEwaeq.js";import"./RegisterGraphicalItemId-DGTqEQmn.js";import"./ErrorBarContext-CZy75mIo.js";import"./GraphicalItemClipPath-DvdFYP5C.js";import"./SetGraphicalItem-FUNEgggo.js";import"./getRadiusAndStrokeWidthFromDot-D6ch2P3E.js";import"./ActiveShapeUtils-BmGLuzNe.js";import"./useGraphicalItemIdentity-CcjTcmiI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ge={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(n,{data:a,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(p,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))},fe=["Segment"];var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
