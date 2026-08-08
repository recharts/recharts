import{R as e}from"./iframe-rYRmlY_w.js";import{R as n}from"./zIndexSlice-CW9g3Df4.js";import{C as s}from"./ComposedChart-CJWWrFGv.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B1mxfGL-.js";import{X as f}from"./XAxis-B2S1kxsc.js";import{Y as l}from"./YAxis-BWeWjLFg.js";import{R as d}from"./ReferenceDot-DhDFnuXS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DMLB0n1a.js";import"./index-C9MyWVnc.js";import"./index-XYmaX6Gc.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BpsYi27l.js";import"./isWellBehavedNumber-I3Ct3Qx4.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Df0Nzpvc.js";import"./index-LHDP7ZRA.js";import"./index-mkET9CIq.js";import"./axisSelectors-CawrvlcN.js";import"./d3-scale-C-FCD3Na.js";import"./renderedTicksSlice-BaDCcj0z.js";import"./CartesianChart-Di-wUoL0.js";import"./chartDataContext-CUzIUSSV.js";import"./CategoricalChart-BXI0eqUO.js";import"./CartesianAxis-BPXoMhkW.js";import"./Layer-Dpa7ZKP5.js";import"./Text-yyeh64ow.js";import"./DOMUtils-vuT3ag2A.js";import"./Label-C_0fnefy.js";import"./ZIndexLayer-DjuCBj9U.js";import"./types-B2Hj88Lf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C6kBHVPv.js";import"./isBuffer-BG75eWKN.js";import"./Dot-BJyh6EJc.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const ee=["IfOverflow"];export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
