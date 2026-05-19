import{u as f,e}from"./iframe-Dm92CwFH.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-LNhJTikZ.js";import{p as a}from"./Page-DPte-9pC.js";import{g as A}from"./arrayEqualityCheck-CILmZ2ng.js";import{C}from"./ComposedChart-8hVtFBq4.js";import{X as K}from"./XAxis-BxDV4NmS.js";import{L as v}from"./Legend-DxpUmIGw.js";import{B as s}from"./Bar-DY8cCYbD.js";import{R as x}from"./RechartsHookInspector-DjDPWpLA.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DhxbGkzM.js";import"./Layer-CpozC2HI.js";import"./resolveDefaultProps-URK34NLy.js";import"./Text-DeU0frga.js";import"./DOMUtils-CrpDH3yL.js";import"./Label-C3d_UHx_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BRpAcZD_.js";import"./zIndexSlice-CZsiKlhz.js";import"./immer-C2lunnZL.js";import"./types-CksUkFiR.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Cbab3bWB.js";import"./hooks-BzHpEskF.js";import"./axisSelectors-BHYp1qXz.js";import"./d3-scale-irW0mVOo.js";import"./RechartsWrapper-CcwR86Ee.js";import"./index-BZhNoNV_.js";import"./CartesianChart-mnMBiiJP.js";import"./chartDataContext-BodkpG5F.js";import"./CategoricalChart-VO60zbCA.js";import"./Symbols-D8RnZW1D.js";import"./symbol-aLdk9boG.js";import"./step-BOUe13iO.js";import"./useElementOffset-D-mxBOd4.js";import"./uniqBy-CnkbcL_D.js";import"./iteratee-DgYznPUB.js";import"./tooltipContext-B8ItisrQ.js";import"./ReactUtils-vWuNVuHD.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CnNIQnOr.js";import"./isPlainObject-BU4pDjKs.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BYOH8rGO.js";import"./useAnimationId-DN3FgicD.js";import"./Trapezoid-CRsqSHYT.js";import"./Sector-BkPUWzJ_.js";import"./Curve-gF21399W.js";import"./RegisterGraphicalItemId-Bgnu5jtR.js";import"./ErrorBarContext-DWWXrCiO.js";import"./GraphicalItemClipPath-C8gejsmY.js";import"./SetGraphicalItem-C8FWpJGs.js";import"./getZIndexFromUnknown-DWiQrRON.js";import"./graphicalItemSelectors-BeyTcZ1c.js";import"./index-BuoG88Tj.js";import"./ChartSizeDimensions-f0wD3mfa.js";import"./OffsetShower-VDfu5cmL.js";import"./PlotAreaShower-DIqDk6Vd.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
