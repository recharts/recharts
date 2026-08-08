import{r as f,R as e}from"./iframe-Dl6-w9Rh.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Cc6mYSUk.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BRejfQU1.js";import{C as k}from"./ComposedChart-D3InBwIY.js";import{X as K}from"./XAxis-DZSPPcQS.js";import{L as v}from"./Legend-DCguHXy8.js";import{B as s}from"./Bar-DmkwKYol.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-aNbwXPlv.js";import"./Text-CW2k0BE6.js";import"./resolveDefaultProps-BxxTDuvn.js";import"./DOMUtils-kehL2bh6.js";import"./isWellBehavedNumber-65rXtzYC.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DkX5oxcl.js";import"./index-LxaBJEYH.js";import"./index-BASt_88m.js";import"./RechartsWrapper-CNKHADrp.js";import"./index-sYG2u-dS.js";import"./index-F3zVu6rR.js";import"./throttle-vxYlNOMT.js";import"./axisSelectors-BPD60Viv.js";import"./d3-scale-BucTPBl4.js";import"./renderedTicksSlice-UweUcv4l.js";import"./CartesianAxis-Dak0cZYo.js";import"./Layer-DIMKS5Ou.js";import"./types-Ddok_SrC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CVd-MmR3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BFdYz27M.js";import"./chartDataContext-DeefIzKJ.js";import"./CategoricalChart-Dp8ZNzIB.js";import"./Symbols-BXJ_hhZg.js";import"./symbol-D8WWhlr3.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ch2YK_71.js";import"./uniqBy-BEve3nPb.js";import"./iteratee-BGBdQaeY.js";import"./tooltipContext-BVT296Lu.js";import"./AnimatedItems-D0kip4Wc.js";import"./useAnimationId-CYbASTF_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DbSzEXWo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DNhTZN0e.js";import"./RegisterGraphicalItemId-BYzCIqIq.js";import"./ErrorBarContext-BWMuP-dM.js";import"./GraphicalItemClipPath-vJoF-3M2.js";import"./SetGraphicalItem-DMp8jOcz.js";import"./getZIndexFromUnknown-DXcqlEmZ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DdthWizv.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
