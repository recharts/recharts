import{R as e}from"./iframe-Bvdgb1qV.js";import{R as p}from"./zIndexSlice-B01j9Vcs.js";import{C as s}from"./ComposedChart-Buy3_glc.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CtCmynQ5.js";import{X as d}from"./XAxis-D59h15hK.js";import{Y as l}from"./YAxis-BeFwt-ht.js";import{R as h}from"./ReferenceArea-BY9cpNV3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Dw9_y5mH.js";import"./throttle-BPyPQEAQ.js";import"./index-CvLCmGiJ.js";import"./index-Cpva_oKK.js";import"./RechartsWrapper-Xt6mrXGV.js";import"./axisSelectors-B7JYqxaB.js";import"./polarAxisSelectors-DEav2p-j.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-AQ3fTkSg.js";import"./index-BnNH-Ow2.js";import"./index-ByMobiKc.js";import"./renderedTicksSlice-9ekrV8Q5.js";import"./index-BIMpYUxR.js";import"./CartesianChart-D526lA3e.js";import"./ZIndexPortal-dwQ5L04t.js";import"./CategoricalChart-CuxUrQWu.js";import"./CartesianAxis-qmdlREsz.js";import"./Layer-C-2DDjxl.js";import"./Text-DPvkSF-G.js";import"./pageBackground-Cb0q0UoB.js";import"./ZIndexLayer-uaQDwXWb.js";import"./Label-DP6vSrfL.js";import"./dataEntryStyles-BpvBRnn1.js";import"./types-BLGnyPc9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-N8aUytSm.js";import"./useAnimationId-t1eD8fzp.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}},oe=["IfOverflow"];var n,a,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};export{t as IfOverflow,oe as __namedExportsOrder,re as default};
