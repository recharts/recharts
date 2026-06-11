import{r as f,R as e}from"./iframe-DBxFP3uX.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BneRoowy.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B_9s4KsU.js";import{C as k}from"./ComposedChart-CWD6KhhR.js";import{X as K}from"./XAxis-CQTPr47R.js";import{L as v}from"./Legend-jFYt0ZG_.js";import{B as s}from"./Bar-QC-Yne4g.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CN0u3twK.js";import"./CartesianAxis-tZocWrkt.js";import"./Layer-Buso2Ccs.js";import"./resolveDefaultProps-DCaDIMSr.js";import"./Text-CmyuUjWM.js";import"./DOMUtils-CU_Od2Bc.js";import"./isWellBehavedNumber-BiB40tPr.js";import"./Label-Dhv9vMg4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DBGeCZYh.js";import"./index-DgF-9ML2.js";import"./index-DJo0-J4-.js";import"./types-B2FPYU3d.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BowbWmvp.js";import"./throttle-DjG9xqx-.js";import"./RechartsWrapper-DEp3al8N.js";import"./index-BcBtkybK.js";import"./index-CNd0a_qD.js";import"./axisSelectors-B_9j14vR.js";import"./d3-scale-B06022wF.js";import"./string-B6fdYHAA.js";import"./CartesianChart-GxlalsIE.js";import"./chartDataContext-CZK58LYI.js";import"./CategoricalChart-CKuMbTEb.js";import"./Symbols-CrgCQ1aB.js";import"./symbol-Ck9l1m6X.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BIQStkwP.js";import"./uniqBy-CdkgCulQ.js";import"./iteratee-BRF5lQre.js";import"./tooltipContext-BlWpJhq6.js";import"./AnimatedItems-ooNl266t.js";import"./useAnimationId-54G3nUfQ.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BPEfWSXH.js";import"./ActiveShapeUtils-Bhf79Nyo.js";import"./RegisterGraphicalItemId-BzdV07RL.js";import"./ErrorBarContext-D7bc2l2n.js";import"./GraphicalItemClipPath-CDU2cR1P.js";import"./SetGraphicalItem-DoJqlCoL.js";import"./getZIndexFromUnknown-CJY0Sz5N.js";import"./graphicalItemSelectors-BLVS9kie.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
