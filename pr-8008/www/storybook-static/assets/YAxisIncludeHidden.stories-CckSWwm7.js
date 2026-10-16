import{r as f,R as e}from"./iframe-R8qakbXa.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-ByXOMKUb.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CpW5IUCm.js";import{C as k}from"./ComposedChart-DSL-YeQI.js";import{X as K}from"./XAxis-C4Jew8Rv.js";import{L as v}from"./Legend-DEeC35Lj.js";import{B as a}from"./Bar-D2CZZrMV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-KdqZDMP0.js";import"./Text-DWNopLVO.js";import"./resolveDefaultProps-CKR1Qcev.js";import"./pageBackground-C5CyBpzw.js";import"./isWellBehavedNumber-B09TyYXX.js";import"./useId-bPLq3L_8.js";import"./useBackwardsCompatibleTheme-qV0asEjz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BembMDFS.js";import"./index-BFIsGGpk.js";import"./index-igt8webG.js";import"./axisSelectors-DMTHYW2V.js";import"./throttle-B9oD6XZ1.js";import"./d3-scale-aDQi0991.js";import"./CartesianAxis-D_UchkJi.js";import"./Layer-CmAPD_t-.js";import"./types-D_TtzLi3.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BQVB4poR.js";import"./index-BFytD52I.js";import"./index-CMthufc-.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-ClWcdPE7.js";import"./index-Di16hjPT.js";import"./CartesianChart-PED4jNlL.js";import"./chartDataContext-BSaHGzuI.js";import"./CategoricalChart-DaUIhj12.js";import"./Symbols-BZYEBdz_.js";import"./symbol-Dv-EOB02.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C5Bgs-mL.js";import"./uniqBy-DYQ_KcVA.js";import"./iteratee-CNuCkrqA.js";import"./activeStyles-B3GTJvDM.js";import"./useAnimationId-CjllIhER.js";import"./dataEntryStyles-DI0HDDLL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-iquA0V0c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D6A65k3S.js";import"./tooltipContext-CmeFo2DA.js";import"./ErrorBarContext-0rDV8hpt.js";import"./GraphicalItemClipPath-BVAEKKRa.js";import"./SetGraphicalItem-Bvw8mbwf.js";import"./getZIndexFromUnknown-B1PlbyRn.js";import"./useEffectiveDataKey-DI06uwcg.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
