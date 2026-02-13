import{r as f,e}from"./iframe-KPAXLOLU.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-CAPsonmh.js";import{R as A}from"./arrayEqualityCheck-C56QUJ1f.js";import{C}from"./ComposedChart-DeZSIAh0.js";import{X as K}from"./XAxis-C4HchdwG.js";import{L as v}from"./Legend-KXMFISbb.js";import{B as a}from"./Bar-zxBToTfD.js";import{R as x}from"./RechartsHookInspector-kpgbJjbF.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DoONYDR5.js";import"./CartesianAxis-Fwh7n2FF.js";import"./Layer-Da82H4oD.js";import"./Text-bc5Wvmbt.js";import"./DOMUtils-tqc8lMYW.js";import"./Label-BCITgdoX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DGM-MLqc.js";import"./zIndexSlice-BZZRXwbi.js";import"./types-Bf6Uuk4n.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-BSsx0bCA.js";import"./axisSelectors-BryM1FYj.js";import"./RechartsWrapper-DbDiUXBh.js";import"./CartesianChart-DFX2Z7FU.js";import"./chartDataContext-T6w2KyJs.js";import"./CategoricalChart-Dk9GNXPU.js";import"./Symbols-B8OFT3tL.js";import"./Curve-DKnP5GEK.js";import"./useElementOffset-BgJqWN_p.js";import"./iteratee-OJWbNbsR.js";import"./tooltipContext-CHrD_CwG.js";import"./ReactUtils-DU0YFNnG.js";import"./ActiveShapeUtils-CGbu2e04.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BzpXjes6.js";import"./useAnimationId-CcLJkYYw.js";import"./Trapezoid-CVMTG_aU.js";import"./Sector-2YnOnij-.js";import"./RegisterGraphicalItemId-DhvOJqxy.js";import"./ErrorBarContext-DSh5xxoF.js";import"./GraphicalItemClipPath-CMapYqoy.js";import"./SetGraphicalItem-DnuvD-SA.js";import"./getZIndexFromUnknown-j63xAmTD.js";import"./graphicalItemSelectors-CbNq9yul.js";import"./index-DScL8g0g.js";import"./ChartSizeDimensions-DvlPtCXc.js";import"./OffsetShower-DO6TyZAZ.js";import"./PlotAreaShower-Cm4MMGxs.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
