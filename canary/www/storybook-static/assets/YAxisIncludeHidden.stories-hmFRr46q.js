import{r as f,R as e}from"./iframe-WV_asirj.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-DRMYGn-2.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-GixElPZ_.js";import{C as k}from"./ComposedChart-BvVU85k-.js";import{X as K}from"./XAxis-DD-Khhe3.js";import{L as v}from"./Legend-DN4E-1_a.js";import{B as a}from"./Bar-DP7v7Qb-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Q870r3oo.js";import"./Text-Dsqc9k19.js";import"./resolveDefaultProps-CXdIXtb2.js";import"./DOMUtils-CnLU0pz8.js";import"./isWellBehavedNumber-CU2jbRyM.js";import"./useId-CWlmqz6v.js";import"./useBackwardsCompatibleTheme-DtOSIckQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-rRlGaKvU.js";import"./index-BTbJQRbi.js";import"./index-FtwXBSMR.js";import"./RechartsWrapper-CsCMkadb.js";import"./axisSelectors-8uL09VjP.js";import"./throttle-Ba7gBaVO.js";import"./d3-scale-Cy0pMHbr.js";import"./index-DNMQn43Q.js";import"./index-BrA93ln9.js";import"./renderedTicksSlice-Dr2G7YjO.js";import"./index-5piGZExt.js";import"./CartesianAxis-BGGDzNNT.js";import"./Layer-D1F1s_Cb.js";import"./types-Cgo928Y8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BSNtd9by.js";import"./chartDataContext-DkG6gPSF.js";import"./CategoricalChart-DnjLzrnf.js";import"./Symbols-CN1XSzSD.js";import"./symbol-DGI5pP0R.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CbQZLq3o.js";import"./uniqBy-CxPRbKAp.js";import"./iteratee-Bft3m4as.js";import"./AnimatedItems-xMF2BQb6.js";import"./useAnimationId-DlwLI8cF.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-WQEGXCsY.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils--kX-_F3I.js";import"./tooltipContext-BelwVgHR.js";import"./RegisterGraphicalItemId-B1qksrkN.js";import"./ErrorBarContext-CGrnfAaP.js";import"./GraphicalItemClipPath-BBN-JnlO.js";import"./SetGraphicalItem-BpDA6gwY.js";import"./getZIndexFromUnknown-CbAFMGkr.js";import"./useGraphicalItemIdentity-DUG11jyw.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
