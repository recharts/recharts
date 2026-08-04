import{R as e}from"./iframe-COvR6m4y.js";import{R as n}from"./zIndexSlice-ou7P1k4B.js";import{C as s}from"./ComposedChart-Dhs-HtCT.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cy9ZO17O.js";import{X as f}from"./XAxis-Dko6EwLt.js";import{Y as l}from"./YAxis-BmBZe_s0.js";import{R as d}from"./ReferenceDot-CnmGe6Ac.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CwSdkZJ2.js";import"./index-C-vvr8x7.js";import"./index-FWviPRnN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bslp9ftf.js";import"./isWellBehavedNumber-BMFlPjoz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-S2j0RMDF.js";import"./index-DaYFSMwi.js";import"./index-BTT3eJrw.js";import"./renderedTicksSlice-BCt_pLiN.js";import"./axisSelectors-CgZaOuWk.js";import"./d3-scale-BKhMit0q.js";import"./CartesianChart-B3NTwVXz.js";import"./chartDataContext-BtNlXKIo.js";import"./CategoricalChart-dbTixxWK.js";import"./CartesianAxis-BfSFkfBG.js";import"./Layer-BxScpKop.js";import"./Text-CVNPXLFS.js";import"./DOMUtils-CI2tOPO2.js";import"./Label-DL7W3oea.js";import"./ZIndexLayer-fZm6clI3.js";import"./types-C40QwNfk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-bMPPd1I7.js";import"./isBuffer-BG75eWKN.js";import"./Dot-COu3_HTT.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
