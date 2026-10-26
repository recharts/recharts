import{R as e}from"./iframe-CV_Focqb.js";import{R as a}from"./zIndexSlice-BMlZ-BTA.js";import{C as p}from"./ComposedChart-MH3garqG.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BS3o8ll8.js";import{X as f}from"./XAxis-CbmbdddR.js";import{Y as l}from"./YAxis-B-5hoebp.js";import{L as d}from"./Line-DHwzAAmS.js";import{R as h}from"./ReferenceLine-CUTmRuF_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-BHR6OE-9.js";import"./throttle-B3rCyY-p.js";import"./index-CjhSLlbk.js";import"./index-Beg8UZ9d.js";import"./RechartsWrapper-gHoUEC4B.js";import"./axisSelectors-BxeWYXvo.js";import"./polarAxisSelectors-C3BM8mNN.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CaWFw3Yv.js";import"./index-CURBXMxT.js";import"./index-B3f3WOos.js";import"./renderedTicksSlice-BoOYYKQz.js";import"./index-M6ICInBl.js";import"./CartesianChart-Db9Ekhbm.js";import"./ZIndexPortal-AZ5cZsws.js";import"./CategoricalChart-DWAHsGuD.js";import"./CartesianAxis-CQt-kkqP.js";import"./Layer-CsEez_y-.js";import"./Text-DkcQkg85.js";import"./pageBackground-CnYdCkRU.js";import"./ZIndexLayer-mZMt123c.js";import"./Label-Du5iQDtH.js";import"./dataEntryStyles-BVJSTixW.js";import"./types-DM7Vi8Am.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-BuhBl-mk.js";import"./step-BlU7WG28.js";import"./path-DyVhHtw_.js";import"./LabelList-DREKrdKH.js";import"./ActivePoints-CZ1Bkl4s.js";import"./Dot-BSQDV2JF.js";import"./activeStyles-gddFfhxG.js";import"./useAnimationId-DuuBzQL8.js";import"./Symbols-iEBpa06p.js";import"./symbol-CX01f9Tn.js";import"./RegisterGraphicalItemId-r-VYbJMs.js";import"./ErrorBarContext-CdrVSUrx.js";import"./SetGraphicalItem-BpTteZzJ.js";import"./getRadiusAndStrokeWidthFromDot-BmGx7Z4E.js";import"./ActiveShapeUtils-180icphM.js";import"./useEffectiveDataKey-CjigGJWt.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};export{t as IfOverflow,xe as __namedExportsOrder,ye as default};
