import{e}from"./iframe-C6nv2cAy.js";import{g as s}from"./arrayEqualityCheck-B6TrlJO6.js";import{C as p}from"./ComposedChart-CelmCkFr.js";import{p as c}from"./Page-DPte-9pC.js";import{C as f}from"./CartesianGrid--fVoNz1D.js";import{X as l}from"./XAxis-VmwM632k.js";import{Y as h}from"./YAxis-O_OVv1Cn.js";import{R as d}from"./ReferenceArea-DF5tJQVA.js";import{R as x}from"./RechartsHookInspector-DL3_bzE2.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-Dz2DdWhQ.js";import"./immer-Cni8-JSk.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BW8puFa7.js";import"./index-B73x1Khd.js";import"./hooks-BtR6DFBi.js";import"./axisSelectors-DvgT42C4.js";import"./d3-scale-BCthX3a6.js";import"./zIndexSlice-J7b4XvEa.js";import"./renderedTicksSlice-CAeDVDJj.js";import"./CartesianChart-DXKuJw3U.js";import"./chartDataContext-CzxDQN7p.js";import"./CategoricalChart-QgKXQZGT.js";import"./CartesianAxis-BFynhpO1.js";import"./Layer-wqnfjYdM.js";import"./Text-Ceq4AYN-.js";import"./DOMUtils-5JKzP-3C.js";import"./Label-DLbKprA1.js";import"./ZIndexLayer-B79SyOov.js";import"./types-QOd3xFvZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./Rectangle-M0x9aVbG.js";import"./useAnimationId-CQiwipC5.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DweZMxE9.js";import"./ChartSizeDimensions-BY1_-T9T.js";import"./OffsetShower-DDAPU-JD.js";import"./PlotAreaShower-XRHlYJYB.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(l,{dataKey:"name"}),e.createElement(h,{type:"number"}),e.createElement(d,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(x,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
