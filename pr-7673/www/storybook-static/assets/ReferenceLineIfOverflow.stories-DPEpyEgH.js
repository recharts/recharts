import{R as e}from"./iframe-C93Nv-sG.js";import{R as n}from"./zIndexSlice-ByU1_vW7.js";import{C as p}from"./ComposedChart-CbNoaIAl.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-hTEgD5KK.js";import{X as f}from"./XAxis-B8fGRCoq.js";import{Y as l}from"./YAxis-jlrI5912.js";import{L as d}from"./Line-CcowXM7j.js";import{R as h}from"./ReferenceLine-BguLkAMw.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DKDTz13_.js";import"./index-CX4bLeAT.js";import"./index-WdxouXHE.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-C5w327Ax.js";import"./isWellBehavedNumber-Cfr3MT4y.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Bd-lflJB.js";import"./index-2-1yVY-g.js";import"./index-BGWLrOy5.js";import"./axisSelectors-B_nw5bC_.js";import"./d3-scale-DPCHxtwr.js";import"./renderedTicksSlice-BfcPBBmI.js";import"./CartesianChart-DjN4sIo1.js";import"./chartDataContext-DgDj7d7B.js";import"./CategoricalChart-Ckb0xTkj.js";import"./CartesianAxis-BKA7b1EI.js";import"./Layer-C-yThQSL.js";import"./Text-BwKXAAQh.js";import"./DOMUtils-BXMnIR4n.js";import"./useId-Dcf96ehM.js";import"./useBackwardsCompatibleTheme-LhXwVyLe.js";import"./Label-C3kKco4I.js";import"./ZIndexLayer-txp7Phg0.js";import"./types-DSu39Mtk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C4EKfZxi.js";import"./step-DUN67lSa.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B9gSLTjZ.js";import"./useAnimationId-ChO4WR-0.js";import"./ActivePoints-C6Pzzzqs.js";import"./Dot-4IJHfCjD.js";import"./RegisterGraphicalItemId-DBNNmaKj.js";import"./ErrorBarContext-Bdw1FAXk.js";import"./GraphicalItemClipPath-DHw7w2MP.js";import"./SetGraphicalItem-BVLzKmF8.js";import"./getRadiusAndStrokeWidthFromDot-BKbcHmv5.js";import"./ActiveShapeUtils-CpLwkFCz.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ve=["IfOverflow"];export{t as IfOverflow,ve as __namedExportsOrder,we as default};
