import{R as e}from"./iframe-BFQyqMbU.js";import{R as n}from"./zIndexSlice-jJ_CaBDo.js";import{C as p}from"./ComposedChart-Pdj8BLwD.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-QGae8iA0.js";import{X as f}from"./XAxis-Db3L_JCQ.js";import{Y as l}from"./YAxis-Cz8KrmGC.js";import{L as d}from"./Line-Chmj4NtI.js";import{R as h}from"./ReferenceLine-DwqgdcdB.js";import"./preload-helper-Dp1pzeXC.js";import"./immer--b20-lFI.js";import"./index-lcxumIdx.js";import"./index-yqk7rkqd.js";import"./get-p4pcudXd.js";import"./resolveDefaultProps-B_ssPDKF.js";import"./isWellBehavedNumber-CXuZhh3h.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BounuTKv.js";import"./index-CDKHoQ9z.js";import"./index-Gba51aKu.js";import"./renderedTicksSlice-HnYJqdGr.js";import"./axisSelectors-CRFbB7ND.js";import"./d3-scale--vDRC-Zz.js";import"./CartesianChart-qgf-TM4c.js";import"./chartDataContext-BM8qcz36.js";import"./CategoricalChart-FqadQC9J.js";import"./CartesianAxis-JBeJCkI-.js";import"./Layer-BpUtlx2X.js";import"./Text-BMugx81A.js";import"./DOMUtils-CzHwSZC9.js";import"./Label-BBfCiCQ6.js";import"./ZIndexLayer-DPawcbSR.js";import"./types-cy48Xvgh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./Curve-BGI4IKSF.js";import"./step-D-tHTqvJ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BA8IgjUl.js";import"./useAnimationId-D_DRQ5ok.js";import"./ActivePoints-CftO_jkK.js";import"./Dot-BN0Lszie.js";import"./RegisterGraphicalItemId-BEWz97Wy.js";import"./ErrorBarContext-CGoKUjs6.js";import"./GraphicalItemClipPath-B53LZcY2.js";import"./SetGraphicalItem-D0WJt6mF.js";import"./getRadiusAndStrokeWidthFromDot-C2SI6lR2.js";import"./ActiveShapeUtils-BDWRsG1S.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:w,within:v}=__STORYBOOK_MODULE_TEST__,fe={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{dataKey:"uv"}),e.createElement(h,{ifOverflow:"extendDomain",y:1700}))),play:async({canvasElement:a})=>{const{findByText:m}=v(a);w(await m("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
