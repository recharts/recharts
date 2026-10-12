import{r as f,R as e}from"./iframe-B2Q_Qgm0.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BJcew9Oa.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-lJSwut70.js";import{C as k}from"./ComposedChart-k0KfFloC.js";import{X as K}from"./XAxis-BDkGAuXm.js";import{L as v}from"./Legend-DrzyUALJ.js";import{B as a}from"./Bar-D0HR7G-A.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BGi8ZrBi.js";import"./Text-0iD6BYPe.js";import"./resolveDefaultProps-DEmHyBTe.js";import"./pageBackground-ufzNbkAg.js";import"./isWellBehavedNumber-CTjozt9e.js";import"./useId-BUg3av0m.js";import"./useBackwardsCompatibleTheme-CHG3CyzU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BL2VuU0B.js";import"./index-D0I5UczE.js";import"./index-CRJ1kynM.js";import"./axisSelectors-DGf_3ZFA.js";import"./throttle-Bfct0QsM.js";import"./d3-scale-E67z2Ey2.js";import"./CartesianAxis-C0j9EsZJ.js";import"./Layer-BV6rSg6M.js";import"./types-Ck2mmBqf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-lf8jbds5.js";import"./index-t1Y9-LeO.js";import"./index-BmNUC2xp.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B1GYxDJl.js";import"./index-Zw4_MUHC.js";import"./CartesianChart-CVDOe7y_.js";import"./chartDataContext-B5bxwzwP.js";import"./CategoricalChart-BC5WuIRL.js";import"./Symbols-D_rmjP_z.js";import"./symbol-Ce1xWGxl.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D4WqGCX1.js";import"./uniqBy-CqxBekE-.js";import"./iteratee-CaP6vtc-.js";import"./activeStyles-C4EynwUE.js";import"./useAnimationId-L9mW9rF6.js";import"./dataEntryStyles-BZP5jTPc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DZSjMbdp.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DztkhC9X.js";import"./tooltipContext-B0sUWVAK.js";import"./ErrorBarContext-v_vPPXxo.js";import"./GraphicalItemClipPath-D_eZ4vKD.js";import"./SetGraphicalItem-C_s7gSpu.js";import"./getZIndexFromUnknown-GC8jswXs.js";import"./useEffectiveDataKey-FHRr8rA1.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
