import{r as f,R as e}from"./iframe-Cd3J5nRN.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-D2-38tFq.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-wIODfcHB.js";import{C as k}from"./ComposedChart-CR74LLuH.js";import{X as K}from"./XAxis-CAq4kERr.js";import{L as v}from"./Legend-CxtUytsz.js";import{B as s}from"./Bar-CnE82_Nr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CrzYsNNZ.js";import"./CartesianAxis-CQodEWot.js";import"./Layer-C0-faibl.js";import"./resolveDefaultProps-BAOUvy4N.js";import"./Text-BQiCL8pu.js";import"./DOMUtils-C0pcSgNu.js";import"./isWellBehavedNumber-jGn4h3zq.js";import"./Label-x5qCkJ5y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DbYdMZ0m.js";import"./index-DYlcgjqt.js";import"./index-BK5to_p5.js";import"./types-DvVhAiRy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DUoWqaFq.js";import"./immer-D6_cV7mT.js";import"./RechartsWrapper-4JmG_mcb.js";import"./index-CLQBN1dD.js";import"./index-DkbQm4bl.js";import"./axisSelectors-BTr0cSxw.js";import"./d3-scale-DxsYWkxB.js";import"./string-B6fdYHAA.js";import"./CartesianChart-QShZ6Qyv.js";import"./chartDataContext-DQMMfvFX.js";import"./CategoricalChart-z0DLkqJ1.js";import"./Symbols-B3gqvmhr.js";import"./symbol-Be66DzCH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BXO3AwQl.js";import"./uniqBy-Jzi4tC7w.js";import"./iteratee-DiK7xQH2.js";import"./tooltipContext-CvoBerDz.js";import"./AnimatedItems-Dhj62weC.js";import"./useAnimationId-Bd8ziSRa.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-4Sd8JCB6.js";import"./ActiveShapeUtils-DEonU6C1.js";import"./RegisterGraphicalItemId-DPItxssW.js";import"./ErrorBarContext-DfRZ0VKD.js";import"./GraphicalItemClipPath-CZRSWXrI.js";import"./SetGraphicalItem-DYeKk97u.js";import"./getZIndexFromUnknown-DujJtw9L.js";import"./graphicalItemSelectors-Cb0rlsta.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
