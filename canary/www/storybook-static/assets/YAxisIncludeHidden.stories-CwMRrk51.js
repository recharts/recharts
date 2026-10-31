import{r as f,R as e}from"./iframe-7ia7cOns.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-ClD5PA34.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CNZG0Y5y.js";import{C as k}from"./ComposedChart-Dkz69e1N.js";import{X as K}from"./XAxis-CyA_GXTr.js";import{L as v}from"./Legend-DMT1EyrP.js";import{B as a}from"./Bar-DK_1j_ll.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Y02zXLeF.js";import"./Text-CkBg3X4g.js";import"./resolveDefaultProps-C774hdeP.js";import"./DOMUtils-BskzGjW1.js";import"./ZIndexLayer-BsU293fp.js";import"./index-CbtDNwdV.js";import"./index-lD6nPUSg.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-0UsOTGQK.js";import"./throttle-CuvGuAUJ.js";import"./axisSelectors-D31_gBEg.js";import"./d3-scale-DDTCvpuX.js";import"./CartesianAxis-B17J1uIc.js";import"./Layer-DH-Bpj5F.js";import"./types-CoWppO1p.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DHygufHc.js";import"./index-B7Wz_zu1.js";import"./index-uEerYH_x.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CDikf3PH.js";import"./index-DP-wgMO5.js";import"./CartesianChart-C1quWpWE.js";import"./ZIndexPortal-CBpzcmkv.js";import"./CategoricalChart-BjEI-7io.js";import"./Symbols-COiuuhwV.js";import"./symbol-Q9XLyBk-.js";import"./path-DyVhHtw_.js";import"./fillDefinitions-Bh-Idu0v.js";import"./themeFill-B_wPexqX.js";import"./useElementOffset-CLrMTlCN.js";import"./uniqBy-BdDgBJqj.js";import"./iteratee-7m6p-S4N.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BkznOaj8.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-nIz-cHMY.js";import"./useAnimationId-dFi6qGfW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--ULkn_AA.js";import"./tooltipContext-CcM6rWLf.js";import"./dataEntryStyles-B9lOpBft.js";import"./ErrorBarContext-CxoeLCh5.js";import"./activeStyles-CyfixWYK.js";import"./SetGraphicalItem-Cl9ASqDV.js";import"./getZIndexFromUnknown-C-J3wMPR.js";import"./useEffectiveDataKey-DpgRN79Y.js";import"./omit-CSH6g66U.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
