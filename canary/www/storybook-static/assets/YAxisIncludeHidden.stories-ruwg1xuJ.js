import{r as f,R as e}from"./iframe-B96S8mAp.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DfdWV3Tw.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D8E1yZ1V.js";import{C as k}from"./ComposedChart-CehmNKG2.js";import{X as K}from"./XAxis-nVEhAG3F.js";import{L as v}from"./Legend-3kh-Elkq.js";import{B as a}from"./Bar-CJXa7nNs.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CqVVrAo5.js";import"./Text-BO1tL-Lm.js";import"./resolveDefaultProps-hdreNdXc.js";import"./DOMUtils-B7FzpOG9.js";import"./isWellBehavedNumber-DfNG0DIy.js";import"./useId-C9t3LM8u.js";import"./useBackwardsCompatibleTheme-BlUzVNC-.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DUeg7nPd.js";import"./index-DkqDlut5.js";import"./index-h_VAy7kX.js";import"./RechartsWrapper-BMN5w2mX.js";import"./axisSelectors-CoX3e_2U.js";import"./throttle-ClBFd37Y.js";import"./d3-scale-9nPPSrDa.js";import"./index-Bb9sRMCm.js";import"./index-C-l8V5Fx.js";import"./renderedTicksSlice-BTyytnZ2.js";import"./index-YSWiv6gp.js";import"./CartesianAxis-Bj8xr9W5.js";import"./Layer-DAZaOor8.js";import"./types-Dzd-LsE5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-a8pJKl2i.js";import"./chartDataContext-DDU_iWzI.js";import"./CategoricalChart-BJxf0mxD.js";import"./Symbols-BNfPcK4r.js";import"./symbol-BLKaF7BI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DWPuYoRo.js";import"./uniqBy-C_OONL53.js";import"./iteratee-rFFt59sx.js";import"./AnimatedItems-B3aC5t_D.js";import"./useAnimationId-CEflbmtS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dd-JcMlj.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CRg0xwL0.js";import"./tooltipContext-BVsixjLI.js";import"./RegisterGraphicalItemId-yOmcvIGu.js";import"./ErrorBarContext-D5MNBcr8.js";import"./GraphicalItemClipPath-RRykAftR.js";import"./SetGraphicalItem-CvYLLoCp.js";import"./getZIndexFromUnknown-BXYHHq9Q.js";import"./useGraphicalItemIdentity-CBUuLMbL.js";import"./dataEntryStyles-hKuM-EJ6.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
