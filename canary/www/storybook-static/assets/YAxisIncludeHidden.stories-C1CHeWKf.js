import{r as f,R as e}from"./iframe-COIGCNXI.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-MNgk7gZM.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-SGGyD0oS.js";import{C as k}from"./ComposedChart-BUtbgPw8.js";import{X as K}from"./XAxis-CKJPf7Wd.js";import{L as v}from"./Legend-B_Tu88mw.js";import{B as a}from"./Bar-DIc2l3yW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-BzUBYLaO.js";import"./Text-BbaXzr-_.js";import"./resolveDefaultProps-CZS8aiFv.js";import"./pageBackground-B1zZiLSr.js";import"./useId-uRdV4O5l.js";import"./ZIndexLayer-CkLN3vho.js";import"./index-NGI2UEpG.js";import"./index-CUG4PNHE.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BmRQgzqt.js";import"./throttle-BlyN22Fr.js";import"./dataEntryStyles-lF4b12oa.js";import"./axisSelectors-BNkJw-2U.js";import"./d3-scale-VptsFP1A.js";import"./CartesianAxis-DcbYB9kS.js";import"./Layer-CTEYWFZQ.js";import"./types-CFJTQnsm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BSSoKuOA.js";import"./index-C5of7-FY.js";import"./index-C_FuKoEm.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CSAoBtxd.js";import"./index-BPTy_Aa_.js";import"./CartesianChart-CrElt8Ki.js";import"./chartDataContext-oGIvKB_Y.js";import"./CategoricalChart-CDhmqNu9.js";import"./Symbols-dCxkCRB_.js";import"./symbol-D4ULe7qk.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DjofQ5-m.js";import"./uniqBy-BGB3FWFX.js";import"./iteratee-BGdRtgf7.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-DPX8m1qG.js";import"./useAnimationId-C1qK0jXb.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DrpU_fhN.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcPjXX29.js";import"./tooltipContext-DKugW0J7.js";import"./RegisterGraphicalItemId-DZ8oXJnI.js";import"./ErrorBarContext-B7OlR22L.js";import"./SetGraphicalItem-D643u_Ng.js";import"./getZIndexFromUnknown-QVsgQG4A.js";import"./useEffectiveDataKey-DqlQcCPn.js";import"./omit-CtkrDTz4.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
