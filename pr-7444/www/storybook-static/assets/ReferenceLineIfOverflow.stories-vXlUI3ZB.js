import{R as e}from"./iframe-DHxweIO9.js";import{R as n}from"./zIndexSlice-oAGhcyxs.js";import{C as p}from"./ComposedChart-RKqXsJZg.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DHwHIsHn.js";import{X as f}from"./XAxis-by-9KJMG.js";import{Y as l}from"./YAxis-Cdmy20fv.js";import{L as d}from"./Line-i-hk5T1C.js";import{R as h}from"./ReferenceLine-D9UqS6Pn.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-LtTlQghk.js";import"./index-BPm8HOAZ.js";import"./index-D2s_06CJ.js";import"./get-C0Lt804T.js";import"./resolveDefaultProps-BFfik0lP.js";import"./isWellBehavedNumber-zbgy0N68.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B1v1VArt.js";import"./index-Cen9NMit.js";import"./index-1DHoilgY.js";import"./renderedTicksSlice-D0SVQkh2.js";import"./axisSelectors-BtfV9moc.js";import"./d3-scale-8GVIzX8d.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FIs-jkte.js";import"./chartDataContext-BdeADzKD.js";import"./CategoricalChart-DTsRp_4F.js";import"./CartesianAxis-CVNW_DPG.js";import"./Layer-Ck33QkwT.js";import"./Text-r1UAkK_M.js";import"./DOMUtils-CB5jUme8.js";import"./Label-Hedzo6WI.js";import"./ZIndexLayer-tleOLVC8.js";import"./types-D6mO4BwK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BHn37Kg3.js";import"./step-CNOFf0Gl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CcOK_yF7.js";import"./useAnimationId-CKZSDbra.js";import"./ActivePoints-BYS8rjGP.js";import"./Dot-CpI4OitO.js";import"./RegisterGraphicalItemId-D9fHh-dg.js";import"./ErrorBarContext-Dm9lKBps.js";import"./GraphicalItemClipPath-DNkFii-i.js";import"./SetGraphicalItem-BdtIdG4P.js";import"./getRadiusAndStrokeWidthFromDot-DwZJEjHx.js";import"./ActiveShapeUtils-BTTuLaTo.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
