import{R as e}from"./iframe-Dg9AlkU9.js";import{R as n}from"./zIndexSlice-BMqB4Gyy.js";import{C as p}from"./ComposedChart-DdKLVGqR.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-CEgse3j_.js";import{X as f}from"./XAxis-lGCMel2W.js";import{Y as l}from"./YAxis-CGrAoAPm.js";import{L as d}from"./Line-BXzPRIco.js";import{R as h}from"./ReferenceLine-BaKLYBOX.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DhT8i8lB.js";import"./index-DkFl9iqn.js";import"./index-CroN4XyC.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-Cbi8IAhV.js";import"./isWellBehavedNumber-Dlf7mknf.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-7nbSuF2A.js";import"./index-BE4Y3W85.js";import"./index-Bo0WYItg.js";import"./renderedTicksSlice-BJY2ZaZb.js";import"./axisSelectors-Bnxxm030.js";import"./d3-scale-BxAYr4dK.js";import"./CartesianChart-DsbYlNNZ.js";import"./chartDataContext-CTYD4WLT.js";import"./CategoricalChart-Cfe3Pj_n.js";import"./CartesianAxis-ClvRbJ15.js";import"./Layer-BfnZZDJ0.js";import"./Text-B-psx-iS.js";import"./DOMUtils-Bk_tuO3J.js";import"./Label-c2urfMyQ.js";import"./ZIndexLayer-A0r-fd7s.js";import"./types-BOBXQHFv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-Bsg2W_jH.js";import"./isBuffer-BG75eWKN.js";import"./Curve-C5hYWQKe.js";import"./step-DxvJ6z8y.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bh9SS3B5.js";import"./useAnimationId-DpUIMGhl.js";import"./ActivePoints-C-VQNown.js";import"./Dot-CpNpS_fm.js";import"./RegisterGraphicalItemId-D2VyX5Qp.js";import"./ErrorBarContext-U9oTNNG2.js";import"./GraphicalItemClipPath-DQk35kuh.js";import"./SetGraphicalItem-CLD5IGSv.js";import"./getRadiusAndStrokeWidthFromDot-CNcpaGrG.js";import"./ActiveShapeUtils-App4amhZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
