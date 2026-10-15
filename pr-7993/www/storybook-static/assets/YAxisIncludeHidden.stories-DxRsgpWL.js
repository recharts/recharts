import{r as f,R as e}from"./iframe-ChR0bWJE.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CGpwp8Ub.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BhLIr8Wn.js";import{C as k}from"./ComposedChart-ClNwId6E.js";import{X as K}from"./XAxis-DMWQS67d.js";import{L as v}from"./Legend-VTdcvbZi.js";import{B as a}from"./Bar-HaqcqwBq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-6wqjlAjr.js";import"./Text-C-MZlV37.js";import"./resolveDefaultProps-DDJR-IFM.js";import"./pageBackground-Ck_Bl7JJ.js";import"./isWellBehavedNumber-v660MqsB.js";import"./useId-Boe0dqcZ.js";import"./useBackwardsCompatibleTheme-vM76QVPo.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-WvB5637-.js";import"./index-DG8BxRhE.js";import"./index-B9kAIK4B.js";import"./axisSelectors-D10lFE-B.js";import"./throttle-DlIXztO0.js";import"./d3-scale-Be-Yls2-.js";import"./CartesianAxis-ColQ2GQs.js";import"./Layer-sRcONOkX.js";import"./types-Db9gT7h1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DGFTmoGv.js";import"./index-C2XNNLS0.js";import"./index-CIRFvFA-.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DcESOjG2.js";import"./index-4WBQ6tEH.js";import"./CartesianChart-Csbt_4F2.js";import"./chartDataContext-B7Ty1jH-.js";import"./CategoricalChart-e5ydFkpC.js";import"./Symbols-crxZ1UiM.js";import"./symbol-kvahnOWs.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DJkk5NRy.js";import"./uniqBy-D8tZ5Ja2.js";import"./iteratee-BlHCl97E.js";import"./activeStyles-Dl6zrhPi.js";import"./useAnimationId-rUKK14dF.js";import"./dataEntryStyles-dyS1ZoD1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DhVq85Wn.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DUs_pJxd.js";import"./tooltipContext-D7S4suB5.js";import"./ErrorBarContext-BeGWE2lF.js";import"./GraphicalItemClipPath-C95rKyMf.js";import"./SetGraphicalItem-AEMUK-yG.js";import"./getZIndexFromUnknown-DtXKMLb-.js";import"./useEffectiveDataKey-DlXPwpKd.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
