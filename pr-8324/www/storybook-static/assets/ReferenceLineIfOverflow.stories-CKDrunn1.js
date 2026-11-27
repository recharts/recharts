import{R as e}from"./iframe-CxHJIaxn.js";import{R as a}from"./zIndexSlice-B4J4SBJt.js";import{C as p}from"./ComposedChart-ZJvCku8z.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-YKD58Ch-.js";import{X as f}from"./XAxis-BtFfwAik.js";import{Y as l}from"./YAxis-CePtpgW3.js";import{L as d}from"./Line-BGusFgF3.js";import{R as h}from"./ReferenceLine-CrE-7n4N.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-VB2vAzvZ.js";import"./get-CjriyByo.js";import"./throttle-zrHO1Lk3.js";import"./index-CTXNW52Q.js";import"./index-CCCil_M9.js";import"./RechartsWrapper-lHGqaVDW.js";import"./axisSelectors-DToVA1z_.js";import"./polarAxisSelectors-Cypa3mep.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-AJjDHMaN.js";import"./index-DATl4CJn.js";import"./index-CNK9YebA.js";import"./renderedTicksSlice-BLYVCU7c.js";import"./index-WkAKiv7J.js";import"./fillDefinitions-DRREg7Kz.js";import"./CartesianChart-BVZvuLTX.js";import"./chartDataContext-DfmCl9OG.js";import"./CategoricalChart-DlLRA4vO.js";import"./CartesianAxis-DtD-UOrB.js";import"./Layer-CkJdGJLp.js";import"./Text-BkIUM7GL.js";import"./ZIndexLayer-B_7zdP5R.js";import"./Label-M_CthLgf.js";import"./types-BGw9U51_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-D_HaNWL6.js";import"./Curve-D6sUhEtt.js";import"./step-DotuH85W.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DnDN_vpi.js";import"./ActivePoints-R1_oETV-.js";import"./Dot-Dme7I_-s.js";import"./activeStyles-BwCU-iTy.js";import"./useAnimationId-D_Yg6oAr.js";import"./Symbols-IHTx3wL0.js";import"./symbol-C32Av6Of.js";import"./ErrorBarContext-BUUfXJQl.js";import"./SetGraphicalItem-Cp9BSKiw.js";import"./ActiveShapeUtils-BHoE966L.js";import"./useEffectiveDataKey-BI2pOOYW.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
