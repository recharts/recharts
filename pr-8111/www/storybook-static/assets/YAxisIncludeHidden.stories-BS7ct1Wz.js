import{r as f,R as e}from"./iframe-BGCZ_YYu.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-QzbIIYXn.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-cBJ2sUns.js";import{C as k}from"./ComposedChart-BaMrMimU.js";import{X as K}from"./XAxis-CnHX8rYU.js";import{L as v}from"./Legend-BBY33JEH.js";import{B as a}from"./Bar-C0d-SAnU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-CG8eDc0p.js";import"./Text-Cf8nBYte.js";import"./resolveDefaultProps-RfjxFv_h.js";import"./pageBackground--uJKRUbH.js";import"./ZIndexLayer-DBU2Ux2U.js";import"./index-CJpeiM5R.js";import"./index-DRH8hgtI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-9JDQkQFq.js";import"./throttle-Dnn9iNkE.js";import"./axisSelectors-BgHWKfZW.js";import"./d3-scale-WNvBVnHd.js";import"./CartesianAxis-D7nh9FWg.js";import"./Layer-FBjFYiDN.js";import"./types-BvE9AUsn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-0yL2Eztm.js";import"./index-BoRJhsa5.js";import"./index-DsAYZFOJ.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DzjZykj4.js";import"./index-CnE4B9N1.js";import"./CartesianChart-chY_bHfR.js";import"./ZIndexPortal-UfnKJ6nq.js";import"./CategoricalChart-rRn_svVP.js";import"./Symbols-Caix5zUY.js";import"./symbol-1qTipyom.js";import"./path-DyVhHtw_.js";import"./useElementOffset-rPBNT425.js";import"./uniqBy-DwLo8bza.js";import"./iteratee-BrjIAann.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-D60Hhpwl.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D8zVG-_m.js";import"./useAnimationId-D-9kXAza.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CbZu-UwN.js";import"./tooltipContext-Bb3r7G0b.js";import"./dataEntryStyles--27SN7qD.js";import"./ErrorBarContext-B946Wqqn.js";import"./activeStyles-CJOfqay0.js";import"./SetGraphicalItem-Cbavgyyx.js";import"./getZIndexFromUnknown-CLzovvO6.js";import"./useEffectiveDataKey-B32bFSWN.js";import"./omit-E8rFtmot.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
