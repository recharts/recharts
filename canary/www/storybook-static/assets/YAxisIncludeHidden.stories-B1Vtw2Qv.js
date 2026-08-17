import{r as f,R as e}from"./iframe-5rlHu5E0.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-tXVCruoC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dvv9j-PL.js";import{C as k}from"./ComposedChart-02LDQCPf.js";import{X as K}from"./XAxis-QaJfpBkQ.js";import{L as v}from"./Legend-BnT-6TDw.js";import{B as s}from"./Bar-CB9JjzxX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-dTTzfWAl.js";import"./Text-BWBZmFaQ.js";import"./resolveDefaultProps-DMzoBuFc.js";import"./DOMUtils-Cgsp7qZK.js";import"./isWellBehavedNumber-CtQc_19S.js";import"./useBackwardsCompatibleTheme-CU4QNWlg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CC4VGBXC.js";import"./index-De9KIq3f.js";import"./index-CPjGkxRF.js";import"./RechartsWrapper-B_1S-WX9.js";import"./index-CRexnrp9.js";import"./index-CgDVIgvd.js";import"./throttle-BEcUjoVL.js";import"./axisSelectors-XpGDVkFI.js";import"./d3-scale-DQPeDNzN.js";import"./renderedTicksSlice-BU2rLD4L.js";import"./CartesianAxis-C1R_DLLS.js";import"./Layer-B7qTvwXJ.js";import"./types-_FdMQlV7.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CTBAwDjg.js";import"./chartDataContext-_d8W5FBB.js";import"./CategoricalChart-fg3LMOIt.js";import"./Symbols-1osrxW7y.js";import"./symbol-tLvvDe7R.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BaEggssM.js";import"./uniqBy-DHtefDuc.js";import"./iteratee-Ckui7P-a.js";import"./AnimatedItems-CcRowb6W.js";import"./useAnimationId-9v2us4V5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-asU9eCg1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DcbSHq-a.js";import"./tooltipContext-DQG3ys6L.js";import"./RegisterGraphicalItemId-DiVn-hPt.js";import"./ErrorBarContext-B7azcaum.js";import"./GraphicalItemClipPath-BY5WrhEA.js";import"./SetGraphicalItem-B4wCJH3k.js";import"./getZIndexFromUnknown--EE_dzZC.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-7tXAQg_z.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
