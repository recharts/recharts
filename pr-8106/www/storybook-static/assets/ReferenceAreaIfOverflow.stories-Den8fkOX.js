import{R as e}from"./iframe-B_MIDKz_.js";import{R as s}from"./zIndexSlice-BRdFs8ID.js";import{C as p}from"./ComposedChart-BLBMKU0r.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-C_d4KfQI.js";import{X as d}from"./XAxis-C4lIERbq.js";import{Y as l}from"./YAxis-D3fzxS21.js";import{R as h}from"./ReferenceArea-CyPtd435.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-xzz5mEiC.js";import"./throttle-BEqz9r6e.js";import"./index-BrIcEx9Z.js";import"./index-BOmAjlKN.js";import"./RechartsWrapper-CqGFDY60.js";import"./axisSelectors-Dl7meOBx.js";import"./polarAxisSelectors-mzwQQ_dU.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-TVFiOeXq.js";import"./index-DPAMyEeL.js";import"./index-CwOCWg00.js";import"./renderedTicksSlice-yOWeuXiw.js";import"./index-BKlyB3jB.js";import"./CartesianChart-_H9IG9R2.js";import"./ZIndexPortal-DjuZ3mTH.js";import"./CategoricalChart-D_eNWRTX.js";import"./CartesianAxis-ZYJAAdvA.js";import"./Layer-DNwByRxz.js";import"./Text-B7cqpu59.js";import"./pageBackground-5b67NUgV.js";import"./ZIndexLayer-CUoHFkKf.js";import"./Label-CENIwYcD.js";import"./types-B5hVBX50.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-m0bX_fRW.js";import"./useAnimationId-BYTiB8_B.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
