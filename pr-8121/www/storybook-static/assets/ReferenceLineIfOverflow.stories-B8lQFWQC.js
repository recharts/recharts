import{R as e}from"./iframe-CA9m8GYo.js";import{R as a}from"./zIndexSlice-DtH5keZE.js";import{C as p}from"./ComposedChart-Cxv2A6YY.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B5a1RZh7.js";import{X as f}from"./XAxis-CC3YYdgQ.js";import{Y as l}from"./YAxis-CbW8C0_5.js";import{L as d}from"./Line-7sQ58Sto.js";import{R as h}from"./ReferenceLine-B_KyGQlw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CyX6DFN8.js";import"./throttle-o0TVEzLp.js";import"./index-CErELZnL.js";import"./index-BmamNDCv.js";import"./RechartsWrapper-PB4GMrwR.js";import"./axisSelectors-BayOnfvg.js";import"./polarAxisSelectors-C9u8TkQ8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-C2dTdr93.js";import"./index-CqNMjBNA.js";import"./index-B2booWlS.js";import"./renderedTicksSlice-CIfh4CCk.js";import"./index-AvPiQd-I.js";import"./CartesianChart-BMo55UJv.js";import"./ZIndexPortal-CP5nbT1n.js";import"./CategoricalChart-CxzHbLbb.js";import"./CartesianAxis-D4TNjeO6.js";import"./Layer-Hxk-5S8n.js";import"./Text-BFxpfCQD.js";import"./pageBackground-O7JuB7S_.js";import"./ZIndexLayer-DnamAcTi.js";import"./Label-ekuzQLiz.js";import"./types-Cvx_7iJj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-DZjiB-zR.js";import"./step-DF34UguZ.js";import"./path-DyVhHtw_.js";import"./LabelList-CV5x_Azz.js";import"./ActivePoints-CEzGZ3l_.js";import"./Dot-CmRgS_7G.js";import"./activeStyles-PpyfPCVq.js";import"./useAnimationId-CvualzzB.js";import"./dataEntryStyles-XE7WR2iA.js";import"./Symbols-BokwsXNu.js";import"./symbol-DmvnuhBw.js";import"./ErrorBarContext-DjcN2az-.js";import"./SetGraphicalItem-C9x_j8Aw.js";import"./getRadiusAndStrokeWidthFromDot-CYDrKKi3.js";import"./ActiveShapeUtils-DBAVXS8z.js";import"./useEffectiveDataKey-VJMj_VC4.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
