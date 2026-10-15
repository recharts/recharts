import{R as e}from"./iframe-B0MhV86h.js";import{R as p}from"./zIndexSlice-JhYmjiRs.js";import{C as s}from"./ComposedChart-Bh5N048-.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-Cz0GsxYj.js";import{X as d}from"./XAxis-mSUHawKI.js";import{Y as l}from"./YAxis-fXjE14Qf.js";import{R as h}from"./ReferenceArea-CBUjhKhw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BiG1uYFs.js";import"./index-I3GMq-pj.js";import"./index-R2Dh29NI.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B7HpHAm5.js";import"./isWellBehavedNumber-Cfafrgq8.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B_6wPZYR.js";import"./axisSelectors-CrrgMfKB.js";import"./d3-scale-CR10n00v.js";import"./index-ZJn3ELdV.js";import"./index-By5cImAN.js";import"./renderedTicksSlice-DHx9pPwr.js";import"./index-DmgedYxy.js";import"./CartesianChart-plZLO0XN.js";import"./chartDataContext-DI3_2rek.js";import"./CategoricalChart-BLaINhxr.js";import"./CartesianAxis-BSkD6k6d.js";import"./Layer-TaFZ6cEO.js";import"./Text-03E8A-Bw.js";import"./pageBackground-qvgCZBpb.js";import"./useId-BhVD5AMJ.js";import"./useBackwardsCompatibleTheme-DIfSIBwo.js";import"./Label-DtBWxW0-.js";import"./ZIndexLayer-OiTLfYLd.js";import"./types-BhM_mLRi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CJdwGJ58.js";import"./useAnimationId-CudNOC-V.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,oe={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ne=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,ne as __namedExportsOrder,oe as default};
