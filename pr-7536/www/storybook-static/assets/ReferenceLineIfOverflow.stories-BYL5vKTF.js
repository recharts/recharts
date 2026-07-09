import{R as e}from"./iframe-DnX8r39b.js";import{R as n}from"./zIndexSlice-CdRT6CH7.js";import{C as p}from"./ComposedChart-B98bfh0U.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DDmG9Fz5.js";import{X as f}from"./XAxis-BTaYdNe8.js";import{Y as l}from"./YAxis-CSFozfSt.js";import{L as d}from"./Line-DgV7sV5s.js";import{R as h}from"./ReferenceLine-rH0jPMO_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-JCKZhQLq.js";import"./index-B59DWSJw.js";import"./index-8CcjFvVe.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-yb31Cz6R.js";import"./isWellBehavedNumber-ChlqVGNf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Sbu3sQZd.js";import"./index-CARiuz8r.js";import"./index-lg-7YqR9.js";import"./renderedTicksSlice-DDGhfVYq.js";import"./axisSelectors-D4OQvXCv.js";import"./d3-scale-B45mdNw5.js";import"./CartesianChart-8TrBr0AL.js";import"./chartDataContext-B2KFL-Nz.js";import"./CategoricalChart-DVOQ2_gX.js";import"./CartesianAxis-Cy9WREkT.js";import"./Layer-CauFkfpG.js";import"./Text-BO1t-pUg.js";import"./DOMUtils-jh1pVKRO.js";import"./Label-D3KHAYnK.js";import"./ZIndexLayer-C1d715l9.js";import"./types-CgrT81ZV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Zsfr7xXj.js";import"./step-TiPrAqPO.js";import"./path-DyVhHtw_.js";import"./AnimatedItems--Dg0X7dt.js";import"./useAnimationId-zs5IE8iA.js";import"./ActivePoints-CuEYXnF_.js";import"./Dot-DD3VaHTo.js";import"./RegisterGraphicalItemId-qEo7oahD.js";import"./ErrorBarContext-C_qu3TpT.js";import"./GraphicalItemClipPath-BiCBWmQX.js";import"./SetGraphicalItem-BXuH3_k3.js";import"./getRadiusAndStrokeWidthFromDot-BTTETrvJ.js";import"./ActiveShapeUtils-C4xeJz4x.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
