import{r as f,R as e}from"./iframe-DFlWwuKT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BS_00hSs.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DTl3Es75.js";import{C as k}from"./ComposedChart-DHFXtPRO.js";import{X as K}from"./XAxis-9-A5V75m.js";import{L as v}from"./Legend-e4PwlEr8.js";import{B as a}from"./Bar-BIp9PRqH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Cg_hrWdd.js";import"./Text-7kqB13RI.js";import"./resolveDefaultProps-C-JEXzOC.js";import"./DOMUtils-CYU7OgfG.js";import"./isWellBehavedNumber-SARVqwHy.js";import"./useId-CRaXWjDX.js";import"./useBackwardsCompatibleTheme-DQ42sPpY.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DHVkI8jl.js";import"./index-BUYqSBiu.js";import"./index-ClU2ON40.js";import"./RechartsWrapper-CGvYSOfx.js";import"./axisSelectors-DjksfEx4.js";import"./throttle-D8jnmLcF.js";import"./d3-scale--iSGTKPS.js";import"./index-L-g3VAbm.js";import"./index-xbsAyBNd.js";import"./renderedTicksSlice-CCjZBqyR.js";import"./index-DATKdWyT.js";import"./CartesianAxis-C9eM4ktZ.js";import"./Layer-URuQnAjL.js";import"./types-BOBvmLK9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DW2e8sMm.js";import"./chartDataContext-BIDgL1iJ.js";import"./CategoricalChart-B-7TRfVL.js";import"./Symbols-CApAx5hI.js";import"./symbol-D6xFDwvn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CApEq3WG.js";import"./uniqBy-CT4IUB8Q.js";import"./iteratee-DCytidek.js";import"./AnimatedItems-B-WGLUSk.js";import"./useAnimationId-mTQIyJO-.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BQPyv6_x.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-B5PusxhY.js";import"./tooltipContext-TLSQWpDr.js";import"./RegisterGraphicalItemId-Dc_pYr9G.js";import"./ErrorBarContext-DzGj33gU.js";import"./GraphicalItemClipPath-DvdfNGh6.js";import"./SetGraphicalItem-B77033X0.js";import"./getZIndexFromUnknown-BFCYrGE_.js";import"./useGraphicalItemIdentity-w3ZvPmOP.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
