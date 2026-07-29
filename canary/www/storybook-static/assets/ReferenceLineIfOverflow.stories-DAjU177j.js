import{R as e}from"./iframe-Bx8H2Ifg.js";import{R as n}from"./zIndexSlice-CibQQwTH.js";import{C as p}from"./ComposedChart-wQ-fmNIT.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CY4QfT7G.js";import{X as f}from"./XAxis-DdmuYybV.js";import{Y as l}from"./YAxis-DhvpkuSq.js";import{L as d}from"./Line-BVmQtC22.js";import{R as h}from"./ReferenceLine-DSdr5hlu.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DcH5jY9T.js";import"./index-D7D5zQI-.js";import"./index--RF86Un6.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-atv84skJ.js";import"./isWellBehavedNumber-BjCfjx0l.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DXti2BhE.js";import"./index-DZMfkQNN.js";import"./index-CDB7Uuo1.js";import"./renderedTicksSlice-BNkNmyy9.js";import"./axisSelectors-Cw32qcc-.js";import"./d3-scale-DWE49Teg.js";import"./CartesianChart-B8KEQc2q.js";import"./chartDataContext-TCBOpZph.js";import"./CategoricalChart-D_-fj6zl.js";import"./CartesianAxis-DzJ0MnYC.js";import"./Layer-B1Bv1tpm.js";import"./Text-DTS3udCG.js";import"./DOMUtils-B-4npwaq.js";import"./Label-DbBEn_Ke.js";import"./ZIndexLayer-C7frmUa_.js";import"./types-Dz5mzedy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CzAT56ie.js";import"./isBuffer-Crkas5dz.js";import"./Curve-dStP5J8a.js";import"./step-BYuX5L52.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CwxdPZKw.js";import"./useAnimationId-BtPQFk12.js";import"./ActivePoints-BilhKSxD.js";import"./Dot-bxDDkr32.js";import"./RegisterGraphicalItemId-B2iGTOcQ.js";import"./ErrorBarContext-BI-oQ816.js";import"./GraphicalItemClipPath-B35L0Cvh.js";import"./SetGraphicalItem-CrnQ6XAB.js";import"./getRadiusAndStrokeWidthFromDot-cCEJEDsq.js";import"./ActiveShapeUtils-D4eokJlb.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
