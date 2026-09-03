import{r as f,R as e}from"./iframe-BMDGt33G.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bb9GrcYH.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DCVNKZSi.js";import{C as k}from"./ComposedChart-B_FiSDXS.js";import{X as K}from"./XAxis-BLwPYlxb.js";import{L as v}from"./Legend-BLAXFxYE.js";import{B as s}from"./Bar-PyZpazy6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-l14yVQ5q.js";import"./Text-DYkDw-5j.js";import"./resolveDefaultProps-DOWWXdZM.js";import"./DOMUtils-DBrlboks.js";import"./isWellBehavedNumber-D73nv25y.js";import"./useId-D70LGxdi.js";import"./useBackwardsCompatibleTheme-DUdO4_jh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CaEles3w.js";import"./index-CQIY09nP.js";import"./index-KK-TIT-h.js";import"./RechartsWrapper-CU85gN_Z.js";import"./axisSelectors-DoXQrKNQ.js";import"./throttle-DHXzdyrx.js";import"./d3-scale-BLx8xy0x.js";import"./index-ubnZgXyZ.js";import"./index-B-bSR3iB.js";import"./renderedTicksSlice-D2nTsm-u.js";import"./index-BALx0JUZ.js";import"./CartesianAxis-D9IiMPGB.js";import"./Layer-CjUZiXYs.js";import"./types-BuxhmSle.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CefyJEjd.js";import"./chartDataContext-BXP4dIO1.js";import"./CategoricalChart-UAMcsDW6.js";import"./Symbols-1hycImks.js";import"./symbol-DkqqIOyx.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BAEYehLF.js";import"./uniqBy-BujAWGSb.js";import"./iteratee-Bncw5-E9.js";import"./AnimatedItems-DPSFxYpd.js";import"./useAnimationId-B5h3AUKS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DB4jjQ5C.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-EQw7SaSK.js";import"./tooltipContext-7QDK0p6D.js";import"./RegisterGraphicalItemId-iJ7X__4u.js";import"./ErrorBarContext-CTZMo0d8.js";import"./GraphicalItemClipPath-BpuwakLC.js";import"./SetGraphicalItem-V8CFRMGm.js";import"./getZIndexFromUnknown-CfZph43J.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D2gdtNgN.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Re=["WithIncludeHidden"];export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
