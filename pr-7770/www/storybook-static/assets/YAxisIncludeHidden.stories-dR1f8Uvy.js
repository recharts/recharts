import{r as f,R as e}from"./iframe-JwbLQPb2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CMNQVrMb.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BvSjVeUr.js";import{C as k}from"./ComposedChart-BNgb6jwq.js";import{X as K}from"./XAxis-CM1shXvI.js";import{L as v}from"./Legend-D2QrjC31.js";import{B as a}from"./Bar-BSSkmQcO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C9oG4jkb.js";import"./Text-DYIo7N8x.js";import"./resolveDefaultProps-CSG7eI7r.js";import"./DOMUtils-CGRWukjT.js";import"./isWellBehavedNumber-CdOzsQhH.js";import"./useId-CU2vxgfb.js";import"./useBackwardsCompatibleTheme-2v1_sDmp.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B1cjmDJz.js";import"./index-BTc1OfE8.js";import"./index-CKs_88Jr.js";import"./RechartsWrapper-CHoC0Tmg.js";import"./axisSelectors-Bl-g05pj.js";import"./throttle-CQOjkZLn.js";import"./d3-scale-C8sQoAOm.js";import"./index-CV_Eti3m.js";import"./index-Ct1SgceM.js";import"./renderedTicksSlice-f-Q9YZ5S.js";import"./index-B_caUHn5.js";import"./CartesianAxis-DEricmMP.js";import"./Layer-BUVs9FF0.js";import"./types-BXkOLLZ5.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CVn5EGJv.js";import"./chartDataContext-CoYu6TUB.js";import"./CategoricalChart-Cxecmsq9.js";import"./Symbols-Cchs_XVF.js";import"./symbol-Q_pfoSEH.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BYV602LJ.js";import"./uniqBy-DWoTTWdi.js";import"./iteratee-DxP2qSYe.js";import"./AnimatedItems-Di0vnHT_.js";import"./useAnimationId-DNb0w9mF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CfutVei8.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CZ-yTrkB.js";import"./tooltipContext-CF5gWW1v.js";import"./RegisterGraphicalItemId-JHnI7J5m.js";import"./ErrorBarContext-DLKn1BJH.js";import"./GraphicalItemClipPath-Btey0t5q.js";import"./SetGraphicalItem-CF8QjFwu.js";import"./getZIndexFromUnknown-DyXEkcRP.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-4nR2QSPi.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
