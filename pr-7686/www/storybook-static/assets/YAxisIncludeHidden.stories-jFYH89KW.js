import{r as f,R as e}from"./iframe-BcaWFD7u.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CG4baE84.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-bS7cYBKO.js";import{C as k}from"./ComposedChart-BWld5lXM.js";import{X as K}from"./XAxis-DD0jXpQz.js";import{L as v}from"./Legend-gkr2D6-Y.js";import{B as s}from"./Bar-DnRwjdqW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C-frAhmf.js";import"./Text-C02gRxFY.js";import"./resolveDefaultProps-CqMML5sA.js";import"./DOMUtils-BvzyNhX6.js";import"./isWellBehavedNumber-BP6UcqH1.js";import"./useId-Dsncsbnj.js";import"./useBackwardsCompatibleTheme-R44_v_zH.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CI7tJTJS.js";import"./index-DD-aKuCi.js";import"./index-DVZ7kkny.js";import"./RechartsWrapper-C-VIMVig.js";import"./index-Cgtj3oPE.js";import"./index-xxpNQb8f.js";import"./throttle-Dz1UTb_M.js";import"./axisSelectors-D0fMBFBE.js";import"./d3-scale-CjZBqtB1.js";import"./renderedTicksSlice-naYz1W_2.js";import"./CartesianAxis-D8v1d9Y9.js";import"./Layer-BhtJX80Y.js";import"./types-BCqYYX1O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CjI4gSTo.js";import"./chartDataContext-BwgPsUMn.js";import"./CategoricalChart-CgNZHuyL.js";import"./Symbols-BGM_JZYv.js";import"./symbol-BtXaAdka.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DHdFJydJ.js";import"./uniqBy-Bkj6aSgv.js";import"./iteratee-Bj7EDGxK.js";import"./AnimatedItems-e5mGDN3Y.js";import"./useAnimationId-DDgucPPX.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BYLlJBXy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BL97HDhi.js";import"./tooltipContext-Fycs4bl4.js";import"./RegisterGraphicalItemId-C3WPLV-4.js";import"./ErrorBarContext-CyXVsRn2.js";import"./GraphicalItemClipPath-BL_hooiS.js";import"./SetGraphicalItem-BClSdCLV.js";import"./getZIndexFromUnknown-DNPKXyYs.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-ITGLymVg.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Le=["WithIncludeHidden"];export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
