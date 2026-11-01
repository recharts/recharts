import{r as f,R as e}from"./iframe-CKMzUQLl.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DB4YGo7q.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-COhM5Ssb.js";import{C as k}from"./ComposedChart-Br4fGf2D.js";import{X as K}from"./XAxis-BDBlWxDf.js";import{L as v}from"./Legend-BbIVnfVR.js";import{B as a}from"./Bar-DRNyiWdb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DwblDDwh.js";import"./Text-CUuCMSti.js";import"./resolveDefaultProps-BhXVuCfw.js";import"./DOMUtils-CShcNi4q.js";import"./pageBackground-DxYgqm3W.js";import"./ZIndexLayer-B6POVY0e.js";import"./index-CnQmPyN6.js";import"./index-Ct96jcIf.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BANjW4O_.js";import"./throttle-cmQF6pk6.js";import"./axisSelectors-BSZ3SCPn.js";import"./d3-scale-uc_I_mt7.js";import"./CartesianAxis-BPlDbcHH.js";import"./Layer-VHBsdASS.js";import"./types-DgiI7KOn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4Psuukl.js";import"./index-D6eYg-36.js";import"./index-Cl9-JK-G.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-bg3MvxI9.js";import"./index-ClS1qprr.js";import"./CartesianChart-CPRN1zhJ.js";import"./ZIndexPortal-CMRkqNYv.js";import"./CategoricalChart-DhGyzJYC.js";import"./Symbols-Bp34LNU2.js";import"./fillDefinitions-D5lwwS81.js";import"./symbol-FynIgkai.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BGehcf2H.js";import"./uniqBy-qDOcKTVS.js";import"./iteratee-DrtJv-M1.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DO8MwQV1.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CaGbKQx_.js";import"./useAnimationId-DKuDzs92.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BQ5N4hNI.js";import"./tooltipContext-DE_mUrwz.js";import"./dataEntryStyles-2pl_sY7K.js";import"./ErrorBarContext-CFogFGPo.js";import"./activeStyles-CT0hkTay.js";import"./SetGraphicalItem-BAzOwitl.js";import"./getZIndexFromUnknown-DlOKJelH.js";import"./useEffectiveDataKey-3-wTW5Lh.js";import"./omit-CyeXN-3X.js";const Re={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},we=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
