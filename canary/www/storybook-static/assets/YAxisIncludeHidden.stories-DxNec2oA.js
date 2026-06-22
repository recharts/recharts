import{r as f,R as e}from"./iframe-BLYaiTCo.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-ryWccSzT.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-lQffsUG8.js";import{C as k}from"./ComposedChart-q7FEtfJu.js";import{X as K}from"./XAxis-B1NcdzKW.js";import{L as v}from"./Legend-Ck2lHFMH.js";import{B as s}from"./Bar-CvofeXM2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C6fkE9tv.js";import"./CartesianAxis-D8ReKkO7.js";import"./Layer-Cjsn70fL.js";import"./resolveDefaultProps-DpWzBvps.js";import"./Text-OjYntAZR.js";import"./DOMUtils-CIYC9pgo.js";import"./isWellBehavedNumber-BqumoSwm.js";import"./Label-BDDWEbHy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BDdQieuE.js";import"./index-DnQ-U2Qg.js";import"./index-BI_7Ub3B.js";import"./types-B8ff9nYs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-kJn42Rl8.js";import"./immer-ILyg-GW3.js";import"./RechartsWrapper-DuKK4DBL.js";import"./index-CCG5587O.js";import"./index-RDG97xsP.js";import"./axisSelectors-D6Dyr_Wd.js";import"./d3-scale-B2LK6XqV.js";import"./CartesianChart-C6NG5vyr.js";import"./chartDataContext-Bb8xEPvd.js";import"./CategoricalChart-CQ3ECWGQ.js";import"./Symbols-CyplAlf4.js";import"./symbol-DzrbmI3Q.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cl_EM_xR.js";import"./uniqBy-DSvlr4Gg.js";import"./iteratee-7NILAXQu.js";import"./tooltipContext-oF71F9U5.js";import"./AnimatedItems-LYPYqGuf.js";import"./useAnimationId-e0tJBS7c.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D-pvWCLO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B7KxHmGn.js";import"./RegisterGraphicalItemId-C8Ak7Vaq.js";import"./ErrorBarContext-B1uz4CKa.js";import"./GraphicalItemClipPath-D0PBT0ws.js";import"./SetGraphicalItem-DCGW6Zln.js";import"./getZIndexFromUnknown-BSzBOnuG.js";import"./graphicalItemSelectors-7Wfrp7_u.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
