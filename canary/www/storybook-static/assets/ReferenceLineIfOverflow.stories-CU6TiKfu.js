import{R as e}from"./iframe-Dv5VASSf.js";import{R as n}from"./zIndexSlice-CM9TsEF-.js";import{C as p}from"./ComposedChart-CkKDXzJX.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DTZqqX6q.js";import{X as f}from"./XAxis-DxRbB3rx.js";import{Y as l}from"./YAxis-CgS9V_Pe.js";import{L as d}from"./Line-D9tGWa1P.js";import{R as h}from"./ReferenceLine-B00y7R1L.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-DhSozQAr.js";import"./index-DkjavtyB.js";import"./index-CvMvJg2Y.js";import"./get-Bs09YXrP.js";import"./resolveDefaultProps-Bff0INFN.js";import"./isWellBehavedNumber-CBezu4RU.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DX1uLaD6.js";import"./index-Ben5USOE.js";import"./index-B6-1923T.js";import"./renderedTicksSlice-BO9tlAnq.js";import"./axisSelectors-xODl-OZb.js";import"./d3-scale-BXwJ1MAg.js";import"./CartesianChart-DkI46ifx.js";import"./chartDataContext-CF17-miU.js";import"./CategoricalChart-U0rXY0aa.js";import"./CartesianAxis-UbDtFbfy.js";import"./Layer-LJvjQizz.js";import"./Text-Dd7f7n_i.js";import"./DOMUtils-DlL30Y-Y.js";import"./Label-sX9J87v-.js";import"./ZIndexLayer-CuZjWQGk.js";import"./types-DANPZVh2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-Bq9FIxO9.js";import"./step-Bs8kSgCl.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D5YeeLN_.js";import"./useAnimationId-MWsls-nH.js";import"./ActivePoints-CEMt9Ilr.js";import"./Dot-D2nW7dgA.js";import"./RegisterGraphicalItemId-BgWpYWle.js";import"./ErrorBarContext-D_vZY3q2.js";import"./GraphicalItemClipPath-CCozhxOu.js";import"./SetGraphicalItem-nBqj_N_H.js";import"./getRadiusAndStrokeWidthFromDot-C0Qzj9c9.js";import"./ActiveShapeUtils-CEehWVTg.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const le=["IfOverflow"];export{t as IfOverflow,le as __namedExportsOrder,fe as default};
