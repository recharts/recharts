import{R as e}from"./iframe-D0yOAL3n.js";import{R as m}from"./zIndexSlice-Dn2Ys6gV.js";import{C as s}from"./ComposedChart-DzH7Aje-.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DQSXKhES.js";import{X as f}from"./XAxis-ntZPF60e.js";import{Y as l}from"./YAxis-ClNwS6nX.js";import{R as d}from"./ReferenceDot-DleNwcRl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-Cif0RW7j.js";import"./throttle-BrS_cZCp.js";import"./index-D1v08_vM.js";import"./index-ELyMDiEN.js";import"./RechartsWrapper-DwTnzypz.js";import"./axisSelectors-DATXyQCy.js";import"./polarAxisSelectors-aGfpHLq1.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-n2sBsRY0.js";import"./index-CwmpmH_i.js";import"./index-CqRNnRSm.js";import"./renderedTicksSlice-Cx7A9Rjk.js";import"./index-BQd9CGB1.js";import"./CartesianChart-DLG1qiqu.js";import"./ZIndexPortal-DWwaC6CZ.js";import"./CategoricalChart-BqkqH0t5.js";import"./CartesianAxis-dbcozJzz.js";import"./Layer-CY7a4PGZ.js";import"./Text-z-sERxAx.js";import"./pageBackground-Cu52DhUW.js";import"./ZIndexLayer-DLelF1L8.js";import"./Label-BzBQuB2T.js";import"./dataEntryStyles-BNyFarFk.js";import"./types-IRHz2iGt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-lux40cEN.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},te=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,te as __namedExportsOrder,ee as default};
