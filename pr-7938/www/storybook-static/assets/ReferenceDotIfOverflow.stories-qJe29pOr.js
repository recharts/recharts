import{R as e}from"./iframe-DyRGY0m8.js";import{R as m}from"./zIndexSlice-C8Goqaoo.js";import{C as p}from"./ComposedChart-DeUFnq4z.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BKYufXor.js";import{X as f}from"./XAxis-ClyuyVSJ.js";import{Y as l}from"./YAxis-CiOcUDSR.js";import{R as d}from"./ReferenceDot-CuOtjo7Q.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D2TCso2q.js";import"./index-Cv8tkEHt.js";import"./index-DxURkMdl.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CwBj0Vjn.js";import"./isWellBehavedNumber-JGpa1dK4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-eOw39y0P.js";import"./axisSelectors-DJKcPqvS.js";import"./d3-scale-sk2wIxSM.js";import"./index-CzwSuytx.js";import"./index-DSQh__sX.js";import"./renderedTicksSlice-DM2Uh_-7.js";import"./index-BZwbzPta.js";import"./CartesianChart-B9Ziwbgu.js";import"./chartDataContext-DdROdGCg.js";import"./CategoricalChart-CS-kA2nE.js";import"./CartesianAxis-C3YZMA4b.js";import"./Layer-Cn0quWvc.js";import"./Text-BK2IfBRh.js";import"./pageBackground-BnJW5YJX.js";import"./useId-DkHD0fqt.js";import"./useBackwardsCompatibleTheme-B8R5ZMSD.js";import"./Label-DmSSoRs6.js";import"./ZIndexLayer-CELDjLLn.js";import"./types-vbUeFItv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DOIcUge1.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
