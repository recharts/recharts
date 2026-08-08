import{R as e}from"./iframe-mg7UZdto.js";import{R as n}from"./zIndexSlice-DEfN8C0Z.js";import{C as p}from"./ComposedChart-CIbzCW-5.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DN2LwA5f.js";import{X as f}from"./XAxis-BsNzvHKv.js";import{Y as l}from"./YAxis-BMDO5XEp.js";import{L as d}from"./Line-CKKxuewC.js";import{R as h}from"./ReferenceLine-CpztKQqc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-HD1NX84B.js";import"./index-DZOBKqcM.js";import"./index-bFsd1KxH.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BbtnPTv-.js";import"./isWellBehavedNumber-D_gpPOh3.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BkHp-MEf.js";import"./index-BUwgWfYf.js";import"./index-DeDE_LvF.js";import"./axisSelectors-BM8BDlXD.js";import"./d3-scale-BWztF9lr.js";import"./renderedTicksSlice-sYtIEKKa.js";import"./CartesianChart-B1jEcb3f.js";import"./chartDataContext-Dda0Eag5.js";import"./CategoricalChart-B1n3f5Qd.js";import"./CartesianAxis-DSGrP4Zf.js";import"./Layer-C85ssoby.js";import"./Text-B1zEX4dn.js";import"./DOMUtils-L0wsUfkf.js";import"./Label-Dkvvn7Fi.js";import"./ZIndexLayer-CwALprKR.js";import"./types-afGVOb_T.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CO1IbQpv.js";import"./isBuffer-BG75eWKN.js";import"./Curve-k9Dj6G6o.js";import"./step-CmgtGEqA.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-B1JY3m8f.js";import"./useAnimationId-B9PPVOgc.js";import"./ActivePoints-q5U2dg7Z.js";import"./Dot-Bxa-PMP9.js";import"./RegisterGraphicalItemId-k1fDZWtY.js";import"./ErrorBarContext-BlA0hFY9.js";import"./graphicalItemIdentity-C58faD0D.js";import"./SetGraphicalItem-Cs3-aGdX.js";import"./getRadiusAndStrokeWidthFromDot-DhEmmwnz.js";import"./ActiveShapeUtils-vQCoYSuM.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
