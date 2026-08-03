import{R as e}from"./iframe-DJpt453r.js";import{R as n}from"./zIndexSlice-BEI9HpJP.js";import{C as p}from"./ComposedChart-kTyvHFJc.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-B3Ac_-Ob.js";import{X as f}from"./XAxis-BA-ddF1e.js";import{Y as l}from"./YAxis-CLwOmL6r.js";import{L as d}from"./Line-CECxQR0F.js";import{R as h}from"./ReferenceLine-DnppzRjV.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-DmwBytCC.js";import"./index-DoMIVr-B.js";import"./index-BXFZGfKa.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-CLx3DpUR.js";import"./isWellBehavedNumber-DKWCRCpD.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DPF1jiXq.js";import"./index-D2X8nAMV.js";import"./index-DNypUe5l.js";import"./renderedTicksSlice--nt2FmmR.js";import"./axisSelectors-CK35li4D.js";import"./d3-scale-B7WR5FSF.js";import"./CartesianChart-m4WNSH7S.js";import"./chartDataContext-D5OCzkMp.js";import"./CategoricalChart-Dhlk9IOH.js";import"./CartesianAxis-C6-8NriX.js";import"./Layer-BYTSm4Ec.js";import"./Text-Bi21htDl.js";import"./DOMUtils-DAtMTnWN.js";import"./Label-dDyJmDxJ.js";import"./ZIndexLayer-K-94Fkyc.js";import"./types-C91tVnYw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-DM-6Q2RL.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DXMTS4fM.js";import"./step-DLRDUC9Q.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CECphMY_.js";import"./useAnimationId-BTloGm3i.js";import"./ActivePoints-DNbR-YxP.js";import"./Dot-1UuNdg9e.js";import"./RegisterGraphicalItemId-DBh3uGfr.js";import"./ErrorBarContext-KgdOLmDh.js";import"./GraphicalItemClipPath-CbnfZ2S6.js";import"./SetGraphicalItem-CyMh2I00.js";import"./graphicalItemIdentity-DEqpaJdn.js";import"./ActiveShapeUtils-ML-GG5dE.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,de={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
