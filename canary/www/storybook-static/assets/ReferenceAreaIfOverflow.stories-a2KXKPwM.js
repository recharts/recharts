import{R as e}from"./iframe-GELhAUTo.js";import{R as s}from"./zIndexSlice-ClN2s-1U.js";import{C as p}from"./ComposedChart-CdCgkykE.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-CfIIDz7w.js";import{X as d}from"./XAxis-Y85LtPOX.js";import{Y as l}from"./YAxis-CwCyZywx.js";import{R as h}from"./ReferenceArea-DvwG_gGj.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DU3kigO2.js";import"./index-DTm2_Ebd.js";import"./index-Ch3aQyu8.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-i6Bf8Qe5.js";import"./isWellBehavedNumber-qNvGNJqB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSC6kLWa.js";import"./index-fkyqtveo.js";import"./index-De1BUZgG.js";import"./renderedTicksSlice-DtvoFkYT.js";import"./axisSelectors-DqMTsyvT.js";import"./d3-scale-BXdsYgex.js";import"./CartesianChart-CnHKmmwZ.js";import"./chartDataContext-C1NesgAa.js";import"./CategoricalChart-DWJWD5d1.js";import"./CartesianAxis-C2iZYvRC.js";import"./Layer-1dFGvAkG.js";import"./Text-COlbwtoq.js";import"./DOMUtils-vC9OxNpg.js";import"./Label-D2gt0uaB.js";import"./ZIndexLayer-BJaQcl6Z.js";import"./types-CDH6nNS8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Rectangle-D1qGnE1A.js";import"./useAnimationId-Cjs3Y5s0.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(s,{width:"100%",height:500},e.createElement(p,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
