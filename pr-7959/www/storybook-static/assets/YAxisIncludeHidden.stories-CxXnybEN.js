import{r as f,R as e}from"./iframe-D1Pqp3X7.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bx5HOyiU.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CC0vixK0.js";import{C as k}from"./ComposedChart-BLkMIV9V.js";import{X as K}from"./XAxis-T7u0Y27W.js";import{L as v}from"./Legend-Bb1a6T_X.js";import{B as a}from"./Bar-DiosrxrU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CD1DJmaw.js";import"./Text-B3gTwU4t.js";import"./resolveDefaultProps-BY3VWyF-.js";import"./pageBackground-BD-8uHz0.js";import"./isWellBehavedNumber-D9UYuuaw.js";import"./useId-DZsUPY-C.js";import"./useBackwardsCompatibleTheme-yQkddBeS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bv7_Srb_.js";import"./index-hC6YZk0S.js";import"./index-4O2rY_Cx.js";import"./axisSelectors-D2uT0zOX.js";import"./throttle-ukQujWSR.js";import"./d3-scale-BBX2CRCX.js";import"./CartesianAxis-By4dWd7I.js";import"./Layer-Bv1Fmb_W.js";import"./types-CpySGoie.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BfFvXFNo.js";import"./index-tZNJXdgS.js";import"./index-BxZa8ohf.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Dlv3UuBc.js";import"./index-C4H2qa0s.js";import"./CartesianChart-C5RCyQJ8.js";import"./chartDataContext-Bgnde7n0.js";import"./CategoricalChart-B93ipspd.js";import"./Symbols-BdxiKu9s.js";import"./symbol-DXAxbnUZ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CxHlgG-v.js";import"./uniqBy-o1mWMSKB.js";import"./iteratee-CVrITLYk.js";import"./activeStyles-Bni41BPX.js";import"./useAnimationId-Bu_aUyhK.js";import"./dataEntryStyles-DesCUen4.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BPXhboaf.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-NtxvAIW2.js";import"./tooltipContext-Bfi59ks3.js";import"./ErrorBarContext-CR6eW5Ea.js";import"./GraphicalItemClipPath-BrZXwUEO.js";import"./SetGraphicalItem-DW-Ki2gV.js";import"./getZIndexFromUnknown-66XFS-A6.js";import"./useEffectiveDataKey-D04u3iKL.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
