import{r as f,R as e}from"./iframe-DGhU-a9T.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BZIvedAi.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D4C6hgdT.js";import{C as k}from"./ComposedChart-Juh79sHc.js";import{X as K}from"./XAxis-BniO9eps.js";import{L as v}from"./Legend-BRE1EjLl.js";import{B as s}from"./Bar-CettXTb2.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BovgKQJV.js";import"./CartesianAxis-Cncjk8wz.js";import"./Layer-Dq7d9_uV.js";import"./resolveDefaultProps-Dbt_ZrM5.js";import"./Text-BWhw0wXD.js";import"./DOMUtils-CZpE5MKQ.js";import"./isWellBehavedNumber-CmPQeXr3.js";import"./Label-Cn2enGhV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D2dadpNA.js";import"./index-Cst7TkYL.js";import"./index-DSZNwJZV.js";import"./types-DBzeQvsP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DlUNX-2S.js";import"./immer-6aMp-_7U.js";import"./RechartsWrapper-DbVRBKBT.js";import"./index-B_yATEtm.js";import"./index-DCbVvyOU.js";import"./axisSelectors-B2LpzdTT.js";import"./d3-scale-CGHFSatL.js";import"./string-B6fdYHAA.js";import"./CartesianChart-rdohZj9d.js";import"./chartDataContext-D0QBQcjy.js";import"./CategoricalChart-CgcUCFFA.js";import"./Symbols-CjwVZBtH.js";import"./symbol-H1Rke99i.js";import"./path-DyVhHtw_.js";import"./useElementOffset-F-eAusQk.js";import"./uniqBy-61b_bX-x.js";import"./iteratee-IjYl2ZNO.js";import"./tooltipContext-TPFrOYPX.js";import"./AnimatedItems-tx7FJlw3.js";import"./useAnimationId-whgPLHvU.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BQMmoLkW.js";import"./ActiveShapeUtils-FGDrwnsX.js";import"./RegisterGraphicalItemId-7Cg8xoFx.js";import"./ErrorBarContext-D0SNCxES.js";import"./GraphicalItemClipPath-BG_0y6FZ.js";import"./SetGraphicalItem--dLvTOsx.js";import"./getZIndexFromUnknown-cJYgTN8u.js";import"./graphicalItemSelectors-_LgeuJYP.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
