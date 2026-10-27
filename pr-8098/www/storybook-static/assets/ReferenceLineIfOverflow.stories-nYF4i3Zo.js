import{R as e}from"./iframe-CEQushtN.js";import{R as a}from"./zIndexSlice-DjNM_HLz.js";import{C as p}from"./ComposedChart-BlLv9QRG.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-DdX2dsam.js";import{X as f}from"./XAxis-Dox0Mf_6.js";import{Y as l}from"./YAxis-CO7P54oT.js";import{L as d}from"./Line-RGSptLoh.js";import{R as h}from"./ReferenceLine-esb0Db0W.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-CyZKvMPR.js";import"./throttle-D-s41lqW.js";import"./index-BtHOWWHr.js";import"./index-Dij9Lyzg.js";import"./RechartsWrapper-DXBxSHCJ.js";import"./axisSelectors-DQduFkeJ.js";import"./polarAxisSelectors-S5DqA3LI.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-BWM46Ydz.js";import"./index-BdO45VT9.js";import"./index-CoxdILWo.js";import"./renderedTicksSlice-BiOzFX7m.js";import"./index-BB4PCvH7.js";import"./CartesianChart-BcxOd9Ut.js";import"./ZIndexPortal-pBjad6tL.js";import"./CategoricalChart-gEK0X1ot.js";import"./CartesianAxis-Df5o-IJd.js";import"./Layer-C3v_EKIk.js";import"./Text-CmoBCOlM.js";import"./pageBackground-QlEa7JV2.js";import"./ZIndexLayer-DtsqWk3z.js";import"./Label-CFJJzt7V.js";import"./dataEntryStyles-BlFVEHbT.js";import"./types-CPVpRlsk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-C2Lci0Z6.js";import"./step-BbPJEBHq.js";import"./path-DyVhHtw_.js";import"./LabelList-DwlBaftj.js";import"./ActivePoints-DJ2RJcRF.js";import"./Dot-CuIjyWbv.js";import"./activeStyles-6x5lKRrB.js";import"./useAnimationId-CzbeFnj4.js";import"./Symbols-C3N2Nfx0.js";import"./symbol-DSj-rHxT.js";import"./RegisterGraphicalItemId-CVBDPhvw.js";import"./ErrorBarContext-CpznhA_J.js";import"./SetGraphicalItem-D60Grc7B.js";import"./getRadiusAndStrokeWidthFromDot-CzdVPXFS.js";import"./ActiveShapeUtils-D8RrSuBC.js";import"./useEffectiveDataKey-BKKYPJCk.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ye={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:n})=>{const{findByText:m}=v(n);w(await m("1800")).toBeInTheDocument()}},xe=["IfOverflow"];var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
