import{r as f,R as e}from"./iframe-BPEJKbq8.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BtY2v5Bn.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-VIpuzkKp.js";import{C as k}from"./ComposedChart-CCL4cMEJ.js";import{X as K}from"./XAxis-Cj_7D1I7.js";import{L as v}from"./Legend-C-9iC4T1.js";import{B as a}from"./Bar--9OdfMIq.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-L-zdkhzC.js";import"./Text-DJ80zvuP.js";import"./resolveDefaultProps-1un5xk9O.js";import"./DOMUtils-CHvDeV8q.js";import"./isWellBehavedNumber-Buf-YS9M.js";import"./useId-b-JOMF6y.js";import"./useBackwardsCompatibleTheme-BiL5HnOV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-WSPcn9qV.js";import"./index-DNcAR_Vs.js";import"./index-ButnEeUi.js";import"./RechartsWrapper-DxqXjp29.js";import"./axisSelectors-DzMkLtRT.js";import"./throttle-DF-tIWsK.js";import"./d3-scale-DEM8vz6k.js";import"./index-B4ESYIeG.js";import"./index-C5KHL6lo.js";import"./renderedTicksSlice-D_uQ_TZY.js";import"./index-KKugj82J.js";import"./CartesianAxis-BsRH_pN4.js";import"./Layer-CtRRCC-v.js";import"./types-_BaiC61O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-ooyntLBz.js";import"./chartDataContext-B6O65UK4.js";import"./CategoricalChart-Btmr9H2l.js";import"./Symbols-CU27xM1D.js";import"./symbol-y49qb0yv.js";import"./path-DyVhHtw_.js";import"./useElementOffset-6K-IQoth.js";import"./uniqBy-K0PFycK4.js";import"./iteratee-DTkDCoyb.js";import"./AnimatedItems-DyYNY1ib.js";import"./useAnimationId-BVUST1Us.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B9LkdU9r.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CnR2FwMp.js";import"./tooltipContext-B1U1MT4r.js";import"./RegisterGraphicalItemId-D7i3sBo8.js";import"./ErrorBarContext-D5cSQqKQ.js";import"./GraphicalItemClipPath-DkgmJC3z.js";import"./SetGraphicalItem-DABANGfl.js";import"./getZIndexFromUnknown-oD9Hf-3F.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-7Z7QhK-I.js";const Le={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Re=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
