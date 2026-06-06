import{R as e}from"./iframe-BUJOmzqi.js";import{R as i}from"./zIndexSlice-BsaVfiwf.js";import{C as a}from"./ComposedChart-D5MlcB5U.js";import{p}from"./Page-Cj8EiXz7.js";import{C as n}from"./CartesianGrid-D8_jIbBo.js";import{X as s}from"./XAxis-DaOKHhNP.js";import{Y as c}from"./YAxis-DKbaQ5d8.js";import{L as d}from"./Line-jXTM5sU4.js";import{R as g}from"./ReferenceLine-CekS4EeS.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DH0vdgZo.js";import"./index-Z5G1v5br.js";import"./index-JbQrqUHI.js";import"./get-BL4oPmOH.js";import"./resolveDefaultProps-hlzoE81R.js";import"./isWellBehavedNumber-PVSksaHl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKJe8hzM.js";import"./index-BFCbJ3zw.js";import"./index-Ba2rQUwD.js";import"./renderedTicksSlice-CvbHS7R-.js";import"./axisSelectors-BsZbVas6.js";import"./d3-scale-DS8AhCL8.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CwVYswgd.js";import"./chartDataContext-BLLyTvAK.js";import"./CategoricalChart--vXw4uUZ.js";import"./CartesianAxis-Bv_4t9YA.js";import"./Layer-DAIr4ncG.js";import"./Text-KTF0LXVS.js";import"./DOMUtils-DD35gjWu.js";import"./Label-BNcqFpiL.js";import"./ZIndexLayer-DYX-KLdv.js";import"./types-BzrTCe99.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DuctlboJ.js";import"./step-C_dZFxdF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-JOMjWh90.js";import"./useAnimationId-BY-iJyWy.js";import"./ActivePoints-CMM7Mo_4.js";import"./Dot-DN1GlAfe.js";import"./RegisterGraphicalItemId-BRRIJdHI.js";import"./ErrorBarContext-DA6daDg9.js";import"./GraphicalItemClipPath-CGh6UnOu.js";import"./SetGraphicalItem-7EGMhuIl.js";import"./getRadiusAndStrokeWidthFromDot-DkvFWbU0.js";import"./ActiveShapeUtils-ySv4_Jt-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const ne={title:"Examples/cartesian/ReferenceLine/ReferenceLineSegment"},t={render:()=>e.createElement(i,{width:"100%",height:500},e.createElement(a,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(n,{strokeDasharray:"3 3"}),e.createElement(s,{dataKey:"name"}),e.createElement(c,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(g,{segment:[{x:"Page A",y:0},{x:"Page E",y:1500}]})))};var r,o,m;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
