import{r as f,R as e}from"./iframe-CWavEj4K.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DW5tby8v.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-5FODTzGQ.js";import{C as k}from"./ComposedChart-5wlVBK1U.js";import{X as K}from"./XAxis-eQhyZl4T.js";import{L as v}from"./Legend-BdpiRDzw.js";import{B as s}from"./Bar-celoOc6p.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CUeBd0Qu.js";import"./Layer-CGV1iRtS.js";import"./resolveDefaultProps-Di3JUEKf.js";import"./Text-DKOGU3E1.js";import"./DOMUtils-bwyz7eCe.js";import"./isWellBehavedNumber-DmSAVoQw.js";import"./Label-BBFntxVE.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BFe8VyCX.js";import"./index-CAI0wlC8.js";import"./index-BUN8uoaU.js";import"./types-BmbikVaN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BaH7gash.js";import"./throttle-Bkho8TEt.js";import"./RechartsWrapper-BHgaBn1E.js";import"./index-rtKProJN.js";import"./index-CB7M5YEf.js";import"./axisSelectors-XK5eG7GE.js";import"./d3-scale-BaBPlFPk.js";import"./CartesianChart-0mhtnzxI.js";import"./chartDataContext-B5TlaDO0.js";import"./CategoricalChart-DbdrFP36.js";import"./Symbols-hO1GCjZB.js";import"./symbol-y17aD_bO.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BUB8Afxb.js";import"./uniqBy-CCg55Ce9.js";import"./iteratee-DuHJ9aff.js";import"./tooltipContext-C-R9HDMe.js";import"./AnimatedItems-tOezhTob.js";import"./useAnimationId-DfkBBgp-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B4KQS2cd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DeeBbphL.js";import"./RegisterGraphicalItemId-C4WMjaGC.js";import"./ErrorBarContext-DxKtXG2P.js";import"./GraphicalItemClipPath-CrXxzkB7.js";import"./SetGraphicalItem-DS2vQ-KW.js";import"./getZIndexFromUnknown-0pvQ2awN.js";import"./graphicalItemSelectors-D8g2BDdh.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
