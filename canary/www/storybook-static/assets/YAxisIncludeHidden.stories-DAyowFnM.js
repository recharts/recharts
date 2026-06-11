import{r as f,R as e}from"./iframe-seguPege.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DMmP-D66.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cb-1bZoU.js";import{C as k}from"./ComposedChart-DVVsB1I4.js";import{X as K}from"./XAxis-DUluPi7y.js";import{L as v}from"./Legend-BHk_R86n.js";import{B as s}from"./Bar-8aYU9JN4.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BPoksESJ.js";import"./CartesianAxis-CKcebKQz.js";import"./Layer-D0gi-KwG.js";import"./resolveDefaultProps-BPZN0bld.js";import"./Text-DMr88uBj.js";import"./DOMUtils-CAhJeY0i.js";import"./isWellBehavedNumber-B-pqTWs3.js";import"./Label-Bj9fNTdt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-E8T2jKop.js";import"./index-xMrsE0KA.js";import"./index-BwRhAzA0.js";import"./types-Dh_7L2tU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Di3U0Cl0.js";import"./immer-Ae2GGYT-.js";import"./RechartsWrapper-DyL4MUL1.js";import"./index-DLDg1yAI.js";import"./index-BwbDEThZ.js";import"./axisSelectors-B65K-pjL.js";import"./d3-scale-EL9kUTP1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-CclsakCq.js";import"./chartDataContext-ZOJ8ES_m.js";import"./CategoricalChart-DsfEFljg.js";import"./Symbols-O3P2Efnq.js";import"./symbol-CTLlWJ_7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bd0nUEN2.js";import"./uniqBy-PllRjql5.js";import"./iteratee-CGB8lHH8.js";import"./tooltipContext-AqtE9cuC.js";import"./AnimatedItems-BjEmPeVW.js";import"./useAnimationId-Bb_iGYOg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-ByDmPg9d.js";import"./ActiveShapeUtils-YVVmXP9O.js";import"./RegisterGraphicalItemId-C1rgLQS7.js";import"./ErrorBarContext-CqxJy0tW.js";import"./GraphicalItemClipPath-D2QHuOb3.js";import"./SetGraphicalItem-QZ64RzpK.js";import"./getZIndexFromUnknown-B_6pNkA6.js";import"./graphicalItemSelectors-Dsu_Rt3k.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
