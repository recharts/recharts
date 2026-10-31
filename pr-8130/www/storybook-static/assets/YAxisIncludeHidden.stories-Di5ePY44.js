import{r as f,R as e}from"./iframe-BcoARvhY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BR79w2P2.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Cap7bOGW.js";import{C as k}from"./ComposedChart-Dw_41cnT.js";import{X as K}from"./XAxis-CW4XRUun.js";import{L as v}from"./Legend-aU5mImzU.js";import{B as a}from"./Bar-BxhvSvuD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Db4oLrbv.js";import"./Text-DEB5NFXE.js";import"./resolveDefaultProps-DgaC_Lp9.js";import"./DOMUtils-BwQh9Mln.js";import"./ZIndexLayer-e5VNMC6H.js";import"./index-DVE_dPhD.js";import"./index-BIq0I_KS.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C4L0U3vA.js";import"./throttle-DozmwBSC.js";import"./axisSelectors-CF6rFxXt.js";import"./d3-scale-BLsEuD7O.js";import"./CartesianAxis-Dfmzj1DX.js";import"./Layer-BMBcyrHw.js";import"./types-CjeLalhs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dsox9MKA.js";import"./index-SzPYUv7o.js";import"./index-DvX40RdG.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Cwmh20d2.js";import"./index-BhqvlJ2k.js";import"./fillDefinitions-D74AVg8N.js";import"./CartesianChart-C4x2bsCb.js";import"./ZIndexPortal-CGHsRqD4.js";import"./CategoricalChart-DUIKL0FO.js";import"./Symbols-DvLknyR9.js";import"./symbol-D2mHl5_S.js";import"./path-DyVhHtw_.js";import"./useElementOffset-KsdSYS8B.js";import"./uniqBy-CzEHPKx1.js";import"./iteratee-CEqHQ8un.js";import"./isArguments-yB-y1yaH.js";import"./LabelList-DqQuwlzD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C_t9hqFj.js";import"./useAnimationId-DZvEuqRY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CvEqRJU-.js";import"./tooltipContext-DlMmvww2.js";import"./dataEntryStyles-oli1U5SG.js";import"./ErrorBarContext-BGCJ_sZx.js";import"./activeStyles-Bdk5Xw9p.js";import"./SetGraphicalItem-D7kHQmaa.js";import"./getZIndexFromUnknown-BFo_3-rb.js";import"./useEffectiveDataKey-1O9VfdX1.js";import"./omit-DCT4h7f4.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
