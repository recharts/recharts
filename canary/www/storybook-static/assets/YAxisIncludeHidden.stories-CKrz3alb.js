import{r as f,R as e}from"./iframe-DPI0lJK_.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-kaLm4VRJ.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DaD71mPe.js";import{C as k}from"./ComposedChart-DjQUK1Js.js";import{X as K}from"./XAxis-DfhI7JxR.js";import{L as v}from"./Legend-BJ9d-R-S.js";import{B as s}from"./Bar-BT7xsBjn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BtlIETXs.js";import"./Text-C3fZ5G2B.js";import"./resolveDefaultProps-DO_KkPbE.js";import"./DOMUtils-CbbnwRqi.js";import"./isWellBehavedNumber-BdpmJ8W0.js";import"./useId-DHEE7UYl.js";import"./useBackwardsCompatibleTheme-BwpcPfQP.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B60U3eb3.js";import"./index-Ccm70UBL.js";import"./index-CCmLOwTb.js";import"./RechartsWrapper-9a7fYH3g.js";import"./axisSelectors-Cch7lJrg.js";import"./throttle-Bk9jlA84.js";import"./d3-scale-CLDzT5En.js";import"./index-DBJXL9j6.js";import"./index-DbAySsVp.js";import"./renderedTicksSlice-CXjOM9N8.js";import"./index-BlnGx-VT.js";import"./CartesianAxis-Dt2jxgOw.js";import"./Layer-vYxXJLXx.js";import"./types-BLM3hXld.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BZZn2Q8U.js";import"./chartDataContext-BIJOOMrT.js";import"./CategoricalChart-DSBOz4pd.js";import"./Symbols-Br1RuLoh.js";import"./symbol-Dg22-sA7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BEd0h0Or.js";import"./uniqBy-BrJUdere.js";import"./iteratee-Dj8b9wE-.js";import"./AnimatedItems-DshdCAFR.js";import"./useAnimationId-DHeK0bmN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DsDRrIHk.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bg0Vulpa.js";import"./tooltipContext-COYOoKhj.js";import"./RegisterGraphicalItemId-D_AIaJ8K.js";import"./ErrorBarContext-DcryNH3m.js";import"./GraphicalItemClipPath-D7kbGJpV.js";import"./SetGraphicalItem-CPTpIfRJ.js";import"./getZIndexFromUnknown-C_aQ8Hc6.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-Cgn6sHhH.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
