import{r as f,R as e}from"./iframe-Cimk_otj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Bv-UC-Jk.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-CzTLX9Ul.js";import{C as k}from"./ComposedChart-Dtd08tsU.js";import{X as K}from"./XAxis-ByDDt0Jf.js";import{L as v}from"./Legend-mJb9ktQo.js";import{B as s}from"./Bar-Jf672hjj.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DQCQB4o-.js";import"./Text-qgns90rX.js";import"./resolveDefaultProps-D_EjTjeu.js";import"./DOMUtils-702B5NVq.js";import"./isWellBehavedNumber-CkDKja6q.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DKEQN7E1.js";import"./index-ByALFeZD.js";import"./index-2URJhorS.js";import"./RechartsWrapper-qjuL0Rr3.js";import"./index-C-Q8rOGq.js";import"./index-DpbiwnIc.js";import"./throttle-QmRScbE8.js";import"./axisSelectors-BjpwO9gg.js";import"./d3-scale-BqwCILGz.js";import"./renderedTicksSlice-CI4nPvu-.js";import"./CartesianAxis-GRhBxYn8.js";import"./Layer-CCEBq6CR.js";import"./types-BP4gFlyy.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BOkXgDyG.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-dDfHuBVf.js";import"./chartDataContext-BpdsFuQG.js";import"./CategoricalChart-B7puZOGH.js";import"./Symbols-BWwzL4bj.js";import"./symbol-D3PRm8fB.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CjumVQtv.js";import"./uniqBy-CdIGlW57.js";import"./iteratee-F9gv8B-y.js";import"./tooltipContext-8Ba7jCsa.js";import"./AnimatedItems-tyjZKRCa.js";import"./useAnimationId-CWH9KLrM.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CgoJ-bg6.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BOZkqM_j.js";import"./RegisterGraphicalItemId-Cwz21l7x.js";import"./ErrorBarContext-BNzrl5kL.js";import"./GraphicalItemClipPath-C4jOZ0zB.js";import"./SetGraphicalItem-BARCofhG.js";import"./getZIndexFromUnknown-BKmRXr_h.js";import"./graphicalItemSelectors-Y0I5Brjj.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
