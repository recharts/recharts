import{r as f,R as e}from"./iframe-C60CeSr1.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BsYuPRXA.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-OJv_DQrU.js";import{C as k}from"./ComposedChart-BzAN8QDH.js";import{X as K}from"./XAxis-BvEbbPhK.js";import{L as v}from"./Legend-DZ61_P6z.js";import{B as s}from"./Bar-CgnOA4st.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D00_RuVZ.js";import"./Text-DbOMyqnY.js";import"./resolveDefaultProps-BGY8S9MU.js";import"./DOMUtils-DGbVIUY3.js";import"./isWellBehavedNumber-ps2XZnBQ.js";import"./useId-DOhjH30T.js";import"./useBackwardsCompatibleTheme-NWguYV1j.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DZjPHzll.js";import"./index-CLcnbG-9.js";import"./index-Bqwda9Fq.js";import"./RechartsWrapper-GqvtI-xq.js";import"./axisSelectors-8LjSDh6r.js";import"./throttle-4y-zsF2K.js";import"./d3-scale-CKiULClT.js";import"./index-BORXIxjx.js";import"./index-BpZ-_TsI.js";import"./renderedTicksSlice-tOvQVNJQ.js";import"./index-BHPplqCM.js";import"./CartesianAxis-CFb2o3L1.js";import"./Layer-BkafIlY5.js";import"./types-Bt5cyCk_.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Dx5XpQWF.js";import"./chartDataContext-wxbL5Q17.js";import"./CategoricalChart-DorDSMvO.js";import"./Symbols-DuK3X_Du.js";import"./symbol-DTBdp9NJ.js";import"./path-DyVhHtw_.js";import"./useElementOffset-da1IKuQA.js";import"./uniqBy-BKlE9h1Q.js";import"./iteratee-C71t-VFG.js";import"./AnimatedItems-BorEvTXc.js";import"./useAnimationId-SZ0HilGc.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Efiryd3x.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-D3L9NjGk.js";import"./tooltipContext-D0bzrnnA.js";import"./RegisterGraphicalItemId-TGLRvyhw.js";import"./ErrorBarContext-D1-31f6l.js";import"./GraphicalItemClipPath-D_FqHT2B.js";import"./SetGraphicalItem-BDVcT93s.js";import"./getZIndexFromUnknown-CkNexGW1.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C7UE_d1E.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
