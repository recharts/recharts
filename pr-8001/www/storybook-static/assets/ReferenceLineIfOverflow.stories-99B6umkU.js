import{R as e}from"./iframe-Dgm4gy-U.js";import{R as a}from"./zIndexSlice-CiwacDpC.js";import{C as p}from"./ComposedChart-ByttuQ_a.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DYn3gq4M.js";import{X as f}from"./XAxis-CfrEw3PN.js";import{Y as l}from"./YAxis-mX4prg2G.js";import{L as d}from"./Line-CUAXGkMg.js";import{R as h}from"./ReferenceLine-DpFH9-76.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-zAOqa1T8.js";import"./index-DB1nW_kS.js";import"./index-B8zxjei6.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Dd95FcLW.js";import"./isWellBehavedNumber-BJRZFbyv.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-ZSLGTFtH.js";import"./axisSelectors-mj5UOSEK.js";import"./d3-scale-CRCwBtC_.js";import"./index-BdUNqqcp.js";import"./index-CjMT8r2k.js";import"./renderedTicksSlice-DyR3wyNf.js";import"./index-C9uskWuj.js";import"./CartesianChart-BqW0iuwz.js";import"./chartDataContext-DoVd5A16.js";import"./CategoricalChart-DkwsSuns.js";import"./CartesianAxis-B7Oepgsg.js";import"./Layer-BihfHLDn.js";import"./Text-8gs2XgOQ.js";import"./pageBackground-Cm2lHn8y.js";import"./useId-C1YsdgdZ.js";import"./useBackwardsCompatibleTheme-BpARltC_.js";import"./Label-D7CpXrZ4.js";import"./ZIndexLayer-IYsblH0Q.js";import"./types-BUhHmnCY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-CtDZfaqJ.js";import"./step-BcutOZJj.js";import"./path-DyVhHtw_.js";import"./activeStyles-DhaHnmuT.js";import"./useAnimationId-Bq4IYhf5.js";import"./dataEntryStyles-DqmWF7tK.js";import"./ActivePoints-BL0uan1q.js";import"./Dot-DF3bSaZ9.js";import"./ErrorBarContext-DQKU8Ti5.js";import"./GraphicalItemClipPath-D_X4MzO8.js";import"./SetGraphicalItem-Dc743XQT.js";import"./getRadiusAndStrokeWidthFromDot-LRjZ0GPt.js";import"./ActiveShapeUtils-CQNP7AWp.js";import"./useEffectiveDataKey-Dpv4-4ke.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
