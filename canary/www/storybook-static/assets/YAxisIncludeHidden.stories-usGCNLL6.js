import{r as f,R as e}from"./iframe-JB04ITxe.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-v1vqqyLW.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BedYLUjR.js";import{C as k}from"./ComposedChart-CSTLjLz1.js";import{X as K}from"./XAxis-2CswrS5Z.js";import{L as v}from"./Legend-C-gprH1U.js";import{B as s}from"./Bar-TWpjxOw1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BDmTa2no.js";import"./CartesianAxis-Ck1yZ59m.js";import"./Layer-CC5P43nm.js";import"./resolveDefaultProps-DnK0dHNE.js";import"./Text-C7k8RhMi.js";import"./DOMUtils-B7gcLuLP.js";import"./isWellBehavedNumber-CWoD1Zwt.js";import"./Label-D1e3845Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-tYN38LXC.js";import"./index-CloOaeIj.js";import"./index-BR_ntmTV.js";import"./types-BtpCwQ36.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C53CIbMu.js";import"./immer-D_wC7bH8.js";import"./RechartsWrapper-D_Mnb6wJ.js";import"./index-BMvw03mU.js";import"./index-BEbfCQUB.js";import"./axisSelectors-OGGKPVta.js";import"./d3-scale-BSQ4FewF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-Ck5tcGy8.js";import"./chartDataContext-gfaUTl-k.js";import"./CategoricalChart-PrNOUwgL.js";import"./Symbols-FsBCheJG.js";import"./symbol-BD5_wic9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-47aPLcDT.js";import"./uniqBy-Bwbc5pf1.js";import"./iteratee-CMbzd2-W.js";import"./tooltipContext-LAC0OsGE.js";import"./AnimatedItems-BaII0Say.js";import"./useAnimationId-IX-vmahP.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DdFk3cFe.js";import"./ActiveShapeUtils-BF3URPPF.js";import"./RegisterGraphicalItemId-DJtDudBg.js";import"./ErrorBarContext-oGwgz47-.js";import"./GraphicalItemClipPath-B64UzPte.js";import"./SetGraphicalItem-bHcm5Lyp.js";import"./getZIndexFromUnknown-s2OGhK2v.js";import"./graphicalItemSelectors-C6AmRAQJ.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
