import{R as e}from"./iframe-COvR6m4y.js";import{R as s}from"./zIndexSlice-ou7P1k4B.js";import{C as p}from"./ComposedChart-Dhs-HtCT.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Cy9ZO17O.js";import{X as d}from"./XAxis-Dko6EwLt.js";import{Y as l}from"./YAxis-BmBZe_s0.js";import{R as h}from"./ReferenceArea-B2WtaJLO.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CwSdkZJ2.js";import"./index-C-vvr8x7.js";import"./index-FWviPRnN.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Bslp9ftf.js";import"./isWellBehavedNumber-BMFlPjoz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-S2j0RMDF.js";import"./index-DaYFSMwi.js";import"./index-BTT3eJrw.js";import"./renderedTicksSlice-BCt_pLiN.js";import"./axisSelectors-CgZaOuWk.js";import"./d3-scale-BKhMit0q.js";import"./CartesianChart-B3NTwVXz.js";import"./chartDataContext-BtNlXKIo.js";import"./CategoricalChart-dbTixxWK.js";import"./CartesianAxis-BfSFkfBG.js";import"./Layer-BxScpKop.js";import"./Text-CVNPXLFS.js";import"./DOMUtils-CI2tOPO2.js";import"./Label-DL7W3oea.js";import"./ZIndexLayer-fZm6clI3.js";import"./types-C40QwNfk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-bMPPd1I7.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-DqY-vkpx.js";import"./useAnimationId-Cb3gVBxS.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
