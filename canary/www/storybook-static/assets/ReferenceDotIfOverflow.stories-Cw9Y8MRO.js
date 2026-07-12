import{R as e}from"./iframe-BLfLpZux.js";import{R as n}from"./zIndexSlice-BdrEPl1y.js";import{C as s}from"./ComposedChart-ZvZa43Nr.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-5er2N29_.js";import{X as f}from"./XAxis-CxCuOvko.js";import{Y as l}from"./YAxis-D5k-HM91.js";import{R as d}from"./ReferenceDot-Ced9LKd9.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-fbWpHloR.js";import"./index-iIj_N3fe.js";import"./index-CK4MQXPT.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-BZWZ2sNL.js";import"./isWellBehavedNumber-D4oOe6S5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CTW173I9.js";import"./index-rWKftsTY.js";import"./index-B91Ea_y6.js";import"./renderedTicksSlice-Bmm8hDp0.js";import"./axisSelectors-y8UfcIHb.js";import"./d3-scale-DPpDzINu.js";import"./CartesianChart-DkG-1GT9.js";import"./chartDataContext-DtPI9Rf-.js";import"./CategoricalChart-DDKWOc6b.js";import"./CartesianAxis-BLCGjb7w.js";import"./Layer-Bul18HQO.js";import"./Text-BhOJQRua.js";import"./DOMUtils-CsfQH6x5.js";import"./Label-BjZvH2GY.js";import"./ZIndexLayer-BVA4IMdO.js";import"./types-CXyRetpj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-B6bHrZQI.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
