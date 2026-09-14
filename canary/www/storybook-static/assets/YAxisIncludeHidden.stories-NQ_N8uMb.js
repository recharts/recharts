import{r as f,R as e}from"./iframe-CCZR7NAh.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-r76EBGup.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-RhYtObCh.js";import{C as k}from"./ComposedChart-B5KY41wA.js";import{X as K}from"./XAxis-BRz9nr_h.js";import{L as v}from"./Legend-CMYhydZc.js";import{B as a}from"./Bar-F9qo_vnc.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-A6NnUU-m.js";import"./Text-BNhIgYfP.js";import"./resolveDefaultProps-DBU-kSsr.js";import"./DOMUtils-BDfLWNCh.js";import"./isWellBehavedNumber-Csif_Eh7.js";import"./useId-BL2vel-5.js";import"./useBackwardsCompatibleTheme-DIkjfI7E.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-RJSSngl5.js";import"./index-tWW1_YSW.js";import"./index-B_5iXp8A.js";import"./RechartsWrapper-wkc56maS.js";import"./axisSelectors-BSioHzmv.js";import"./throttle-ZP6rSZKd.js";import"./d3-scale-CU88JBPJ.js";import"./index-CQgQjfRf.js";import"./index-Cn7KliQr.js";import"./renderedTicksSlice-D9smLeXW.js";import"./index-1iFFgL5n.js";import"./CartesianAxis-DqSvII5H.js";import"./Layer-B2yEt3nd.js";import"./types-BX41f3Nu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BL5MVgQu.js";import"./chartDataContext-DSMzrBHe.js";import"./CategoricalChart-thtv_Ll2.js";import"./Symbols-BuAuRUDz.js";import"./symbol-iszy4Ia-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dp3BrIi0.js";import"./uniqBy-CvvHfEZU.js";import"./iteratee-9vsqmnl8.js";import"./AnimatedItems-C_k0o8_C.js";import"./useAnimationId-DJLlQPal.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CQGbjjmX.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DgHvx5XO.js";import"./tooltipContext-Ax7Hq2F0.js";import"./RegisterGraphicalItemId-U6F3LrJb.js";import"./ErrorBarContext-j9HbImdV.js";import"./GraphicalItemClipPath-eRrs6_re.js";import"./SetGraphicalItem-DoozTt-Y.js";import"./getZIndexFromUnknown-CwURzt-E.js";import"./useGraphicalItemIdentity-BWyXW6pi.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
