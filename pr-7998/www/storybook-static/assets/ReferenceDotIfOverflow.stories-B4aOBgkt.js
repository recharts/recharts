import{R as e}from"./iframe-BMLr-N8m.js";import{R as m}from"./zIndexSlice-CNoIWiIj.js";import{C as p}from"./ComposedChart-CRR_BNj7.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-74wadsDV.js";import{X as f}from"./XAxis-vhD_R5mq.js";import{Y as l}from"./YAxis-Cn7UNGEz.js";import{R as d}from"./ReferenceDot-DepoTv9u.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DpCsf_je.js";import"./index-g4GeTxJm.js";import"./index-jx1ZEi_d.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-jOc_O7Kv.js";import"./isWellBehavedNumber-gG-DUVNw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D6IV3yYd.js";import"./axisSelectors-QHFm6bdo.js";import"./d3-scale-uv4cuZVX.js";import"./index-B5o-g1JC.js";import"./index-BoO0kGmt.js";import"./renderedTicksSlice-D6osv6XO.js";import"./index-CL1KOieJ.js";import"./CartesianChart-crhgf43U.js";import"./chartDataContext-Ch0M7QOU.js";import"./CategoricalChart-D8IryVYJ.js";import"./CartesianAxis-Cy6jCwYH.js";import"./Layer-D25gMhyW.js";import"./Text-Cz3Pbtag.js";import"./pageBackground-cNUAWp1v.js";import"./useId-Dyawny2A.js";import"./useBackwardsCompatibleTheme-TjicyzGG.js";import"./Label-CO8bLvFk.js";import"./ZIndexLayer-B6k-j2NC.js";import"./types-ClqQg-f4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DbGsYyOE.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
