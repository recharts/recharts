import{R as e}from"./iframe-pb0eGUzQ.js";import{R as n}from"./zIndexSlice-Cv3joHsa.js";import{C as s}from"./ComposedChart-BYOHyhAB.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CP4v98tj.js";import{X as f}from"./XAxis-C8pfECSp.js";import{Y as l}from"./YAxis-CZ5C3-Kt.js";import{R as d}from"./ReferenceDot-Dv4coIfu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CLVKwQCr.js";import"./index-CadbAa9f.js";import"./index-B3wblxBJ.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BIcSgHHm.js";import"./isWellBehavedNumber-sYswO0zz.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BvkKxzHL.js";import"./index-Ci6SDbSO.js";import"./index-DmA7_hIT.js";import"./axisSelectors-RMGVuaxT.js";import"./d3-scale-D40q8NYs.js";import"./renderedTicksSlice-BIUrSjZy.js";import"./CartesianChart-D9u_fkX_.js";import"./chartDataContext-tQQ7C7rr.js";import"./CategoricalChart-DraDT8M3.js";import"./CartesianAxis-DVH187SM.js";import"./Layer-CsF7idKX.js";import"./Text-Bq7mJ7MP.js";import"./DOMUtils-C_JPJk8X.js";import"./useId-xKOkSlvZ.js";import"./useBackwardsCompatibleTheme-DGBzFLd0.js";import"./Label-C-65Vs2n.js";import"./ZIndexLayer-BlGsGj6Y.js";import"./types-CuZ7ciTr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DmEXtJXC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const te=["IfOverflow"];export{t as IfOverflow,te as __namedExportsOrder,ee as default};
