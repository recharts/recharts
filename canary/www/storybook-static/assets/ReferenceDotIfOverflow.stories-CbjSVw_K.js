import{R as e}from"./iframe-DNItCT7m.js";import{R as n}from"./zIndexSlice-BIc7DaAW.js";import{C as s}from"./ComposedChart-C5LgD4az.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-68pXkVyS.js";import{X as f}from"./XAxis-Daqmz5Xv.js";import{Y as l}from"./YAxis-BTzQl_Zr.js";import{R as d}from"./ReferenceDot-DIr-S1IG.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C6rBLGvR.js";import"./index-CATLtXB_.js";import"./index-COLkHtZe.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-Bl2ououO.js";import"./isWellBehavedNumber-CgbpTCVR.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMs8UQqD.js";import"./index-ROxRgVl8.js";import"./index-C_m6BLaT.js";import"./renderedTicksSlice-DtPKT0nb.js";import"./axisSelectors-BBK9nbq3.js";import"./d3-scale-CToN17b5.js";import"./CartesianChart-CPv-NLLr.js";import"./chartDataContext-abx-D_mf.js";import"./CategoricalChart-DyfBdBCf.js";import"./CartesianAxis-Bnx97baV.js";import"./Layer-Db2cjn9q.js";import"./Text-CG5VQSen.js";import"./DOMUtils-D-QZZqkA.js";import"./Label-Dd-8-k84.js";import"./ZIndexLayer-C8mc3Rgo.js";import"./types-BUhan55B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Dot-CBZvltEJ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,Z={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const $=["IfOverflow"];export{t as IfOverflow,$ as __namedExportsOrder,Z as default};
