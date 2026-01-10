import{e}from"./iframe-DFbc2wnk.js";import{R as s}from"./arrayEqualityCheck-DNx-7st0.js";import{C as p}from"./ComposedChart-b5llXj5F.js";import{C as c}from"./CartesianGrid-yYQlEY0W.js";import{X as f}from"./XAxis-DGAvxfHG.js";import{Y as l}from"./YAxis-BmkMcK7A.js";import{R as h}from"./ReferenceArea-Dh0p2XMj.js";import{R as d}from"./RechartsHookInspector-BArVV55G.js";import{p as x}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-ClO_iFbZ.js";import"./PolarUtils-BDvNNmDF.js";import"./RechartsWrapper-PvLVQTSN.js";import"./hooks-zOgLtc1N.js";import"./axisSelectors-BtV4vldP.js";import"./zIndexSlice-DhoG6ae-.js";import"./CartesianChart-DAIV8Ndc.js";import"./chartDataContext-Coc1sgsX.js";import"./CategoricalChart-UkGGk_Hv.js";import"./CartesianAxis-C9Id4cvu.js";import"./Layer-qN8dyvlM.js";import"./Text-DCmcV5md.js";import"./DOMUtils-Bie9vKOH.js";import"./Label-CS9yD1bY.js";import"./ZIndexLayer-DxPlI_9c.js";import"./types-CdWStgLs.js";import"./Rectangle-tz9WvN-g.js";import"./useAnimationId-B9C_B4hh.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DEbDUIbN.js";import"./ChartSizeDimensions-BvKst1DG.js";import"./OffsetShower-BMIsB7Uf.js";import"./PlotAreaShower-CrjZWfAt.js";const{expect:o,within:w}=__STORYBOOK_MODULE_TEST__,V={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:x,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}),e.createElement(d,null))),play:async({canvasElement:n})=>{const{findByText:r}=w(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
