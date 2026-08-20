import{R as e}from"./iframe-T2vx_vOa.js";import{R as n}from"./zIndexSlice-B-qj09MF.js";import{C as s}from"./ComposedChart-C1KMn7rC.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BVCRKHeO.js";import{X as f}from"./XAxis-BN7ADdXK.js";import{Y as l}from"./YAxis-BF1HUrTi.js";import{R as d}from"./ReferenceDot-BHWa5YHP.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B2YWMMfN.js";import"./index-CKmP93dg.js";import"./index-C2g4etmg.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DDbhMM_B.js";import"./isWellBehavedNumber-CkczEaKC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7E4P3q_.js";import"./index-BGfsg-y8.js";import"./index-BmiiKlQ3.js";import"./axisSelectors-Bwt_MWfh.js";import"./d3-scale-9Bwz5xwo.js";import"./renderedTicksSlice-BZDyTRdO.js";import"./CartesianChart-Bnxa5O6x.js";import"./chartDataContext-BRu0PEKp.js";import"./CategoricalChart-DZbNl6UN.js";import"./CartesianAxis-Bztsuorj.js";import"./Layer-BJSWtfPf.js";import"./Text-C_hpuPsU.js";import"./DOMUtils-DCQI-dAG.js";import"./useId-BgzgS8Mn.js";import"./useBackwardsCompatibleTheme-CPVLRTOy.js";import"./Label-AUPLS1jy.js";import"./ZIndexLayer-BwLVxIBn.js";import"./types-Bh_AGi1X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BlclRNOF.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
