import{r as f,R as e}from"./iframe-BuvSZiBU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BWzjkf00.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CQnbxV7B.js";import{C as k}from"./ComposedChart-C5RBlYP6.js";import{X as K}from"./XAxis-BOfa2s22.js";import{L as v}from"./Legend-xXJG6pwb.js";import{B as a}from"./Bar-BQlEGNid.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-w8cJkoy5.js";import"./Text-BkZYuu7y.js";import"./resolveDefaultProps-BfSOVUjP.js";import"./pageBackground-BDR7TGLv.js";import"./isWellBehavedNumber-B_8a6RB1.js";import"./useId-BuSUlJ9G.js";import"./useBackwardsCompatibleTheme-CJX_yJan.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CF-B9exK.js";import"./index-BXTQQRSe.js";import"./index-hoeugXO7.js";import"./axisSelectors-DGKzkChq.js";import"./throttle-Csayz_X_.js";import"./d3-scale-B4_DxsXg.js";import"./CartesianAxis-BUinM5G-.js";import"./Layer-DVAnIpPd.js";import"./types-EtJbnETm.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CC7BtYy2.js";import"./index-C49MXgC-.js";import"./index-CItffRII.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DMwFRg1j.js";import"./index-Coj2gvLu.js";import"./CartesianChart-BHftvwV6.js";import"./chartDataContext-CCUXEs40.js";import"./CategoricalChart-4mWCyxjg.js";import"./Symbols-ym2AvTwr.js";import"./symbol-BCH9VJWR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-tkb_p-rH.js";import"./uniqBy-BFPywt7W.js";import"./iteratee-DgIW1Mxm.js";import"./activeStyles-BmupzAye.js";import"./useAnimationId-CdC3v3R9.js";import"./dataEntryStyles-C1ODZzqS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DSr8qKkL.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-FNOwuhtO.js";import"./tooltipContext-DYqSTMxA.js";import"./ErrorBarContext-PD-ezkzm.js";import"./GraphicalItemClipPath-a3qbNX5k.js";import"./SetGraphicalItem-DyRgogdT.js";import"./getZIndexFromUnknown-BrjENlMN.js";import"./useEffectiveDataKey-DUlUrCLD.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
