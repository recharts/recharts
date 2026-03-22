import{r as f,e}from"./iframe-DsUMSIoB.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwQ9PO5l.js";import{Y as c}from"./YAxis-CTnSzHcV.js";import{R as A}from"./arrayEqualityCheck-CZsQnfge.js";import{C}from"./ComposedChart-CBU4OVsT.js";import{X as K}from"./XAxis-BzmMsMrb.js";import{L as v}from"./Legend-Dy9QC9FZ.js";import{B as a}from"./Bar-BcfvrqhD.js";import{R as x}from"./RechartsHookInspector-DFkKDQjz.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CoMq3-ST.js";import"./Layer-CW99gOx_.js";import"./resolveDefaultProps-Dxu6XJ62.js";import"./Text-DgusKYHb.js";import"./DOMUtils-ByvJp_q1.js";import"./Label-DJgqAx1l.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-tLtAagmx.js";import"./zIndexSlice-BDZOwce-.js";import"./immer-D_NmV9ya.js";import"./types-DN9VSCi_.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-TGaTZgu3.js";import"./hooks-VVLooFbP.js";import"./axisSelectors-BtEB30-b.js";import"./d3-scale-B0RJDOHU.js";import"./RechartsWrapper-mUXPQGkR.js";import"./index-BFxM37Jd.js";import"./CartesianChart-Duzb9tyy.js";import"./chartDataContext-DJEsKFHL.js";import"./CategoricalChart-LslF1x-i.js";import"./Symbols-BAzW_gm6.js";import"./symbol-DKO9W9xf.js";import"./step-eBA07Zoi.js";import"./useElementOffset-BkAQKih2.js";import"./uniqBy-ZtGpxLFX.js";import"./iteratee-BnLCU3fu.js";import"./tooltipContext-anNrNI_B.js";import"./ReactUtils-BqswSBIq.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-Dj4smYQ8.js";import"./isPlainObject-DFvEMqvd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BIwirMVx.js";import"./useAnimationId-DmBkD_4u.js";import"./Trapezoid-tpniWtB4.js";import"./Sector-pL7nB78h.js";import"./Curve-BkdTmnon.js";import"./RegisterGraphicalItemId-BclML1JJ.js";import"./ErrorBarContext-DPQTg4jn.js";import"./GraphicalItemClipPath-CgRDa1Kp.js";import"./SetGraphicalItem-k0XQScGi.js";import"./getZIndexFromUnknown-BNhmGvmH.js";import"./graphicalItemSelectors-BzQEGCwl.js";import"./index-CfUCN5Mt.js";import"./ChartSizeDimensions-CcoGZBL4.js";import"./OffsetShower-BdILJQRM.js";import"./PlotAreaShower-DssL7f_B.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
