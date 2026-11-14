import{R as e}from"./iframe-DB1dQNP8.js";import{R as a}from"./zIndexSlice-4nnTulLE.js";import{C as p}from"./ComposedChart-CXmJ-ojD.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DGj-NBTQ.js";import{X as f}from"./XAxis-CMTVdgXW.js";import{Y as l}from"./YAxis-CIxMAlZN.js";import{L as d}from"./Line-CHe47qf6.js";import{R as h}from"./ReferenceLine-DQPASFtb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DmpFbxUX.js";import"./throttle-BFaVdKGa.js";import"./index-DDVC-U_9.js";import"./index-CCD7ra-J.js";import"./RechartsWrapper-BSa1uinT.js";import"./axisSelectors-DYpJMmPb.js";import"./polarAxisSelectors-CrHx5sYT.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BO6-R8pB.js";import"./index-D-0kkOAc.js";import"./index-BBS885gB.js";import"./renderedTicksSlice-BBAl23GW.js";import"./index-D2MojgXH.js";import"./fillDefinitions-Cx6IehzG.js";import"./CartesianChart-DYBxU76V.js";import"./chartDataContext-B1lnzDGG.js";import"./CategoricalChart-DANutzlC.js";import"./CartesianAxis-C8e-4BIf.js";import"./Layer-Dv8-s5I6.js";import"./Text-C1medGIX.js";import"./ZIndexLayer-CWhMC-q_.js";import"./Label-jFA6iMVu.js";import"./types-DtWjgFmy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CckPV-p0.js";import"./step-Bnr8fo0T.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Cv4r99AD.js";import"./ActivePoints-CSEAww-_.js";import"./Dot-oe6mnN2l.js";import"./activeStyles-ByNnOm-i.js";import"./useAnimationId-CoLe5YqV.js";import"./Symbols-UlDypbOg.js";import"./symbol-CJrx0ghD.js";import"./ErrorBarContext-XalCVz8w.js";import"./SetGraphicalItem-BpLBLRYe.js";import"./getRadiusAndStrokeWidthFromDot-BxCLKzYD.js";import"./ActiveShapeUtils-Bsyq6LIm.js";import"./useEffectiveDataKey-H48CmBWB.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <Line dataKey="uv" />
          <ReferenceLine ifOverflow="extendDomain" y={1700} />
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
     * assert that when ifOverflow="extendDomain" 1800 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
