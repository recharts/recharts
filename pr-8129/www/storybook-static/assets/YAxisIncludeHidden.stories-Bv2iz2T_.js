import{r as f,R as e}from"./iframe-CIzVR-2-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BM-BvKCY.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CJv9lj0d.js";import{C as k}from"./ComposedChart-OQrQnGRh.js";import{X as K}from"./XAxis-DuVjd9Cl.js";import{L as v}from"./Legend-BOMw6FGf.js";import{B as a}from"./Bar-NqM9nJn7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-MgaHTNfc.js";import"./Text-D3Kha142.js";import"./resolveDefaultProps-BsWl2j-C.js";import"./DOMUtils-D-TrccP0.js";import"./pageBackground-DPTEcMe3.js";import"./ZIndexLayer-eeqaM0q4.js";import"./index-iVHvpgFv.js";import"./index-DkDw0AjC.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D4S23sJN.js";import"./throttle-g_l7Z0ZN.js";import"./axisSelectors-mbotnnaX.js";import"./d3-scale-CN1jPZAK.js";import"./CartesianAxis-B1xkqmAC.js";import"./Layer-BlSvO1E4.js";import"./types-Ci0QqKEV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CH4A0jxF.js";import"./index-B0W9noqG.js";import"./index-CJvlApl9.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CaOZ9lUC.js";import"./index-C8XfMsOR.js";import"./CartesianChart-BUE6q1Of.js";import"./ZIndexPortal-DNkKSpm6.js";import"./CategoricalChart-Bt9yIUeV.js";import"./Symbols-C3CTyIIX.js";import"./fillDefinitions-CqtDfKww.js";import"./symbol-N4VmGah0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-39obdmvK.js";import"./uniqBy-BCkSDL9F.js";import"./iteratee-CRTQKy1O.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-BTCEEH0Q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CFbXfnvF.js";import"./useAnimationId-BGu4RQqd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-nEsdy7gj.js";import"./tooltipContext-DceeobfX.js";import"./dataEntryStyles-DxP76lNF.js";import"./ErrorBarContext-BpJZX0b6.js";import"./activeStyles-Dl0q6Ayx.js";import"./SetGraphicalItem-D1cjeVg8.js";import"./getZIndexFromUnknown-Bb95lncj.js";import"./useEffectiveDataKey-Bc7YBVWp.js";import"./omit-DfFtAPPG.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
