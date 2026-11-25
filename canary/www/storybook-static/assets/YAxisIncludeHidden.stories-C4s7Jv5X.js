import{r as f,R as e}from"./iframe-KA27XLgH.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-Db8yqFFW.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B5jZTfpG.js";import{C as k}from"./ComposedChart-NCoKrWfI.js";import{X as K}from"./XAxis-BELMhMr5.js";import{L as v}from"./Legend-DFonRB3y.js";import{B as a}from"./Bar-BPNX11cK.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DljT9-ag.js";import"./get-CjriyByo.js";import"./Label-B69AByr3.js";import"./Text-8iqEDvQJ.js";import"./ZIndexLayer-R6ZlJQ0g.js";import"./index-CkBS2fzk.js";import"./index-Ckg884lQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C3Tv-TSh.js";import"./throttle-CoiFOdIR.js";import"./axisSelectors-C9UcFeRr.js";import"./d3-scale-C3G3_Gqb.js";import"./CartesianAxis-DSAJb9yU.js";import"./Layer-MjJu6ARy.js";import"./types-CQ5wDBZk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-m7yN3OkN.js";import"./index-DRgQ1v-L.js";import"./index-DjOzCNYa.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-TR_xYtI_.js";import"./index-B2SGDklF.js";import"./fillDefinitions-BQM9erML.js";import"./CartesianChart-fWhWe39l.js";import"./chartDataContext-BllWN6wY.js";import"./CategoricalChart-Bne8SWuB.js";import"./Symbols-CazKqwF3.js";import"./symbol-CGclnZ-V.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BBAHP-Sy.js";import"./uniqBy-BPMiXjHD.js";import"./iteratee-CUUDCjTn.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CRFv6Bpc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D_gP81X4.js";import"./useAnimationId-ByBbFw3W.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BAOEM0H-.js";import"./tooltipContext-fUz6Y7lh.js";import"./ErrorBarContext-DNhP_BG0.js";import"./activeStyles-Rsdle8Gs.js";import"./SetGraphicalItem-gJWf9_t-.js";import"./getZIndexFromUnknown-iMJ09KuI.js";import"./useEffectiveDataKey-BN70kZIV.js";import"./omit-D2mr_9ks.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
