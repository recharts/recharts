import{R as e}from"./iframe-B67xakaW.js";import{R as n}from"./zIndexSlice-D0TzJ1fR.js";import{C as p}from"./ComposedChart-DYPq6hki.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CG4D2kRB.js";import{X as f}from"./XAxis-FKOR1g-7.js";import{Y as l}from"./YAxis-CgnEOw1P.js";import{L as d}from"./Line-DV865J21.js";import{R as h}from"./ReferenceLine-BI-kziYS.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BKrvbeAi.js";import"./index-C636565A.js";import"./index-hWCiHkWI.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-B29-kufx.js";import"./isWellBehavedNumber-ClgfPGEs.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-Cx8TqoHO.js";import"./index-CvOnsJ-w.js";import"./index-Dk_c5Xjv.js";import"./axisSelectors-DXeKf5vs.js";import"./d3-scale-DAYedkSi.js";import"./renderedTicksSlice-B7Sc1x4H.js";import"./CartesianChart-BLDHGv8m.js";import"./chartDataContext-CfIiS_I3.js";import"./CategoricalChart-DgP4TH9i.js";import"./CartesianAxis-CPVS6EgD.js";import"./Layer-DydnlLJq.js";import"./Text-Cz97PcLA.js";import"./DOMUtils-B9paDAsr.js";import"./Label-DIs948ZI.js";import"./ZIndexLayer-Bldiyv4x.js";import"./types-CBHC2Uao.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CKqExDZQ.js";import"./isBuffer-BG75eWKN.js";import"./Curve-us0lQGQS.js";import"./step-BtzpbeJ-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dlexmd5j.js";import"./useAnimationId-pFv40dAf.js";import"./ActivePoints-C6zOCKUI.js";import"./Dot-DQCUJJj2.js";import"./RegisterGraphicalItemId-Ci2aQjFq.js";import"./ErrorBarContext--xCAx9GD.js";import"./GraphicalItemClipPath-CLLzWZH-.js";import"./SetGraphicalItem-D_jFiRTP.js";import"./graphicalItemIdentity-7Y65Hlf3.js";import"./ActiveShapeUtils-i_QMKwre.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const he=["IfOverflow"];export{t as IfOverflow,he as __namedExportsOrder,de as default};
