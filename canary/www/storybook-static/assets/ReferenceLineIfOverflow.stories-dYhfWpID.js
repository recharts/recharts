import{R as e}from"./iframe-Cuc-3wmn.js";import{R as a}from"./zIndexSlice-BsVN3Oy1.js";import{C as p}from"./ComposedChart-CD6T7lY1.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-Bym8S3Fv.js";import{X as f}from"./XAxis-BqOzDVbT.js";import{Y as l}from"./YAxis-D3vkb_pr.js";import{L as d}from"./Line-AdV0akim.js";import{R as h}from"./ReferenceLine-DBRjqLUl.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BHv1OzUd.js";import"./index-Dr1iXWUa.js";import"./index-DGxMJQlb.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-DeE8fKkX.js";import"./isWellBehavedNumber-BQdzkgjM.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-3cu-hXPY.js";import"./axisSelectors-DM_2WB9O.js";import"./d3-scale-BS_R9TF_.js";import"./index-Dz3k4zem.js";import"./index-Do_NM7xQ.js";import"./renderedTicksSlice-BXySsU0c.js";import"./index-CYT75Ewh.js";import"./CartesianChart-C6H_Qcxl.js";import"./chartDataContext-B7_SZBh7.js";import"./CategoricalChart-DrO7g7YL.js";import"./CartesianAxis-D_D6u5e-.js";import"./Layer-D8rIily6.js";import"./Text-BXtcMZ2N.js";import"./pageBackground-DrpZqn_y.js";import"./useId-CpeFYMDs.js";import"./useBackwardsCompatibleTheme-Cg1iNggS.js";import"./Label-CIwD5k1e.js";import"./ZIndexLayer-LfSwjZQ4.js";import"./types-GMU9tJsf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Curve-DkDc-div.js";import"./step-DLRB17DG.js";import"./path-DyVhHtw_.js";import"./activeStyles-CdxeGYpW.js";import"./useAnimationId-BpVC87C1.js";import"./dataEntryStyles-BJ1Gca6t.js";import"./ActivePoints-CVhx80tt.js";import"./Dot-DyPF6Lbp.js";import"./ErrorBarContext-DdAUPC4x.js";import"./GraphicalItemClipPath-SJq0vZIV.js";import"./SetGraphicalItem-CaNq7kdy.js";import"./getRadiusAndStrokeWidthFromDot-iwqqPDMx.js";import"./ActiveShapeUtils-CkArj8ub.js";import"./useEffectiveDataKey-rVy1qnot.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,ve={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(a,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:i})=>{const{findByText:m}=v(i);w(await m("1800")).toBeInTheDocument()}},ye=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,ye as __namedExportsOrder,ve as default};
