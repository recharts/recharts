import{R as e}from"./iframe-DILeTPtB.js";import{R as n}from"./zIndexSlice-JhTumx9T.js";import{C as s}from"./ComposedChart-BoZ_CD1T.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DUiZQV-v.js";import{X as f}from"./XAxis-Bwnro3mN.js";import{Y as l}from"./YAxis-CISpCaOe.js";import{R as d}from"./ReferenceDot-DZzAs1Uf.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSfx3U2Q.js";import"./index-NDv3w53H.js";import"./index-CUbE2YyD.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps--lUhC_MY.js";import"./isWellBehavedNumber-OeMbA9Vy.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CzFpnRvL.js";import"./index-Bb_kPu6Y.js";import"./index-CID3BdEk.js";import"./renderedTicksSlice-Ds2fOQ5P.js";import"./axisSelectors-BJN0i2Z4.js";import"./d3-scale-C6hgYXhG.js";import"./CartesianChart-CU1CulZs.js";import"./chartDataContext-BAm5Wg7P.js";import"./CategoricalChart-ChRNm6Kp.js";import"./CartesianAxis-sqhBuaGO.js";import"./Layer-DqGeYGqQ.js";import"./Text-DNGNK59q.js";import"./DOMUtils-_37cMB0k.js";import"./Label-RUjb4LlC.js";import"./ZIndexLayer-DKm5_jWO.js";import"./types-0cBFLGxq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-j0bVABcw.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const Z=["IfOverflow"];export{t as IfOverflow,Z as __namedExportsOrder,W as default};
