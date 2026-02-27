import{r as f,e}from"./iframe-CLFlzKU9.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-E6ZISSH3.js";import{Y as c}from"./YAxis-1XrS4lWj.js";import{R as A}from"./arrayEqualityCheck-CV0K5b6V.js";import{C}from"./ComposedChart-B2SA0aOK.js";import{X as K}from"./XAxis-CTep6ajY.js";import{L as v}from"./Legend-BM38pQiP.js";import{B as a}from"./Bar-av_n40dl.js";import{R as x}from"./RechartsHookInspector-EUreR-RY.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-U7WBccnc.js";import"./Layer-D55T8TbI.js";import"./resolveDefaultProps-BSRSJIfm.js";import"./Text-B9BEHbSp.js";import"./DOMUtils-BVpUDVI2.js";import"./Label-B8vPAEDz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CygGErko.js";import"./zIndexSlice-Dgcx4EWE.js";import"./immer-Dut6E3j8.js";import"./types-C77fUvNb.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-qTsdruV1.js";import"./hooks-CNG9zZ1X.js";import"./axisSelectors-ZIzlwa2b.js";import"./d3-scale-DFBNx2RG.js";import"./RechartsWrapper-BmUcxmwQ.js";import"./index-Di3CFc3K.js";import"./CartesianChart-CLuzMUl3.js";import"./chartDataContext-BF88oXyn.js";import"./CategoricalChart-Dmo86WGi.js";import"./Symbols-B84FzpuI.js";import"./symbol-DS4qszt7.js";import"./step-BHh7-B-Y.js";import"./useElementOffset-B6rd57Yn.js";import"./uniqBy-CnDkSYCK.js";import"./iteratee-D5L_7s48.js";import"./tooltipContext-Ckh_FF-f.js";import"./ReactUtils-KqS4Be82.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-CngmHGxL.js";import"./isPlainObject-C5TOG-jr.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BGUQeJvS.js";import"./useAnimationId-B-nqwfiH.js";import"./Trapezoid-Nj1UelrR.js";import"./Sector-BGoD3vr5.js";import"./Curve-04aIAzqq.js";import"./RegisterGraphicalItemId-DlwxkAlg.js";import"./ErrorBarContext-CcCgl_nm.js";import"./GraphicalItemClipPath-BsB0ULuR.js";import"./SetGraphicalItem-DQtM1PSt.js";import"./getZIndexFromUnknown-C9sI_tWh.js";import"./graphicalItemSelectors-B0cHLovH.js";import"./index-CmeZFfhb.js";import"./ChartSizeDimensions-BcSaWdnw.js";import"./OffsetShower-C38qJAL5.js";import"./PlotAreaShower-CA5JgFjx.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
