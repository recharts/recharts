import{R as e}from"./iframe-D_uMBlIp.js";import{R as a}from"./zIndexSlice-Cqv84PqK.js";import{C as p}from"./ComposedChart-DhQzd1k_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-KrPu7pZ6.js";import{X as f}from"./XAxis-ChmGUeiL.js";import{Y as l}from"./YAxis-Q267elff.js";import{L as d}from"./Line-DDu_6whQ.js";import{R as h}from"./ReferenceLine-CEGAv-6k.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-B5MtCWD4.js";import"./throttle-z9Tdm54L.js";import"./index-r7_kFCKH.js";import"./index-DecxnzXH.js";import"./RechartsWrapper-gFpkW2lO.js";import"./axisSelectors-BH5tVjmc.js";import"./polarAxisSelectors-PGXXztW2.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-De88z7ff.js";import"./index-BKkZnPf8.js";import"./index-BDJW8MG1.js";import"./renderedTicksSlice-CTrf5tAn.js";import"./index-DolxpBYu.js";import"./fillDefinitions-Cx6GiVLd.js";import"./CartesianChart-CnGjeW1j.js";import"./ZIndexPortal-CZb6tOfo.js";import"./CategoricalChart-BP_Fs5vF.js";import"./CartesianAxis-CaJmW0E9.js";import"./Layer-B6KF3bsJ.js";import"./Text-CgSvhKKx.js";import"./DOMUtils-BNA43YVy.js";import"./ZIndexLayer-B-ClRqkn.js";import"./Label-xcLv9MPJ.js";import"./types-DFJuzk9K.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-D7Q9HT-0.js";import"./step-CndKQIzs.js";import"./path-DyVhHtw_.js";import"./LabelList-lhjdoetJ.js";import"./ActivePoints-CutcUh5t.js";import"./Dot-CWRVOvZp.js";import"./activeStyles-Dd3au7Dm.js";import"./useAnimationId-BUGTxmjG.js";import"./dataEntryStyles-BSEnNQ9n.js";import"./Symbols-C6zxOEV9.js";import"./symbol-kWjCqPSu.js";import"./ErrorBarContext-d3qxHiYM.js";import"./SetGraphicalItem-jkYvUFdr.js";import"./getRadiusAndStrokeWidthFromDot-DtDP844S.js";import"./ActiveShapeUtils-CosApWaB.js";import"./useEffectiveDataKey-CgejumXO.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
