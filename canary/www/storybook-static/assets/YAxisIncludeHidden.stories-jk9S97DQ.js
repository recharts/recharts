import{r as f,R as e}from"./iframe-D_MXUc9j.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B9TFZTi1.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BFHspQ3h.js";import{C as k}from"./ComposedChart-9bn5ROzF.js";import{X as K}from"./XAxis-DDjL-5lR.js";import{L as v}from"./Legend-DzzdQsbu.js";import{B as a}from"./Bar-DcPHfYEy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BzW6Kco1.js";import"./Text-BRrhokiO.js";import"./resolveDefaultProps-2frX1lOh.js";import"./DOMUtils-DhRIYphT.js";import"./isWellBehavedNumber-CsgFecko.js";import"./useId-BnOkh28B.js";import"./useBackwardsCompatibleTheme-BwLA5NQz.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-2Sh7_Zup.js";import"./index-CKJUXvOM.js";import"./index-7XNg-5qX.js";import"./RechartsWrapper-w9ky9w-N.js";import"./axisSelectors-Cm02wLJ7.js";import"./throttle-et5ks_cI.js";import"./d3-scale-qgwr3MMy.js";import"./index-CKZvu-mT.js";import"./index-Bxr9K7DU.js";import"./renderedTicksSlice-TfnwoJLt.js";import"./index-DtuXK4VP.js";import"./CartesianAxis-6tNxOuLT.js";import"./Layer-BZB8UiQK.js";import"./types-C3dbXUSG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-tuemJXRr.js";import"./chartDataContext-_Ju6-fzp.js";import"./CategoricalChart-DJ7BKDkl.js";import"./Symbols-BSu_9T6j.js";import"./symbol-CA7d1SdW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CVAvobNx.js";import"./uniqBy-CxcVQtEW.js";import"./iteratee-iKvfq8Bu.js";import"./AnimatedItems-C_wvnbpu.js";import"./useAnimationId-Bnx7NtOE.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CDDISee0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-VpxDx_Hn.js";import"./tooltipContext-BmfHguOn.js";import"./RegisterGraphicalItemId-BQytnqfH.js";import"./ErrorBarContext-CVxV46GA.js";import"./GraphicalItemClipPath-BnUM0bi_.js";import"./SetGraphicalItem-B4WgsP5a.js";import"./getZIndexFromUnknown-Caht-e_5.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-C_g2xIry.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
