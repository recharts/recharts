import{R as e}from"./iframe-CIzVR-2-.js";import{R as a}from"./zIndexSlice-CJv9lj0d.js";import{C as p}from"./ComposedChart-OQrQnGRh.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-JuGuyBql.js";import{X as f}from"./XAxis-DuVjd9Cl.js";import{Y as l}from"./YAxis-BM-BvKCY.js";import{L as d}from"./Line-kvdINkjm.js";import{R as h}from"./ReferenceLine-Dh_m5caY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BsWl2j-C.js";import"./throttle-g_l7Z0ZN.js";import"./index-iVHvpgFv.js";import"./index-DkDw0AjC.js";import"./RechartsWrapper-CaOZ9lUC.js";import"./axisSelectors-mbotnnaX.js";import"./polarAxisSelectors-D4S23sJN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CN1jPZAK.js";import"./index-B0W9noqG.js";import"./index-CJvlApl9.js";import"./renderedTicksSlice-CH4A0jxF.js";import"./index-C8XfMsOR.js";import"./CartesianChart-BUE6q1Of.js";import"./ZIndexPortal-DNkKSpm6.js";import"./CategoricalChart-Bt9yIUeV.js";import"./CartesianAxis-B1xkqmAC.js";import"./Layer-BlSvO1E4.js";import"./Text-D3Kha142.js";import"./DOMUtils-D-TrccP0.js";import"./pageBackground-DPTEcMe3.js";import"./ZIndexLayer-eeqaM0q4.js";import"./Label-MgaHTNfc.js";import"./types-Ci0QqKEV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./fillDefinitions-CqtDfKww.js";import"./Curve-qbG6zMME.js";import"./step-Ma_Va74-.js";import"./path-DyVhHtw_.js";import"./LabelList-BTCEEH0Q.js";import"./ActivePoints-Bfyy8a29.js";import"./Dot-CbUJ7B3N.js";import"./activeStyles-Dl0q6Ayx.js";import"./useAnimationId-BGu4RQqd.js";import"./dataEntryStyles-DxP76lNF.js";import"./Symbols-C3CTyIIX.js";import"./symbol-N4VmGah0.js";import"./ErrorBarContext-BpJZX0b6.js";import"./SetGraphicalItem-D1cjeVg8.js";import"./getRadiusAndStrokeWidthFromDot-MbD5sGJN.js";import"./ActiveShapeUtils-nEsdy7gj.js";import"./useEffectiveDataKey-Bc7YBVWp.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,xe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},ue=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,ue as __namedExportsOrder,xe as default};
