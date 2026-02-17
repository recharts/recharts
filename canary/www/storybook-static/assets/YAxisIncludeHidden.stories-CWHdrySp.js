import{r as f,e}from"./iframe-DtzQZ5We.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-DMMOmwli.js";import{Y as c}from"./YAxis-jb4FGmfu.js";import{R as A}from"./arrayEqualityCheck-3Q4fEezD.js";import{C}from"./ComposedChart-DKZIKN5k.js";import{X as K}from"./XAxis-DbDdWo9i.js";import{L as v}from"./Legend-mG970ShB.js";import{B as a}from"./Bar-CjTrBlPR.js";import{R as x}from"./RechartsHookInspector-podkStYr.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BRs_UQ99.js";import"./CartesianAxis-D6UZdOOc.js";import"./Layer-P1mRwVv-.js";import"./Text-plRA5L0Q.js";import"./DOMUtils-KcfZip85.js";import"./Label-D5-8z0UP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DGEtHlps.js";import"./zIndexSlice-DS1PNPXk.js";import"./types-DcSMO55m.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CW-ChE7J.js";import"./hooks-B-LrQ_eV.js";import"./axisSelectors-BkRgZDRN.js";import"./RechartsWrapper-DGOHUa9W.js";import"./CartesianChart-DjEZ7rdy.js";import"./chartDataContext-DsBjDkWS.js";import"./CategoricalChart-p0GBJql4.js";import"./Symbols-k0cT0xYb.js";import"./Curve-C7rWq_eQ.js";import"./useElementOffset-CmcXmoGo.js";import"./iteratee-C7zx0CtR.js";import"./tooltipContext-zNVcvoEf.js";import"./ReactUtils-Bg8ILpJF.js";import"./ActiveShapeUtils-D2Eg2bWy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSEdSL9_.js";import"./useAnimationId-GgPPrJFw.js";import"./Trapezoid-DCMThu2C.js";import"./Sector-CcjHcsYG.js";import"./RegisterGraphicalItemId-BLNhdTAM.js";import"./ErrorBarContext-BtAqYSS8.js";import"./GraphicalItemClipPath-pRNKwbfQ.js";import"./SetGraphicalItem-B7Fz13cw.js";import"./getZIndexFromUnknown-j232ldCd.js";import"./graphicalItemSelectors-D6Epzwcp.js";import"./index-CiWjk4ms.js";import"./ChartSizeDimensions-DX7nzkVv.js";import"./OffsetShower-CSfFk_uM.js";import"./PlotAreaShower-IRVjM9_1.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
