import{r as f,e}from"./iframe-DYXgwBIj.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DLCMUUgi.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as A}from"./arrayEqualityCheck-CLSXPhEJ.js";import{C}from"./ComposedChart-BNyuImgf.js";import{X as K}from"./XAxis-DxuZp48g.js";import{L as v}from"./Legend-Cn9-2bkH.js";import{B as s}from"./Bar-4pjzG_Tm.js";import{R as x}from"./RechartsHookInspector-DNZQsUA4.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C_t8uogb.js";import"./Layer-B2chWpFo.js";import"./resolveDefaultProps-xhU6-TKE.js";import"./Text-1DsuNyNG.js";import"./DOMUtils-YQarvmoJ.js";import"./Label-BotO9q2I.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D-ilahJA.js";import"./zIndexSlice-grNRpkcv.js";import"./immer-DqnPv083.js";import"./types-D3wyGAu1.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-BsOdr-UA.js";import"./hooks-B36GXF-L.js";import"./axisSelectors-D1Sw3rlY.js";import"./d3-scale-DvhayWTq.js";import"./RechartsWrapper-BJ4twCb0.js";import"./index-DKQaQPo5.js";import"./CartesianChart-BhbBZsjR.js";import"./chartDataContext-CQgEv-1D.js";import"./CategoricalChart-8xICKxcP.js";import"./Symbols-JaciBV2o.js";import"./symbol-BlyA1o_2.js";import"./step-5UvXITCF.js";import"./useElementOffset-BX9-o7BY.js";import"./uniqBy-C8w4JvJv.js";import"./iteratee-CXILqLE9.js";import"./tooltipContext-Dn4q9DGD.js";import"./ReactUtils-D9ZXF6dc.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Cw5R38HO.js";import"./isPlainObject-BJALdUT1.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-2yqkvEMt.js";import"./useAnimationId-DLi04jG5.js";import"./Trapezoid-D95G9lkc.js";import"./Sector-CVKx1V34.js";import"./Curve-DqnNZDut.js";import"./RegisterGraphicalItemId-BBYoprYG.js";import"./ErrorBarContext-BIMALam9.js";import"./GraphicalItemClipPath-BivSF4rD.js";import"./SetGraphicalItem-C0jCUDKT.js";import"./getZIndexFromUnknown-DymLvzWw.js";import"./graphicalItemSelectors-C-WQzubA.js";import"./index-DIOmg34x.js";import"./ChartSizeDimensions-DgpSyLAE.js";import"./OffsetShower-hXudHQen.js";import"./PlotAreaShower-DjlUc4SO.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Oe=["WithIncludeHidden"];export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
