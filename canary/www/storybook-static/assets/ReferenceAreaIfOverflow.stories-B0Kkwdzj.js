import{R as e}from"./iframe-BFdjndOP.js";import{R as s}from"./zIndexSlice-BMXGqLpb.js";import{C as p}from"./ComposedChart-B2SKrzpV.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CywwPkVC.js";import{X as d}from"./XAxis-B63qJ9KH.js";import{Y as l}from"./YAxis-XZTx9iJE.js";import{R as h}from"./ReferenceArea-DYS04HAc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DJFCHaiN.js";import"./throttle--h3a_z5m.js";import"./index-LVwuga6J.js";import"./index-BW02vIAv.js";import"./RechartsWrapper-H7T23RGg.js";import"./axisSelectors-BPye2JbP.js";import"./polarAxisSelectors-CPTbaBCS.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BbKZN6cQ.js";import"./index-C8219kEG.js";import"./index-CdY5oKLt.js";import"./renderedTicksSlice-BxVzVivR.js";import"./index-D4M5TsAW.js";import"./CartesianChart-CvXsANEo.js";import"./ZIndexPortal-BavuMFDc.js";import"./CategoricalChart-DpOkbqlx.js";import"./CartesianAxis-Ch7lNcAW.js";import"./Layer-lJQGFAu3.js";import"./Text-DOzJQY6l.js";import"./pageBackground-CKt6d5Bo.js";import"./ZIndexLayer-Di6AWmDg.js";import"./Label-fhEADZhw.js";import"./types-CW6mEad7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Rectangle-CI5ZTAqr.js";import"./useAnimationId-BieQKvQP.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:n,within:x}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:m})=>{const{findByText:r}=x(m);n(await r("1900")).toBeInTheDocument(),n(await r("-950")).toBeInTheDocument()}},re=["IfOverflow"];var o,a,i;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
