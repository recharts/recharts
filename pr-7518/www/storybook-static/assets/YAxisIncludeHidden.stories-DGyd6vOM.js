import{r as f,R as e}from"./iframe-EI0Ls4hC.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-BDDTXkrb.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-yKXgbZM9.js";import{C as k}from"./ComposedChart-Be7puHYx.js";import{X as K}from"./XAxis-isMopIja.js";import{L as v}from"./Legend-BLL7Q6Zz.js";import{B as s}from"./Bar-Cmq4uzGB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BON1YutH.js";import"./CartesianAxis-C7eaHI9Q.js";import"./Layer-D2PSeBO4.js";import"./resolveDefaultProps-NPYXHAaZ.js";import"./Text-BwBPbfGl.js";import"./DOMUtils-DrXieiLo.js";import"./isWellBehavedNumber-DWxIjg9k.js";import"./Label-V9mTYK6m.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C3S5Zj6R.js";import"./index-nHjkW3_e.js";import"./index-D-rMjtE6.js";import"./types-C8rhvdfR.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CoFXcUVC.js";import"./throttle-Cdlad3bH.js";import"./RechartsWrapper-CVfLxVvb.js";import"./index-CzoIO75z.js";import"./index-BIz2bYpH.js";import"./axisSelectors-Cok1HNra.js";import"./d3-scale-DBYKxB4y.js";import"./CartesianChart-DxsNLdfg.js";import"./chartDataContext-AgenIsJt.js";import"./CategoricalChart-DnbprEZ3.js";import"./Symbols-B8MT8cbd.js";import"./symbol-BEc4O7h7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CcBFNVWl.js";import"./uniqBy-DSBYfBdC.js";import"./iteratee-kPsQss5F.js";import"./tooltipContext-Bc4JHtO1.js";import"./AnimatedItems-CvuB6fQ_.js";import"./useAnimationId-B72UM_RE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Dj6dtcwd.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CplwhB-J.js";import"./RegisterGraphicalItemId-CXkeXAps.js";import"./ErrorBarContext-BeDV4HJb.js";import"./GraphicalItemClipPath-5KTFkQ5K.js";import"./SetGraphicalItem-BhScXCrX.js";import"./getZIndexFromUnknown-BkgdKLAJ.js";import"./graphicalItemSelectors-D30ePsgQ.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
