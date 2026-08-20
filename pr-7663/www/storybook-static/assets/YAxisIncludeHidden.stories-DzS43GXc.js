import{r as f,R as e}from"./iframe-T2vx_vOa.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BF1HUrTi.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B-qj09MF.js";import{C as k}from"./ComposedChart-C1KMn7rC.js";import{X as K}from"./XAxis-BN7ADdXK.js";import{L as v}from"./Legend-QD-0owBx.js";import{B as s}from"./Bar-Ck0-jCYh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-AUPLS1jy.js";import"./Text-C_hpuPsU.js";import"./resolveDefaultProps-DDbhMM_B.js";import"./DOMUtils-DCQI-dAG.js";import"./isWellBehavedNumber-CkczEaKC.js";import"./useId-BgzgS8Mn.js";import"./useBackwardsCompatibleTheme-CPVLRTOy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BwLVxIBn.js";import"./index-CKmP93dg.js";import"./index-C2g4etmg.js";import"./RechartsWrapper-B7E4P3q_.js";import"./index-BGfsg-y8.js";import"./index-BmiiKlQ3.js";import"./throttle-B2YWMMfN.js";import"./axisSelectors-Bwt_MWfh.js";import"./d3-scale-9Bwz5xwo.js";import"./renderedTicksSlice-BZDyTRdO.js";import"./CartesianAxis-Bztsuorj.js";import"./Layer-BJSWtfPf.js";import"./types-Bh_AGi1X.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bnxa5O6x.js";import"./chartDataContext-BRu0PEKp.js";import"./CategoricalChart-DZbNl6UN.js";import"./Symbols-CV9T5Yu_.js";import"./symbol-BI3up_Yv.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DcABdze2.js";import"./uniqBy-BVVWdgld.js";import"./iteratee-B1adNlu2.js";import"./AnimatedItems-C9f8W2_c.js";import"./useAnimationId-w6GkkQqu.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CFnUwAZg.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-jwMR0d8y.js";import"./tooltipContext-BV3We-7Q.js";import"./RegisterGraphicalItemId-DenhQzIU.js";import"./ErrorBarContext-ClNe4tHQ.js";import"./GraphicalItemClipPath-CBz4hBDX.js";import"./SetGraphicalItem-BV24eLVS.js";import"./getZIndexFromUnknown-C6poKufR.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-D3gv9YYw.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
