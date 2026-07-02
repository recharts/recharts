import{r as f,R as e}from"./iframe-BNNSts13.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BE5H5SGl.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B_0Vu2Ew.js";import{C as k}from"./ComposedChart-DHvLsOhm.js";import{X as K}from"./XAxis-CQLk361J.js";import{L as v}from"./Legend-CeXv6FuD.js";import{B as s}from"./Bar-DomrdapL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C9gxS0ZW.js";import"./CartesianAxis-Bo6M1fU4.js";import"./Layer-BUN3jU8m.js";import"./resolveDefaultProps-BmCbt7JO.js";import"./Text-BAbJXX-B.js";import"./DOMUtils-BpYC5T-M.js";import"./isWellBehavedNumber-Cd8BT25E.js";import"./Label-B9RstaAA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-i45Mn5Qx.js";import"./index-DRHlmdrn.js";import"./index-CJSHvi6L.js";import"./types-CMjaNGyL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-mOWj0GHU.js";import"./throttle-CBpSFV7b.js";import"./RechartsWrapper-CxhgYL0g.js";import"./index-D3L22MUx.js";import"./index-DZAGR4_4.js";import"./axisSelectors-CDUBaBt4.js";import"./d3-scale-0CyMSTZz.js";import"./CartesianChart-CCTvUou3.js";import"./chartDataContext-bOV91Uvd.js";import"./CategoricalChart-KYW8s8_3.js";import"./Symbols-DzjVk4t8.js";import"./symbol-CA3p36J7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CXz0UZGA.js";import"./uniqBy-BiCSeEHe.js";import"./iteratee-CLp7QRBG.js";import"./tooltipContext-20KYJakf.js";import"./AnimatedItems-u006QBg6.js";import"./useAnimationId-CPqzTwnW.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-L3OxoeXe.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CnkeP5Du.js";import"./RegisterGraphicalItemId-8U08pWsl.js";import"./ErrorBarContext-Dsbm5JOc.js";import"./GraphicalItemClipPath-DvAXcUk3.js";import"./SetGraphicalItem-BRpvB0vT.js";import"./getZIndexFromUnknown-uWVFz-kT.js";import"./graphicalItemSelectors-BTrh16_N.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
