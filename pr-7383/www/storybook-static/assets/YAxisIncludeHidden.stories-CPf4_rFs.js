import{P as f,c as e}from"./iframe-C5fgHeit.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-CoKsJgTz.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-Cm8Wfowt.js";import{C as k}from"./ComposedChart-BKA8oJoR.js";import{X as K}from"./XAxis-DgWVtNyr.js";import{L as v}from"./Legend-DKV1wX0C.js";import{B as s}from"./Bar-BZG9t3vo.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DWrZfuk9.js";import"./CartesianAxis-DBytmeds.js";import"./Layer-Cc_zBrzh.js";import"./resolveDefaultProps-CYeq70FN.js";import"./Text-tcokI-pA.js";import"./DOMUtils-DIorzim0.js";import"./isWellBehavedNumber-D0_xXiuE.js";import"./Label-DviSNP2P.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DJnVmrOS.js";import"./index-DjwzGHbn.js";import"./index-BKpk60GZ.js";import"./types-CutKYO-q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BX_JZwB0.js";import"./immer-kTf3s8ve.js";import"./RechartsWrapper-Bfu9Nl_Q.js";import"./index-CS-SMU20.js";import"./index-GhOblPXW.js";import"./axisSelectors-DhSKO8Kw.js";import"./d3-scale-CZ_aTrcE.js";import"./CartesianChart-aHIkR0ek.js";import"./chartDataContext-CZBf5hkj.js";import"./CategoricalChart-DGE9Xwb5.js";import"./Symbols-BAb-Z_BR.js";import"./symbol-B7BiD5Uu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CyRs7Ghn.js";import"./uniqBy-DrtRQAo9.js";import"./iteratee-WGyIZ-Gp.js";import"./tooltipContext-Bjd2BcFJ.js";import"./ReactUtils-XexX1ZTx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CelBvebx.js";import"./useAnimationId-DkZHsCyz.js";import"./ActiveShapeUtils-BJ_lKbaS.js";import"./RegisterGraphicalItemId-Dq8Ivo6G.js";import"./ErrorBarContext-CKHx2UXB.js";import"./GraphicalItemClipPath-BWUEd7L8.js";import"./SetGraphicalItem-dBJjG1CE.js";import"./getZIndexFromUnknown-Dzs2bGO1.js";import"./graphicalItemSelectors-CtyXf51U.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
