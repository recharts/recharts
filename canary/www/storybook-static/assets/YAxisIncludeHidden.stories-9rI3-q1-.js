import{r as f,R as e}from"./iframe-CwjnBdPJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BJPBUcLn.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DCK0oMjs.js";import{C as k}from"./ComposedChart-DEjJaHPL.js";import{X as K}from"./XAxis-DGiS1jyS.js";import{L as v}from"./Legend-hOsISys7.js";import{B as a}from"./Bar-Bvkn-NeY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DUPKJ4wq.js";import"./Text-CkJvnqMb.js";import"./resolveDefaultProps-CiT0yrYA.js";import"./pageBackground-CPZsdU6n.js";import"./isWellBehavedNumber-UCnnTJQS.js";import"./useId-LApi4aFA.js";import"./useBackwardsCompatibleTheme-BaLhcLyB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cf72LToz.js";import"./index-Dd-h_ysm.js";import"./index-BjJumBGZ.js";import"./dataEntryStyles-MXIeXXjf.js";import"./axisSelectors-yVNmvCZQ.js";import"./throttle-NOTipQ48.js";import"./d3-scale-B8EUKI5D.js";import"./CartesianAxis-BCC92CcD.js";import"./Layer-mPZxMc5S.js";import"./types-Bf6WAwuG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dymauRC4.js";import"./index-CmMtCp92.js";import"./index-D5HInSgc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DssFoHZN.js";import"./index-Bgw_dChb.js";import"./CartesianChart-CAYSFbYO.js";import"./chartDataContext-Caz9nZMs.js";import"./CategoricalChart-C1fI2_Bl.js";import"./Symbols-XtZsXKyx.js";import"./symbol-pwE7MqIW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BUBjRfVb.js";import"./uniqBy-DM5ILEe5.js";import"./iteratee-BCmgj2Iv.js";import"./isArguments-yB-y1yaH.js";import"./activeStyles-Dq37JbhA.js";import"./useAnimationId-CsReVCtf.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYb6tTOo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-5uA1VhfG.js";import"./tooltipContext-CoqwBK9n.js";import"./RegisterGraphicalItemId-D_0UWgiO.js";import"./ErrorBarContext-Dx-lWvRW.js";import"./GraphicalItemClipPath-BaNkPOAO.js";import"./SetGraphicalItem-r-YteBa3.js";import"./getZIndexFromUnknown-ByNeKVDU.js";import"./useEffectiveDataKey-Cb7tOd6S.js";import"./omit-DD5rNiKZ.js";const we={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Oe=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Oe as __namedExportsOrder,we as default};
