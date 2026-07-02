import{R as e}from"./iframe-GELhAUTo.js";import{R as n}from"./zIndexSlice-ClN2s-1U.js";import{C as s}from"./ComposedChart-CdCgkykE.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CfIIDz7w.js";import{X as f}from"./XAxis-Y85LtPOX.js";import{Y as l}from"./YAxis-CwCyZywx.js";import{R as d}from"./ReferenceDot-hvpJMfQQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DU3kigO2.js";import"./index-DTm2_Ebd.js";import"./index-Ch3aQyu8.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-i6Bf8Qe5.js";import"./isWellBehavedNumber-qNvGNJqB.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CSC6kLWa.js";import"./index-fkyqtveo.js";import"./index-De1BUZgG.js";import"./renderedTicksSlice-DtvoFkYT.js";import"./axisSelectors-DqMTsyvT.js";import"./d3-scale-BXdsYgex.js";import"./CartesianChart-CnHKmmwZ.js";import"./chartDataContext-C1NesgAa.js";import"./CategoricalChart-DWJWD5d1.js";import"./CartesianAxis-C2iZYvRC.js";import"./Layer-1dFGvAkG.js";import"./Text-COlbwtoq.js";import"./DOMUtils-vC9OxNpg.js";import"./Label-D2gt0uaB.js";import"./ZIndexLayer-BJaQcl6Z.js";import"./types-CDH6nNS8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-Dfp7LnYV.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
