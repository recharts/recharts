import{R as e}from"./iframe-BrId7CKe.js";import{R as a}from"./zIndexSlice-DF5zMGO6.js";import{C as p}from"./ComposedChart-Cnp7765T.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-XQcLM5Hp.js";import{X as f}from"./XAxis-CGJzYa5v.js";import{Y as l}from"./YAxis-CGC-AYss.js";import{L as d}from"./Line-CgfEpiSf.js";import{R as h}from"./ReferenceLine-CrqDnNBJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-DIgz9kBc.js";import"./throttle-CvD-CMS9.js";import"./index-D7ICnWyX.js";import"./index-EO2EMNzs.js";import"./RechartsWrapper-C0PTLzSu.js";import"./axisSelectors-BWicBn7w.js";import"./polarAxisSelectors-BScTjZiA.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-Did4wLnp.js";import"./index-B4UkUUGe.js";import"./index-CKY_1Z5f.js";import"./renderedTicksSlice-DAS2rh9P.js";import"./index-Drj8yiU0.js";import"./fillDefinitions-dpOaLydo.js";import"./CartesianChart-BQoBJqDq.js";import"./chartDataContext-BtKuFOy0.js";import"./CategoricalChart-D7PumRDT.js";import"./CartesianAxis-CGWn72D3.js";import"./Layer-CxlvVVO_.js";import"./Text-CtzCspEf.js";import"./ZIndexLayer-DtobrSuN.js";import"./Label-BOSTGjYW.js";import"./types-BIH_CFXa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./getRadiusAndStrokeWidthFromDot-2ewH2R2L.js";import"./Curve-CODof7zW.js";import"./step-D0GmmZR_.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Dl3_KD-K.js";import"./ActivePoints-BfbfOk4s.js";import"./Dot-Bz04y-El.js";import"./activeStyles-haHqTj48.js";import"./useAnimationId-DnW4K7Yj.js";import"./Symbols-DW8eGAaV.js";import"./symbol-Bas1pNoF.js";import"./ErrorBarContext-Di-OPTeN.js";import"./SetGraphicalItem-Bx9N4hIP.js";import"./ActiveShapeUtils-B-iMU9qH.js";import"./useEffectiveDataKey-BlMggeza.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
