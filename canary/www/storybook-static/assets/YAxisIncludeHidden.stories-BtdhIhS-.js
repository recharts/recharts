import{P as f,c as e}from"./iframe-Bw01G05S.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-leBvxI0P.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-BVJPDscV.js";import{C as k}from"./ComposedChart-DiZxKxJ7.js";import{X as K}from"./XAxis-TrLbUf6y.js";import{L as v}from"./Legend-BTXBFyzF.js";import{B as s}from"./Bar-BBTxmDb6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-PLF287kI.js";import"./CartesianAxis-D2bv38Ox.js";import"./Layer-_mE6wvdm.js";import"./resolveDefaultProps-BX9yAQwT.js";import"./Text-qrCQLdvB.js";import"./DOMUtils-CB0xgJC5.js";import"./isWellBehavedNumber-BdaQsoH1.js";import"./Label-0YWOaiFB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CUHrFVWb.js";import"./index-CpLIt3E_.js";import"./index-gPPvxt9l.js";import"./types-BkmoQN99.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BSWqpX2F.js";import"./immer-vKd3rXCH.js";import"./RechartsWrapper-Dy3I_vud.js";import"./index-ChbgLzNl.js";import"./index-CnqP2OOu.js";import"./axisSelectors-CYrXIzpV.js";import"./d3-scale-C81Lq6p_.js";import"./CartesianChart-CmfxvnV2.js";import"./chartDataContext-DTGe0ZBk.js";import"./CategoricalChart-CJ_zmDdd.js";import"./Symbols-OmH1xCgA.js";import"./symbol-yiQ3AMIL.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BJf-bgFc.js";import"./uniqBy-CJKAqM1m.js";import"./iteratee-CJNbtgLs.js";import"./tooltipContext-C-8soueH.js";import"./ReactUtils-CPtpn3OS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BFTblrQi.js";import"./useAnimationId-DfklYMDy.js";import"./ActiveShapeUtils-ChrAkVLT.js";import"./RegisterGraphicalItemId-C6zAsVLj.js";import"./ErrorBarContext-DD6wo7ll.js";import"./GraphicalItemClipPath-Cn2vbNRH.js";import"./SetGraphicalItem-CbgDA4Hu.js";import"./getZIndexFromUnknown-CMgdLsbe.js";import"./graphicalItemSelectors-D7Bbklzs.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
