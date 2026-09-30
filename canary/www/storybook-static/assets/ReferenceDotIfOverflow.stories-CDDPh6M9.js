import{R as e}from"./iframe-Qmct8dPL.js";import{R as m}from"./zIndexSlice-DXIqEK91.js";import{C as p}from"./ComposedChart-EdWJ2dtJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BH00srKQ.js";import{X as f}from"./XAxis-9J-zU-e3.js";import{Y as l}from"./YAxis-DhnYemPX.js";import{R as d}from"./ReferenceDot-NNC2p6Jf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-OLGJV50e.js";import"./index-BiNiAG-8.js";import"./index-Y-_D5N0e.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-1ACdwYcX.js";import"./isWellBehavedNumber-B8_5eiwl.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CA8gYP8X.js";import"./axisSelectors-DQj7dDoX.js";import"./d3-scale-BxubizPM.js";import"./index-JkwU9wUv.js";import"./index-Cl8DEeo-.js";import"./renderedTicksSlice-C_XZvXHS.js";import"./index-yzCwrxwp.js";import"./CartesianChart-BKFAhLSe.js";import"./chartDataContext-phyyW0XT.js";import"./CategoricalChart-kEDlcm2-.js";import"./CartesianAxis-BRUXhqMv.js";import"./Layer-DivV_9FZ.js";import"./Text-CqCSaO_p.js";import"./DOMUtils-CVrddbmH.js";import"./useId-BXFGZ7WB.js";import"./useBackwardsCompatibleTheme-BkhTNX9-.js";import"./Label-B1HxkUUU.js";import"./ZIndexLayer-1SjAyyP_.js";import"./types-R1YvGwXP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-CegM_aDK.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
