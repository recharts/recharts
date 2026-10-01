import{r as f,R as e}from"./iframe-Bs3p_tzt.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-7MDEiAH-.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DcX3AzLa.js";import{C as k}from"./ComposedChart-KuKgrM96.js";import{X as K}from"./XAxis-D4sncX3B.js";import{L as v}from"./Legend-Ns98LlSg.js";import{B as a}from"./Bar-S93XsLQg.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-D1fZ0tZ3.js";import"./Text-fd4E17kL.js";import"./resolveDefaultProps-CZZ-mEKB.js";import"./DOMUtils-BuNDld79.js";import"./isWellBehavedNumber-BsuO-HCD.js";import"./useId-Bu7K8pR2.js";import"./useBackwardsCompatibleTheme-DDcrSO0e.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bsBUBclv.js";import"./index-B1i9GgdA.js";import"./index-B2enMVi0.js";import"./RechartsWrapper-C611g8G8.js";import"./axisSelectors-C4-S1rEu.js";import"./throttle-BEGWT0nE.js";import"./d3-scale-D3QRU-MC.js";import"./index-DMMqTPnq.js";import"./index-UxLT5P2P.js";import"./renderedTicksSlice-CtTEEx-4.js";import"./index-BfdycSnH.js";import"./CartesianAxis-hsXt1MB3.js";import"./Layer-BnnxApB2.js";import"./types-DwWjBcLa.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DvvRDnZV.js";import"./chartDataContext-Da2Hh662.js";import"./CategoricalChart-BaI0fWCj.js";import"./Symbols-BezKBTPv.js";import"./symbol-C0uO4vM7.js";import"./path-DyVhHtw_.js";import"./useElementOffset-L8c5YtIC.js";import"./uniqBy-CTQygRzA.js";import"./iteratee-CcX_f7ol.js";import"./AnimatedItems-BKsmNJL9.js";import"./useAnimationId-BGb6X0s3.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-DGv7rq-A.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-C1lnxfx5.js";import"./tooltipContext-D9KAOXWR.js";import"./RegisterGraphicalItemId-DLHqq9CD.js";import"./ErrorBarContext-Bf6tfPH3.js";import"./GraphicalItemClipPath-CW7J0A_O.js";import"./SetGraphicalItem-B-q3EqQB.js";import"./getZIndexFromUnknown-B_CJl0Ko.js";import"./useGraphicalItemIdentity-Bn1qTGOS.js";import"./dataEntryStyles-DToHeB0S.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
