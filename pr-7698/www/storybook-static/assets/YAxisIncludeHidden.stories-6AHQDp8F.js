import{r as f,R as e}from"./iframe-zaa1iZav.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DJCm-s1B.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BWWEcbGp.js";import{C as k}from"./ComposedChart-SWtXcCgK.js";import{X as K}from"./XAxis-BVnwJxOu.js";import{L as v}from"./Legend-rKi-Jd1L.js";import{B as s}from"./Bar-c98uwW-j.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-dEEe5X5F.js";import"./Text-CNT20nWc.js";import"./resolveDefaultProps-CJqzH_DM.js";import"./DOMUtils-CDT7WRtk.js";import"./isWellBehavedNumber-DAhZ9La7.js";import"./useId-B4zmx8V0.js";import"./useBackwardsCompatibleTheme-XO0ISL55.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Dn1PwF1U.js";import"./index-BrIYS7Za.js";import"./index-B2mdcnwD.js";import"./RechartsWrapper-Bf_8sWMW.js";import"./index-BZPWANmU.js";import"./index-CM-qLXxp.js";import"./throttle-CPqxLIQd.js";import"./axisSelectors-ucT8kUEv.js";import"./d3-scale-DKZbRsMk.js";import"./renderedTicksSlice-jJ4uAB34.js";import"./CartesianAxis-BEMiFdQK.js";import"./Layer-Diqr5-jO.js";import"./types-DFArERnY.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BUEIFsCx.js";import"./chartDataContext-CPRHK_4k.js";import"./CategoricalChart-DzU0tABe.js";import"./Symbols-qor2sXTI.js";import"./symbol-Bekqv1-x.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BkrFnIvv.js";import"./uniqBy-BVIzKSm2.js";import"./iteratee-CL50YqF6.js";import"./AnimatedItems-O1YgZXLs.js";import"./useAnimationId-B8kms9uE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ddidi1ZR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-lGuUrwlM.js";import"./tooltipContext-BhuGSjmc.js";import"./RegisterGraphicalItemId-dsCSOxKS.js";import"./ErrorBarContext-ZTRuZpEO.js";import"./GraphicalItemClipPath-Dhs9LVS9.js";import"./SetGraphicalItem-Dk_WNLiG.js";import"./getZIndexFromUnknown-_9N3dKhy.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-B9jF_9OY.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
