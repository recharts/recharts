import{r as f,R as e}from"./iframe-_0vvsXwQ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DH6-Go25.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-UDOegWIl.js";import{C as k}from"./ComposedChart-C9VfnRnH.js";import{X as K}from"./XAxis-BVL11hxO.js";import{L as v}from"./Legend-BAko8yD_.js";import{B as s}from"./Bar-KaD1us4p.js";import"./preload-helper-Dp1pzeXC.js";import"./get-dROHwlCD.js";import"./CartesianAxis-ZzlyT-7-.js";import"./Layer-CbOAMwV5.js";import"./resolveDefaultProps-Dur14Ufb.js";import"./Text-DjMF9a9a.js";import"./DOMUtils-BVwvsn59.js";import"./isWellBehavedNumber-Cb6oai8T.js";import"./Label-CiJ4G9HU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-F6Q8sfzp.js";import"./index-B2rwiSR7.js";import"./index-B-MK1gV-.js";import"./types-DDFFAOTe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dyv93tW0.js";import"./immer-Crw1A_KU.js";import"./RechartsWrapper-D_godwDH.js";import"./index-DjufVxMp.js";import"./index-CQeeIj4f.js";import"./axisSelectors-DOgNvw74.js";import"./d3-scale-9nut4HIz.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DuAlGfbC.js";import"./chartDataContext-ooxC0Mwi.js";import"./CategoricalChart-yQk_e9Td.js";import"./Symbols-X-eMSadG.js";import"./symbol-CBGxeWEx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CShe55V9.js";import"./uniqBy-XCrF3wJ7.js";import"./iteratee-CU05RyCR.js";import"./tooltipContext-CDHfg6co.js";import"./AnimatedItems-NUeY2MHF.js";import"./useAnimationId-Bs-cdpiV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B_45chOx.js";import"./ActiveShapeUtils-CSlhsDPX.js";import"./RegisterGraphicalItemId-Do80jqI9.js";import"./ErrorBarContext-CJqzxiYr.js";import"./GraphicalItemClipPath-DQak-ToR.js";import"./SetGraphicalItem-c1mokMqb.js";import"./getZIndexFromUnknown-CaTLXIS8.js";import"./graphicalItemSelectors-DFIY6q2K.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
