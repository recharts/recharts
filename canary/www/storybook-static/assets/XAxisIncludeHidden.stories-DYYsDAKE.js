import{r as f,e}from"./iframe-BlTD-rim.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisProps-ByMyQu0r.js";import{Y as c}from"./YAxis-CzxGswUN.js";import{R as C}from"./arrayEqualityCheck-rFMbtr9X.js";import{C as K}from"./ComposedChart-rwI72tz9.js";import{X as A}from"./XAxis-9FZ95w2s.js";import{L as v}from"./Legend-DwZMZD9h.js";import{B as a}from"./Bar-DtSTN1J_.js";import{R as x}from"./RechartsHookInspector-AxC62fMg.js";import{p as s}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-CYyTkUJ3.js";import"./CartesianAxis-bTSyVw2P.js";import"./Layer-COV8jJuI.js";import"./Text-CcLFuzDB.js";import"./DOMUtils-JUKIsz3X.js";import"./Label-DeeiiEOU.js";import"./PolarUtils-uT4ExAHg.js";import"./ZIndexLayer-D1uFjBFZ.js";import"./zIndexSlice-Ir6gglyl.js";import"./types-DTlxByIq.js";import"./hooks-ZIQpvDbg.js";import"./axisSelectors-BTk9q0tB.js";import"./RechartsWrapper-BRiCuj44.js";import"./CartesianChart-CytP6aLk.js";import"./chartDataContext-BDSmG94B.js";import"./CategoricalChart-DNOtZmhb.js";import"./Symbols-CPbquqjE.js";import"./Curve-BUANm7-q.js";import"./useElementOffset-DPOkcJvF.js";import"./iteratee-Ca5LyscH.js";import"./tooltipContext-D31RXlBy.js";import"./ReactUtils-cgJBm0o5.js";import"./ActiveShapeUtils-TxWRIrWJ.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DYtDJsJv.js";import"./useAnimationId-Cp6XJ64u.js";import"./Trapezoid-YZMZwo4M.js";import"./Sector-BWZ0U6hI.js";import"./RegisterGraphicalItemId-7-yGWLdn.js";import"./ErrorBarContext-952cRcfJ.js";import"./GraphicalItemClipPath-D9Dgqofo.js";import"./SetGraphicalItem-BzR4HcCN.js";import"./getZIndexFromUnknown-CoMBE9bU.js";import"./graphicalItemSelectors-CzrM9QyT.js";import"./index-BN3nPK1K.js";import"./ChartSizeDimensions-DjKj5CZH.js";import"./OffsetShower-BJ7VFhTL.js";import"./PlotAreaShower-DLdCBikg.js";const Ae={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(K,{data:s},e.createElement(A,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
  args: getStoryArgsFromArgsTypesObject(YAxisProps)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const ve=["WithIncludeHidden"];export{t as WithIncludeHidden,ve as __namedExportsOrder,Ae as default};
