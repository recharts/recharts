import{R as e}from"./iframe-TE0a3h8U.js";import{R as n}from"./zIndexSlice-CuzvPj3e.js";import{C as s}from"./ComposedChart-CK1drtAL.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CkX0chSu.js";import{X as f}from"./XAxis-DYSrX7Pe.js";import{Y as l}from"./YAxis-nM39HCeg.js";import{R as d}from"./ReferenceDot-CjMCywE8.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B9xIgtOp.js";import"./index-CbO58SlV.js";import"./index-Bes_wTqv.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DxKF5pbQ.js";import"./isWellBehavedNumber-Cwb0Yuac.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Zf4efnQ7.js";import"./index-CH7AYfaw.js";import"./index-mICHaOdM.js";import"./axisSelectors-D4Hdk4ax.js";import"./d3-scale-ClwuSri4.js";import"./renderedTicksSlice-CV9ehOCs.js";import"./CartesianChart-D6VrfDcf.js";import"./chartDataContext-CdtLleKV.js";import"./CategoricalChart-D_woPTvb.js";import"./CartesianAxis-zD9IwJ4x.js";import"./Layer-CEnr9JeS.js";import"./Text-DL22Whxw.js";import"./DOMUtils-CzEfLf16.js";import"./useId-CnhnPuIR.js";import"./useBackwardsCompatibleTheme-Kb0l05fi.js";import"./Label-DW2voJ8G.js";import"./ZIndexLayer-DV8vU7iD.js";import"./types-8QdsKxPr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CvKEUnwP.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
