import{r as f,R as e}from"./iframe-VZ2aM8fP.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BnAL0SHr.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CQOPOcrz.js";import{C as k}from"./ComposedChart-BflrR0gu.js";import{X as K}from"./XAxis-wYdPJJmK.js";import{L as v}from"./Legend-sDzFO5rA.js";import{B as s}from"./Bar-7C7oFwHG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bcx9yaip.js";import"./Text-BxYT9j-0.js";import"./resolveDefaultProps-_p4e6Off.js";import"./DOMUtils-D8EYtam3.js";import"./isWellBehavedNumber-B1YHMHRX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BQK00jlT.js";import"./index-RAnsrEyk.js";import"./index-5JKLnMLz.js";import"./RechartsWrapper-BgtBwIWT.js";import"./index-B8NmJaJc.js";import"./index-BdOpZNUA.js";import"./throttle-CpHch1iP.js";import"./renderedTicksSlice-BWvg2Uuk.js";import"./axisSelectors-BuT92BdO.js";import"./d3-scale-2P7n4BrN.js";import"./CartesianAxis-C1YtHz_V.js";import"./Layer-D5KpKuLh.js";import"./types-BixaCUGO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CWQxd3mi.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bc8fypAa.js";import"./chartDataContext-Ci6amljO.js";import"./CategoricalChart-CxsxsIbU.js";import"./Symbols-DVumFTK6.js";import"./symbol-CUlD2-5A.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B7H5s1sG.js";import"./uniqBy-D-VFpCI_.js";import"./iteratee-BrJ0nONF.js";import"./tooltipContext-B8Xi_vN-.js";import"./AnimatedItems-B1Uj1Gzk.js";import"./useAnimationId-BWSvDpI-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BHt9-SY3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C3jZ13_H.js";import"./RegisterGraphicalItemId-C7us6vqj.js";import"./ErrorBarContext-DZjmiaio.js";import"./GraphicalItemClipPath-BhbKOYCd.js";import"./SetGraphicalItem-BqP4f3rQ.js";import"./getZIndexFromUnknown-DD7_ngF7.js";import"./graphicalItemSelectors-BD0xBJsD.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
