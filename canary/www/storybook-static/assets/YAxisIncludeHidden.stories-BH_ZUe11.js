import{r as f,R as e}from"./iframe-02jumC35.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-mNI4SsbU.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dh2CbWTc.js";import{C as k}from"./ComposedChart-R_fgljAr.js";import{X as K}from"./XAxis-CnRK3wsv.js";import{L as v}from"./Legend-mpzgqkwF.js";import{B as a}from"./Bar-DsXmJiTW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DdA7iutk.js";import"./Text-CUWOvwAb.js";import"./resolveDefaultProps-BsN5ISV3.js";import"./pageBackground-hJZbYU9A.js";import"./isWellBehavedNumber-Bh9Ud_H9.js";import"./useId-QUVye4Jg.js";import"./useBackwardsCompatibleTheme-WAtXE9gt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Usgx4vbu.js";import"./index-CYmUsGYv.js";import"./index-rCxfu9Lu.js";import"./dataEntryStyles-B_KbhbaV.js";import"./axisSelectors-M7ebD7ER.js";import"./throttle-C3YzeAkV.js";import"./d3-scale-cjemRmDN.js";import"./CartesianAxis-BreAXyHF.js";import"./Layer-BluUqzQG.js";import"./types-BU7rhtDT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DSmyYzjS.js";import"./index-DIJUc9fc.js";import"./index-CDDoEg3V.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-ClpzkpkH.js";import"./index-3m7_l-7v.js";import"./CartesianChart-Cmtw3EH1.js";import"./chartDataContext-DXKdIbz5.js";import"./CategoricalChart-2aphxpDk.js";import"./Symbols-Dm7SeMDV.js";import"./symbol-7GPz0Uc5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CDDOtZbO.js";import"./uniqBy-BgoixCH6.js";import"./iteratee-8yTmLCe3.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-BV4ZXPNg.js";import"./useAnimationId-BlDuhaIC.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-tsu_f_5l.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CJWo4eBA.js";import"./tooltipContext-CKevtMBv.js";import"./RegisterGraphicalItemId-C0Bo0Cv1.js";import"./ErrorBarContext-DP5SPbAE.js";import"./SetGraphicalItem-CYjreQQF.js";import"./getZIndexFromUnknown-B_k9-Flt.js";import"./useEffectiveDataKey-C4Vtw6Mo.js";import"./omit-CaKZlrh-.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,we as __namedExportsOrder,Re as default};
