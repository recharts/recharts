import{R as e}from"./iframe-CjYP3ojB.js";import{R as a}from"./zIndexSlice-Cy7CLl9Z.js";import{C as p}from"./ComposedChart-Bpv-zdhu.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DU9XZ5iM.js";import{X as f}from"./XAxis-Blplutoc.js";import{Y as l}from"./YAxis-Bt-Cr0Xc.js";import{L as d}from"./Line-COY0vFQs.js";import{R as h}from"./ReferenceLine-C0625yZE.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BKyPqSHv.js";import"./get-CjriyByo.js";import"./redux-toolkit.esm-DZ87n3n2.js";import"./index-Dxgip7sp.js";import"./index-ChIvmNbe.js";import"./RechartsWrapper-UTu-k1rT.js";import"./axisSelectors-CPJSjERY.js";import"./polarAxisSelectors-DdQAYS9z.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-HdrCxTIi.js";import"./index-cwlxkqz2.js";import"./index-CvkAYdqK.js";import"./renderedTicksSlice-CI60Ea5b.js";import"./index-CpZXho2T.js";import"./fillDefinitions-BUdB36JD.js";import"./CartesianChart-C5nFTC9G.js";import"./chartDataContext-ksA5CmmE.js";import"./CategoricalChart-zTEQjMMp.js";import"./CartesianAxis-5Yui6JuQ.js";import"./Layer-BI-kTcme.js";import"./Text-DjT8udYf.js";import"./ZIndexLayer-BebYx5XY.js";import"./Label-CaJS6zCA.js";import"./types-D4qLdpQF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-C_KRSABn.js";import"./Curve-CNaKNyZA.js";import"./step-BZQ3UPaP.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-BvceDOIn.js";import"./ActivePoints-D4hUXiIf.js";import"./Dot-BzVdtL2Q.js";import"./activeStyles-D9A5DeQH.js";import"./useAnimationId-C3slNkW8.js";import"./Symbols-CAjbkOs6.js";import"./symbol-Lqckysps.js";import"./ErrorBarContext-DD39jyt1.js";import"./SetGraphicalItem-B_iWrnd9.js";import"./ActiveShapeUtils-DicChUyh.js";import"./useEffectiveDataKey-BSYT-tLD.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
