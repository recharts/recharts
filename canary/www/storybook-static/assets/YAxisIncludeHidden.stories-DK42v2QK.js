import{r as f,e}from"./iframe-BI_pAXBB.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-E6ZISSH3.js";import{Y as c}from"./YAxis-BlCMhds7.js";import{R as A}from"./arrayEqualityCheck-BKrbAl8r.js";import{C}from"./ComposedChart-BqcTxN08.js";import{X as K}from"./XAxis-CGb1kgb2.js";import{L as v}from"./Legend-Bkrebucw.js";import{B as a}from"./Bar-DoB6Elrd.js";import{R as x}from"./RechartsHookInspector-BVifdKxh.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D76QbbPe.js";import"./Layer-BbCwBMrP.js";import"./resolveDefaultProps-BfThY2qm.js";import"./Text-DDIiPn9R.js";import"./DOMUtils-Clx04LAZ.js";import"./Label-BRAbHYpb.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BIA7rzZS.js";import"./zIndexSlice-Blq0MPxS.js";import"./immer-DS7uv6B4.js";import"./types-CyZr-7-n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CafZfga-.js";import"./hooks-B_MXrk3m.js";import"./axisSelectors-CXWTfjJ6.js";import"./d3-scale-CUPcwIhM.js";import"./RechartsWrapper-DROe6fuT.js";import"./index-BzE7Pa11.js";import"./CartesianChart-KFRCLVOt.js";import"./chartDataContext-VgXSPlUI.js";import"./CategoricalChart-NTGK7QHa.js";import"./Symbols-D26WGzjl.js";import"./symbol-DK6vMZu2.js";import"./step-aPk3qf3o.js";import"./useElementOffset-KO06kyND.js";import"./uniqBy-BWGLHH24.js";import"./iteratee-DFW71EQj.js";import"./tooltipContext-ufA_qosq.js";import"./ReactUtils-C8LT_WKY.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-BVb3C7rS.js";import"./isPlainObject-D710pF_7.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BlZgVPa6.js";import"./useAnimationId-CIydZ5LQ.js";import"./Trapezoid-NjnAs4CK.js";import"./Sector-CeaItBuI.js";import"./Curve-C08bjkMC.js";import"./RegisterGraphicalItemId-DUukUl_8.js";import"./ErrorBarContext-wf0IFZx-.js";import"./GraphicalItemClipPath-Bfi93Jqz.js";import"./SetGraphicalItem-d6KR3BLJ.js";import"./getZIndexFromUnknown-BCrGFzYI.js";import"./graphicalItemSelectors-CaNHPxp5.js";import"./index-D4zEKe7v.js";import"./ChartSizeDimensions-B1IFVDHL.js";import"./OffsetShower-PutuTgHL.js";import"./PlotAreaShower-CbV6UHYA.js";const we={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
