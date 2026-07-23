import{r as f,R as e}from"./iframe-DRSW8ue2.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-B6_VA_0t.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Bu-rrRtT.js";import{C as k}from"./ComposedChart-kVHcj-R_.js";import{X as K}from"./XAxis-CC1uze90.js";import{L as v}from"./Legend-CEXSBB3s.js";import{B as s}from"./Bar-CpDwOsz5.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-CAXmUWDV.js";import"./Layer-BXqs-IsN.js";import"./resolveDefaultProps-raTiTqbb.js";import"./Text-DjqRVUg-.js";import"./DOMUtils-CyGXHzmH.js";import"./isWellBehavedNumber-DAnude9s.js";import"./Label-DWIM-PiW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CrpBbv8w.js";import"./index-90eqwCh0.js";import"./index-p0Ur2FF4.js";import"./types-CaXHGphp.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dq99djjA.js";import"./throttle-CUiRuHKg.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DT9xTVvF.js";import"./index-CyOXcHUd.js";import"./index-iUHBfWdS.js";import"./axisSelectors-D9B32UgG.js";import"./d3-scale-C6_vDDuq.js";import"./CartesianChart-CHa2q2rq.js";import"./chartDataContext-BFVcvsqe.js";import"./CategoricalChart-CyaAwA7K.js";import"./Symbols-BqX3jNiq.js";import"./symbol-DgBEw3iz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BlZZNFfN.js";import"./uniqBy-CesywXT2.js";import"./iteratee-badt6V5j.js";import"./tooltipContext-BiBOO61Q.js";import"./AnimatedItems-Dm8lwSRg.js";import"./useAnimationId-Dnplssp6.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-EoVmD57K.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CyqwB66-.js";import"./RegisterGraphicalItemId-D6Xem68n.js";import"./ErrorBarContext-CZiW4Ksz.js";import"./GraphicalItemClipPath-D8tm2vL2.js";import"./SetGraphicalItem-CM2WyRpW.js";import"./getZIndexFromUnknown-Dhi9L3dq.js";import"./graphicalItemSelectors-63b_Enxj.js";const Ee={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const be=["WithIncludeHidden"];export{t as WithIncludeHidden,be as __namedExportsOrder,Ee as default};
