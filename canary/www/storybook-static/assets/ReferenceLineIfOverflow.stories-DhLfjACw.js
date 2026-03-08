import{e}from"./iframe-DSZ2QiJB.js";import{R as n}from"./arrayEqualityCheck-rt-62tKM.js";import{C as p}from"./ComposedChart-B_grCv6v.js";import{C as s}from"./CartesianGrid-tCMk91Zb.js";import{X as c}from"./XAxis-C40iw1gZ.js";import{Y as f}from"./YAxis-x1YS6WwT.js";import{L as l}from"./Line-CsqiaEo_.js";import{R as d}from"./ReferenceLine-DVCxBh17.js";import{R as h}from"./RechartsHookInspector-CbZDQ_xN.js";import{p as w}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./resolveDefaultProps-_H3sYQ_H.js";import"./immer-D42ZyI8P.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BWBPYC1r.js";import"./index-1kC-pV_c.js";import"./hooks-Bla0K3sY.js";import"./axisSelectors-DvTXpJxJ.js";import"./d3-scale-Bj0Wd2Rm.js";import"./zIndexSlice-Dv9Y9W3b.js";import"./renderedTicksSlice-C2PuzhHM.js";import"./CartesianChart-YjLZrE0S.js";import"./chartDataContext-BuXntJJ8.js";import"./CategoricalChart-3Wrbo8_n.js";import"./CartesianAxis-BOemEoe1.js";import"./Layer-CfeiBM7_.js";import"./Text-Dt_FG9bq.js";import"./DOMUtils-n5N7L4PT.js";import"./Label-DwmX4z8O.js";import"./ZIndexLayer-BB6UhYUp.js";import"./types-DHG31Cql.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./ReactUtils-BPco_pTv.js";import"./ActivePoints-DGvp93MP.js";import"./Dot-DvBHW_pK.js";import"./RegisterGraphicalItemId-DpTWPNPm.js";import"./ErrorBarContext-BIl6qq4l.js";import"./GraphicalItemClipPath-DGAu4crQ.js";import"./SetGraphicalItem-A8lByKkr.js";import"./useAnimationId-CVC-EATQ.js";import"./getRadiusAndStrokeWidthFromDot-3P602oOp.js";import"./ActiveShapeUtils-atDgqYom.js";import"./isPlainObject-eGyZT97o.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-U6qmZG0w.js";import"./Trapezoid-eVJamGS1.js";import"./Sector-Cw_z1t88.js";import"./Symbols-D1J3is_N.js";import"./symbol-Bi67EGLP.js";import"./step-28_znSZY.js";import"./Curve-1v3U2npm.js";import"./CartesianScaleHelper-C9Oze4oB.js";import"./index-DDQU038C.js";import"./ChartSizeDimensions-Cqws91-P.js";import"./OffsetShower-Bc2DkPnc.js";import"./PlotAreaShower-B81JCCGH.js";const{expect:v,within:y}=__STORYBOOK_MODULE_TEST__,Re={title:"Examples/cartesian/ReferenceLine/ReferenceLineIfOverflow"},t={render:()=>e.createElement(n,{width:"100%",height:500},e.createElement(p,{data:w,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(s,{strokeDasharray:"3 3"}),e.createElement(c,{dataKey:"name"}),e.createElement(f,{type:"number"}),e.createElement(l,{dataKey:"uv"}),e.createElement(d,{ifOverflow:"extendDomain",y:1700}),e.createElement(h,null))),play:async({canvasElement:m})=>{const{findByText:a}=y(m);v(await a("1800")).toBeInTheDocument()}};var r,o,i;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const Ce=["IfOverflow"];export{t as IfOverflow,Ce as __namedExportsOrder,Re as default};
