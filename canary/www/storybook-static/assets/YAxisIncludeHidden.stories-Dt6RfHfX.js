import{r as f,R as e}from"./iframe-NSpsGxr3.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-s1ngqAL7.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CegrvH4P.js";import{C as k}from"./ComposedChart-BSbO4QCj.js";import{X as K}from"./XAxis-DNhoou9P.js";import{L as v}from"./Legend-CBMEHQx2.js";import{B as s}from"./Bar-BgATints.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BIdOyJIr.js";import"./Text-BtwC4msG.js";import"./resolveDefaultProps-BlFb5h3I.js";import"./DOMUtils-CWTrI1E5.js";import"./isWellBehavedNumber-pwlbiGoO.js";import"./useId-BVXNnfLZ.js";import"./useBackwardsCompatibleTheme-C2Bmbb6o.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4urMDBy.js";import"./index-4AzzKt7j.js";import"./index-0HEoT-e5.js";import"./RechartsWrapper-DtJCjJYR.js";import"./axisSelectors-BkwFONEa.js";import"./throttle-oOh5DhdY.js";import"./d3-scale-C3gnRv6y.js";import"./index-BsIlyQNm.js";import"./index-DWO3hHqn.js";import"./renderedTicksSlice-DYxvbfog.js";import"./index-CYtbOF9C.js";import"./CartesianAxis-BwBDYPDu.js";import"./Layer-BnG363as.js";import"./types-Co_GWDov.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CvLKYupN.js";import"./chartDataContext-DJ-2f6vo.js";import"./CategoricalChart-Dg01q-nM.js";import"./Symbols-9rD-zr54.js";import"./symbol-B_V30F_Z.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DnaqijmP.js";import"./uniqBy-BO5ZjA6J.js";import"./iteratee-C2lnqyuZ.js";import"./AnimatedItems-BkT2_sP2.js";import"./useAnimationId-N_fuM4i0.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CmsXYr1b.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-pIseDvg-.js";import"./tooltipContext-B_PEljFz.js";import"./RegisterGraphicalItemId-wt0KspV9.js";import"./ErrorBarContext-CEiAdeUz.js";import"./GraphicalItemClipPath-CcSo6wES.js";import"./SetGraphicalItem-C1qAtScX.js";import"./getZIndexFromUnknown-BYBItVqo.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-MpFTBnWD.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
