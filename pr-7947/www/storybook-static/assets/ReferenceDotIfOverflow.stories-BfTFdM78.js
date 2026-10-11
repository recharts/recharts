import{R as e}from"./iframe-B91k2IcJ.js";import{R as m}from"./zIndexSlice-DPjnHRkm.js";import{C as p}from"./ComposedChart-SUsOIgRZ.js";import{p as s}from"./Page-Cj8EiXz7.js";import{C as c}from"./CartesianGrid-yndteJZg.js";import{X as f}from"./XAxis-Kxgks0Q-.js";import{Y as l}from"./YAxis-MGmz2Csl.js";import{R as d}from"./ReferenceDot-BrkfnlDh.js";import"./preload-helper-Dp1pzeXC.js";import"./throttle-BM2gK96G.js";import"./index-BbCiI-kx.js";import"./index-C5xeHmjj.js";import"./get-C2VjdU0L.js";import"./resolveDefaultProps-D3docOoh.js";import"./isWellBehavedNumber-TAwJ2tp1.js";import"./PolarUtils-CTnnDHZv.js";import"./RechartsWrapper-BMFvDMkV.js";import"./axisSelectors-CcYA9DrF.js";import"./d3-scale-C4mP0o3d.js";import"./index-DlE4la4O.js";import"./index-DagyI5pu.js";import"./renderedTicksSlice-C1MLxybq.js";import"./index-D5HKNOOG.js";import"./CartesianChart-B7_E8FCz.js";import"./chartDataContext-DjizePAa.js";import"./CategoricalChart-CUc2SRJ3.js";import"./CartesianAxis-D1fr-7So.js";import"./Layer-mmJAUotg.js";import"./Text-CiRRF6pE.js";import"./pageBackground-BjpY-vWv.js";import"./useId-DkzElDsG.js";import"./useBackwardsCompatibleTheme-CU4zQS7V.js";import"./Label-BsntnuTl.js";import"./ZIndexLayer-GgF7R--c.js";import"./types-DevBWE8M.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./Dot-D09SInS_.js";import"./CartesianScaleHelper-C9Oze4oB.js";const{expect:h,within:w}=__STORYBOOK_MODULE_TEST__,te={title:"Examples/cartesian/Reference Dot/If Overflow"},t={render:()=>e.createElement(m,{width:"100%",height:500},e.createElement(p,{data:s,margin:{top:5,right:30,left:20,bottom:5}},e.createElement(c,{strokeDasharray:"3 3"}),e.createElement(f,{dataKey:"name"}),e.createElement(l,{type:"number"}),e.createElement(d,{ifOverflow:"extendDomain",x:"Page E",y:1700,r:100}))),play:async({canvasElement:a})=>{const{findByText:i}=w(a);h(await i("1800")).toBeInTheDocument()}},re=["IfOverflow"];var r,o,n;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
          <ReferenceDot ifOverflow="extendDomain" x="Page E" y={1700} r={100} />
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
     * assert that when ifOverflow="extendDomain" 1900 becomes the new domain y-max.
     * this test will fail when the user changes the ifOverflow arg, but it will give us confidence
     * that 'extendDomain' behavior remains the same.
     */
    expect(await findByText('1800')).toBeInTheDocument();
  }
}`,...(n=(o=t.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};export{t as IfOverflow,re as __namedExportsOrder,te as default};
