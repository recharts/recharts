import{R as e}from"./iframe-CQ0Lljz5.js";import{R as m}from"./zIndexSlice-DEHrA3Rr.js";import{C as p}from"./ComposedChart-CDVvV506.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DAHH3aHX.js";import{X as f}from"./XAxis-DOKTQQJO.js";import{Y as l}from"./YAxis-BU1cXErq.js";import{R as d}from"./ReferenceDot-CN4Gf8Nv.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-D0Qp2wbd.js";import"./index-CgKUH7Pt.js";import"./index-DJBjlh9k.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BJD_NHtt.js";import"./isWellBehavedNumber-B5oWMPg-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Dx4TkxXI.js";import"./axisSelectors-CIePYxzF.js";import"./d3-scale-bZdbqgmB.js";import"./index--XZnrZ3Q.js";import"./index-_-Q-FGj6.js";import"./renderedTicksSlice-BkkJdu7D.js";import"./index-BGyIiFfh.js";import"./CartesianChart-MQW7TOME.js";import"./chartDataContext-DkzXheoo.js";import"./CategoricalChart-DFae7qCs.js";import"./CartesianAxis-K2XDXRUA.js";import"./Layer-DFHm6cg2.js";import"./Text-CnTJRORA.js";import"./DOMUtils-DMu9BuDW.js";import"./useId-aq3DvHIK.js";import"./useBackwardsCompatibleTheme-CNmncO23.js";import"./Label-D63u7ve3.js";import"./ZIndexLayer-Bj3SLdvY.js";import"./types-BxcasGOq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DF8MgqBD.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
