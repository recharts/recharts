import{r as f,R as e}from"./iframe-BuZZ6Yg-.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CIgwtJsC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-D06YYCUt.js";import{C as k}from"./ComposedChart-SQYF2RWW.js";import{X as K}from"./XAxis-CHYajWYc.js";import{L as v}from"./Legend-B9qa9zpU.js";import{B as s}from"./Bar-Bb3q7wM7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Piq6p-kT.js";import"./Text-277W_4gY.js";import"./resolveDefaultProps-D5JsTaYp.js";import"./DOMUtils-C4sKZxSz.js";import"./isWellBehavedNumber-D8DFMuKm.js";import"./useId-DaJNh8-T.js";import"./useBackwardsCompatibleTheme-bmPqm5mS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CVpPXR5C.js";import"./index-WVpfO-Tt.js";import"./index-rOOSR0qU.js";import"./RechartsWrapper-BK57Ddxz.js";import"./axisSelectors-BIwvgxsa.js";import"./throttle-Dl11hTdc.js";import"./d3-scale-BuRuIzVX.js";import"./index-pWAlhut8.js";import"./index-DEZgEKu_.js";import"./renderedTicksSlice-DeL7aSpi.js";import"./index-BFZDqkK3.js";import"./CartesianAxis-tEidUAUv.js";import"./Layer-DuZwtXeM.js";import"./types-BpoBtvKZ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D_6fxtY3.js";import"./chartDataContext-CcDIygPN.js";import"./CategoricalChart-4bcFYgeY.js";import"./Symbols-kGct_fvo.js";import"./symbol-C8zFc4Hg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CC8KTtc-.js";import"./uniqBy-CBl0CU3M.js";import"./iteratee-4F6o9M4t.js";import"./AnimatedItems-BSKa54qQ.js";import"./useAnimationId-BYxS0Ar5.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Ct-8eUvC.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DdHa4GQ_.js";import"./tooltipContext-3DNW6uAw.js";import"./RegisterGraphicalItemId-BULnM1Vf.js";import"./ErrorBarContext-BnL_B67S.js";import"./GraphicalItemClipPath-iF12rDlU.js";import"./SetGraphicalItem-B24-ge-L.js";import"./getZIndexFromUnknown-IY2Nx0gQ.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-nntyQRRy.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const Re=["WithIncludeHidden"];export{t as WithIncludeHidden,Re as __namedExportsOrder,Le as default};
