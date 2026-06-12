import{R as e}from"./iframe-B7udcz8q.js";import{R as n}from"./zIndexSlice-CtXztuzC.js";import{C as p}from"./ComposedChart-BH1TZk1K.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-nS5-AJWi.js";import{X as f}from"./XAxis-DiPjyBYO.js";import{Y as l}from"./YAxis-B456uVCj.js";import{L as d}from"./Line-D-LESVBA.js";import{R as h}from"./ReferenceLine-DaSPJAn6.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-t_2Sayw7.js";import"./index-S5IzzpjS.js";import"./index-rAymN7LL.js";import"./get-Tn0kxTo7.js";import"./resolveDefaultProps-B-U9qcdT.js";import"./isWellBehavedNumber-BlYOzctW.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-RU_ueSyC.js";import"./index-BlkuEMuV.js";import"./index-Bml9ugX6.js";import"./renderedTicksSlice-LbTh7uAL.js";import"./axisSelectors-Cj3RkADr.js";import"./d3-scale-NB2wmaCb.js";import"./string-B6fdYHAA.js";import"./CartesianChart-94_kN34Y.js";import"./chartDataContext-BQtkj7i-.js";import"./CategoricalChart-Hmy3E080.js";import"./CartesianAxis-Cfla_J1H.js";import"./Layer-CJbCrDcq.js";import"./Text-DijhQOvE.js";import"./DOMUtils-D_cLkzH2.js";import"./Label-DwDNb6uu.js";import"./ZIndexLayer-D4FmDVUU.js";import"./types-bSkV0tKv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-CqYDgXu-.js";import"./step-BfmxT7JJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-KJX7W3it.js";import"./useAnimationId-Ceo5Qx4Z.js";import"./ActivePoints-03Jr3wsv.js";import"./Dot-CT7VE7Ou.js";import"./RegisterGraphicalItemId-NzEXLpZt.js";import"./ErrorBarContext-DUPlcwIm.js";import"./GraphicalItemClipPath-dDeN-gZy.js";import"./SetGraphicalItem-CbXxnaP2.js";import"./getRadiusAndStrokeWidthFromDot-C1_PUQIm.js";import"./ActiveShapeUtils-CuaFKTcX.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const de=["IfOverflow"];export{t as IfOverflow,de as __namedExportsOrder,le as default};
