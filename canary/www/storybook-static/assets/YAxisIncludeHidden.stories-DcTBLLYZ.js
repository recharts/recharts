import{r as f,R as e}from"./iframe-DIEAN2hv.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D9ayUFuH.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-h_BQOYV2.js";import{C as k}from"./ComposedChart-CYZi5jHO.js";import{X as K}from"./XAxis-DiChMU6m.js";import{L as v}from"./Legend-p4WMLJ9t.js";import{B as s}from"./Bar-DQabquIm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BIjXN90W.js";import"./Layer-B-cLPPNh.js";import"./resolveDefaultProps-DUc1ArnZ.js";import"./Text-BNRKLEiU.js";import"./DOMUtils-C1Qec3X5.js";import"./isWellBehavedNumber-9xmYcKjE.js";import"./Label-LaTn0MyB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-chy9WqcQ.js";import"./index-Ck53zJJh.js";import"./index-DM6nPyH7.js";import"./types-avIm2VNf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CR60noDO.js";import"./throttle-DcPgljw6.js";import"./RechartsWrapper-a7tD0_PW.js";import"./index-DbRgicKF.js";import"./index-BvKFxAi3.js";import"./axisSelectors-CGWz1F9h.js";import"./d3-scale-iAsu0ejP.js";import"./CartesianChart-GGBraKX7.js";import"./chartDataContext-DLLGaQBY.js";import"./CategoricalChart-Ceegmo7R.js";import"./Symbols-CRaBoqAe.js";import"./symbol-aEESUuL5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BvrQ-UF9.js";import"./uniqBy-2YSsId_u.js";import"./iteratee-CbGVDYM_.js";import"./tooltipContext-CQxKll67.js";import"./AnimatedItems-CVRAeMdn.js";import"./useAnimationId-D28s5KK7.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ChtQzbKm.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DzejIYqw.js";import"./RegisterGraphicalItemId-ZGmSkN-p.js";import"./ErrorBarContext-Clnj01jz.js";import"./GraphicalItemClipPath-B9S_-7Qm.js";import"./SetGraphicalItem-Dyls43Kb.js";import"./getZIndexFromUnknown-D3z454ZR.js";import"./graphicalItemSelectors-CrF_yJlc.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
