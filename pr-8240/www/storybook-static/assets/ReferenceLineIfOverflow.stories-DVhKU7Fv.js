import{R as e}from"./iframe-nQqwH7QJ.js";import{R as a}from"./zIndexSlice-36iharMl.js";import{C as p}from"./ComposedChart-DjVQQbR_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-qJA-wHLs.js";import{X as f}from"./XAxis-CJ63RViA.js";import{Y as l}from"./YAxis-CBsB2GS9.js";import{L as d}from"./Line-qqwSMB27.js";import{R as h}from"./ReferenceLine-BImoRp8S.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-sxdLwWpt.js";import"./throttle-B0HUB5U4.js";import"./index-oe7CujVI.js";import"./index-II4F3WAY.js";import"./RechartsWrapper-CIP5uBJJ.js";import"./axisSelectors-Dnfm47Aa.js";import"./polarAxisSelectors-DDvt0jLt.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CE_Y-rH6.js";import"./index-BNIQZt4j.js";import"./index-D3qCcLe1.js";import"./renderedTicksSlice-5pmkjT89.js";import"./index-Im8qdnHn.js";import"./fillDefinitions-ZO6Wo39I.js";import"./CartesianChart-CIqAWzMx.js";import"./chartDataContext-CFytY-UH.js";import"./CategoricalChart-D4LSu4XN.js";import"./CartesianAxis-DQ3vG01G.js";import"./Layer-Bx429Rld.js";import"./Text-1TJRO8Pn.js";import"./ZIndexLayer-uBy8TOlo.js";import"./Label--FIUnsrD.js";import"./types-jTE1kqYu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CGPupWIw.js";import"./step-BhHvwrte.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D2Yj78tL.js";import"./ActivePoints-BO92Iyzv.js";import"./Dot-BPCTuswq.js";import"./activeStyles-DbesfPTr.js";import"./useAnimationId-BDVyTCS1.js";import"./Symbols-BWEY_vml.js";import"./symbol-t7fE5m4B.js";import"./ErrorBarContext-CKcJf7fb.js";import"./SetGraphicalItem-BquQie6d.js";import"./getRadiusAndStrokeWidthFromDot-rJ-p2Gf9.js";import"./ActiveShapeUtils-C7OOt6yj.js";import"./useEffectiveDataKey-C12iG63u.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
