import{r as f,R as e}from"./iframe-CwAvad--.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-MJLPmDW2.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B2fpzDns.js";import{C as k}from"./ComposedChart-CqWNcaET.js";import{X as K}from"./XAxis-BvogKVrk.js";import{L as v}from"./Legend-B1tdzHVH.js";import{B as s}from"./Bar-CBEgv6iP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bp0BWyNg.js";import"./Layer-DrEfcBvU.js";import"./resolveDefaultProps-IMOML7UF.js";import"./Text-CMmFO1Ku.js";import"./DOMUtils-Wq5LU4mE.js";import"./isWellBehavedNumber-zbfLgurd.js";import"./Label-Bfni9WDi.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-nfC8QR9T.js";import"./index-Dn-gVD0q.js";import"./index-Bp9sH-Ly.js";import"./types-MLS83tAs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DxVowf0r.js";import"./throttle-CrTklCSM.js";import"./RechartsWrapper-yCiiQ5ZZ.js";import"./index-C7e37hiD.js";import"./index-Be6HzbxO.js";import"./axisSelectors-gPKIePgu.js";import"./d3-scale-D8xH9yG8.js";import"./CartesianChart-DnHhaR9q.js";import"./chartDataContext-QAMmb-FO.js";import"./CategoricalChart-Bfs9hS_5.js";import"./Symbols-Gg7Vpfem.js";import"./symbol-BMZOsAHr.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cg3HrgTI.js";import"./uniqBy-BQQiLG87.js";import"./iteratee-A6arNK9y.js";import"./tooltipContext-Dk_76_YD.js";import"./AnimatedItems-ChIe5_bS.js";import"./useAnimationId--5AtISHD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDEEKCGc.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BNg4U5cF.js";import"./RegisterGraphicalItemId-C2zHigBB.js";import"./ErrorBarContext-CChsqgpp.js";import"./GraphicalItemClipPath-BiAQEIv1.js";import"./SetGraphicalItem-BRzb5Fh_.js";import"./getZIndexFromUnknown-gb6qoPsA.js";import"./graphicalItemSelectors-GsspYaM8.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
