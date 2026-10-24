import{R as e}from"./iframe-TJn1iDy_.js";import{R as p}from"./zIndexSlice-DcxCrJas.js";import{C as s}from"./ComposedChart-CjLYC499.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DZkiD9Lt.js";import{X as d}from"./XAxis-B_y5feDu.js";import{Y as l}from"./YAxis-BwpngE3S.js";import{R as h}from"./ReferenceArea-Crtjq5Fp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-boe4gmWF.js";import"./index-CAYNC06-.js";import"./index-BNRC9x_2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B1uePsee.js";import"./isWellBehavedNumber-BKYnvYyY.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CGWm-04h.js";import"./axisSelectors-BRmQ6VbT.js";import"./d3-scale-VVBOPfYG.js";import"./index-Cwz_ZaMA.js";import"./index-CAMm0n22.js";import"./renderedTicksSlice-SWpas3hv.js";import"./index-DfZWRiOw.js";import"./CartesianChart-a7iVuIbn.js";import"./chartDataContext-Lnk93lz4.js";import"./CategoricalChart-CtiAUO9e.js";import"./CartesianAxis-D8sqtaMD.js";import"./Layer-tyJENV3V.js";import"./Text-Lhe6e02h.js";import"./pageBackground-CtZ35NZS.js";import"./useId-DKCqn9Eo.js";import"./useBackwardsCompatibleTheme-BsIvvZ0r.js";import"./Label-DOD1E2dd.js";import"./ZIndexLayer-qm_XHo-2.js";import"./dataEntryStyles-XnzxZhd6.js";import"./types-Bczg7GWk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-Bx76BAa_.js";import"./useAnimationId-BdprCSjI.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ne={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ae=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ae as __namedExportsOrder,ne as default};
