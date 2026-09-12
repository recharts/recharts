import{r as f,R as e}from"./iframe-B7hbNEXj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DYrUNm06.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-B7xQcNcG.js";import{C as k}from"./ComposedChart-CBHvobIY.js";import{X as K}from"./XAxis-DTRImo2J.js";import{L as v}from"./Legend-BHv0V5I1.js";import{B as a}from"./Bar-ULGlxAu0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-lNQzMu7Z.js";import"./Text-DWuYBy5V.js";import"./resolveDefaultProps-CZFMPmgx.js";import"./DOMUtils-BhIaSreR.js";import"./isWellBehavedNumber-7V-rOBye.js";import"./useId-CxLZ9MIg.js";import"./useBackwardsCompatibleTheme-L1kNM3iV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-jcXUwYN8.js";import"./index-Dqn8czyj.js";import"./index-BYIthK0p.js";import"./RechartsWrapper-jiH_AYjt.js";import"./axisSelectors-MpDLX8pO.js";import"./throttle-BSjszxUH.js";import"./d3-scale-BYK0PNRi.js";import"./index-yv8yhgLp.js";import"./index-BXYzHp_E.js";import"./renderedTicksSlice-CuhNidwY.js";import"./index-C8e3_gAU.js";import"./CartesianAxis-CneZULGs.js";import"./Layer-osX5cZvY.js";import"./types-C3ibKMTz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DfAXRIqb.js";import"./chartDataContext-BXIYwbQE.js";import"./CategoricalChart-yOdjtk4z.js";import"./Symbols-Ce4xYfXm.js";import"./symbol-CQ0q3eX5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-w7QmJN4M.js";import"./uniqBy-D7tqJ0kr.js";import"./iteratee-CMD1iHwZ.js";import"./AnimatedItems-DhxUFxBy.js";import"./useAnimationId-BjhUfelV.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DXA3Y7lF.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Ds7YjhX_.js";import"./tooltipContext-9tFeNOQK.js";import"./RegisterGraphicalItemId-Dm44HWfF.js";import"./ErrorBarContext-BQLnOb5r.js";import"./GraphicalItemClipPath-BL1Y6_ch.js";import"./SetGraphicalItem-DpZwQAUe.js";import"./getZIndexFromUnknown-CNARRbM9.js";import"./useGraphicalItemIdentity-C6Z_BcTV.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
