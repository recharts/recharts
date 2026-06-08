import{r as f,R as e}from"./iframe-CLYMtVVU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Cpo1C8HM.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CYEFLgyb.js";import{C as k}from"./ComposedChart-CrRzeNT_.js";import{X as K}from"./XAxis-CBhmV7sv.js";import{L as v}from"./Legend-DcD6k0Sc.js";import{B as s}from"./Bar-Bbnf3h2h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DSRRGDfq.js";import"./CartesianAxis-BkW0Yyb6.js";import"./Layer-Bl-M4NCf.js";import"./resolveDefaultProps-CfuK3i5d.js";import"./Text-qYO8jmtc.js";import"./DOMUtils-4OHTktxt.js";import"./isWellBehavedNumber-Dc0RpdQ2.js";import"./Label-m25-3SN6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DaVYg93h.js";import"./index-D6XAYvxn.js";import"./index-C3oYNXo1.js";import"./types-Bp6tCXm1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-6fh8zoWq.js";import"./immer-C-1Bq0C7.js";import"./RechartsWrapper-jnQrHFKT.js";import"./index-D3KBwDZ7.js";import"./index-CUSuyme2.js";import"./axisSelectors-BM98nGPd.js";import"./d3-scale-Beg35rGW.js";import"./string-B6fdYHAA.js";import"./CartesianChart-BTxrU-fy.js";import"./chartDataContext-BVNdEBob.js";import"./CategoricalChart-DtR6LZhP.js";import"./Symbols-BbFN5qez.js";import"./symbol-DT-DdzbR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BBQpNMyz.js";import"./uniqBy-CZClMibn.js";import"./iteratee-Dvvu4gyG.js";import"./tooltipContext-BCitiStO.js";import"./AnimatedItems-fTI7Y-Cy.js";import"./useAnimationId-CPzMxfeA.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dixlt82o.js";import"./ActiveShapeUtils-BVcr_xDt.js";import"./RegisterGraphicalItemId-DiMQaNFZ.js";import"./ErrorBarContext-CoCRg6bd.js";import"./GraphicalItemClipPath-DWrBQcDT.js";import"./SetGraphicalItem-B11_FOSD.js";import"./getZIndexFromUnknown-BZvK3N1I.js";import"./graphicalItemSelectors-CJLRFKOw.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
