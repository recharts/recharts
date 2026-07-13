import{R as e}from"./iframe-DMOF2lK6.js";import{R as n}from"./zIndexSlice-DhTc22fH.js";import{C as p}from"./ComposedChart-D3i3PjRq.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BJ2-NyAB.js";import{X as f}from"./XAxis-D4z0E1S_.js";import{Y as l}from"./YAxis-RrgtBsUU.js";import{L as d}from"./Line-D1OIUFwm.js";import{R as h}from"./ReferenceLine-I03SiMAa.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DdV_xgY5.js";import"./index-CPzx0qn0.js";import"./index-DMOQZokV.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-y8-G4ZMe.js";import"./isWellBehavedNumber-dZNNr5ol.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-OXven1HQ.js";import"./index-D6CqkTNp.js";import"./index-CZ5vZ9qb.js";import"./renderedTicksSlice-Ba4-qyoV.js";import"./axisSelectors-CxjdpUYQ.js";import"./d3-scale-fRi62pfH.js";import"./CartesianChart-Dri7Y6-1.js";import"./chartDataContext-CTH0eIlx.js";import"./CategoricalChart-C3YmcWt7.js";import"./CartesianAxis-B3U1UDpz.js";import"./Layer-7eLuysDW.js";import"./Text-Diu2UmEV.js";import"./DOMUtils-BbhpPFQ_.js";import"./Label-BEoMP2Su.js";import"./ZIndexLayer-DUULPtO2.js";import"./types-CpWsykXF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-DysNMUK1.js";import"./step-DvpijsBX.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BdaIVj2C.js";import"./useAnimationId-Djm7sZoE.js";import"./ActivePoints-Dw1JugLI.js";import"./Dot-DSdOAVgn.js";import"./RegisterGraphicalItemId-CeE9Z4_x.js";import"./ErrorBarContext-B97mauET.js";import"./GraphicalItemClipPath-BUGzJbXN.js";import"./SetGraphicalItem-B-lQGR6o.js";import"./getRadiusAndStrokeWidthFromDot-EOdI7GLa.js";import"./ActiveShapeUtils-CJ8DXgxz.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
