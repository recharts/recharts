import{r as f,e}from"./iframe-DFbc2wnk.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisProps-ByMyQu0r.js";import{Y as c}from"./YAxis-BmkMcK7A.js";import{R as C}from"./arrayEqualityCheck-DNx-7st0.js";import{C as K}from"./ComposedChart-b5llXj5F.js";import{X as A}from"./XAxis-DGAvxfHG.js";import{L as v}from"./Legend-DiNrghDA.js";import{B as a}from"./Bar-G8Up9Uce.js";import{R as x}from"./RechartsHookInspector-BArVV55G.js";import{p as s}from"./Page-DPte-9pC.js";import"./preload-helper-Dp1pzeXC.js";import"./SharedAxisProps-DKzkaa4t.js";import"./resolveDefaultProps-ClO_iFbZ.js";import"./CartesianAxis-C9Id4cvu.js";import"./Layer-qN8dyvlM.js";import"./Text-DCmcV5md.js";import"./DOMUtils-Bie9vKOH.js";import"./Label-CS9yD1bY.js";import"./PolarUtils-BDvNNmDF.js";import"./ZIndexLayer-DxPlI_9c.js";import"./zIndexSlice-DhoG6ae-.js";import"./types-CdWStgLs.js";import"./hooks-zOgLtc1N.js";import"./axisSelectors-BtV4vldP.js";import"./RechartsWrapper-PvLVQTSN.js";import"./CartesianChart-DAIV8Ndc.js";import"./chartDataContext-Coc1sgsX.js";import"./CategoricalChart-UkGGk_Hv.js";import"./Symbols--iTzKkzh.js";import"./Curve-CTbZZW_i.js";import"./useElementOffset-Cu5T14iC.js";import"./iteratee-BaGaNSrO.js";import"./tooltipContext-BfWSfKm-.js";import"./ReactUtils-BJsLkXPe.js";import"./ActiveShapeUtils-BSQcxVua.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-tz9WvN-g.js";import"./useAnimationId-B9C_B4hh.js";import"./Trapezoid-CRho5hrx.js";import"./Sector-BE1YiTfv.js";import"./RegisterGraphicalItemId-BFMXufyl.js";import"./ErrorBarContext-DSr7txyg.js";import"./GraphicalItemClipPath-Dc38YvNS.js";import"./SetGraphicalItem-DlUa5gp3.js";import"./getZIndexFromUnknown-BMOGUI9H.js";import"./graphicalItemSelectors-BIbkXNjh.js";import"./index-DEbDUIbN.js";import"./ChartSizeDimensions-BvKst1DG.js";import"./OffsetShower-BMIsB7Uf.js";import"./PlotAreaShower-CrjZWfAt.js";const Ae={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(K,{data:s},e.createElement(A,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
