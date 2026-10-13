import{r as f,R as e}from"./iframe-BKHpBCGR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BEhxTh9O.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-MbsPskuO.js";import{C as k}from"./ComposedChart-iKWFtV78.js";import{X as K}from"./XAxis-DTRZ1dWN.js";import{L as v}from"./Legend-CMp_bUgu.js";import{B as a}from"./Bar-B7j_Zzvh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-O1JP__wG.js";import"./Text-DYCZls4m.js";import"./resolveDefaultProps-LMHkslvY.js";import"./pageBackground-CYge6A3w.js";import"./isWellBehavedNumber-DZ2Xn8RG.js";import"./useId-Dt-1BK0Z.js";import"./useBackwardsCompatibleTheme-C46GemJr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BdmXZICd.js";import"./index-BGfSAvuv.js";import"./index-AIIPc7Ew.js";import"./axisSelectors-CJodVBjM.js";import"./throttle-3nfkHG5O.js";import"./d3-scale-CFmaNxVK.js";import"./CartesianAxis-mCcuS_Uy.js";import"./Layer-DybYLhVT.js";import"./types-Ck1lG8KT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BZuStCiV.js";import"./index-MJAbFl6s.js";import"./index-D7XXjqey.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D-Zfjt-o.js";import"./index-pfuxfga8.js";import"./CartesianChart-CXURKO2Z.js";import"./chartDataContext-BJRV3EGA.js";import"./CategoricalChart-sVMN8Krq.js";import"./Symbols-pNFInHGu.js";import"./symbol-BcjyMOs4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cn98WGsz.js";import"./uniqBy-CShR7vUs.js";import"./iteratee-BNxeOl7Y.js";import"./activeStyles-Ciq5Cwqo.js";import"./useAnimationId-yls0YfbP.js";import"./dataEntryStyles-dsuf4aHw.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDgGLfNl.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DQESG7Jg.js";import"./tooltipContext-CPk4H5jm.js";import"./ErrorBarContext-D-66_lvv.js";import"./GraphicalItemClipPath--201yH7F.js";import"./SetGraphicalItem-BcZa1iuc.js";import"./getZIndexFromUnknown-DRba0iYY.js";import"./useEffectiveDataKey-BIsGwEM1.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
