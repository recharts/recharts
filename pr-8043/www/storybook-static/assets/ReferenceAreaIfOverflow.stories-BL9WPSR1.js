import{R as e}from"./iframe-BP-lIJn6.js";import{R as p}from"./zIndexSlice-D3RgJgQF.js";import{C as s}from"./ComposedChart-Di3osW4J.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-DjveYuJT.js";import{X as d}from"./XAxis-D7UL0yEG.js";import{Y as l}from"./YAxis-Dyx7Nivk.js";import{R as h}from"./ReferenceArea-DKGSNqvJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CRwrBkn8.js";import"./index-B8dZU-9J.js";import"./index-C8ITQajG.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BpLU83gk.js";import"./isWellBehavedNumber-B-TYzgiQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BGn36pC9.js";import"./axisSelectors-B6bM08CR.js";import"./d3-scale-BUOxWIbI.js";import"./index-BOoGZrpB.js";import"./index-j3_diSu4.js";import"./renderedTicksSlice-B2e0mRjq.js";import"./index-BmFIm_LJ.js";import"./CartesianChart-BrvlcuUX.js";import"./chartDataContext-DxnoCrzs.js";import"./CategoricalChart-BLzi3Mv1.js";import"./CartesianAxis-B7dTibl7.js";import"./Layer-Dh6XQbJK.js";import"./Text-sFd385s3.js";import"./pageBackground-BxeZOm5U.js";import"./useId-BEGNTi1u.js";import"./useBackwardsCompatibleTheme-CNFi_woZ.js";import"./Label-eMzNaTJc.js";import"./ZIndexLayer-C0Gq1XyH.js";import"./dataEntryStyles-DtR4SG-M.js";import"./types-BDcuyNFB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-CNpXiGQR.js";import"./useAnimationId-BeUNfbh5.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ne={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ae=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
