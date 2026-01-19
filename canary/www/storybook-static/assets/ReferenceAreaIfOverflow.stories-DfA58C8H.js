import{e}from"./iframe-C1zBrMCd.js";import{R as s}from"./arrayEqualityCheck-Df8r3poz.js";import{C as p}from"./ComposedChart-BvN08KBc.js";import{C as c}from"./CartesianGrid-CcFLJXfP.js";import{X as f}from"./XAxis-DU1SAysF.js";import{Y as l}from"./YAxis-Bcx80oq7.js";import{R as h}from"./ReferenceArea-ps1EcgDO.js";import{R as d}from"./RechartsHookInspector-BISA2G0k.js";import{p as x}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BsIlMHa7.js";import"./PolarUtils-_NKSevVn.js";import"./RechartsWrapper-Cv1tlCaV.js";import"./hooks-WF-Co-wK.js";import"./axisSelectors-DB8TkCkM.js";import"./zIndexSlice-hFBZ82Qc.js";import"./CartesianChart-B5UDYtnc.js";import"./chartDataContext-DI2kF2Ct.js";import"./CategoricalChart-2Vole5cF.js";import"./CartesianAxis-DF9he0a4.js";import"./Layer-D3PE35Mq.js";import"./Text-dJAbnPql.js";import"./DOMUtils-DOdR4DF9.js";import"./Label-6nnLE5h5.js";import"./ZIndexLayer-BetO650l.js";import"./types-HpBDQdg7.js";import"./Rectangle-BhdzWbEl.js";import"./useAnimationId-D3t9NmUg.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-D7UfPOGu.js";import"./ChartSizeDimensions-Dtypf1Rq.js";import"./OffsetShower-DOhEeiaZ.js";import"./PlotAreaShower-B0-XWkzL.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const W=["IfOverflow"];export{t as IfOverflow,W as __namedExportsOrder,V as default};
