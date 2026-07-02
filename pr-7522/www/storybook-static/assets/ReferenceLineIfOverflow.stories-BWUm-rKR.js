import{R as e}from"./iframe-BieQWE3D.js";import{R as n}from"./zIndexSlice-BYxygo-S.js";import{C as p}from"./ComposedChart-NGCBYeb_.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid--7GT9PaX.js";import{X as f}from"./XAxis-G4vRwmKg.js";import{Y as l}from"./YAxis-ChNLm74a.js";import{L as d}from"./Line-2mh_gerJ.js";import{R as h}from"./ReferenceLine-BXcGu96_.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-C6pqxX0n.js";import"./index-DS0rELK-.js";import"./index-CiDtTrDL.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-0J6uDFJb.js";import"./isWellBehavedNumber-By2uQy27.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BQPdhE90.js";import"./index-BK9-NO1n.js";import"./index-D3zDokgn.js";import"./renderedTicksSlice-BWxb2yva.js";import"./axisSelectors-CKN_GV_q.js";import"./d3-scale-Sw7i2UsL.js";import"./CartesianChart-D6JA1RXb.js";import"./chartDataContext-DiNSnyrd.js";import"./CategoricalChart-BTFUnlUn.js";import"./CartesianAxis-DpF5IQ2O.js";import"./Layer-NUCJMvF3.js";import"./Text-DkEmFVu0.js";import"./DOMUtils-B828G3hP.js";import"./Label-D0PWYGmJ.js";import"./ZIndexLayer-BHodRoAu.js";import"./types-CIzADBdv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-SVdp-0Yk.js";import"./step-DHAVsB3S.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-fhCf9-7A.js";import"./useAnimationId-3OlCfqca.js";import"./ActivePoints-DO-UWoAa.js";import"./Dot-80pmkl_3.js";import"./RegisterGraphicalItemId-DxgNfXcN.js";import"./ErrorBarContext-D6txdMKi.js";import"./GraphicalItemClipPath-O6SSxJbU.js";import"./SetGraphicalItem-ucOefQZ-.js";import"./getRadiusAndStrokeWidthFromDot-BzkGhJ7K.js";import"./ActiveShapeUtils-CZK7c2Ij.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
