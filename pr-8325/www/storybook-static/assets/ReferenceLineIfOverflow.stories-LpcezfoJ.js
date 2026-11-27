import{R as e}from"./iframe-CqOe7k5Y.js";import{R as a}from"./zIndexSlice-HvZ_KFp3.js";import{C as p}from"./ComposedChart-BeSg73-5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DMqUn0Lg.js";import{X as f}from"./XAxis-BHc3UEw3.js";import{Y as l}from"./YAxis-DEQnYc30.js";import{L as d}from"./Line-BAO_KFfa.js";import{R as h}from"./ReferenceLine-BZgPt1Vl.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-uDtrY5a-.js";import"./get-CjriyByo.js";import"./throttle-BawAsSGW.js";import"./index-NjrwBPri.js";import"./index-Nzssfkwo.js";import"./RechartsWrapper-C6U1x4NS.js";import"./axisSelectors-HXuL0A3L.js";import"./polarAxisSelectors-DnFOpaLb.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-B6EefrnE.js";import"./index-C49j9LJv.js";import"./index-DQgKuLzP.js";import"./renderedTicksSlice-B-tkfTkQ.js";import"./index-CjpYzq4S.js";import"./fillDefinitions-BUUlO_ua.js";import"./CartesianChart-CGVfE0i2.js";import"./chartDataContext-B9y28Tuh.js";import"./CategoricalChart-Cm4y0z4v.js";import"./CartesianAxis-botWNN7F.js";import"./Layer-CqFOI8aQ.js";import"./Text-N8PDZP4n.js";import"./ZIndexLayer-Bx6NEOZE.js";import"./Label-yQ-nD2jU.js";import"./types-DHkZz5Qp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-iFUrCwsR.js";import"./Curve-C0AiDBmT.js";import"./step-C0xBjYaF.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-CclxtIIf.js";import"./ActivePoints-DOsR5596.js";import"./Dot-QqtvItF4.js";import"./activeStyles-DyQy4djd.js";import"./useAnimationId-_GPHqvCi.js";import"./Symbols-DOIoBL3s.js";import"./symbol-Cf12ZYaI.js";import"./ErrorBarContext-CQfvj0jY.js";import"./SetGraphicalItem-5gHOvcya.js";import"./ActiveShapeUtils-dZojZzcj.js";import"./useEffectiveDataKey-C_dNJO7p.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
