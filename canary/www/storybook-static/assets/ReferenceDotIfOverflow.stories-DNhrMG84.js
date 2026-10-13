import{R as e}from"./iframe-NhQV4prz.js";import{R as m}from"./zIndexSlice-CfLnBr12.js";import{C as p}from"./ComposedChart-BygaGWnl.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cyv3Grcf.js";import{X as f}from"./XAxis-Fp7U60n2.js";import{Y as l}from"./YAxis-BZzMEbei.js";import{R as d}from"./ReferenceDot-Bg7-9xVD.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DIKmaWkS.js";import"./index-BSL_lC_q.js";import"./index-CDv5DZpz.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DiB_0bHm.js";import"./isWellBehavedNumber-CZC1TcYQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BxN86ujp.js";import"./axisSelectors-CI2m5dZK.js";import"./d3-scale-DKOiWQKf.js";import"./index-Cmohh-L0.js";import"./index-DaOiqL7H.js";import"./renderedTicksSlice-C3ai8iRv.js";import"./index-Dc9b_9OD.js";import"./CartesianChart-CiIIIaIF.js";import"./chartDataContext-I3KBS5Dn.js";import"./CategoricalChart-BSIFNsGO.js";import"./CartesianAxis-Brd3Au8o.js";import"./Layer-BBUzG4Ds.js";import"./Text-BjHxixwZ.js";import"./pageBackground-CDOOBPh1.js";import"./useId-BhvwEVie.js";import"./useBackwardsCompatibleTheme-RAZcM6ed.js";import"./Label-BUAYU6sx.js";import"./ZIndexLayer-L-3od7Tk.js";import"./types-CquoFe81.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-Bbsv88JT.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
