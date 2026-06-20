import{R as e}from"./iframe-DkQJn7oC.js";import{R as n}from"./zIndexSlice-CLvhVPNj.js";import{C as s}from"./ComposedChart-BSrSYERH.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BjORpNZe.js";import{X as f}from"./XAxis-OlRaja_E.js";import{Y as l}from"./YAxis-B058BHQI.js";import{R as d}from"./ReferenceDot-Uejjyhaq.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-ozzvrCwh.js";import"./index-DD1gmeQO.js";import"./index-DNtFXHJ-.js";import"./get-_o-XDxyc.js";import"./resolveDefaultProps-CtV3qxun.js";import"./isWellBehavedNumber-D3HHn2e5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D5ByFvr9.js";import"./index-CDE_9WY4.js";import"./index-BU3HhPoo.js";import"./renderedTicksSlice-DdtdEwsq.js";import"./axisSelectors-kKO86fyF.js";import"./d3-scale-B9HIJ_CW.js";import"./CartesianChart-BQyR2r2D.js";import"./chartDataContext-Ca9RDW-S.js";import"./CategoricalChart-Fc9nOzpN.js";import"./CartesianAxis-BfpvL1x5.js";import"./Layer-Br1RHuVf.js";import"./Text-Bdxz4_Jg.js";import"./DOMUtils-Dl1hyTMQ.js";import"./Label-ufurgCkW.js";import"./ZIndexLayer-BvwLITgH.js";import"./types-BZmxyoje.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Dot-Dno_atKi.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,W={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
