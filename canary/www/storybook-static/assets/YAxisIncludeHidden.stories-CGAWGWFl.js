import{r as f,e}from"./iframe-DZy4Dead.js";import{g as k}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CtpClMsJ.js";import{Y as c}from"./YAxis-CetTQXLx.js";import{R as A}from"./arrayEqualityCheck-ApBChTfQ.js";import{C}from"./ComposedChart-B1Kc7L3U.js";import{X as K}from"./XAxis-B-yW469b.js";import{L as v}from"./Legend-D7rMYQN7.js";import{B as a}from"./Bar-ChmxHcVw.js";import{R as x}from"./RechartsHookInspector-BQ2LFFE8.js";import{p as s}from"./Page-Cj8EiXz7.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-Bf5GaSqV.js";import"./CartesianAxis-CJ1CYBzd.js";import"./Layer-Bpoel1Lp.js";import"./Text-68IXtrlK.js";import"./DOMUtils-DwLev0Y8.js";import"./Label-BnGgD6KR.js";import"./PolarUtils-Dc-YJkTz.js";import"./ZIndexLayer-DncsytRr.js";import"./zIndexSlice-BHURSyYA.js";import"./types-BfEpf9p_.js";import"./hooks-ajKNzoip.js";import"./axisSelectors-CNnm75NT.js";import"./RechartsWrapper-nPRv-TTN.js";import"./CartesianChart-C9Umwsg3.js";import"./chartDataContext-C_SJIf2I.js";import"./CategoricalChart-Da7z_ebg.js";import"./Symbols-BE9qwwFU.js";import"./Curve-ChmxEyvD.js";import"./useElementOffset-VabGtOpj.js";import"./iteratee-DGxwmvkZ.js";import"./tooltipContext-BUOejfSR.js";import"./ReactUtils-MfSKnK6Q.js";import"./ActiveShapeUtils-BmYdORD-.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DS0sw2g4.js";import"./useAnimationId-C4mX0K92.js";import"./Trapezoid-C-7zXkUX.js";import"./Sector-Cjw5cIeP.js";import"./RegisterGraphicalItemId-DFrBVe2X.js";import"./ErrorBarContext-Du58iR9d.js";import"./GraphicalItemClipPath-DT3FtvpA.js";import"./SetGraphicalItem-6vLNF4l0.js";import"./getZIndexFromUnknown-DS6-mSYz.js";import"./graphicalItemSelectors-CKsL1OhO.js";import"./index-SrSy7NGQ.js";import"./ChartSizeDimensions-DagnIVtO.js";import"./OffsetShower-C8_o4Gkp.js";import"./PlotAreaShower-CJCyQCMM.js";const Ce={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(s[0]),[o,g]=f.useState(l),h=y=>{const r=y.dataKey;g(i=>i.includes(r)?i.filter(u=>u!==r):[...i,r])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(A,{width:"100%",height:500},e.createElement(C,{data:s},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:h}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}),e.createElement(x,null))))},args:k(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
            <RechartsHookInspector />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ke=["WithIncludeHidden"];export{t as WithIncludeHidden,Ke as __namedExportsOrder,Ce as default};
