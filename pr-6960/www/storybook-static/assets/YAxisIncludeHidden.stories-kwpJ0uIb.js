import{r as f,e}from"./iframe-CWWhV85a.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BSq1Zqr5.js";import{Y as c}from"./YAxis-DfgzXKJt.js";import{R as A}from"./arrayEqualityCheck-BrvYjDvj.js";import{C}from"./ComposedChart-UkKK6Wyd.js";import{X as K}from"./XAxis-Csdvagzn.js";import{L as v}from"./Legend-CAfyJPWT.js";import{B as a}from"./Bar-BPxMxoew.js";import{R as x}from"./RechartsHookInspector-C1-BzxNv.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-C1e51uNd.js";import"./CartesianAxis-BLwbg9OG.js";import"./Layer-CEGJXWpg.js";import"./Text-BGl_BLD8.js";import"./DOMUtils-DdesQF23.js";import"./Label-sj2OS_tg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CsGSNJ1a.js";import"./zIndexSlice-DakyRb4z.js";import"./types-HO0i5iTi.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-hmYRkmbQ.js";import"./axisSelectors-DefXTn4I.js";import"./RechartsWrapper-B76lvk5b.js";import"./CartesianChart-9TMDzitE.js";import"./chartDataContext-B_cxSlaG.js";import"./CategoricalChart-B6q7J0Mb.js";import"./Symbols-D5GFnflg.js";import"./Curve-CEhuq5Wz.js";import"./useElementOffset-CDAAba6N.js";import"./iteratee-5pGWl1WW.js";import"./tooltipContext-BFGNKkU0.js";import"./ReactUtils-erR6fuGc.js";import"./ActiveShapeUtils-D-wBc36w.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DgoKSUUy.js";import"./useAnimationId--U2HKBmo.js";import"./Trapezoid-CadbmzeJ.js";import"./Sector-CjkT0xYm.js";import"./RegisterGraphicalItemId-C6xkCy3A.js";import"./ErrorBarContext-BiKvJSsP.js";import"./GraphicalItemClipPath-60MS9PCs.js";import"./SetGraphicalItem-CgqlK889.js";import"./getZIndexFromUnknown-DZ33OXCc.js";import"./graphicalItemSelectors-DJcPITn-.js";import"./index-1_XwddF_.js";import"./ChartSizeDimensions-BYyG2w9L.js";import"./OffsetShower-BriTQDS6.js";import"./PlotAreaShower-CFNBsBQe.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ke as default};
