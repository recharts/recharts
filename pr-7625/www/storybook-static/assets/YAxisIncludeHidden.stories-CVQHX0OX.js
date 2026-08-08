import{r as f,R as e}from"./iframe-3VVC0EYx.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-CQsWrDlS.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C9c9QQWy.js";import{C as k}from"./ComposedChart-BSwVfM9_.js";import{X as K}from"./XAxis-b3cnYQsk.js";import{L as v}from"./Legend-BRqnj-VO.js";import{B as s}from"./Bar-Bdq339D-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-B_1XKNb_.js";import"./Text-DxD-h55l.js";import"./resolveDefaultProps-DJCePyCz.js";import"./DOMUtils-jlGUgeWT.js";import"./isWellBehavedNumber-D8cUYDpZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DAQTkU_L.js";import"./index-dUhqMgMz.js";import"./index-C9Se9_4o.js";import"./RechartsWrapper-Cu7UZSGV.js";import"./index-D9g8mJB5.js";import"./index-CufvXBKU.js";import"./throttle-CNUd1gZq.js";import"./axisSelectors-B7dqcVa4.js";import"./d3-scale-CshH80dj.js";import"./renderedTicksSlice-D0fiht4g.js";import"./CartesianAxis-DBlrGcdR.js";import"./Layer-BVcdrpr1.js";import"./types-Bwo4GPNk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-5aynFYgW.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B55un86Y.js";import"./chartDataContext-ylnzbaG8.js";import"./CategoricalChart-DbawHDOk.js";import"./Symbols-CJM_xH6p.js";import"./symbol-ByPfoqLM.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cu87sVLj.js";import"./uniqBy-DrTOg_85.js";import"./iteratee-DVGMM3Q6.js";import"./tooltipContext-BmF5ax4I.js";import"./AnimatedItems-BDqZZjDt.js";import"./useAnimationId-D9vHT7-j.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DGTf0ga1.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BH_C9PRa.js";import"./RegisterGraphicalItemId-CNwWR-CS.js";import"./ErrorBarContext-B62Uz1n4.js";import"./GraphicalItemClipPath-t0-9VWN4.js";import"./SetGraphicalItem-C2V0lGXl.js";import"./getZIndexFromUnknown-C6DxJRbI.js";import"./graphicalItemSelectors-UFpF-OvU.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
