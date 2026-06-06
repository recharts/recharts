import{r as f,R as e}from"./iframe-BGobxEKW.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DeGZa5pQ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Eu6i6ngN.js";import{C as k}from"./ComposedChart-DjHiGhAq.js";import{X as K}from"./XAxis-BN4bg1E5.js";import{L as v}from"./Legend-BLtjhTaF.js";import{B as s}from"./Bar-BVpB16G5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-HFqD6QO2.js";import"./CartesianAxis-DURAvNcs.js";import"./Layer-CV9gulhQ.js";import"./resolveDefaultProps-By8puQcs.js";import"./Text-BJ-a4d_f.js";import"./DOMUtils-DfSC9jQB.js";import"./isWellBehavedNumber-MDkpYIMl.js";import"./Label-DtowT6Ci.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BPvrQw9D.js";import"./index-DrKSi3Lf.js";import"./index-rlB0YW8A.js";import"./types-C3BGlWt6.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cvi-Ak0I.js";import"./immer-xIHjc1iX.js";import"./RechartsWrapper-BSKC20h7.js";import"./index-DIRQu93S.js";import"./index-BKAHzbDT.js";import"./axisSelectors-DVavIP4x.js";import"./d3-scale-CR1rssfZ.js";import"./string-B6fdYHAA.js";import"./CartesianChart-M1doCtPT.js";import"./chartDataContext-CbiQTE76.js";import"./CategoricalChart-DpAQLfUl.js";import"./Symbols-C06owXf-.js";import"./symbol-Bi7TCHx3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DNdtPX45.js";import"./uniqBy-BThSMkgd.js";import"./iteratee-DFK6dMUl.js";import"./tooltipContext-B8ZAl12B.js";import"./AnimatedItems-D2o6LGbd.js";import"./useAnimationId-Q5RNzbJv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-fEK7HoKB.js";import"./ActiveShapeUtils-CpkaJLOn.js";import"./RegisterGraphicalItemId-DzMyHwfr.js";import"./ErrorBarContext-CDOOklnh.js";import"./GraphicalItemClipPath-CnUHFn7e.js";import"./SetGraphicalItem-DJfCNytO.js";import"./getZIndexFromUnknown-BLKjt2V6.js";import"./graphicalItemSelectors-CWW8cA9B.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
