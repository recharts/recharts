import{r as f,R as e}from"./iframe-B9NgERoL.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BZ7igdn9.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CeMrsmMa.js";import{C as k}from"./ComposedChart-DqPZ70OF.js";import{X as K}from"./XAxis-aLbTU0vL.js";import{L as v}from"./Legend-DLhTpBr2.js";import{B as s}from"./Bar-PREVUBAC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CU4wTzgV.js";import"./Layer-C_3qb5EZ.js";import"./resolveDefaultProps-Dx164Y1F.js";import"./Text-ouhTNjrK.js";import"./DOMUtils-BpJWFEfX.js";import"./isWellBehavedNumber-bmfh_B4y.js";import"./Label-D0wu2lTJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B-abFFm7.js";import"./index-1yiXAU6d.js";import"./index-U01BUWsX.js";import"./types-fCUwHeLW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cqze-A-7.js";import"./throttle-DaANxDja.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BIufO86S.js";import"./index-IJSHzaJE.js";import"./index-D4sqhJ-M.js";import"./axisSelectors-Cp9fRWWc.js";import"./d3-scale-CeApqfqF.js";import"./CartesianChart-D1OHX_Vn.js";import"./chartDataContext-MrXPhuTJ.js";import"./CategoricalChart-BaN3vUEH.js";import"./Symbols-C6oyQ2HE.js";import"./symbol-BI0SklJ7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DIAEj78D.js";import"./uniqBy-par6alwm.js";import"./iteratee-zl5NzN92.js";import"./tooltipContext-BeQ330Dx.js";import"./AnimatedItems-C-FRFA-Z.js";import"./useAnimationId-Dul1SXp-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-jixavVBj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CBSWPzIX.js";import"./RegisterGraphicalItemId-DqMxb_Dg.js";import"./ErrorBarContext-Dl5oIQ1g.js";import"./GraphicalItemClipPath-BesQYa1_.js";import"./SetGraphicalItem-KoMfzPcE.js";import"./getZIndexFromUnknown-BfIvNDpV.js";import"./graphicalItemSelectors-Bs6HCY7o.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
