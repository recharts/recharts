import{r as f,e}from"./iframe-CiJ-9oSW.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-E6ZISSH3.js";import{Y as c}from"./YAxis-BZxiz2W9.js";import{R as A}from"./arrayEqualityCheck-C8jW8oZt.js";import{C}from"./ComposedChart-Dc7jAWzW.js";import{X as K}from"./XAxis-BJxfrRMM.js";import{L as v}from"./Legend-DnnvorAp.js";import{B as a}from"./Bar-3D-VrsSf.js";import{R as x}from"./RechartsHookInspector-CQuYP5B8.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BCIccZ9q.js";import"./Layer-BNBNN9ao.js";import"./resolveDefaultProps-C_fWxmLs.js";import"./Text-3tLRx2GL.js";import"./DOMUtils-DnoEKxPk.js";import"./Label-C9pOXevO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BJKv50T_.js";import"./zIndexSlice-eHnPInNj.js";import"./immer-37ItimpE.js";import"./types-vu75yOSZ.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-9qCibHxh.js";import"./hooks-Dfqn0uk4.js";import"./axisSelectors-DOyKuHrc.js";import"./d3-scale-DsUEV-Ka.js";import"./RechartsWrapper-eTQdG_km.js";import"./index-CDsMfUar.js";import"./CartesianChart-CziHqUQ0.js";import"./chartDataContext-C_-Fr4aA.js";import"./CategoricalChart-B2RsDCkt.js";import"./Symbols-B-HpyQSV.js";import"./symbol-BTeg8-vO.js";import"./step-DuNs4m9V.js";import"./useElementOffset-CCXA-6n2.js";import"./uniqBy-P9RtWepS.js";import"./iteratee-DhHmPQfF.js";import"./tooltipContext-bgs-dFTh.js";import"./ReactUtils-DvnOMe61.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DyEnrLdp.js";import"./isPlainObject-CsWSYAtR.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BfLyzxqP.js";import"./useAnimationId-CXrnPLqE.js";import"./Trapezoid-D3a_DMTo.js";import"./Sector-KbjOkzpv.js";import"./Curve-CSLHFVyE.js";import"./RegisterGraphicalItemId-C-8W5AZj.js";import"./ErrorBarContext-CYSXeNyx.js";import"./GraphicalItemClipPath-wqub__sm.js";import"./SetGraphicalItem-LQknpEAz.js";import"./getZIndexFromUnknown-DRqqs4jF.js";import"./graphicalItemSelectors-DPHe7pp7.js";import"./index-DbWSPN2V.js";import"./ChartSizeDimensions-mFb6CdqR.js";import"./OffsetShower-vd944Mef.js";import"./PlotAreaShower-mwSW161D.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
