import{r as f,R as e}from"./iframe-oJEYIYVD.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-D5BvcVb4.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-8Xd9ui4v.js";import{C as k}from"./ComposedChart-BIeE5g7X.js";import{X as K}from"./XAxis-BGcEKdMP.js";import{L as v}from"./Legend-B2TBmvkO.js";import{B as s}from"./Bar-ckHFcUCC.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BAH99IO9.js";import"./Text-CtBEPsPC.js";import"./resolveDefaultProps-DHMesOBd.js";import"./DOMUtils-Cf8xbxEH.js";import"./isWellBehavedNumber-BUWW9YlW.js";import"./useId-CMdQMiLi.js";import"./useBackwardsCompatibleTheme-DXWZN45A.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cvj5uv_m.js";import"./index-1WCRhzzt.js";import"./index-9lHgIK0X.js";import"./RechartsWrapper-ENwYgfgF.js";import"./index-DPJLoqId.js";import"./index-CoIOggcU.js";import"./throttle-DQw_TB4k.js";import"./axisSelectors-CsLlIDAD.js";import"./d3-scale-DB3cJCiA.js";import"./renderedTicksSlice-DU_GMzWX.js";import"./CartesianAxis-C0z7V-tm.js";import"./Layer-BCc9Twjs.js";import"./types-qn8KP6HN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C-gtXtO6.js";import"./chartDataContext-BNgKqfWM.js";import"./CategoricalChart-DFXPtrpT.js";import"./Symbols-DAJOdbyV.js";import"./symbol-C0LB-xh7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-0qwWTu7f.js";import"./uniqBy-2i4DD0Ye.js";import"./iteratee-D6e9wFia.js";import"./AnimatedItems-bvrA4fOd.js";import"./useAnimationId-Cuwuz8F4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-6_rBacYy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-YLbAgrLf.js";import"./tooltipContext-BxtUFVO6.js";import"./RegisterGraphicalItemId-BktobOXw.js";import"./ErrorBarContext-BeupN1xy.js";import"./GraphicalItemClipPath-DsG6iHd1.js";import"./SetGraphicalItem-C8Wpyevh.js";import"./getZIndexFromUnknown-CPZD-VQ6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C8codeQo.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
