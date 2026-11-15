import{R as e}from"./iframe-B7xPXiPl.js";import{R as a}from"./zIndexSlice-DflaePKy.js";import{C as p}from"./ComposedChart-BdsejxH2.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Cd7TteQ1.js";import{X as f}from"./XAxis-w-quiWhJ.js";import{Y as l}from"./YAxis-Cu3FI7G-.js";import{L as d}from"./Line-BDZJuxNO.js";import{R as h}from"./ReferenceLine-CfYbnXzR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./resolveDefaultProps-t98kZJWg.js";import"./throttle-BS8hni_u.js";import"./index-D9RsPAPo.js";import"./index-D5HoT5KN.js";import"./RechartsWrapper-BcgQInkA.js";import"./axisSelectors-Bm0UGi6R.js";import"./polarAxisSelectors-BXJXB0Uo.js";import"./PolarUtils-CTnnDHZv.js";import"./d3-scale-CVxlp6F9.js";import"./index-C-x4qMT5.js";import"./index-BSMQz-2O.js";import"./renderedTicksSlice-CrxiGG4Q.js";import"./index-v1i9I3dv.js";import"./fillDefinitions-BBy33SnP.js";import"./CartesianChart-BjVCLf26.js";import"./chartDataContext-D0czUVCw.js";import"./CategoricalChart-DFRV2_vj.js";import"./CartesianAxis-CcCV8fyf.js";import"./Layer-CYZUIq4P.js";import"./Text-BexCT2h6.js";import"./ZIndexLayer-7qwpAdIl.js";import"./Label-YOyO9lVV.js";import"./types-CQsoFKaQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-AZzsDYE7.js";import"./Curve-CrTz1Ty2.js";import"./step-DxMe6Ez2.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-C3moi0Z-.js";import"./ActivePoints-Ij5uM0Pj.js";import"./Dot-GE-iIyp3.js";import"./activeStyles-CHc73Nrw.js";import"./useAnimationId-Bi0MWfey.js";import"./Symbols-BV4T3Yk8.js";import"./symbol-BKIkK8QI.js";import"./ErrorBarContext-DfxhnQqe.js";import"./SetGraphicalItem-C6Fs49Wr.js";import"./getRadiusAndStrokeWidthFromDot-CdlEB0NM.js";import"./ActiveShapeUtils-Cx93C_x7.js";import"./useEffectiveDataKey-Bs8MhK-5.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,we={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ve=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
