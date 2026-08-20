import{R as e}from"./iframe-Bw423yT3.js";import{R as n}from"./zIndexSlice-C0Ur0qQv.js";import{C as s}from"./ComposedChart-Cz46LnAr.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DPKrYQGM.js";import{X as f}from"./XAxis-DoB4s5YX.js";import{Y as l}from"./YAxis-OVaFJ7CI.js";import{R as d}from"./ReferenceDot-DpOyvPTp.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DoQ6jmeU.js";import"./index-CSmn3lR3.js";import"./index-Cmb77t22.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DecYMRDs.js";import"./isWellBehavedNumber-Bhsok9Kl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bq4pCedS.js";import"./index-DY-6WoYl.js";import"./index-Dzxogdh4.js";import"./axisSelectors-DvFF09lq.js";import"./d3-scale-B6w1DC_B.js";import"./renderedTicksSlice-C7gnJRFb.js";import"./CartesianChart-KYAmso8l.js";import"./chartDataContext-ChmL2TgJ.js";import"./CategoricalChart-BFEAf3EH.js";import"./CartesianAxis-Crdg7aw6.js";import"./Layer-D4oXIaGo.js";import"./Text-C_UyMP2R.js";import"./DOMUtils-B-o7bCMD.js";import"./useId-DVN36WJe.js";import"./useBackwardsCompatibleTheme-BiX6i8Ds.js";import"./Label-CDuT1dKE.js";import"./ZIndexLayer-BMLxUbw3.js";import"./types-Ds-DwS6F.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BzofvkeI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
