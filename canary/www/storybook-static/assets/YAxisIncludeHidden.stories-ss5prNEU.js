import{r as f,R as e}from"./iframe-r3x3_yf4.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-I2w3cHIn.js";import{Y as l}from"./YAxis-DqWMDxyr.js";import{p as o}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-NMb2vrpT.js";import{C as k}from"./ComposedChart-mqslB1oF.js";import{X as K}from"./XAxis-CR4ARCer.js";import{L as v}from"./Legend-B6b6ZtFX.js";import{B as a}from"./Bar-CY-EhoMk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-C--_kXjw.js";import"./Text-BJw7R8d_.js";import"./resolveDefaultProps-D1EJxC7c.js";import"./ZIndexLayer-U0OKF9Zk.js";import"./index-DCzxVT24.js";import"./index-BmCC5OWu.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-jpdu1VNr.js";import"./throttle-8hacI6eE.js";import"./axisSelectors-vmwSvweQ.js";import"./d3-scale-Dyg5lSMz.js";import"./CartesianAxis-D0GcJHV6.js";import"./Layer-Bgw_1AH_.js";import"./types-C8JZdNIX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bwv1Ycq-.js";import"./index-CXlPhSWr.js";import"./index-Br7b2-_x.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-_voIQt-f.js";import"./index-XR02wMNZ.js";import"./fillDefinitions-6lmPyfb7.js";import"./CartesianChart-Cu7l70fA.js";import"./chartDataContext-ZH5Padeo.js";import"./CategoricalChart-B9Dtz71g.js";import"./Symbols-C3Jeo7wF.js";import"./symbol-BJuLtVcg.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bty5qG4M.js";import"./uniqBy-B7Rcd-R6.js";import"./iteratee-Bw3PE4p8.js";import"./isArguments-yB-y1yaH.js";import"./dataEntryStyles-CPsjZ3pD.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BHZ7OtoD.js";import"./useAnimationId-EE0FjekO.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Dpt4d3xT.js";import"./tooltipContext-Be3fRYkk.js";import"./ErrorBarContext-U5wRur_B.js";import"./activeStyles-TIYUw2JD.js";import"./SetGraphicalItem-C13buv2r.js";import"./getZIndexFromUnknown-DERfRvHP.js";import"./useEffectiveDataKey-CUQD41kZ.js";import"./omit-DPkP4Aqg.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(o[0]),[n,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:o},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!n.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!n.includes("amt")}))))},args:A(d)},He=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
