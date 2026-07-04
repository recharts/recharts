import{R as e}from"./iframe-CMZSuYAp.js";import{R as n}from"./zIndexSlice-BruTJuC3.js";import{C as p}from"./ComposedChart-EdmzyhxM.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-04-StGWM.js";import{X as f}from"./XAxis-CUiAOeYD.js";import{Y as l}from"./YAxis-BePyX93F.js";import{L as d}from"./Line-B6VYMrpo.js";import{R as h}from"./ReferenceLine-hIBoL-iM.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BOp5gWf6.js";import"./index-DNwfsXU8.js";import"./index-iarf_UZv.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-B0_6d4zr.js";import"./isWellBehavedNumber-BkL4thK4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-eOuVxhlh.js";import"./index-okdZjd57.js";import"./index-Ctl2PZQv.js";import"./renderedTicksSlice-CgdBaRrD.js";import"./axisSelectors-DIqIj73B.js";import"./d3-scale-BPlmUZUy.js";import"./CartesianChart-DKmMg594.js";import"./chartDataContext-Bl7GQ-j4.js";import"./CategoricalChart-BFWxbb2w.js";import"./CartesianAxis-BCaCchRD.js";import"./Layer-PNP6wOOP.js";import"./Text-xzZ1BXQ5.js";import"./DOMUtils-DG37HfTO.js";import"./Label-x_pt0DNK.js";import"./ZIndexLayer-DF-_v_ST.js";import"./types-DeGC_ypX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-UdXe1NTi.js";import"./step-WDNwu-cb.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CkwT5Z0M.js";import"./useAnimationId-CGAH057_.js";import"./ActivePoints-DwWUSI4v.js";import"./Dot-vmVm3ZeK.js";import"./RegisterGraphicalItemId-C5vUvxmu.js";import"./ErrorBarContext-DSf1j3Db.js";import"./GraphicalItemClipPath-Du3KiDeu.js";import"./SetGraphicalItem-9lTbvLuA.js";import"./getRadiusAndStrokeWidthFromDot-MO9qDoqv.js";import"./ActiveShapeUtils-Dd6ng2Wf.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
