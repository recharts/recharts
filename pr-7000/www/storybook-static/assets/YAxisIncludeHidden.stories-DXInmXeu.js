import{r as f,e}from"./iframe-CFT77Gxv.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-BQIKrjqI.js";import{Y as c}from"./YAxis-AxMvucM_.js";import{R as A}from"./arrayEqualityCheck-D0woyLdN.js";import{C}from"./ComposedChart-_mVvbmGs.js";import{X as K}from"./XAxis-iSjPfIVk.js";import{L as v}from"./Legend-GsUsg6sE.js";import{B as a}from"./Bar-4Iwg71sr.js";import{R as x}from"./RechartsHookInspector-BcoRzUX4.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BfLi8adI.js";import"./CartesianAxis-BbU1esix.js";import"./Layer-MeOR0S7X.js";import"./Text-Bq7B7F5n.js";import"./DOMUtils-DtvoLBHD.js";import"./Label-BG9DvreX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-uKRagXxd.js";import"./zIndexSlice-Czz78II2.js";import"./types-CpsEOU-X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-yAz6J_Nf.js";import"./axisSelectors-DOMws57m.js";import"./RechartsWrapper-C06tio3K.js";import"./CartesianChart-8phVSf5K.js";import"./chartDataContext-yQ3flajw.js";import"./CategoricalChart-BnvwGt9I.js";import"./Symbols-Cng0_jSU.js";import"./Curve-D6lAkyMf.js";import"./useElementOffset-Bnm15LDE.js";import"./iteratee-BUNzxPV7.js";import"./tooltipContext-DyXLZ6PX.js";import"./ReactUtils-BfhnJY8u.js";import"./ActiveShapeUtils-CyY8Lu1y.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CxDot7kp.js";import"./useAnimationId-DgcLlBvC.js";import"./Trapezoid-DpyS5tZu.js";import"./Sector-DYvzTYWt.js";import"./RegisterGraphicalItemId-C7MUsBLo.js";import"./ErrorBarContext-TG4W3Nt0.js";import"./GraphicalItemClipPath-hpTG4Orq.js";import"./SetGraphicalItem-Bnzd430s.js";import"./getZIndexFromUnknown-BdZ3kimp.js";import"./graphicalItemSelectors-BVAQjq-q.js";import"./index-9FfrM9hg.js";import"./ChartSizeDimensions-DP7onZPk.js";import"./OffsetShower-BQl_FUQS.js";import"./PlotAreaShower-kI7aZSrk.js";const Ke={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
