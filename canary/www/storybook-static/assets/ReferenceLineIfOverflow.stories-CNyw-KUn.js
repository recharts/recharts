import{R as e}from"./iframe-DgJplLvS.js";import{R as n}from"./zIndexSlice-BEw7ZoBF.js";import{C as p}from"./ComposedChart-C92-LZLE.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DBabwDzt.js";import{X as f}from"./XAxis-Cv0cLySm.js";import{Y as l}from"./YAxis-Dq42uhEw.js";import{L as d}from"./Line-DVl-UA0H.js";import{R as h}from"./ReferenceLine-DsLjLyqR.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BFtjLKgc.js";import"./index-CuR81imj.js";import"./index-DVtuWZEP.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CgspoxK6.js";import"./isWellBehavedNumber-CYMKDc-o.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-DkMI-tV9.js";import"./index-Bwl4xJcj.js";import"./index-DBV_c5tC.js";import"./renderedTicksSlice-RcICWtpY.js";import"./axisSelectors-YqbMVrI6.js";import"./d3-scale-T7rND5KE.js";import"./CartesianChart-CDSt_igg.js";import"./chartDataContext-B8YdYa_T.js";import"./CategoricalChart-B_F4Qeg4.js";import"./CartesianAxis-iv3hpdCC.js";import"./Layer-CDKK6jHZ.js";import"./Text-DSQZtkf1.js";import"./DOMUtils-C8GJnqc6.js";import"./Label-DUk5cie5.js";import"./ZIndexLayer-DezlpkmC.js";import"./types-DgMxxOTT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-Crkas5dz.js";import"./Curve-BjTIUQH-.js";import"./step-CkXO2b_C.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-hO6Ptiqq.js";import"./useAnimationId-SGeRDQQf.js";import"./ActivePoints-Dudi51yy.js";import"./Dot-CJqaNK4q.js";import"./RegisterGraphicalItemId-B36x_Amu.js";import"./ErrorBarContext-PVL9kjDM.js";import"./GraphicalItemClipPath-Dn9TF0yr.js";import"./SetGraphicalItem-9qFMsJKM.js";import"./getRadiusAndStrokeWidthFromDot-DkNcCvt4.js";import"./ActiveShapeUtils-Cjw-C0nA.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,le={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
