import{r as f,R as e}from"./iframe-BivO5BoJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CMfIE2am.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bjz_KcZJ.js";import{C as k}from"./ComposedChart-Bey5_4WZ.js";import{X as K}from"./XAxis-CJk4qOf_.js";import{L as v}from"./Legend-B82JAurw.js";import{B as s}from"./Bar-DqAc1eUE.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C7YhLpFH.js";import"./Text-B8O_8yPP.js";import"./resolveDefaultProps-B41TlN8V.js";import"./DOMUtils-CA0Xf545.js";import"./isWellBehavedNumber-BP5BBjcl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-TaYOeXN7.js";import"./index-03GkEewG.js";import"./index-B0o2St2z.js";import"./RechartsWrapper-DFOf-gVb.js";import"./index-DdI5aF1Z.js";import"./index-eGB7E-8r.js";import"./throttle-BplF9VH1.js";import"./axisSelectors-DhnOFegq.js";import"./d3-scale-oUOyK3d-.js";import"./renderedTicksSlice-CI5d0VIf.js";import"./CartesianAxis-yaWpeoNa.js";import"./Layer-CQraiAmP.js";import"./types-Ci90ji2E.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CezfAeyp.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-By-DJA1x.js";import"./chartDataContext-bLv_3jvW.js";import"./CategoricalChart-piOEuQ3H.js";import"./Symbols-Druc529R.js";import"./symbol-CL0lcOqi.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B725Ga0q.js";import"./uniqBy-QhayOO9-.js";import"./iteratee-Be5jHE0S.js";import"./tooltipContext-63y5ZjCN.js";import"./AnimatedItems-Daz5NR7w.js";import"./useAnimationId-C4RNTUIo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B0xUjER0.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BWMWU3gW.js";import"./RegisterGraphicalItemId-CmSKkMyt.js";import"./ErrorBarContext-ChpCgx9m.js";import"./GraphicalItemClipPath-xHJ3Vi6r.js";import"./SetGraphicalItem-D5hw8CGc.js";import"./getZIndexFromUnknown-lcBTRLuL.js";import"./graphicalItemSelectors-Dk26_IY-.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
