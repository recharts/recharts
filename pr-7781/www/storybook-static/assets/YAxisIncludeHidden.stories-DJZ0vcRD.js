import{r as f,R as e}from"./iframe-CS_l3HPs.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CfLQ1gwS.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DOZPSD3i.js";import{C as k}from"./ComposedChart-DD8VJnt8.js";import{X as K}from"./XAxis-VVNKgX_Z.js";import{L as v}from"./Legend-qyYT98W7.js";import{B as a}from"./Bar-BbmsIPoH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CLB3gtSD.js";import"./Text-Cft38Vb6.js";import"./resolveDefaultProps-CgtyltQG.js";import"./DOMUtils-Ufje3btQ.js";import"./isWellBehavedNumber-BSl6HisW.js";import"./useId-DZgN2ji4.js";import"./useBackwardsCompatibleTheme-D2bkWM8o.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DIN_R5pI.js";import"./index-BYA5dZMw.js";import"./index-Ao7KBTFd.js";import"./RechartsWrapper-CLBKD2Mb.js";import"./axisSelectors-wY7xrwqz.js";import"./throttle-BXJlRBBH.js";import"./d3-scale-DavGDXTG.js";import"./index-DjQwq7Uw.js";import"./index-7kMAhgqw.js";import"./renderedTicksSlice-Bg0DMs51.js";import"./index-P2WiDCym.js";import"./CartesianAxis-DcHbl7Yp.js";import"./Layer-ClmpeZAQ.js";import"./types-Bij1NlAO.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CDuUV78h.js";import"./chartDataContext-Ud-Nnz0C.js";import"./CategoricalChart-DOE0boxd.js";import"./Symbols-BmB__XbX.js";import"./symbol-K873wObj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFm-Hwrm.js";import"./uniqBy-DAztU44K.js";import"./iteratee-CgfSsQVK.js";import"./AnimatedItems-CucVzI_L.js";import"./useAnimationId-BcraNq1p.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DPMGAmez.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bf2foGWX.js";import"./tooltipContext-nEVLmucK.js";import"./RegisterGraphicalItemId-Cqgmus52.js";import"./ErrorBarContext-CU42u084.js";import"./GraphicalItemClipPath-CdBhe4zV.js";import"./SetGraphicalItem-HfAHgXq7.js";import"./getZIndexFromUnknown-UjuIDEF_.js";import"./useGraphicalItemIdentity-CWB4Q7Cn.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
