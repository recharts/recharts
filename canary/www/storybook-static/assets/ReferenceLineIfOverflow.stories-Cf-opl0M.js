import{R as e}from"./iframe-DP6zAp54.js";import{R as a}from"./zIndexSlice-CdFbAgG_.js";import{C as p}from"./ComposedChart-Djbyfnt-.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BlFAaOVn.js";import{X as f}from"./XAxis-wrPg27KZ.js";import{Y as l}from"./YAxis-CRTIqg01.js";import{L as d}from"./Line-CatZrMVF.js";import{R as h}from"./ReferenceLine-QYu8J42K.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-CSMJ250z.js";import"./get-CjriyByo.js";import"./throttle-D7lh8v3-.js";import"./index-XgfMJOXy.js";import"./index-CYR3TkYm.js";import"./RechartsWrapper-DOH9cWj9.js";import"./axisSelectors-Rm4q15PI.js";import"./polarAxisSelectors-DrRxC45o.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Ct01c8MP.js";import"./index-DFp-_Wbz.js";import"./index-yomVPEkO.js";import"./renderedTicksSlice-BhuX61Ra.js";import"./index-BfoEz1rZ.js";import"./fillDefinitions-BqFRhPDs.js";import"./CartesianChart-DMNhl37Y.js";import"./chartDataContext-Dgk8EHkE.js";import"./CategoricalChart-C4A4gzgw.js";import"./CartesianAxis-BW9v8-VT.js";import"./Layer-44h3-wN_.js";import"./Text-DGNAB76g.js";import"./ZIndexLayer-DcCIRQcN.js";import"./Label-DIQKMqhX.js";import"./types-DNQC58zt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-DHwNW-IB.js";import"./Curve-DQP2JLjt.js";import"./step-DvtT47Gl.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-DojbuA9r.js";import"./ActivePoints-C-GzPRnQ.js";import"./Dot-P3TO-0hC.js";import"./activeStyles-B0VCWO8T.js";import"./useAnimationId-EekDlSpG.js";import"./Symbols-D-J-NUlP.js";import"./symbol-CoNKi1UW.js";import"./ErrorBarContext-CmnSonHd.js";import"./SetGraphicalItem-CNROvnrS.js";import"./ActiveShapeUtils-DYM7TwK-.js";import"./useEffectiveDataKey-DdiUIHde.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
