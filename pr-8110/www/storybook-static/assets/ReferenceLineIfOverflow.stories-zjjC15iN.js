import{R as e}from"./iframe-LvrC9cNQ.js";import{R as a}from"./zIndexSlice-Chla-YhC.js";import{C as p}from"./ComposedChart-DQuHGzhG.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CWIbKGwM.js";import{X as f}from"./XAxis-ja2TXwgr.js";import{Y as l}from"./YAxis-C7vYJVdQ.js";import{L as d}from"./Line-DKxaw0aF.js";import{R as h}from"./ReferenceLine-CdgdBBj5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-yQwV084p.js";import"./throttle-BrACn0xJ.js";import"./index-Dqr70K98.js";import"./index-D77JjdwQ.js";import"./RechartsWrapper-CiGR2OiQ.js";import"./axisSelectors-C8xBMBuJ.js";import"./polarAxisSelectors-DMX56tfl.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CfvKpIbF.js";import"./index-LmwlvfKc.js";import"./index-Cxc9kCWG.js";import"./renderedTicksSlice-BsmmD3xm.js";import"./index-Bs0fdiGB.js";import"./CartesianChart-C9KorEin.js";import"./ZIndexPortal-DytdVxJW.js";import"./CategoricalChart-DgMeZkIA.js";import"./CartesianAxis-D4FB0bCi.js";import"./Layer-CcIpGH5s.js";import"./Text-DGG_TkrL.js";import"./DOMUtils-CdIFc34u.js";import"./ZIndexLayer-Dv3aUmzs.js";import"./Label-DdT2eLCH.js";import"./types-Dk8bWHyp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CVAgTuhQ.js";import"./step-XOREPbKt.js";import"./path-DyVhHtw_.js";import"./LabelList-DdXF3DfJ.js";import"./ActivePoints-CCaTRIyk.js";import"./Dot-C6CSCKrA.js";import"./activeStyles-MYCrrU5C.js";import"./useAnimationId-BX5uo1zq.js";import"./dataEntryStyles-CJNDsNBI.js";import"./Symbols-Z0uJKVZu.js";import"./symbol-BDoGzdqc.js";import"./ErrorBarContext-CdeJUeJW.js";import"./SetGraphicalItem-CEH73uPW.js";import"./getRadiusAndStrokeWidthFromDot-BgrGISNG.js";import"./ActiveShapeUtils-Dyl71ZcK.js";import"./useEffectiveDataKey-BIhhRaL_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
