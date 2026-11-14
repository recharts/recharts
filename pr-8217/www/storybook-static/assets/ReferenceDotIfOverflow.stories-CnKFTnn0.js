import{R as e}from"./iframe-DB1dQNP8.js";import{R as m}from"./zIndexSlice-4nnTulLE.js";import{C as s}from"./ComposedChart-CXmJ-ojD.js";import{p}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DGj-NBTQ.js";import{X as f}from"./XAxis-CMTVdgXW.js";import{Y as l}from"./YAxis-CIxMAlZN.js";import{R as d}from"./ReferenceDot-DK61y1ra.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DmpFbxUX.js";import"./throttle-BFaVdKGa.js";import"./index-DDVC-U_9.js";import"./index-CCD7ra-J.js";import"./RechartsWrapper-BSa1uinT.js";import"./axisSelectors-DYpJMmPb.js";import"./polarAxisSelectors-CrHx5sYT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BO6-R8pB.js";import"./index-D-0kkOAc.js";import"./index-BBS885gB.js";import"./renderedTicksSlice-BBAl23GW.js";import"./index-D2MojgXH.js";import"./fillDefinitions-Cx6IehzG.js";import"./CartesianChart-DYBxU76V.js";import"./chartDataContext-B1lnzDGG.js";import"./CategoricalChart-DANutzlC.js";import"./CartesianAxis-C8e-4BIf.js";import"./Layer-Dv8-s5I6.js";import"./Text-C1medGIX.js";import"./ZIndexLayer-CWhMC-q_.js";import"./Label-jFA6iMVu.js";import"./types-DtWjgFmy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Dot-oe6mnN2l.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,$={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(s,{data:p,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},ee=["IfOverflow"];var r,n,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
