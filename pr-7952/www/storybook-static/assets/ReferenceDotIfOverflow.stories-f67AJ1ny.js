import{R as e}from"./iframe-DIGZheBd.js";import{R as m}from"./zIndexSlice-_cU-ODvm.js";import{C as p}from"./ComposedChart-AI3knhdQ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CGrfPWch.js";import{X as f}from"./XAxis-JeVlcNJo.js";import{Y as l}from"./YAxis-pOdEjlW4.js";import{R as d}from"./ReferenceDot-D8W-z0SS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BSuBUnwb.js";import"./index-d4xmlami.js";import"./index-Ddn_7QMu.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-7SQuNWZq.js";import"./isWellBehavedNumber-DN4lRp81.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CZtBBFTk.js";import"./axisSelectors-D8SOTwsy.js";import"./d3-scale-DdurYsOp.js";import"./index-CQhVaGTX.js";import"./index-DhWUPbJL.js";import"./renderedTicksSlice-v8ZBDgTH.js";import"./index-CiMP-PEk.js";import"./CartesianChart-qIKAIThb.js";import"./chartDataContext-F14SePCT.js";import"./CategoricalChart-CmpWafRJ.js";import"./CartesianAxis--bh-_8od.js";import"./Layer-CyJKyehG.js";import"./Text-OwXAxNhC.js";import"./pageBackground-CxPMNoKP.js";import"./useId-C_XdBO39.js";import"./useBackwardsCompatibleTheme-CVHM2al0.js";import"./Label-DdnBRnzY.js";import"./ZIndexLayer-Csfe5z3g.js";import"./types-MK9UFfTC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-Dr6-XXth.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
