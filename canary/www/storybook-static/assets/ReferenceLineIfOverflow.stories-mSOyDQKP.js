import{R as e}from"./iframe-xbzO8ihI.js";import{R as n}from"./zIndexSlice-DHGEGTXf.js";import{C as p}from"./ComposedChart-D7Lr4F7H.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Baa-wggV.js";import{X as f}from"./XAxis-DsYRd7p5.js";import{Y as l}from"./YAxis-DldbyKuF.js";import{L as d}from"./Line-BdzEVQ9Q.js";import{R as h}from"./ReferenceLine-BSfDBC3G.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-CSfITKZw.js";import"./index-BqW4Uzzs.js";import"./index-Db_N0V-Y.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-BksGg43P.js";import"./isWellBehavedNumber-BpEs7sJw.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-B40yK-0z.js";import"./axisSelectors-D-N5tVUk.js";import"./d3-scale-C-XGUw-P.js";import"./index-Bw8yyLrA.js";import"./index-VAUYyiDQ.js";import"./renderedTicksSlice-BCm2ZtcS.js";import"./index-DNQsy-E5.js";import"./CartesianChart-CVt6roZ8.js";import"./chartDataContext-DjNdQ09m.js";import"./CategoricalChart-Btyj_0ug.js";import"./CartesianAxis-D6daOnac.js";import"./Layer-CyOAhwla.js";import"./Text-DyvJm0Va.js";import"./DOMUtils-BBUQNy1o.js";import"./useId-BsQI64Io.js";import"./useBackwardsCompatibleTheme-BaDaWPI3.js";import"./Label-Db5UOJ54.js";import"./ZIndexLayer-CdA1EieN.js";import"./types-DVHQQz9N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-D088EVRW.js";import"./step-wFZZajAR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-GZSCW2O0.js";import"./useAnimationId-n5GjykVw.js";import"./ActivePoints-Bo6-hXPj.js";import"./Dot-S_RimJ32.js";import"./RegisterGraphicalItemId-B8RWrhFG.js";import"./ErrorBarContext-DuvOSHRK.js";import"./GraphicalItemClipPath-C_jr7WWD.js";import"./SetGraphicalItem-C2V6xjnq.js";import"./getRadiusAndStrokeWidthFromDot-Cf72lShV.js";import"./ActiveShapeUtils-EHYmL-db.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:m})=>{const{findByText:a}=v(m);w(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const ye=["IfOverflow"];export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
