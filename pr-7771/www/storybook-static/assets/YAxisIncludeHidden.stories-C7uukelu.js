import{r as f,R as e}from"./iframe-Dn8vQZEp.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BNLIqhTJ.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-XUx2oJl_.js";import{C as k}from"./ComposedChart-BCd3a0vp.js";import{X as K}from"./XAxis-CB79oGK-.js";import{L as v}from"./Legend-D_MpiCUq.js";import{B as a}from"./Bar-jO8PhAFr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bvs0nTDG.js";import"./Text-D0E0CgcA.js";import"./resolveDefaultProps-jBHMfbnT.js";import"./DOMUtils-T9kk7XzM.js";import"./isWellBehavedNumber-Drx6zYdA.js";import"./useId-ClKCYS2F.js";import"./useBackwardsCompatibleTheme-DuANBb0k.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-8Cv1ome6.js";import"./index-CuDTIlBD.js";import"./index-BhPh_0Mo.js";import"./RechartsWrapper-Bhkt7zRT.js";import"./axisSelectors-DcgT4KNV.js";import"./throttle-fPZ-AFkd.js";import"./d3-scale-CzizY4ry.js";import"./index-CjS_XyhA.js";import"./index-Drl0y4WP.js";import"./renderedTicksSlice-eRTKLRMo.js";import"./index-Bmxz4y8Z.js";import"./CartesianAxis-BNezq43E.js";import"./Layer-BJv5m_kT.js";import"./types-BtKkYRP2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B9QNJ1CX.js";import"./chartDataContext-mZgxnkA9.js";import"./CategoricalChart-DAypclSw.js";import"./Symbols-DZGkt8QS.js";import"./symbol-3I5gn6bV.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bal9XmbO.js";import"./uniqBy-QuaGjxN1.js";import"./iteratee-DpeX9yxF.js";import"./AnimatedItems-BnMcWdWM.js";import"./useAnimationId-DNL11RNx.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Bdeqx9d0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Czlcjg-Z.js";import"./tooltipContext-BCio3TM7.js";import"./RegisterGraphicalItemId-BEcpOk8N.js";import"./ErrorBarContext-1UXxdVKa.js";import"./GraphicalItemClipPath-DwUubEvw.js";import"./SetGraphicalItem-wP6-k6q-.js";import"./getZIndexFromUnknown-BYf8R6AK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-DSzNbJsQ.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
