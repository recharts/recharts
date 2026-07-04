import{r as f,R as e}from"./iframe-CMZSuYAp.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BePyX93F.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-BruTJuC3.js";import{C as k}from"./ComposedChart-EdmzyhxM.js";import{X as K}from"./XAxis-CUiAOeYD.js";import{L as v}from"./Legend-sRNs97z9.js";import{B as s}from"./Bar-Ct2-cg8j.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BCaCchRD.js";import"./Layer-PNP6wOOP.js";import"./resolveDefaultProps-B0_6d4zr.js";import"./Text-xzZ1BXQ5.js";import"./DOMUtils-DG37HfTO.js";import"./isWellBehavedNumber-BkL4thK4.js";import"./Label-x_pt0DNK.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DF-_v_ST.js";import"./index-DNwfsXU8.js";import"./index-iarf_UZv.js";import"./types-DeGC_ypX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CgdBaRrD.js";import"./throttle-BOp5gWf6.js";import"./RechartsWrapper-eOuVxhlh.js";import"./index-okdZjd57.js";import"./index-Ctl2PZQv.js";import"./axisSelectors-DIqIj73B.js";import"./d3-scale-BPlmUZUy.js";import"./CartesianChart-DKmMg594.js";import"./chartDataContext-Bl7GQ-j4.js";import"./CategoricalChart-BFWxbb2w.js";import"./Symbols-CDbIn1ya.js";import"./symbol-Jz5i-Ey-.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Dc7Z0JxF.js";import"./uniqBy-BS_FhwG0.js";import"./iteratee-B0piW2Hj.js";import"./tooltipContext-C20BXYzu.js";import"./AnimatedItems-CkwT5Z0M.js";import"./useAnimationId-CGAH057_.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CYKkt_YU.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dd6ng2Wf.js";import"./RegisterGraphicalItemId-C5vUvxmu.js";import"./ErrorBarContext-DSf1j3Db.js";import"./GraphicalItemClipPath-Du3KiDeu.js";import"./SetGraphicalItem-9lTbvLuA.js";import"./getZIndexFromUnknown-BXfyIXtC.js";import"./graphicalItemSelectors-BjlzbklH.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
