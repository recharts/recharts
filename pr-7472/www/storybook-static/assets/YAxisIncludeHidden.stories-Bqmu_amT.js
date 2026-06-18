import{r as f,R as e}from"./iframe-BY-61mf3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Dnu2jnBx.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D5LeFsJF.js";import{C as k}from"./ComposedChart-Bx2_Wy5f.js";import{X as K}from"./XAxis-BqqI2L9m.js";import{L as v}from"./Legend-jKZ9U16e.js";import{B as s}from"./Bar-CmUPZKpn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CrMrHDfL.js";import"./CartesianAxis-DQMh9jmY.js";import"./Layer-o5jG4U6-.js";import"./resolveDefaultProps-BvLTVmPU.js";import"./Text-A8PySNC6.js";import"./DOMUtils-Dx1NP75k.js";import"./isWellBehavedNumber-CxSUDioC.js";import"./Label-TO2FniFg.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BYFtOnRb.js";import"./index-DbrznSTp.js";import"./index-CqG97JZW.js";import"./types-hvByNsoa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-JT8za5Hk.js";import"./immer-B9G3_Kxy.js";import"./RechartsWrapper-TrezbvJj.js";import"./index-CGSMpc0u.js";import"./index-Bdv48GrD.js";import"./axisSelectors-BLK3CBL0.js";import"./d3-scale-BkYTXwQ3.js";import"./string-B6fdYHAA.js";import"./CartesianChart-wc_TuFln.js";import"./chartDataContext-CBgaHz3-.js";import"./CategoricalChart-g-2efyUa.js";import"./Symbols-CrRfkKVb.js";import"./symbol-DcuOcYR2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bk35APbE.js";import"./uniqBy-quBZy4V-.js";import"./iteratee-DAmws9Pf.js";import"./tooltipContext-B2OIZiDK.js";import"./AnimatedItems-ByNYS0z8.js";import"./useAnimationId-RV371va_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYGnr9Kk.js";import"./ActiveShapeUtils-CLaqj2t-.js";import"./RegisterGraphicalItemId-BSHaYjsq.js";import"./ErrorBarContext-BTw4S1-S.js";import"./GraphicalItemClipPath-cu7yJN5z.js";import"./SetGraphicalItem-30kWDCTB.js";import"./getZIndexFromUnknown-XegKtx2e.js";import"./graphicalItemSelectors-Ja1UlW4V.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
