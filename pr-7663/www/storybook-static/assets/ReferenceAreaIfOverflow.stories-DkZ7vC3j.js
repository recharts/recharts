import{R as e}from"./iframe-T2vx_vOa.js";import{R as p}from"./zIndexSlice-B-qj09MF.js";import{C as s}from"./ComposedChart-C1KMn7rC.js";import{p as c}from"./Page-Cj8EiXz7.js";import{C as f}from"./CartesianGrid-BVCRKHeO.js";import{X as d}from"./XAxis-BN7ADdXK.js";import{Y as l}from"./YAxis-BF1HUrTi.js";import{R as h}from"./ReferenceArea-ByLgxHHW.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-B2YWMMfN.js";import"./index-CKmP93dg.js";import"./index-C2g4etmg.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DDbhMM_B.js";import"./isWellBehavedNumber-CkczEaKC.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B7E4P3q_.js";import"./index-BGfsg-y8.js";import"./index-BmiiKlQ3.js";import"./axisSelectors-Bwt_MWfh.js";import"./d3-scale-9Bwz5xwo.js";import"./renderedTicksSlice-BZDyTRdO.js";import"./CartesianChart-Bnxa5O6x.js";import"./chartDataContext-BRu0PEKp.js";import"./CategoricalChart-DZbNl6UN.js";import"./CartesianAxis-Bztsuorj.js";import"./Layer-BJSWtfPf.js";import"./Text-C_hpuPsU.js";import"./DOMUtils-DCQI-dAG.js";import"./useId-BgzgS8Mn.js";import"./useBackwardsCompatibleTheme-CPVLRTOy.js";import"./Label-AUPLS1jy.js";import"./ZIndexLayer-BwLVxIBn.js";import"./types-Bh_AGi1X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Rectangle-CFnUwAZg.js";import"./useAnimationId-w6GkkQqu.js";import"./util-Dxo8gN5i.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:o,within:x}=__STORYBOOK_MODULE_TEST__,re={title:"Examples/cartesian/Reference Area/If Overflow"},t={render:()=>e.createElement(p,{width:"100%",height:500},e.createElement(s,{data:c,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(f,{strokeDasharray:"3 3"}),e.createElement(d,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(h,{x1:"Page B",x2:"Page E",y1:1890,y2:-1e3,stroke:"red",strokeOpacity:.3,ifOverflow:"extendDomain"}))),play:async({canvasElement:n})=>{const{findByText:r}=x(n);o(await r("1900")).toBeInTheDocument(),o(await r("-950")).toBeInTheDocument()}};var a,i,m;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
          <ReferenceArea x1="Page B" x2="Page E" y1={1890} y2={-1000} stroke="red" strokeOpacity={0.3} ifOverflow="extendDomain" />
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
    expect(await findByText('1900')).toBeInTheDocument();
    expect(await findByText('-950')).toBeInTheDocument();
  }
}`,...(m=(i=t.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};const oe=["IfOverflow"];export{t as IfOverflow,oe as __namedExportsOrder,re as default};
