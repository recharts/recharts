import{R as e}from"./iframe-zm2RFiAA.js";import{R as m}from"./zIndexSlice-DqZBLIbU.js";import{C as p}from"./ComposedChart-BtUji9l7.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-_vwIk58n.js";import{X as f}from"./XAxis-BmR_Q4ey.js";import{Y as l}from"./YAxis-QmJ3fv5f.js";import{R as d}from"./ReferenceDot-Dsj6BjtQ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-8D1mAr5a.js";import"./index-DYoeUBFv.js";import"./index-C05Q7pAX.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DVyNUYq0.js";import"./isWellBehavedNumber-BsUHNZ1L.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bnt3Xjg2.js";import"./axisSelectors-D_XgtjC9.js";import"./d3-scale-CIfEmdT5.js";import"./index-Cyz_PThi.js";import"./index-0SlDOcWE.js";import"./renderedTicksSlice-DM7SAuzg.js";import"./index-DpXVo8J4.js";import"./CartesianChart-CZZG3tzb.js";import"./chartDataContext-ChtOwbQ7.js";import"./CategoricalChart-Cc-dXh8l.js";import"./CartesianAxis-BTS4yOao.js";import"./Layer-CBvDM-ZR.js";import"./Text-bm4_J_IC.js";import"./DOMUtils-Dj43lFCA.js";import"./useId-DIhnWHEa.js";import"./useBackwardsCompatibleTheme-DTCZ1OkH.js";import"./Label-Dpn-Rbeg.js";import"./ZIndexLayer-fVuj_SHP.js";import"./types-DQCUIdcv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DeAdYXSf.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
