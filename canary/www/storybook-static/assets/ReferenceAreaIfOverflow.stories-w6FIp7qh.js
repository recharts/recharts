import{R as e}from"./iframe-Bibrvi93.js";import{R as p}from"./zIndexSlice-IRdU2Eq4.js";import{C as s}from"./ComposedChart-BDBh58IM.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-ALKh-GIq.js";import{X as d}from"./XAxis-DJh80Lk8.js";import{Y as l}from"./YAxis-C5_c0VAl.js";import{R as h}from"./ReferenceArea-Cbcc_QZs.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BYyvulfq.js";import"./index-DMM3MhtL.js";import"./index-30mt-Xh2.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DuLA9rob.js";import"./isWellBehavedNumber-DEJNr0Qw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bt5qeROs.js";import"./axisSelectors-DSlGSk_i.js";import"./d3-scale-Cv38ge3f.js";import"./index-DWooAmJS.js";import"./index-DnZq9tde.js";import"./renderedTicksSlice-B9WL6t6z.js";import"./index-BJXhTZS7.js";import"./CartesianChart-CEqCUP4y.js";import"./chartDataContext-uGfw2Upg.js";import"./CategoricalChart-DFHR8N3d.js";import"./CartesianAxis-Cuzpv6zD.js";import"./Layer-DE86HNiB.js";import"./Text-BO_ppYYl.js";import"./pageBackground-XzqliJgP.js";import"./useId-BgICeW4-.js";import"./useBackwardsCompatibleTheme-DU3b-TNc.js";import"./Label-cYp5UoGe.js";import"./ZIndexLayer-CR2StRvF.js";import"./dataEntryStyles-DDDSAcpo.js";import"./types-Bq4foVci.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-tEZ4S3O4.js";import"./useAnimationId-CyOwunze.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,ne={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},ae=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
