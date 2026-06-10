import{r as f,R as e}from"./iframe-DHxweIO9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Cdmy20fv.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-oAGhcyxs.js";import{C as k}from"./ComposedChart-RKqXsJZg.js";import{X as K}from"./XAxis-by-9KJMG.js";import{L as v}from"./Legend-C4UURlGM.js";import{B as s}from"./Bar-CAd9YPjJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C0Lt804T.js";import"./CartesianAxis-CVNW_DPG.js";import"./Layer-Ck33QkwT.js";import"./resolveDefaultProps-BFfik0lP.js";import"./Text-r1UAkK_M.js";import"./DOMUtils-CB5jUme8.js";import"./isWellBehavedNumber-zbgy0N68.js";import"./Label-Hedzo6WI.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-tleOLVC8.js";import"./index-BPm8HOAZ.js";import"./index-D2s_06CJ.js";import"./types-D6mO4BwK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D0SVQkh2.js";import"./immer-LtTlQghk.js";import"./RechartsWrapper-B1v1VArt.js";import"./index-Cen9NMit.js";import"./index-1DHoilgY.js";import"./axisSelectors-BtfV9moc.js";import"./d3-scale-8GVIzX8d.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FIs-jkte.js";import"./chartDataContext-BdeADzKD.js";import"./CategoricalChart-DTsRp_4F.js";import"./Symbols-C8MLAtkU.js";import"./symbol-DF_ydgJ-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CQBXWs47.js";import"./uniqBy-DNFOk9_5.js";import"./iteratee-B_9DEeWv.js";import"./tooltipContext-Bs6K6Vjj.js";import"./AnimatedItems-CcOK_yF7.js";import"./useAnimationId-CKZSDbra.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-eYgp7t5C.js";import"./ActiveShapeUtils-BTTuLaTo.js";import"./RegisterGraphicalItemId-D9fHh-dg.js";import"./ErrorBarContext-Dm9lKBps.js";import"./GraphicalItemClipPath-DNkFii-i.js";import"./SetGraphicalItem-BdtIdG4P.js";import"./getZIndexFromUnknown-B7WRUIro.js";import"./graphicalItemSelectors-B6UttE3J.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
