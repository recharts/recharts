import{R as e}from"./iframe-O6BbDbFD.js";import{R as n}from"./zIndexSlice-ufl9shMa.js";import{C as s}from"./ComposedChart-BrGWNJAt.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-id1gFFMS.js";import{X as f}from"./XAxis-DBoP-lnN.js";import{Y as l}from"./YAxis-D4M42lWl.js";import{R as d}from"./ReferenceDot-C3wMZwSJ.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C3IkSeoT.js";import"./index-BpSs36Jm.js";import"./index-C0YTM7Q0.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Tk25gN9F.js";import"./isWellBehavedNumber-CZqzhzTI.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CoeUwGvc.js";import"./index-CnIZ7xjW.js";import"./index-BUePfml7.js";import"./axisSelectors-B4uTofMj.js";import"./d3-scale-C59jQ7wQ.js";import"./renderedTicksSlice-B4DLXLOp.js";import"./CartesianChart-B9Asj-o-.js";import"./chartDataContext-CMEfpaNZ.js";import"./CategoricalChart-aiOnciBW.js";import"./CartesianAxis-B8nYUrro.js";import"./Layer-BCiB-dL4.js";import"./Text-ti8Fj8zJ.js";import"./DOMUtils-BG1uuH7H.js";import"./useId-Cennb_xj.js";import"./useBackwardsCompatibleTheme-DlXi3557.js";import"./Label-SH09pAJC.js";import"./ZIndexLayer-Bt9vBpxW.js";import"./types-o_WouL0J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-D6BD33aP.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,ee={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:i})=>{const{findByText:m}=w(i);h(await m("1800")).toBeInTheDocument()}};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
