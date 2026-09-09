import{r as f,R as e}from"./iframe-ZxfiIiWi.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Ce1Cc64q.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-By0bZmpT.js";import{C as k}from"./ComposedChart-B6tALutk.js";import{X as K}from"./XAxis-8M4LuTq0.js";import{L as v}from"./Legend-7mLxfvaa.js";import{B as a}from"./Bar-DFj184HY.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C08NNQeO.js";import"./Text-BxPrjmzo.js";import"./resolveDefaultProps-1Uan2Hnp.js";import"./DOMUtils-CTcVRqQO.js";import"./isWellBehavedNumber-DX24GKSm.js";import"./useId-DbFmynHI.js";import"./useBackwardsCompatibleTheme-iH09SwpV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-MDZol7np.js";import"./index-DZp6XoEo.js";import"./index-DLRIqKjc.js";import"./RechartsWrapper-UKbeDROs.js";import"./axisSelectors-DMQ84IJA.js";import"./throttle-CfDYUS1N.js";import"./d3-scale-Np9PFIYo.js";import"./index-DRuu78hr.js";import"./index-6NV0E9go.js";import"./renderedTicksSlice-nc0b0sSE.js";import"./index-BgcSxEKm.js";import"./CartesianAxis-DHTAgCml.js";import"./Layer-SD6n1FzC.js";import"./types-DfGxKHCw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-v34KMzUV.js";import"./chartDataContext-D2b6BjfF.js";import"./CategoricalChart-Ls_A9xeg.js";import"./Symbols-c_F5rIiR.js";import"./symbol-De182CBu.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CtPYwSuY.js";import"./uniqBy-BC78fxA5.js";import"./iteratee-CPoLBgS5.js";import"./AnimatedItems-C7ik5li4.js";import"./useAnimationId-Bd76uFLI.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-XQRP3xav.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-O5hE5x5h.js";import"./tooltipContext-w_X85LNY.js";import"./RegisterGraphicalItemId-BglnUmW_.js";import"./ErrorBarContext-lXhQP1y7.js";import"./GraphicalItemClipPath-D7uJY0ae.js";import"./SetGraphicalItem-DfXzBFI9.js";import"./getZIndexFromUnknown-0F5egofR.js";import"./useGraphicalItemIdentity-Cy74xmM1.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
