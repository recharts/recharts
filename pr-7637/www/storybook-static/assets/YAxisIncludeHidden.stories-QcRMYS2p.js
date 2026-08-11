import{r as f,R as e}from"./iframe-NVmT8fNw.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-C2Jyljrh.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-oXJaNZSv.js";import{C as k}from"./ComposedChart-Dt5Lfngq.js";import{X as K}from"./XAxis-hjQAsG8m.js";import{L as v}from"./Legend-BN-zTwcb.js";import{B as s}from"./Bar-DDNMFauz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DfDRyr69.js";import"./Text-C5xVRdeB.js";import"./resolveDefaultProps-C8jEDqKQ.js";import"./DOMUtils-CDTGDYSn.js";import"./isWellBehavedNumber-DXLqj9yd.js";import"./RechartsThemeContext-awS4vi70.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6fWtNzq.js";import"./index-Q4SQnPgQ.js";import"./index-UDay9_dl.js";import"./RechartsWrapper-D7AIj6ea.js";import"./index-BpZAOzLQ.js";import"./index-DglhN2t4.js";import"./throttle-Cfz3FXws.js";import"./axisSelectors-tCKXm7jn.js";import"./d3-scale-Brn0HGK7.js";import"./renderedTicksSlice-DjTIRCRN.js";import"./CartesianAxis-CwxpTfpR.js";import"./Layer-BD2Ls3O_.js";import"./types-DCTQ4Lzc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BKFmyfhg.js";import"./chartDataContext-DZujCsS5.js";import"./CategoricalChart-Dxp6zY9P.js";import"./Symbols-LFKXMbqN.js";import"./symbol-Bwf-l63G.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C1W2-wdN.js";import"./uniqBy-BhGOvFTa.js";import"./iteratee-DCpTGsx6.js";import"./tooltipContext-BvdnKLbG.js";import"./AnimatedItems-CytrP_0t.js";import"./useAnimationId-d1ULQyIN.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DMIOlDxR.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-0-0F3LMG.js";import"./RegisterGraphicalItemId-twhih18P.js";import"./ErrorBarContext-CABhUjIg.js";import"./GraphicalItemClipPath-BQB0fOYx.js";import"./SetGraphicalItem-B2EMuvtY.js";import"./getZIndexFromUnknown-D-MnSQal.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-8LEKmQkB.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
