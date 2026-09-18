import{R as e}from"./iframe-hd_pfHvo.js";import{R as m}from"./zIndexSlice-Dp2BKzs8.js";import{C as p}from"./ComposedChart-CLRu4YV9.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CjQhUT8W.js";import{X as f}from"./XAxis-DIhH_NdP.js";import{Y as l}from"./YAxis-Bfby8-tG.js";import{R as d}from"./ReferenceDot-DUjX5BPu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C2q4COo1.js";import"./index-v0QewD8A.js";import"./index-SCBhOffb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-drD7xYIQ.js";import"./isWellBehavedNumber-C1tuJPSP.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CyksNjdk.js";import"./axisSelectors-eHIx7hMS.js";import"./d3-scale-CciOkO_z.js";import"./index-C3NZEEPx.js";import"./index-Dl1k2Uag.js";import"./renderedTicksSlice-CD7ArbZx.js";import"./index-zFom7GTd.js";import"./CartesianChart-lsa6cjfM.js";import"./chartDataContext-BzYnwGm5.js";import"./CategoricalChart-DK0H-Nig.js";import"./CartesianAxis-Bczd13d5.js";import"./Layer-egOiXfr6.js";import"./Text-C6732HHA.js";import"./DOMUtils-B5fqbFU1.js";import"./useId-_Yta7G-c.js";import"./useBackwardsCompatibleTheme-SiYIdPDZ.js";import"./Label-DeYie9Lh.js";import"./ZIndexLayer-BHjO29Bs.js";import"./types-B1tRcN2v.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-D7no8cFh.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
