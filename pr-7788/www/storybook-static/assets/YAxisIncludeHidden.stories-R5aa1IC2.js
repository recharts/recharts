import{r as f,R as e}from"./iframe-CCc4Ig9t.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BglDyQ9K.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-1P0wH6mw.js";import{C as k}from"./ComposedChart-Dz5UNdl9.js";import{X as K}from"./XAxis-B7UFXjXO.js";import{L as v}from"./Legend-C4s_iYBR.js";import{B as a}from"./Bar-CACZTHLl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DTpe6J5w.js";import"./Text-Cj4kK8yu.js";import"./resolveDefaultProps-VNAAgVLt.js";import"./DOMUtils-Df_Ucl3X.js";import"./isWellBehavedNumber-BwK7Fikb.js";import"./useId-CLSpndMM.js";import"./useBackwardsCompatibleTheme-BVGIiR_X.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BPtrp-aJ.js";import"./index-D-887qgc.js";import"./index-CZthC9SS.js";import"./RechartsWrapper-Cz1O2LQ_.js";import"./axisSelectors-DPq5qkhW.js";import"./throttle-BYOhzTjU.js";import"./d3-scale-DD504LTb.js";import"./index-DP3dQjsk.js";import"./index-BMcDiNhW.js";import"./renderedTicksSlice-DEDWHMPA.js";import"./index-G3ylxvqW.js";import"./CartesianAxis-Bp_xQTZ6.js";import"./Layer-CI2wc1Xr.js";import"./types-DJtqKg77.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-LpLVhPdZ.js";import"./chartDataContext-q63OH3iY.js";import"./CategoricalChart-Bf4qEJ6P.js";import"./Symbols-CbvdSNpg.js";import"./symbol-B3VhryUs.js";import"./path-DyVhHtw_.js";import"./useElementOffset--AK27c3n.js";import"./uniqBy-D8aeMkbi.js";import"./iteratee-BQkyZMdx.js";import"./AnimatedItems-Ca5Obh5D.js";import"./useAnimationId-ClzD5z7x.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-sHtjAWaW.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BtdS6G9Z.js";import"./tooltipContext-D4sXt8Fb.js";import"./RegisterGraphicalItemId-BnnRsli9.js";import"./ErrorBarContext-Buf_Z21J.js";import"./GraphicalItemClipPath-BbHKpjF5.js";import"./SetGraphicalItem-Bpek28vv.js";import"./getZIndexFromUnknown-BZOZZ5oW.js";import"./useGraphicalItemIdentity-Ckfzcm_J.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
