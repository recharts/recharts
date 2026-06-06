import{R as e}from"./iframe-BUJOmzqi.js";import{R as n}from"./zIndexSlice-BsaVfiwf.js";import{C as p}from"./ComposedChart-D5MlcB5U.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D8_jIbBo.js";import{X as f}from"./XAxis-DaOKHhNP.js";import{Y as l}from"./YAxis-DKbaQ5d8.js";import{L as d}from"./Line-jXTM5sU4.js";import{R as h}from"./ReferenceLine-CekS4EeS.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DH0vdgZo.js";import"./index-Z5G1v5br.js";import"./index-JbQrqUHI.js";import"./get-BL4oPmOH.js";import"./resolveDefaultProps-hlzoE81R.js";import"./isWellBehavedNumber-PVSksaHl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DKJe8hzM.js";import"./index-BFCbJ3zw.js";import"./index-Ba2rQUwD.js";import"./renderedTicksSlice-CvbHS7R-.js";import"./axisSelectors-BsZbVas6.js";import"./d3-scale-DS8AhCL8.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CwVYswgd.js";import"./chartDataContext-BLLyTvAK.js";import"./CategoricalChart--vXw4uUZ.js";import"./CartesianAxis-Bv_4t9YA.js";import"./Layer-DAIr4ncG.js";import"./Text-KTF0LXVS.js";import"./DOMUtils-DD35gjWu.js";import"./Label-BNcqFpiL.js";import"./ZIndexLayer-DYX-KLdv.js";import"./types-BzrTCe99.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DuctlboJ.js";import"./step-C_dZFxdF.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-JOMjWh90.js";import"./useAnimationId-BY-iJyWy.js";import"./ActivePoints-CMM7Mo_4.js";import"./Dot-DN1GlAfe.js";import"./RegisterGraphicalItemId-BRRIJdHI.js";import"./ErrorBarContext-DA6daDg9.js";import"./GraphicalItemClipPath-CGh6UnOu.js";import"./SetGraphicalItem-7EGMhuIl.js";import"./getRadiusAndStrokeWidthFromDot-DkvFWbU0.js";import"./ActiveShapeUtils-ySv4_Jt-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const {
      findByText
    } = within(canvasElement);
    /**
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
