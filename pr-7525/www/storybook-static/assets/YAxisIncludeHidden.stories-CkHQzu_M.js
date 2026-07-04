import{r as f,R as e}from"./iframe-Cdy9NYu9.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B-BKBDfM.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C2_e4Jbl.js";import{C as k}from"./ComposedChart-CGyVRna3.js";import{X as K}from"./XAxis-BJhS5a8e.js";import{L as v}from"./Legend-DM-Rt-nv.js";import{B as s}from"./Bar-4sPaRaDT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-DA9B6fNW.js";import"./Layer-Hq_4dnpr.js";import"./resolveDefaultProps-CG6sO-97.js";import"./Text-DMhYSqT7.js";import"./DOMUtils-DBN2rZ60.js";import"./isWellBehavedNumber-CJulqOvD.js";import"./Label-BIfqnFjj.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BxN8McgO.js";import"./index-BZ9Fe99a.js";import"./index-DsFTIXEw.js";import"./types-C9NSKw4l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DWXzhFAM.js";import"./throttle-t9dcJkBi.js";import"./RechartsWrapper-D4IxCG7a.js";import"./index-Bcb8rKnp.js";import"./index-CaPeX6FT.js";import"./axisSelectors-ByTu7Vcx.js";import"./d3-scale-DTNVMcZf.js";import"./CartesianChart-C4yHSY79.js";import"./chartDataContext-C2Y_0_Vz.js";import"./CategoricalChart-BucM35ky.js";import"./Symbols-DZGbGfC4.js";import"./symbol-CnhKgttC.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DysDxY94.js";import"./uniqBy-LvrlaU3A.js";import"./iteratee-bdNJUmyF.js";import"./tooltipContext-BhyLCXhZ.js";import"./AnimatedItems-BSQ2aAGr.js";import"./useAnimationId-DO_gOZxo.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-zLcbgT_c.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CMZtEUn5.js";import"./RegisterGraphicalItemId-WMzFziJE.js";import"./ErrorBarContext-B4XuHyPg.js";import"./GraphicalItemClipPath-GIg3EkdR.js";import"./SetGraphicalItem-CgtgTGFl.js";import"./getZIndexFromUnknown-Lae48a4N.js";import"./graphicalItemSelectors-ClwBgY3L.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
