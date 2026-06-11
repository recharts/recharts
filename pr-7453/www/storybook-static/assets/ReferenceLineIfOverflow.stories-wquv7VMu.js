import{R as e}from"./iframe-BCtefvpd.js";import{R as n}from"./zIndexSlice-DLtTjfC4.js";import{C as p}from"./ComposedChart-B-FcUFTM.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BuCMqxRQ.js";import{X as f}from"./XAxis-DRnpS9Qy.js";import{Y as l}from"./YAxis-CXAPbw5z.js";import{L as d}from"./Line-DA0OD4w1.js";import{R as h}from"./ReferenceLine-BLGntuHN.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DIhiteEo.js";import"./index-DA3zv02Q.js";import"./index-BqWWOLm7.js";import"./get-DFMRZS9d.js";import"./resolveDefaultProps-CVGnLM0G.js";import"./isWellBehavedNumber-OR7M83Gu.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cp9N8_Bk.js";import"./index-BcefENIv.js";import"./index-C3JFnZZi.js";import"./renderedTicksSlice-kBir8HDa.js";import"./axisSelectors-DOKBLmJM.js";import"./d3-scale-CVyajGd1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-COa7p1e9.js";import"./chartDataContext-qlylvQc9.js";import"./CategoricalChart-B2VvTH4v.js";import"./CartesianAxis-CgS78KcM.js";import"./Layer-sJOcNnwh.js";import"./Text-BeTx0pmM.js";import"./DOMUtils-BhG_b4P2.js";import"./Label-CC74cj4o.js";import"./ZIndexLayer-DEcD4grM.js";import"./types-Cdi5Da9N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Du81AbUE.js";import"./step-trh3ABoh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C8IovmVa.js";import"./useAnimationId-Bcchcs5m.js";import"./ActivePoints-B96wLJJz.js";import"./Dot-B9o-wKF1.js";import"./RegisterGraphicalItemId-6mFWr6Iy.js";import"./ErrorBarContext-Cvn2xdUy.js";import"./GraphicalItemClipPath-B0sf68Y7.js";import"./SetGraphicalItem-DFYwZ-xH.js";import"./getRadiusAndStrokeWidthFromDot-w6-BSgwG.js";import"./ActiveShapeUtils-4S977V9W.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
