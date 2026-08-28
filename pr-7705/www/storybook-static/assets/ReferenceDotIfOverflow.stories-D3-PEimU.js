import{R as e}from"./iframe-D3n-qa3v.js";import{R as n}from"./zIndexSlice-URMJGlQl.js";import{C as p}from"./ComposedChart-IfzjzOLd.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DdfvKh4X.js";import{X as f}from"./XAxis-BvFg4s2o.js";import{Y as l}from"./YAxis-B-l06g0y.js";import{R as d}from"./ReferenceDot-C2Im9IS-.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DN7vm2uB.js";import"./index-C_ri2ApK.js";import"./index-Dd3rxVYb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cvq-kyHH.js";import"./isWellBehavedNumber-CrERG1s-.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DDHIckB2.js";import"./axisSelectors-DaB7yAHm.js";import"./d3-scale-CaZKGVIZ.js";import"./index-C_Wrm-XW.js";import"./index-CZCnJbjp.js";import"./renderedTicksSlice-CPTSo4fz.js";import"./index-C1lTKvWo.js";import"./CartesianChart-DUso81Db.js";import"./chartDataContext-CZa0hGfr.js";import"./CategoricalChart-CGaW84Rd.js";import"./CartesianAxis-Cx3S-3lL.js";import"./Layer-oKfk3hYA.js";import"./Text-70ucIKSF.js";import"./DOMUtils-CcpQZ2_k.js";import"./useId-B_N_AB1U.js";import"./useBackwardsCompatibleTheme-BAQfNZQf.js";import"./Label-CpaVgYY8.js";import"./ZIndexLayer-hb7j23f9.js";import"./types-DvyNYfPW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DbNEtbef.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const re=["IfOverflow"];export{t as IfOverflow,re as __namedExportsOrder,te as default};
