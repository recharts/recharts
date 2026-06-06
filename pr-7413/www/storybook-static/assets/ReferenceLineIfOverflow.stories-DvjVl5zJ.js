import{R as e}from"./iframe-C2BX5KlG.js";import{R as n}from"./zIndexSlice-CxPEcPAu.js";import{C as p}from"./ComposedChart-CzoJ7T6H.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-IRNWuAYH.js";import{X as f}from"./XAxis-DVvf2cjO.js";import{Y as l}from"./YAxis-DyEK7c-9.js";import{L as d}from"./Line-DLZXl40V.js";import{R as h}from"./ReferenceLine-CeXUxo6H.js";import"./preload-helper-Dp1pzeXC.js";import"./immer-CvWW5aeq.js";import"./index-BGPmBimQ.js";import"./index-COSvD7ew.js";import"./get-CAfMQs0q.js";import"./resolveDefaultProps-BYCxJvcu.js";import"./isWellBehavedNumber-DmYLFUk5.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-D59koTZo.js";import"./index-mM7HvUIP.js";import"./index-B4ncEIHG.js";import"./renderedTicksSlice-u_9WNmNI.js";import"./axisSelectors-CMoKJGYW.js";import"./d3-scale-CWyzRMoK.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BUqQYDbS.js";import"./chartDataContext-BBtoeQBI.js";import"./CategoricalChart-wPXQ1QrH.js";import"./CartesianAxis-1gCJxPwk.js";import"./Layer-Y7EAuX4r.js";import"./Text-D33SlXvN.js";import"./DOMUtils-DjP-hpRu.js";import"./Label-BtHuGICT.js";import"./ZIndexLayer-DXknjapM.js";import"./types-Bzm0K4Xv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-skm-derQ.js";import"./step-CaZe8v-k.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-a4bz34sF.js";import"./useAnimationId-By3GmLUa.js";import"./ActivePoints-BR22gwdA.js";import"./Dot-MNln9N_X.js";import"./RegisterGraphicalItemId-D-0LsKMM.js";import"./ErrorBarContext-Dxkwh2s-.js";import"./GraphicalItemClipPath-BeTilTZu.js";import"./SetGraphicalItem-BLppYw7V.js";import"./getRadiusAndStrokeWidthFromDot-BpkcLqmS.js";import"./ActiveShapeUtils-8DISroY0.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
