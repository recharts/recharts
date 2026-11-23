import{R as e}from"./iframe-BPMC3WYJ.js";import{R as m}from"./zIndexSlice-Dj40vb7g.js";import{C as s}from"./ComposedChart-q5KBJ-2n.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-D6M-inzk.js";import{X as f}from"./XAxis-BFqeDJUQ.js";import{Y as l}from"./YAxis--I1P1gwH.js";import{R as d}from"./ReferenceDot-DtG9zgH4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DrqSG9Sb.js";import"./throttle-B4k3GkVg.js";import"./index--Kmbgs-i.js";import"./index-AyLBa-KC.js";import"./RechartsWrapper-DOOVVQ84.js";import"./axisSelectors-CrZDIgWl.js";import"./polarAxisSelectors-BUrPAP_8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DWK10Otc.js";import"./index-RBnEXtxa.js";import"./index-CYO9i6D-.js";import"./renderedTicksSlice-DlYiisC_.js";import"./index-sIio76FK.js";import"./fillDefinitions-D5RroE9V.js";import"./CartesianChart-DjwHqbL7.js";import"./chartDataContext-Duv-qyDG.js";import"./CategoricalChart-3WFZ3cEW.js";import"./CartesianAxis-Fpal_j0O.js";import"./Layer-Cp3c10oW.js";import"./Text-DQWN35zZ.js";import"./ZIndexLayer-edtK9VrY.js";import"./Label-pm6AJFCJ.js";import"./types-w6DZXHOl.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-Ctn63yOC.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(o=(n=t.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};export{t as IfOverflow,ee as __namedExportsOrder,$ as default};
