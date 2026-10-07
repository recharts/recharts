import{r as f,R as e}from"./iframe-BMzdo2OO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BNMn58Qu.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-ChqivVgc.js";import{C as k}from"./ComposedChart-DSKFy6An.js";import{X as K}from"./XAxis-D0FZw3tk.js";import{L as v}from"./Legend-Drlr6PEv.js";import{B as a}from"./Bar-4hoGeeeg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DXGFYQ6y.js";import"./Text-BUhrLoyp.js";import"./resolveDefaultProps-DMOVc-U0.js";import"./DOMUtils-CENQr-dm.js";import"./isWellBehavedNumber-BxxKk3_X.js";import"./useId-CISxasqF.js";import"./useBackwardsCompatibleTheme-COHZZMqy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-J0q0oOXM.js";import"./index-DcvaXuoD.js";import"./index-CuowPYJL.js";import"./RechartsWrapper-DZyZLCSd.js";import"./axisSelectors-DePv-gjT.js";import"./throttle-Bn5L-Spy.js";import"./d3-scale-FRN-50hy.js";import"./index-IxxRTzdH.js";import"./index-BBWSU8H0.js";import"./renderedTicksSlice-D7KSBl5-.js";import"./index-QGNmKXB_.js";import"./CartesianAxis-BwqV9jtY.js";import"./Layer-DI_tMp3J.js";import"./types-XidxuGSX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CJTLTCmg.js";import"./chartDataContext-D12dRZ2D.js";import"./CategoricalChart-DgT48bow.js";import"./Symbols-Bs3oLubR.js";import"./symbol-B1gI76t2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CNLeBMxi.js";import"./uniqBy-DlBrbasH.js";import"./iteratee-k4aeFlqG.js";import"./AnimatedItems-aWQxtrPp.js";import"./useAnimationId-DMkWUgfv.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYGVySvu.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-P-2_LOiD.js";import"./tooltipContext-tK_9rBe4.js";import"./RegisterGraphicalItemId-CdkGqZbg.js";import"./ErrorBarContext-Dvnk9Osp.js";import"./GraphicalItemClipPath-jODxuvX2.js";import"./SetGraphicalItem-fUYBwl3z.js";import"./getZIndexFromUnknown-DSnQSZfK.js";import"./useGraphicalItemIdentity-p0tnB9lX.js";import"./dataEntryStyles-eOg5bOhW.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
