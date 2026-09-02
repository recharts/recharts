import{r as f,R as e}from"./iframe-BQrvPSLN.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BdyzdtnU.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-7Hw-ZWkF.js";import{C as k}from"./ComposedChart-B4viTwzv.js";import{X as K}from"./XAxis-COEcW9k3.js";import{L as v}from"./Legend-B9VGxu5U.js";import{B as s}from"./Bar-D7G2Zpdi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-fnZYxsAf.js";import"./Text-CV4rnU1k.js";import"./resolveDefaultProps-Dldn7S-M.js";import"./DOMUtils-DGTFhh_s.js";import"./isWellBehavedNumber--jy1hcq-.js";import"./useId-Cxn74IfF.js";import"./useBackwardsCompatibleTheme-DM-kCCC-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B-lyDO19.js";import"./index-n8L9L6eU.js";import"./index-DCJ-lssY.js";import"./RechartsWrapper-Bwj5H6_7.js";import"./axisSelectors-rztmSPpu.js";import"./throttle-0gn-kluv.js";import"./d3-scale-Dpwc0BRN.js";import"./index-C-4Z9rOq.js";import"./index-Cod02e9Y.js";import"./renderedTicksSlice-DgYqXOgC.js";import"./index-JVOuHVdP.js";import"./CartesianAxis-wwQP6TZJ.js";import"./Layer-BL59xEeu.js";import"./types-DmUtaJkc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Bonfnn_6.js";import"./chartDataContext-BgdaUcoV.js";import"./CategoricalChart-DzUyeNOX.js";import"./Symbols-Dopogqan.js";import"./symbol-CmH2wsGM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bi53hePS.js";import"./uniqBy-CbDZKJB_.js";import"./iteratee-zdI_LkTN.js";import"./AnimatedItems-DoNW6X9C.js";import"./useAnimationId-DGJmUGW3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-HVKv7_Bo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ds3BnvmO.js";import"./tooltipContext-C1brBf56.js";import"./RegisterGraphicalItemId-D_J9lCCC.js";import"./ErrorBarContext-M_C8hAbg.js";import"./GraphicalItemClipPath-ZQcwoD7Q.js";import"./SetGraphicalItem-DNCLDvoD.js";import"./getZIndexFromUnknown-DnK5vjN2.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DgC6dd13.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
