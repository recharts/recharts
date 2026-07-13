import{R as e}from"./iframe-BLb3YVtb.js";import{R as n}from"./zIndexSlice-DJkgkDD9.js";import{C as p}from"./ComposedChart-Dwy4LS3D.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-BpK60PEo.js";import{X as f}from"./XAxis-DkAVE8hF.js";import{Y as l}from"./YAxis-fcMK6IsP.js";import{L as d}from"./Line-CqqpJna2.js";import{R as h}from"./ReferenceLine-CE5Ej3zc.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-6auUp_qF.js";import"./index-DEpMuUHp.js";import"./index-wtrxX94s.js";import"./get-DJ3830uQ.js";import"./resolveDefaultProps-CnVWahPK.js";import"./isWellBehavedNumber-DlUvkjSQ.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-CUaMC7NX.js";import"./index-DpQytYeA.js";import"./index-Cj1DGWT6.js";import"./renderedTicksSlice-k5ys3P6y.js";import"./axisSelectors-DadMFlsr.js";import"./d3-scale-Bikema70.js";import"./CartesianChart-B4u-2HHw.js";import"./chartDataContext-BoMs8zEW.js";import"./CategoricalChart-Csrvckvr.js";import"./CartesianAxis-BbjeI4ni.js";import"./Layer-BK8zFmi3.js";import"./Text-IRDE_cDN.js";import"./DOMUtils-_5JDSOjo.js";import"./Label-DW72PY7h.js";import"./ZIndexLayer-5e79PAf2.js";import"./types-45FMQ0ZC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-gD93iCPz.js";import"./step-DW4vIB3R.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-VUSNP4y9.js";import"./useAnimationId-nzk_I_IH.js";import"./ActivePoints-Bm_TZ0P6.js";import"./Dot-D_39xHUo.js";import"./RegisterGraphicalItemId-Byl2Zyfr.js";import"./ErrorBarContext-CdfKpXhM.js";import"./GraphicalItemClipPath-gmGdN2WI.js";import"./SetGraphicalItem-BWF_fkaR.js";import"./getRadiusAndStrokeWidthFromDot-erroBPpZ.js";import"./ActiveShapeUtils-2WDiJcdZ.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
