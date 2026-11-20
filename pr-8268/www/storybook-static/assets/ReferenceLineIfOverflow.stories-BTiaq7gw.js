import{R as e}from"./iframe-B4BvLeme.js";import{R as a}from"./zIndexSlice-DyTYWVcs.js";import{C as p}from"./ComposedChart-D4s6ZbXJ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-OdD8ef-g.js";import{X as f}from"./XAxis-T18YTghU.js";import{Y as l}from"./YAxis-T0QKWtDf.js";import{L as d}from"./Line-B5NkGOql.js";import{R as h}from"./ReferenceLine-P4D_cyWw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-6IdFK7Ih.js";import"./throttle-DQNRL0AJ.js";import"./index-ClYdslLd.js";import"./index-59WpEyYi.js";import"./RechartsWrapper-B0OT4wWF.js";import"./axisSelectors-DS5uRUAA.js";import"./polarAxisSelectors-DqM84NZ8.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-DfUXkppW.js";import"./index-CwZtWez3.js";import"./index-Ba_PgChy.js";import"./renderedTicksSlice-D5gysmL5.js";import"./index-eMahtaOk.js";import"./fillDefinitions-CE1xVmK7.js";import"./CartesianChart-B8uUCQhO.js";import"./chartDataContext-DPDAwbOK.js";import"./CategoricalChart-gG_kR-cF.js";import"./CartesianAxis-reQTS2uW.js";import"./Layer-Bxh7arjC.js";import"./Text-B4NS4A04.js";import"./ZIndexLayer-Cb7Yxv7n.js";import"./Label-Bp5zUoNH.js";import"./types-UPHeghFs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-CutWxkzF.js";import"./Curve-B5oomGBl.js";import"./step-il89s-4w.js";import"./path-BBMZd4YL.js";import"./dataEntryStyles-n779GVpT.js";import"./ActivePoints-Cz0D4X-h.js";import"./Dot-BDYf7Xcg.js";import"./activeStyles-BtDPe58A.js";import"./useAnimationId-B1vlq9HU.js";import"./Symbols-BPMmDEMk.js";import"./symbol-YAvM_-gl.js";import"./ErrorBarContext-BEP_BW62.js";import"./SetGraphicalItem-WJo3C0-v.js";import"./ActiveShapeUtils-CXNsVwUA.js";import"./useEffectiveDataKey-cN06FnCm.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
