import{r as f,R as e}from"./iframe-DVtjH5ZC.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B5n5P7NC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CT5rKc6V.js";import{C as k}from"./ComposedChart-Dz_uTpuK.js";import{X as K}from"./XAxis-jQ3mwiM2.js";import{L as v}from"./Legend-cbzAprNX.js";import{B as s}from"./Bar-BWk1FO4e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CW5Nfot0.js";import"./Text-DwaUpb0m.js";import"./resolveDefaultProps-CEFHSu3W.js";import"./DOMUtils-Dd9Mj9i5.js";import"./isWellBehavedNumber-CxtTyBKU.js";import"./useId-uEfLXIRi.js";import"./useBackwardsCompatibleTheme-9zZd94Fp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-AEwL3kC6.js";import"./index-DA6wIi6Z.js";import"./index-fmYZM9xu.js";import"./RechartsWrapper-UF711Qsb.js";import"./index-WzbbmlbG.js";import"./index-Dy7HbM4f.js";import"./throttle-CXnXR6c-.js";import"./axisSelectors-CCCeYC9z.js";import"./d3-scale-DlNy7vWv.js";import"./renderedTicksSlice-P35kIKoD.js";import"./CartesianAxis-MYuvHf2c.js";import"./Layer-CJUEZ1CI.js";import"./types-BYtifQxH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C3qyBmwB.js";import"./chartDataContext-C1lTg_Bk.js";import"./CategoricalChart-CCltYxzM.js";import"./Symbols-RhNIRJfp.js";import"./symbol-Bj9pXaRF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DhnL9i8I.js";import"./uniqBy-lLim1SQG.js";import"./iteratee-DPVBHhbI.js";import"./AnimatedItems-rgrg930R.js";import"./useAnimationId-byXPA3hL.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-x3uoudl5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BGtP_9iK.js";import"./tooltipContext-CFupXZ58.js";import"./RegisterGraphicalItemId-CGQFc64E.js";import"./ErrorBarContext-gvSK-T7w.js";import"./GraphicalItemClipPath-CFsYcU3O.js";import"./SetGraphicalItem-DVUS6WUr.js";import"./getZIndexFromUnknown-Cf-s4Zsy.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-VgLc6JAx.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
