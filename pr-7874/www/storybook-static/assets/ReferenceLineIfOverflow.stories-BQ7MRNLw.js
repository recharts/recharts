import{R as e}from"./iframe-CkExmVLh.js";import{R as a}from"./zIndexSlice-a3gNrCTg.js";import{C as p}from"./ComposedChart-BhMk3qvU.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CUTMG6uD.js";import{X as f}from"./XAxis-JBQw78VL.js";import{Y as l}from"./YAxis-BKUGWzYz.js";import{L as d}from"./Line-Cisnr3UH.js";import{R as h}from"./ReferenceLine-Z2QnKb4K.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BNvjyLg8.js";import"./index-tbID_CTU.js";import"./index-oO8SHF6a.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-RkN2bWVj.js";import"./isWellBehavedNumber-B9ULLFc9.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CmpmZooC.js";import"./axisSelectors-DjYqkdMk.js";import"./d3-scale-BQavAiMn.js";import"./index-3Scx8lTS.js";import"./index-Dlo0KE1-.js";import"./renderedTicksSlice-D-2PA2Wz.js";import"./index-Cl_0IqIO.js";import"./CartesianChart-DTXpoHpD.js";import"./chartDataContext-DYa5wr5P.js";import"./CategoricalChart-BF6nCoHF.js";import"./CartesianAxis-BhWf1FlQ.js";import"./Layer-CGaMavgo.js";import"./Text-mbh8kfNk.js";import"./DOMUtils-B9viDuiF.js";import"./useId-B6th-B23.js";import"./useBackwardsCompatibleTheme-DZHep05A.js";import"./Label-C8EtCHaI.js";import"./ZIndexLayer-DuxWNsKn.js";import"./types-D0Lh6MHk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-BfUX2fxA.js";import"./step-TH_7jXAx.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-V2dSiKDR.js";import"./useAnimationId-B25s9B77.js";import"./ActivePoints-DT4UcXq7.js";import"./Dot-CNUfafHI.js";import"./RegisterGraphicalItemId-Bmf5uTtn.js";import"./ErrorBarContext-B3pTgu-r.js";import"./GraphicalItemClipPath-CSuIt2Pb.js";import"./SetGraphicalItem-CjeIiMwy.js";import"./getRadiusAndStrokeWidthFromDot-ByuYICUa.js";import"./ActiveShapeUtils-CeXBNDiM.js";import"./useGraphicalItemIdentity-BSB2zAct.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
