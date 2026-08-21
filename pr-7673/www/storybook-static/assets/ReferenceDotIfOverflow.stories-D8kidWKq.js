import{R as e}from"./iframe-CH2RirRG.js";import{R as n}from"./zIndexSlice-EPNgUqra.js";import{C as s}from"./ComposedChart-B-gNv-fY.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-r7seJm94.js";import{X as f}from"./XAxis-CqEbzlS_.js";import{Y as l}from"./YAxis-8oK4TXT2.js";import{R as d}from"./ReferenceDot-DHMY9w0k.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-wiaHzbqm.js";import"./index-CDgfCI1k.js";import"./index-BGjYA4Me.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DE_sbK1H.js";import"./isWellBehavedNumber-DS-LXYSK.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BjB8dZxg.js";import"./index-CO5DxbW1.js";import"./index-DCEj_OWD.js";import"./axisSelectors-CkKizBw1.js";import"./d3-scale-_MlV87vT.js";import"./renderedTicksSlice-p29IB_-G.js";import"./CartesianChart-RyXtRN5Z.js";import"./chartDataContext-Bjvolui9.js";import"./CategoricalChart-DISzDu-A.js";import"./CartesianAxis-Bp_3tslY.js";import"./Layer-DUd8J6bA.js";import"./Text-D0Ni_nG3.js";import"./DOMUtils-CjXikq8H.js";import"./useId-rSQwkCR7.js";import"./useBackwardsCompatibleTheme-B43Y9MW-.js";import"./Label-JTJpVxOG.js";import"./ZIndexLayer-DaLmvsT2.js";import"./types-BWjPFUtA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-DUdZMRdV.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
