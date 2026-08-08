import{r as f,R as e}from"./iframe-BYCrCSPO.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BHhfAWGr.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DfD_-yb8.js";import{C as k}from"./ComposedChart-C0GfYFLm.js";import{X as K}from"./XAxis-3U1NuGne.js";import{L as v}from"./Legend-Chf9Y7Al.js";import{B as s}from"./Bar-I4cLczHV.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-KQ9JDhJq.js";import"./Text-C7UGFNRC.js";import"./resolveDefaultProps-C_hnhA8j.js";import"./DOMUtils-_2tJTcuL.js";import"./isWellBehavedNumber-CtO4Dltx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DS2x7pWW.js";import"./index-CduSCjJO.js";import"./index-DeTARG9l.js";import"./RechartsWrapper-1VDCfeR5.js";import"./index-B9LnnU9V.js";import"./index-CO8tfkky.js";import"./throttle-CwGaa8bA.js";import"./axisSelectors-DCnkJbPP.js";import"./d3-scale-CNobyPqZ.js";import"./renderedTicksSlice-D3LgmkWg.js";import"./CartesianAxis-DLhz-nrZ.js";import"./Layer-B3NuQ3iV.js";import"./types-FnkeMo1L.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-BUhvh7zS.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D_hO4lZa.js";import"./chartDataContext-BmXIjLQW.js";import"./CategoricalChart-DdsYRdkY.js";import"./Symbols-CoPXceqk.js";import"./symbol-CLcBLlqF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DAm24c5a.js";import"./uniqBy-C0-aqpga.js";import"./iteratee-C5dESqmm.js";import"./tooltipContext-C3sNg0eA.js";import"./AnimatedItems-B1rFvs0f.js";import"./useAnimationId-BrMFsthS.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-C2QxPGJo.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DetheFMa.js";import"./RegisterGraphicalItemId-QO0ldivF.js";import"./ErrorBarContext-P2qv3dNI.js";import"./GraphicalItemClipPath-Co8e0UKg.js";import"./SetGraphicalItem-BOoa7F9Y.js";import"./getZIndexFromUnknown-D4hLULcR.js";import"./graphicalItemSelectors-BTGcwiu4.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
