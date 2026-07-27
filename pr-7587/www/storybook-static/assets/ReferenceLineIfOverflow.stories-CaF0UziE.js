import{R as e}from"./iframe-DPsVQxbE.js";import{R as n}from"./zIndexSlice-1brzNbqc.js";import{C as p}from"./ComposedChart-DGN6ie7I.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Catfq7QH.js";import{X as f}from"./XAxis-CYt1-RxN.js";import{Y as l}from"./YAxis-BS8G-HFw.js";import{L as d}from"./Line-CWQOFj66.js";import{R as h}from"./ReferenceLine-D7NJic6Y.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-Cj8wAsiz.js";import"./index-B1wCn-3B.js";import"./index-B_Y-xmpq.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BIwKMjhn.js";import"./isWellBehavedNumber-Chc7VT9N.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BCXiW-f1.js";import"./index-DB0est9g.js";import"./index-CYr1DPeq.js";import"./renderedTicksSlice-CC_kknQZ.js";import"./axisSelectors-CEp7-2uA.js";import"./d3-scale-BNrinBxy.js";import"./CartesianChart-DMOmnFKA.js";import"./chartDataContext-Cc6AxfML.js";import"./CategoricalChart-Bd2BlG5y.js";import"./CartesianAxis-D5qEkVje.js";import"./Layer-DGWGYgzk.js";import"./Text-B4JB7zPj.js";import"./DOMUtils-D6NwHzOL.js";import"./Label-C2Rhcs8s.js";import"./ZIndexLayer-MqiRX2rl.js";import"./types-ColFKgNS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-DtEeL5Gu.js";import"./step-BU8nTjqD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BlseN1Dx.js";import"./useAnimationId-CtVxLpdf.js";import"./ActivePoints-qcduKxyw.js";import"./Dot-COXcIf5D.js";import"./RegisterGraphicalItemId-MGM9At2R.js";import"./ErrorBarContext-B2jO-XEn.js";import"./GraphicalItemClipPath-Dj3im7iZ.js";import"./SetGraphicalItem-CNwLGNNY.js";import"./getRadiusAndStrokeWidthFromDot-f0ZiEHIa.js";import"./ActiveShapeUtils-iUHBQUNz.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
