import{r as f,R as e}from"./iframe-DzBbDK3f.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DfXf3Bj6.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BhAJBvui.js";import{C as k}from"./ComposedChart-DlJ6UxJ6.js";import{X as K}from"./XAxis-CQnsilRX.js";import{L as v}from"./Legend-CQzj61K0.js";import{B as s}from"./Bar-CtBMsH9V.js";import"./preload-helper-Dp1pzeXC.js";import"./get-B36j_mfg.js";import"./CartesianAxis-CeDbxL1s.js";import"./Layer-BXEIHXdm.js";import"./resolveDefaultProps-0BSwoaCz.js";import"./Text-Cjl7teQi.js";import"./DOMUtils-BTYTQ9_I.js";import"./isWellBehavedNumber-DiHCDXDD.js";import"./Label-CGWWfPsR.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DpRTlowh.js";import"./index-BPARkMMW.js";import"./index-DKCqHE7S.js";import"./types-NVYIi3uc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B9_diZXM.js";import"./immer-DQoMHntF.js";import"./RechartsWrapper-8vZdR5pa.js";import"./index-tjSc758v.js";import"./index-Blqr4elb.js";import"./axisSelectors-VQ5WENH-.js";import"./d3-scale-qbHfyqh1.js";import"./string-B6fdYHAA.js";import"./CartesianChart-DtImfiMD.js";import"./chartDataContext-Czi5ozBn.js";import"./CategoricalChart-DVCKFz9W.js";import"./Symbols-CRepvFVB.js";import"./symbol-Ccc45hYA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DluJVRhv.js";import"./uniqBy-DjJrV_db.js";import"./iteratee-CGKb1kMs.js";import"./tooltipContext-C3hDu3Lw.js";import"./AnimatedItems-B0itj7bz.js";import"./useAnimationId-B-2-DeJx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BlGzqP8k.js";import"./ActiveShapeUtils-CdFzq6u2.js";import"./RegisterGraphicalItemId-gHdffHfG.js";import"./ErrorBarContext-BH6nTEug.js";import"./GraphicalItemClipPath-iFuYGze8.js";import"./SetGraphicalItem-BisBTBFQ.js";import"./getZIndexFromUnknown-hK6g1Ro_.js";import"./graphicalItemSelectors-CQG1X6Vk.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
