import{r as f,R as e}from"./iframe-BquPZQZR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DU99c4NY.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DfoMGwwJ.js";import{C as k}from"./ComposedChart-FnXBnX6v.js";import{X as K}from"./XAxis-B0NTBS_i.js";import{L as v}from"./Legend-NxBULrUy.js";import{B as a}from"./Bar-nC6vNoFw.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-QfyPAwEN.js";import"./Text-Cz9Qm4K-.js";import"./resolveDefaultProps-C1-PhdLj.js";import"./DOMUtils-Hop2FGiK.js";import"./ZIndexLayer-BKwk9Ckz.js";import"./index-BeXk3gq4.js";import"./index-CY_4egx2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bi2qo_WA.js";import"./throttle-Ifciv68t.js";import"./axisSelectors-Ra6SuVrn.js";import"./d3-scale-B2Z3tDr8.js";import"./CartesianAxis-G--oVlcc.js";import"./Layer-DgCLyWmw.js";import"./types-HVxQrabK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DkVmzd5W.js";import"./index-BBIQOsY9.js";import"./index-DeLNFakb.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BOh7Al31.js";import"./index-C389QzGe.js";import"./fillDefinitions-bKlUAuaq.js";import"./CartesianChart-DusmDSbk.js";import"./ZIndexPortal-ChcM8kac.js";import"./CategoricalChart-DY8SYWQ4.js";import"./Symbols-BOEhDLOF.js";import"./symbol-BytJGu2b.js";import"./path-DyVhHtw_.js";import"./useElementOffset-v0E65nTN.js";import"./uniqBy-Dp4AeUu6.js";import"./iteratee-CvxwxQ4E.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-c67UtHfn.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BR95K4Qq.js";import"./useAnimationId-BAgUZZzE.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B8wKgjG7.js";import"./tooltipContext-B_xO9A21.js";import"./dataEntryStyles-DcYBdp4K.js";import"./ErrorBarContext-LEjhprcI.js";import"./activeStyles-7MX0jGA5.js";import"./SetGraphicalItem-DVTOJBGj.js";import"./getZIndexFromUnknown-CiZWR6Xm.js";import"./useEffectiveDataKey-Dv0si8CY.js";import"./omit-BfnR89d3.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
