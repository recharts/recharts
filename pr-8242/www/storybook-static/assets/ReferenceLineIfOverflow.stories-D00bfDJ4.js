import{R as e}from"./iframe-BRs2DqB3.js";import{R as a}from"./zIndexSlice-XRTrDK7l.js";import{C as p}from"./ComposedChart-DVPdEFZp.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-krvxFSeS.js";import{X as f}from"./XAxis-BJyhb9sC.js";import{Y as l}from"./YAxis-DidbNqGc.js";import{L as d}from"./Line-BkTgv4cu.js";import{R as h}from"./ReferenceLine-HSHlO-Xt.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BRTztjAc.js";import"./throttle-BN55ZsBD.js";import"./index-CqTGU6qX.js";import"./index-C0uv-V1O.js";import"./RechartsWrapper-CJYaD9xA.js";import"./axisSelectors-DBUHuATQ.js";import"./polarAxisSelectors-DwLugqE9.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-B39-KfBv.js";import"./index-BL5_00_X.js";import"./index-Co-V1H3-.js";import"./renderedTicksSlice-BjdRfY4C.js";import"./index-IgyX-1iw.js";import"./fillDefinitions-Cww6uxJT.js";import"./CartesianChart-Dsxkw-P3.js";import"./chartDataContext-QcS0sZvi.js";import"./CategoricalChart-BZHqfx2A.js";import"./CartesianAxis-C23TAeVf.js";import"./Layer-DqrqtEm2.js";import"./Text-DRaltNnR.js";import"./ZIndexLayer-BCRtaoEe.js";import"./Label-utTJNWp0.js";import"./types-BN549hIA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-YmdI71--.js";import"./step-UgzMRyWu.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-B5I1MPoS.js";import"./ActivePoints-DywQ8pFt.js";import"./Dot-DCtDqOty.js";import"./activeStyles-gnY1xuwf.js";import"./useAnimationId-De06VpE9.js";import"./Symbols-Cy-ALuGW.js";import"./symbol-rCFxuDnc.js";import"./ErrorBarContext-D0NsIgk-.js";import"./SetGraphicalItem-C9srr3mG.js";import"./getRadiusAndStrokeWidthFromDot-CwwAN-KH.js";import"./ActiveShapeUtils-Cvk6a1r9.js";import"./useEffectiveDataKey-_AqelCoa.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ve as __namedExportsOrder,we as default};
